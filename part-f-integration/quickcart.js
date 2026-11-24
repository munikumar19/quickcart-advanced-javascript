// PART F: QUICKCART FINAL INTEGRATION


// STEP 1: CREATE PRODUCT CLASS

class Product {

    constructor(id, name, price, quantity) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    // Calculate total price for this product.

    getTotalPrice() {

        return this.price * this.quantity;

    }

}


// STEP 2: CREATE PRODUCTS ARRAY

const products = [

    new Product(1, "Laptop", 50000, 1),

    new Product(2, "Mouse", 1000, 2),

    new Product(3, "Monitor", 15000, 1),

    new Product(4, "Keyboard", 2000, 1)

];


// STEP 3: CUSTOMER DETAILS AND DESTRUCTURING

const customer = {

    name: "Rahul",

    email: "rahul@gmail.com"

};


// Extracting customer name and email.

const { name, email } = customer;

console.log("Customer Name:", name);

console.log("Customer Email:", email);


// STEP 4: MAP() - CALCULATE PRODUCT TOTALS

const productTotals = products.map(function (product) {

    return {

        name: product.name,

        totalPrice: product.getTotalPrice()

    };

});


// STEP 5: FILTER() - PRODUCTS ABOVE ₹5000

const expensiveProducts = products.filter(function (product) {

    return product.getTotalPrice() > 5000;

});

console.log("\nProducts Above ₹5000:");

expensiveProducts.forEach(function (product) {

    console.log(product.name, "- ₹" + product.getTotalPrice());

});


// STEP 6: REDUCE() - CALCULATE ORDER TOTAL

const orderTotal = products.reduce(function (total, product) {

    return total + product.getTotalPrice();

}, 0);


// STEP 7: SET - STORE UNIQUE PRODUCT IDS

const productIds = products.map(function (product) {

    return product.id;

});

const uniqueProductIds = new Set(productIds);


// STEP 8: MAP - CREATE INVENTORY

const inventory = new Map();

products.forEach(function (product) {

    inventory.set(product.id, {

        name: product.name,

        price: product.price,

        quantity: product.quantity

    });

});

console.log("\nInventory:");

inventory.forEach(function (product, id) {

    console.log(id, product);

});


// STEP 9: OBJECT.FREEZE() - ORDER CONFIGURATION

const orderConfiguration = {

    customerName: name,

    currency: "INR",

    orderStatus: "Processing"

};


// Prevent changes to the order configuration.

Object.freeze(orderConfiguration);


// STEP 10: JSON.STRINGIFY() - CONVERT ORDER TO JSON

const order = {

    customer: customer,

    products: productTotals,

    totalAmount: orderTotal,

    configuration: orderConfiguration

};


const orderJSON = JSON.stringify(order, null, 2);

console.log("\nOrder JSON:");

console.log(orderJSON);


// STEP 11: ASYNC/AWAIT - ORDER CONFIRMATION


// Creating an asynchronous order confirmation function.

async function confirmOrder() {

    try {

        console.log("\nOrder Status: Processing...");

        // Simulate an asynchronous confirmation process.

        await new Promise(function (resolve) {

            setTimeout(function () {

                resolve();

            }, 1000);

        });

        console.log("Order Status: Confirmed Successfully!");

    } catch (error) {

        console.log("Order Confirmation Failed:", error.message);

    }

}


// STEP 12: DISPLAY FINAL ORDER SUMMARY

async function displayOrderSummary() {

    console.log("====== QUICKCART ORDER SUMMARY ======");

    console.log("Customer:", name);

    console.log("Products:");

    productTotals.forEach(function (product) {

        console.log(product.name, "- ₹" + product.totalPrice);

    });

    console.log("Total Order Amount: ₹" + orderTotal);

    console.log("Unique Products:", uniqueProductIds.size);

    await confirmOrder();

    console.log("=====================================");

}


// Calling the final function.

displayOrderSummary();


// How to run the file
// Open the VS Code terminal in your project folder and execute:
// node part-f-integration/quickcart.js