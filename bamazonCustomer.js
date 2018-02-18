require("dotenv").config();
const inquirer = require('inquirer');
const mySQL = require('mySQL');
// const Admin = require('/.admin');

// startApp();
// promptUserForProudctId()
// processOrder() 
//condition here 
//if sufficent, then checkout();
//updateDatabaseQuantity()
//else console.log(not enough) and go back to prompt user to productID
//at the end, promptUser for productID

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
    //    console.log(JSON.stringify(res, null, 4));
        for (let i = 0; i < res.length; i++) {
            console.log("Item Id " + res[i].item_id + " Product " + res[i].product_name + " Price " + res[i].price );
        }
       //   let's try this in a loop too - just to see if it works better, if yes I will do that.
       start();
       //   put other functions here 
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
        console.log("nice choice!");
        //store user query in a var 
        //and use that var//
        //use a variable to store quantity * res[i].price 
        //later on, keep asking if they want anything else and then do a reduce function
        let productID = answers.productID;
        let productQuantity = answers.productQuantity;
        console.log("Please confirm: You would like to purchase " + productQuantity + productID);
       let query = "SELECT product_name, price FROM products WHERE item_id = ? ";
       console.log(query);
       connection.query(query, answers.productID, function(err, res){
           for (let i = 0; i < res.length; i++) {
               if (answers.productQuantity > res[i].product_name) {
                   console.log("Insufficient Quantity!");
               } else {
               console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$ " + res[i].price);
               console.log("------------------------------------");
            }
           }
       })
    });
}
//fix item_id being undefined and also at some point, close the connection
//the following are being moved to admin.js file 
// processOrder();
// checkOut();
// start();