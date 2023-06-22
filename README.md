# E-Commerce-API 

This is an E-commerce API made using Node.Js, Express & MongoDB. 

## Project Usage

### System Requirements
- Node.js (version 12 or higher)
- MongoDB Atlas (Cloud-based MongoDB database)

### Installation
1. Install Node.js by following the instructions at https://nodejs.org.
2. Sign up for a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas if you don't have one already.
3. Create a new project in MongoDB Atlas and set up a cluster for your app. Obtain the connection string for your cluster.
4. Install Postman by following the instructions at https://www.postman.com/downloads/

### Configuration
1. `MONGODB_URI`: Set this variable to the MongoDB Atlas connection string obtained in the previous step.

### STEPS TO USE THE API:
1. Open a terminal or command prompt and navigate to the project's main directory.
2. Run the command `npm install` to install the project dependencies.
3. Run the command `npm start` to start the project.
4. Open postman.
5. The app will now be running on port 8000.
6. Open your web browser and visit `http://localhost:8000/products`

## Features
- Doesn't accept Empty data
- Only Accepts Quantity in number format during creating or updating the data.

### STEPS TO CREATE A NEW PRODUCT: 

1) put localhost:8000/products/create as the url. 
2) Select Body tab below the url textarea and then select x-www-form-urlencoded
3) Add name & quantity as the keys and set the desired values for the keys.
4) Make a POST request.
5) If you recieve the message saying A New Product "product name" has been added 6uccessfully. then you have done everything correct.
7) The product is created. Check it out by making a GET request at localhost:8000/products

### STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after localhost:8000/products/
3) Make a DELETE request.
4) You will recieve a message saying The Product named "product Name"has been deleted successfully.


### STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after localhost:8000/products/
3) After putting the id add /update_quantity/?number={x} in the url where x is the number by which you want to increase or decrease the quantity.
4) the url should be looking like localhost:8000/products/{id}/update_quantity/?number={x}
5) Make a POST request and you should get a message containing the update product

For any questions or issues, please contact Asadullah Shaikh at shaikhasad765@gmail.com.