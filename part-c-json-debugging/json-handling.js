// PART C: JSON HANDLING & OUTPUT-BASED DEBUGGING


// TASK 1: JSON.STRINGIFY() AND JSON.PARSE()

console.log("----- TASK 1: JSON HANDLING -----");


// Creating an order object

const order = {

    orderId: 501,

    customer: "Rahul",

    amount: 5000,

    deliveryDate: undefined,

    discount: null,

    calculateTax: function () {

        return 500;

    }

};


// Converting JavaScript object into JSON string

const jsonOrder = JSON.stringify(order);

console.log("JSON String:");

console.log(jsonOrder);


// Converting JSON string back into JavaScript object

const parsedOrder = JSON.parse(jsonOrder);

console.log("Parsed Order Object:");

console.log(parsedOrder);


// Displaying the properties after parsing

console.log("Order ID:", parsedOrder.orderId);

console.log("Customer:", parsedOrder.customer);

console.log("Amount:", parsedOrder.amount);

console.log("Discount:", parsedOrder.discount);


// Checking properties that are not included in JSON

console.log(
    "Delivery Date:",
    parsedOrder.deliveryDate
);

console.log(
    "Calculate Tax:",
    parsedOrder.calculateTax
);


// Explanation:
// JSON.stringify() removes object properties whose values are
// undefined or functions. However, null is preserved.


// TASK 2: PREDICT THE OUTPUT

console.log("\n----- TASK 2: OUTPUT PREDICTION -----");


// Q1: undefined in an object

// Properties with undefined values are omitted
// when an object is converted into JSON.

console.log("Q1:");

console.log(
    JSON.stringify({
        name: "Rahul",
        age: undefined
    })
);


// Q2: undefined in an array

// undefined array elements are converted into null
// when an array is converted into JSON.

console.log("Q2:");

console.log(
    JSON.stringify([10, undefined, 30])
);


// Q3: NaN and Infinity

// JSON does not support NaN or Infinity.
// Both values are converted into null.

console.log("Q3:");

console.log(
    JSON.stringify({
        price: NaN,
        discount: Infinity
    })
);


// Q4: Invalid JSON

// JSON requires double quotes around property names
// and string values. This input is invalid JSON.

console.log("Q4:");

try {

    const result = JSON.parse(
        "{name: 'Rahul', age: 25}"
    );

    console.log(result);

} catch (error) {

    console.log("Error:", error.message);

}


// Q5: Circular reference

// An object cannot be converted into JSON when it
// directly or indirectly references itself.

console.log("Q5:");

try {

    const user = {

        name: "Rahul"

    };

    // Creating a circular reference

    user.self = user;

    console.log(JSON.stringify(user));

} catch (error) {

    console.log("Error:", error.message);

}


// Q6: Date object

// JSON.stringify() converts Date objects into
// ISO date strings using the toJSON() method.

console.log("Q6:");

console.log(
    JSON.stringify({
        createdAt: new Date("2026-01-01")
    })
);


// How to run the file
// From your main project folder, execute:
// node part-c-json-debugging/json-handling.js