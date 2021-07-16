const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'password',
    database: 'greatbay_db',
  });
// Link to mysql database, greatbay_db

// Inquirer ask would you like to post, bid, or exit

// Post
// Name of item
// category
// starting bid
// query the database to generate item


// Bid
// query database for all names of items, input those items into inquirer list (array)
// select item from list
// ask for bid
// if user bid is higher, query to replace old bid with new user bid
// if user bid is lower, tell user their bid was to low, restart questions

// Exit
// Closes the program

