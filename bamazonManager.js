//  dependencies  - may need to require bamazon and call the files from there too 
const inquirer = require('inquirer');
const mySQL = require('mySQL');

//data base connecting 
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
   
       start();
       
       //   put other fns here too? 
    //    connection.end();

}
//  pseudocode  -this will be elaborted on and fixed 

//  start inquirer 
function start() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Please select which action you would like to take",
            choices: ["View all products", "Add a product", "View low inventory", "Add to inventory"]
        }       
    ]).then(function(answers){ 
        let action = answers.action;
        //  start case statement 
        switch (action) {
                    case "View all products":
                        viewProductsForSale();
                        break;
                    case "view low inventory":
                        viewLowInventory();
                        break;
                    case "Add a new product":
                        addNewProduct();
                        break;
                    case "add to inventory":
                        addToInventory();
                        break;
                    default:
                        start();
                }
        
      
    });
}

//  functions 

function viewProductsForSale() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log("Products for sale:");
        for (let i = 0; i < res.length; i++) {
            console.log("Item Id " + res[i].item_id + " Product " + res[i].product_name + " Price: $" + res[i].price + " Stock " + res[i].stock_quantity);
            
        }
    });

}

//  not displaying output nor errors  - somthing is off 
function viewLowInventory() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log("Low stock items");
        for (let i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5) {
                console.log("Item Id " + res[i].item_id + " Product " + res[i].product_name + " Price: $" + res[i].price + " Stock " + res[i].stock_quantity);
            }
        }
    })

}


