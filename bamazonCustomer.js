require("dotenv").config();
const inquirer = require('inquirer');
const mySQL = require('mySQL');
// const Admin = require('/.admin');
//start create connection 

var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "$n0wD4z*^#",
    database: "bamazonDB"
});

//make sure connection is successful
connection.connect(function(err){
    if (err) throw err;
    // console.log(`Connected as ${connection.threadId}`);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if (err) throw err;
        //  fixing row data packet output 
        for (let i = 0; i < res.length; i++) {
            console.log("Item Id " + res[i].item_id + " Product " + res[i].product_name + " Price " + res[i].price );
        }
       start();
       //   put other fns
       //   keeping the close connection function for now
    //    connection.end();
    });
}

//  here is the start function -we want this to execute AFTER database is connected 
//  choices can prolly be a loop 
function start() {
    inquirer.prompt([
        {
            name: "productID",
            type: "list",
            message: "Please select a product ID for what you would like to buy.",
            choices: ["1-Nintendo Switch", "2-Arctic Monkeys: AM", "3-Digital Delay Pedal", "4-Sweater Dress", "5-Plaid: Boyfriend Fit", "6-Gibson Les Paul Studio T", "7-Shimmer Pedal", "8-Scott Pilgrim Vs The World", "9-Embroidered Jacket", "10-bandana"]
        },

        { 
            name: "productQuantity",
            type: "input",
            message: "How many would you like?"
        }       
    ]).then(function(answers){
        let productID = answers.productID;
        let productQuantity = answers.productQuantity;
       let query = "SELECT item_id, product_name, stock_quantity, price FROM products WHERE item_id = ? ";
       
    //    console.log(query);
       connection.query(query, answers.productID, function(err, res){
           for (let i = 0; i < res.length; i++) {

               if (res[i].stock_quantity < productQuantity) {
                   console.log("Insufficient Quantity! please select another item");
                   start();
               } else {
               console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$ " + res[i].price);
               console.log("------------------------------------");
               let total = parseFloat(res[i].price) * productQuantity;
               console.log("Your total is $" + total);
               connection.query("UPDATE products SET stock_quantity = ? WHERE item_id =?", [res[i].stock_quantity - productQuantity, res[i].item_id], function(err, res){
                if (err) throw err;
                console.log(res.affectedRows + " record(s) updated");
                console.log("Thanks for shopping! Check out these items:")
                //calling this here so user can keep purchasing
                start();
        
            });
            
            }
           }
       })
    });
}

//  function processOrder(productQuantity, productID, res) {
//     connection.query("UPDATE products SET stock_quantity = ? WHERE item_id =?", [res.stock_quantity - productQuantity, productID], function(err, res){
//         if (err) throw err;
//         console.log(res.affectedRows + " record(s) updated");

//     });

// }


//   start();