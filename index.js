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
const mainMenu = () => {
    inquirer.prompt({
        name: 'menuChoice',
        message: "Please select which action you would like to take:",
        type: "list",
        choices: ['Post', 'Bid', 'Exit']
    }).then(response => {
        const { menuChoice } = response;
        if (menuChoice === 'Post') {
            addItem();
        } else if (menuChoice === 'Bid') {
            // bid function
        } else {
            return
        }
    })
}
// Post
// Name of item
// category
// starting bid
// query the database to generate item
const addItem = () => {
    inquirer.prompt([
        {
            name: 'itemName',
            message: 'What is the item you are posting called?',
            type: 'input'
        },
        {
            name: 'category',
            message:'What category does your item fall into?',
            type: 'input'
        },
        {
            name: 'startingBid',
            message: 'What would you like your starting bid to be?',
            type: 'input'
        }
    ]).then(response => {
        const { itemName, category, startingBid } = response;
        const query = connection.query(
            'INSERT INTO items SET ?',
            {
              item_name: itemName,
              category: category,
              bid: parseInt(startingBid)
            },
            (err, res) => {
              if (err) throw err;
              console.log(`${res.affectedRows} movie inserted!\n`);
              // Call updateProduct AFTER the INSERT completes
              mainMenu();
            })
    })
}

// Bid
// query database for all names of items, input those items into inquirer list (array)
// select item from list
// ask for bid
// if user bid is higher, query to replace old bid with new user bid
// if user bid is lower, tell user their bid was to low, restart questions

// Exit
// Closes the program

