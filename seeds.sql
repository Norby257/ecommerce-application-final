DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;


USE bamazonDB;


CREATE TABLE products (
     item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
     product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES( "Nintendo Switch", "Electronics", 299.00, 500);


INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Arctic Mokeys: AM", "Digital Music", 12.99, 1000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Digital Delay Pedal", "Musical Instrument Accessories", 179.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shimmer pedal", "Musical Instrument Accessories", 179.99, 20);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Sweater Dress", "Womens' clothing", 20.99, 55);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Plaid - boyfriend fit", "Womens' clothing", 25.00, 100);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Gibson Les Paul Studio T", "Musical Instruments", 750.00, 15);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Scott Pilgrim VS the World", "Digital Movies", 19.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Arctic Mokeys: AM", "Digital Music", 12.99, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Plaid - boyfriend fit", "Womens' clothing", 25.00, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Embroidered Jacket", "Womens' clothing", 55.00, 120);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Bandana", "Accessories", 2.50, 120);

--testing out an update statement 
UPDATE products
SET stock_quantity =  5 
WHERE item_id = 3; 


SELECT * FROM products;  

-- table for supervisor view
 
 CREATE TABLE departments (
     department_id INTEGER(10) NOT NULL AUTO_INCREMENT,
     department_name VARCHAR(55) NOT NULL, 
     over_head_costs INTEGER(10) NOT NULL,
    PRIMARY KEY(department_id)


 );

 INSERT INTO departments (department_name, over_head_costs) 
 VALUES ("Electronics", 6000);


 INSERT INTO departments(department_name, over_head_costs)
 VALUES ("Digital Music", 3000);


 INSERT INTO departments(department_name, over_head_costs)
 VALUES("Digital Movies", 2000);

 INSERT INTO departments(department_name, over_head_costs)
 VALUES("Musical Instruments", 9000);

 INSERT INTO departments(department_name, over_head_costs)
 VALUES("Womens' Clothing", 8000);