require("dotenv").config();
const inquirer = require('inquirer');
const mySQL = require('mySQL');

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