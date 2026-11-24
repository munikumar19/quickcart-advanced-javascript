// PART D: ASYNCHRONOUS JAVASCRIPT & PROMISES


// TASK 1: EVENT LOOP

console.log("----- TASK 1: EVENT LOOP -----");

console.log("Order Started");

// setTimeout() callback goes to the macrotask queue.
setTimeout(function () {

    console.log("Payment Processing");

}, 0);

// Promise callback goes to the microtask queue.
Promise.resolve().then(function () {

    console.log("Payment Successful");

});

console.log("Order Completed");


// Expected output:
// Order Started
// Order Completed
// Payment Successful
// Payment Processing


// TASK 2: CALLBACKS

console.log("\n----- TASK 2: CALLBACKS -----");


// Step 1: Validate the order using a callback

function validateOrder(callback) {

    setTimeout(function () {

        console.log("Order Validated");

        callback();

    }, 1000);

}


// Step 2: Process payment using a callback

function processPayment(callback) {

    setTimeout(function () {

        console.log("Payment Completed");

        callback();

    }, 1000);

}


// Step 3: Send confirmation using a callback

function sendConfirmation(callback) {

    setTimeout(function () {

        console.log("Confirmation Sent");

        callback();

    }, 1000);

}


// Calling the functions one after another using callbacks.
// Deeply nested callbacks are difficult to read and maintain.
// This situation is commonly called callback hell.

validateOrder(function () {

    processPayment(function () {

        sendConfirmation(function () {

            console.log("Callback Order Completed");

        });

    });

});


// TASK 3: PROMISES

console.log("\n----- TASK 3: PROMISES -----");


// Step 1: Validate order using Promise

function validateOrderPromise() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Order Validated");

        }, 1000);

    });

}


// Step 2: Process payment using Promise

function processPaymentPromise() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Payment Completed");

        }, 1000);

    });

}


// Step 3: Send confirmation using Promise

function sendConfirmationPromise() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Confirmation Sent");

        }, 1000);

    });

}


// Chaining Promises using then() and catch()

validateOrderPromise()

    .then(function (message) {

        console.log(message);

        return processPaymentPromise();

    })

    .then(function (message) {

        console.log(message);

        return sendConfirmationPromise();

    })

    .then(function (message) {

        console.log(message);

        console.log("Promise Order Completed");

    })

    .catch(function (error) {

        console.log("Order Failed:", error);

    });


// TASK 4: ASYNC / AWAIT

console.log("\n----- TASK 4: ASYNC / AWAIT -----");


// Creating an async function to place an order.
// await pauses this function until the Promise settles.

async function placeOrder() {

    try {

        const validationMessage = await validateOrderPromise();

        console.log(validationMessage);

        const paymentMessage = await processPaymentPromise();

        console.log(paymentMessage);

        const confirmationMessage = await sendConfirmationPromise();

        console.log(confirmationMessage);

        console.log("Order Status: Confirmed Successfully!");

    } catch (error) {

        console.log("Order Status: Failed!");

        console.log("Error:", error);

    }

}


// Calling the async function

placeOrder();


// Demonstrating the failure case with try/catch

async function placeFailedOrder() {

    try {

        console.log("Starting another order...");

        await validateOrderPromise();

        // Simulating a payment failure

        throw new Error("Payment Failed");

    } catch (error) {

        console.log("Order Status: Failed!");

        console.log("Error:", error.message);

    }

}


// Calling the failure demonstration

placeFailedOrder();


// TASK 5: PROMISE COMBINATORS

console.log("\n----- TASK 5: PROMISE COMBINATORS -----");


// Mock API 1: Products API
// Resolves after 1 second.

function productsAPI() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Products Loaded");

        }, 1000);

    });

}


// Mock API 2: Payment API
// Rejects after 1.5 seconds.

function paymentAPI() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            reject("Payment Service Failed");

        }, 1500);

    });

}


// Mock API 3: Delivery API
// Resolves after 2 seconds.

function deliveryAPI() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Delivery Loaded");

        }, 2000);

    });

}


// A. PROMISE.ALL()

// Promise.all() resolves only when every Promise resolves.
// If any Promise rejects, the entire Promise.all() rejects.

console.log("\nA. PROMISE.ALL");

Promise.all([
    productsAPI(),
    paymentAPI(),
    deliveryAPI()
])

    .then(function (results) {

        console.log("All API Results:", results);

    })

    .catch(function (error) {

        console.log("Promise.all Error:", error);

    });


// B. PROMISE.ALLSETTLED()

// Promise.allSettled() waits for every Promise to finish,
// whether it resolves or rejects.

console.log("\nB. PROMISE.ALLSETTLED");

Promise.allSettled([
    productsAPI(),
    paymentAPI(),
    deliveryAPI()
])

    .then(function (results) {

        console.log("All API Statuses:");

        results.forEach(function (result) {

            console.log(result);

        });

    });


// C. PROMISE.RACE()

// Promise.race() returns the result of the first Promise
// that settles, whether it resolves or rejects.

console.log("\nC. PROMISE.RACE");

Promise.race([
    productsAPI(),
    paymentAPI(),
    deliveryAPI()
])

    .then(function (result) {

        console.log("Promise.race Result:", result);

    })

    .catch(function (error) {

        console.log("Promise.race Error:", error);

    });


// D. PROMISE.ANY()

// Promise.any() returns the first successfully resolved Promise.
// It ignores rejected Promises unless every Promise rejects.

console.log("\nD. PROMISE.ANY");

Promise.any([
    productsAPI(),
    paymentAPI(),
    deliveryAPI()
])

    .then(function (result) {

        console.log("Promise.any Result:", result);

    })

    .catch(function (error) {

        console.log("Promise.any Error:", error);

    });


// How to run the file
// Open the terminal in your main project folder and execute:
// node part-d-asynchronous/order-processing.js