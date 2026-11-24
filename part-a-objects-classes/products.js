// PART A: OBJECTS, PROTOTYPES & ES6 CLASSES

// TASK 1: PROTOTYPE-BASED PRODUCTS

// Creating a constructor function
function Product(productName, price, category) {

    this.productName = productName;
    this.price = price;
    this.category = category;

}


// Adding a method to the Product prototype
// This method is shared by all Product objects.

Product.prototype.displayProduct = function () {

    return "Product Name: " + this.productName +
        ", Price: ₹" + this.price +
        ", Category: " + this.category;

};


// Creating three product objects

const product1 = new Product("Laptop", 50000, "Electronics");

const product2 = new Product("Mouse", 800, "Accessories");

const product3 = new Product("Keyboard", 1500, "Accessories");


// Displaying product details

console.log("----- PROTOTYPE-BASED PRODUCTS -----");

console.log(product1.displayProduct());

console.log(product2.displayProduct());

console.log(product3.displayProduct());


// TASK 2: ES6 CLASSES

// Creating a parent Product class

class ProductClass {

    constructor(productName, price, category) {

        this.productName = productName;
        this.price = price;
        this.category = category;

    }

    // Method to return product details

    getProductDetails() {

        return "Product Name: " + this.productName +
            ", Price: ₹" + this.price +
            ", Category: " + this.category;

    }

}


// Creating ElectronicProduct child class

class ElectronicProduct extends ProductClass {

    constructor(productName, price, category, warranty) {

        // Calling parent class constructor
        super(productName, price, category);

        this.warranty = warranty;

    }

    // Unique method for electronic products

    showWarranty() {

        return this.productName +
            " has a warranty of " + this.warranty + " years.";

    }

}


// Creating ClothingProduct child class

class ClothingProduct extends ProductClass {

    constructor(productName, price, category, size) {

        // Calling parent class constructor
        super(productName, price, category);

        this.size = size;

    }

    // Unique method for clothing products

    showSize() {

        return this.productName +
            " is available in size " + this.size + ".";

    }

}


// Creating objects using child classes

const laptop = new ElectronicProduct(
    "Laptop",
    50000,
    "Electronics",
    2
);

const shirt = new ClothingProduct(
    "T-Shirt",
    1000,
    "Clothing",
    "L"
);


// Displaying class product details

console.log("\n----- ES6 CLASS PRODUCTS -----");

console.log(laptop.getProductDetails());

console.log(laptop.showWarranty());

console.log(shirt.getProductDetails());

console.log(shirt.showSize());


// TASK 3: ES6 SYNTAX IN CHECKOUT

// A. Arrow function to calculate final price after discount

const calculateFinalPrice = (price, discount) => {

    const discountAmount = (price * discount) / 100;

    const finalPrice = price - discountAmount;

    return finalPrice;

};

console.log("\n----- ES6 CHECKOUT OPERATIONS -----");

const finalPrice = calculateFinalPrice(50000, 10);

console.log("Final Price after Discount: ₹" + finalPrice);


// B. Template literal

const customerName = "Rahul";

const orderProduct = "Laptop";

const orderTotal = 50000;

const confirmationMessage = `Hello ${customerName}, your order of ${orderProduct} is confirmed. Total: ₹${orderTotal}.`;

console.log(confirmationMessage);


// C. Object destructuring

const customer = {

    name: "Rahul",

    email: "rahul@gmail.com",

    city: "Mumbai"

};


// Extracting name and email from customer object

const { name, email } = customer;

console.log("Customer Name:", name);

console.log("Customer Email:", email);


// D. Rest operator

function calculateTotal(...prices) {

    let total = 0;

    for (let i = 0; i < prices.length; i++) {

        total = total + prices[i];

    }

    return total;

}

const cartTotal = calculateTotal(50000, 800, 1500);

console.log("Total Cart Price: ₹" + cartTotal);


// E. Spread operator

const originalProduct = {

    productName: "Laptop",

    price: 50000,

    category: "Electronics"

};


// Creating a copy with a new price
// The original object will not be modified.

const updatedProduct = {

    ...originalProduct,

    price: 45000

};


console.log("Original Product:", originalProduct);

console.log("Updated Product:", updatedProduct);

// How to run the file
// Open your terminal in the main project folder and execute:
// node part-a-objects-classes/products.js