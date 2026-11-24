// PART B: HIGHER-ORDER FUNCTIONS, MAP, SET
// AND OBJECT METHODS


// SHOPPING CART DATA

const cart = [

    {
        id: 101,
        name: "Laptop",
        price: 50000,
        qty: 1,
        category: "Electronics"
    },

    {
        id: 102,
        name: "Mouse",
        price: 800,
        qty: 2,
        category: "Accessories"
    },

    {
        id: 103,
        name: "Keyboard",
        price: 1500,
        qty: 1,
        category: "Accessories"
    },

    {
        id: 104,
        name: "Monitor",
        price: 12000,
        qty: 1,
        category: "Electronics"
    },

    {
        id: 105,
        name: "Headphones",
        price: 2500,
        qty: 2,
        category: "Accessories"
    }

];


// TASK 1: ARRAY METHODS

console.log("----- TASK 1: ARRAY METHODS -----");


// A. map() - Get product names with total item price

// map() creates a new array by transforming each element.

const productDetails = cart.map(function (product) {

    const totalPrice = product.price * product.qty;

    return {
        name: product.name,
        totalPrice: totalPrice
    };

});

console.log("Product Names with Total Item Price:");

console.log(productDetails);


// B. filter() - Get products above ₹2,000

// filter() returns a new array containing elements
// that satisfy the given condition.

const expensiveProducts = cart.filter(function (product) {

    return product.price > 2000;

});

console.log("Products Above ₹2,000:");

console.log(expensiveProducts);


// C. reduce() - Calculate total cart value

// reduce() calculates the total by adding
// price multiplied by quantity for each product.

const totalCartValue = cart.reduce(function (total, product) {

    return total + (product.price * product.qty);

}, 0);

console.log("Total Cart Value: ₹" + totalCartValue);


// D. forEach() - Display product details

// forEach() executes a function for every array element.

console.log("Product Name, Category and Quantity:");

cart.forEach(function (product) {

    console.log(
        "Name:", product.name,
        "| Category:", product.category,
        "| Quantity:", product.qty
    );

});


// E. Calculate total value of Electronics products

const electronicsTotal = cart.reduce(function (total, product) {

    if (product.category === "Electronics") {

        return total + (product.price * product.qty);

    }

    return total;

}, 0);

console.log("Total Electronics Value: ₹" + electronicsTotal);


// TASK 2: MAP AND SET

// A. MAP - INVENTORY MANAGEMENT

console.log("\n----- TASK 2: MAP AND SET -----");


// Creating a Map named inventory
// Product ID is the key and product details are the values.

const inventory = new Map();


// Adding products to the inventory Map

cart.forEach(function (product) {

    inventory.set(product.id, { ...product });

});


// Getting a product using its ID

console.log("Product with ID 101:");

console.log(inventory.get(101));


// Updating the quantity of a product

const mouse = inventory.get(102);

mouse.qty = 5;

inventory.set(102, mouse);

console.log("Updated Mouse Quantity:");

console.log(inventory.get(102));


// Deleting a product using its ID

inventory.delete(105);

console.log("Is Product 105 Available?");

console.log(inventory.has(105));


// Displaying all inventory entries

console.log("All Inventory Products:");

inventory.forEach(function (product, productId) {

    console.log(
        "ID:", productId,
        "| Name:", product.name,
        "| Price:", product.price,
        "| Quantity:", product.qty
    );

});


// B. SET - REMOVE DUPLICATE EMAILS

const emailList = [

    "rahul@gmail.com",
    "priya@gmail.com",
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"

];


// Set stores only unique values.

const uniqueEmails = new Set(emailList);

console.log("Original Email List:");

console.log(emailList);

console.log("Unique Email List:");

console.log(uniqueEmails);


// Converting Set into an Array

const uniqueEmailArray = [...uniqueEmails];

console.log("Unique Emails as Array:");

console.log(uniqueEmailArray);


// TASK 3: OBJECT.FREEZE() VS OBJECT.SEAL()

console.log("\n----- TASK 3: OBJECT METHODS -----");


// Original product configuration

const productConfig = {

    name: "Laptop",

    price: 50000,

    stock: 20

};


// Creating two separate copies

const frozenProduct = { ...productConfig };

const sealedProduct = { ...productConfig };


// A. OBJECT.FREEZE()

// Object.freeze() prevents adding, deleting and
// modifying existing properties at the top level.

Object.freeze(frozenProduct);

console.log("Frozen Product Before Changes:");

console.log(frozenProduct);


// Trying to change the price

frozenProduct.price = 45000;


// Trying to add a new property

frozenProduct.brand = "Dell";


// Trying to delete a property

delete frozenProduct.stock;


console.log("Frozen Product After Changes:");

console.log(frozenProduct);

console.log(
    "Is Frozen Product Frozen?",
    Object.isFrozen(frozenProduct)
);


// B. OBJECT.SEAL()

// Object.seal() prevents adding or deleting properties,
// but existing writable properties can still be changed.

Object.seal(sealedProduct);

console.log("Sealed Product Before Changes:");

console.log(sealedProduct);


// Trying to change the price

sealedProduct.price = 45000;


// Trying to add a new property

sealedProduct.brand = "Dell";


// Trying to delete a property

delete sealedProduct.stock;


console.log("Sealed Product After Changes:");

console.log(sealedProduct);

console.log(
    "Is Sealed Product Sealed?",
    Object.isSealed(sealedProduct)
);


// How to run the file
// Open the terminal in your main project folder and execute:
// node part-b-array-methods/shopping-cart.js