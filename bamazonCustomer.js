require("dotenv").config();
const inquirer = require('inquirer');
const mySQL = require('mySQL');

// startApp();
// promptUserForProudctId()
// processOrder() 
//condition here 
//if sufficent, then placeOrder()
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
    console.log(`Connected as ${connection.threadId}`);
    afterConnection();
});


function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
       console.log(res);
       //keeping the close connection function for now
       connection.end();
    });
}


//here is the start function -we want this to execute AFTER database is connected 

function start() {
    inquirer.prompt([
        {
            name: "ProductID",
            type: "list",
            message: "Please select a product ID for what you would like to buy.",
            choices: ["1-Nintendo Switch", "2-Arctic Monkeys: AM", "3-Digital Delay Pedal", "4-Sweater Dres", "5-Plaid: Boyfriend Fit", "6-Gibson Les Paul Studio T", "7-Shimmer Pedal", "8-Scott Pilgrim Vs The World", "9-Embroidered Jacket", "10-bandana"]
        },

        { 
            name: "ProductQuantity",
            type: "input",
            message: "How many do you want?"


        }
    ]).then(function(answers){
        console.log("nice choice!");
        //store user query in a var 
        //and use that va

    });
}

start();