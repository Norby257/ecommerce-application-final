# Command Line ecommerce project 

## This project is a command line application involving Node.js and MySQL.

### I've created the backend of an ecommerce site similar to Amazon, eBay, or Ali Baba, where users can buy products electronically. Users interact with the application via the command line to purchase goods. As a user, I enter the product ID, and the amount of the product that I want. If there is sufficient quantity, the app shows the amount of the item and total price, and the database is updated accordingly. If there is not enough quantity, the app prompts the user to pick another item, and brings them to the menu. 


###  This application includes a customer and a Manager view.




## Customer View 

### The application starts by showing a list of available products and their corresponding ID's. Inquirer was used so that customers can pick from a list of options. From there, the applciation prompts customers for the quantity. 

![Start page - Customer] (../images/customer_menu_options.png)

![Item Quantity] (../images/product_quant.png)

![Insufficient Quantity] (../images/isf_quant.png)

![Customer Total] (../images/customer_total.png)



## Manager View  

### Databases are great not just for storing and organizing data, but also to identify  top performing categories, or cateogries where sales improvement can be made. SQL allows for easy querying and aggregate functions, giving the manager a quick at-a-glance view of actionable information. If a product goes viral, alerts are generated when quantity is low, meaning that items will be in stock.

### Future directions include:
* recommended items
* using javascript to display notifications (modals) of trending items 

## For managers / supervisors, future directions include:
* Dashboard containing historical and forecasted data at the department level
* A/B testing
* data deep dives
* conversion rates of buyers
* converting buyers to sellers 

