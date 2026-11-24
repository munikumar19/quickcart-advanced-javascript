# QuickCart – Advanced JavaScript Practical Assignment

## Overview

QuickCart is an e-commerce order management system built with Modern JavaScript (ES6+), HTML5, and CSS3[cite: 3, 11]. In this assignment, I fixed and implemented core features to handle object inheritance, shopping cart calculations, duplicate data, JSON serialization edge cases, asynchronous order processing, search/scroll optimization, and DOM event handling without using any external libraries or frameworks[cite: 3, 11].

## Technologies Used

- **JavaScript (ES6+):** Prototypes, ES6 Classes (`extends`, `super`), Arrow Functions, Template Literals, Destructuring, Rest & Spread Operators, `map()`, `filter()`, `reduce()`, `forEach()`, `Map`, `Set`, `Object.freeze()`, `Object.seal()`, `JSON.stringify()`, `JSON.parse()`, Event Loop, Callbacks, Promises, `async/await`, Promise Combinators, Debouncing, Throttling, Memoization, and Event Delegation[cite: 4, 5, 6, 7, 8, 9, 10].
- **HTML5 & CSS3:** Used to build and style the interactive DOM interface in Part E.
- **Node.js & Chrome DevTools:** Used to execute the console-based JavaScript modules and inspect DOM/console outputs.

## Project Structure

```text
quickcart-advanced-javascript/
├── part-a-objects-classes/
│   └── products.js              # Prototypes, ES6 classes & checkout syntax[cite: 4, 11]
├── part-b-array-methods/
│   └── shopping-cart.js         # Array methods, Map, Set, freeze & seal[cite: 5, 6, 11]
├── part-c-json-debugging/
│   └── json-handling.js         # JSON serialization & output debugging[cite: 6, 7, 11]
├── part-d-asynchronous/
│   └── order-processing.js      # Event loop, async flows & combinators[cite: 7, 8, 11]
├── part-e-optimization-events/
│   ├── index.html               # DOM interface for optimization & events[cite: 11]
│   ├── script.js                # Debounce, throttle, memoization & delegation
│   └── style.css                # Styling for Part E[cite: 11]
├── part-f-integration/
│   └── quickcart.js             # Final QuickCart order summary integration
└── README.md                    # Project documentation & screenshots[cite: 11]

Part E (DOM Features):
Open part-e-optimization-events/index.html in a browser and open DevTools (F12 > Console) to test search debouncing, scroll throttling, memoization caching, and event bubbling/delegation[cite: 9, 10, 11].

Explanation of Each Part

Part A – Objects, Prototypes & ES6 Classes (part-a-objects-classes/products.js): Built a Product constructor with displayProduct() on Product.prototype, created Product, ElectronicProduct, and ClothingProduct classes using extends and super(), and implemented checkout utilities using arrow functions, template literals, destructuring, rest (...prices), and spread operators.

Part B – Higher-Order Functions, Map, Set & Object Methods (part-b-array-methods/shopping-cart.js): Used map(), filter(), reduce(), and forEach() to process shopping cart totals and Electronics values, stored inventory in a Map, removed duplicate emails with a Set, and compared Object.freeze() vs. Object.seal().

Part C – JSON Handling & Output-Based Debugging (part-c-json-debugging/json-handling.js): Tested JSON.stringify() and JSON.parse() on an order object to observe how undefined and functions are handled, and debugged edge cases involving arrays with undefined, NaN, Infinity, invalid JSON strings, circular references, and Date objects.

Part D – Asynchronous JavaScript & Promises (part-d-asynchronous/order-processing.js): Demonstrated event loop execution order across synchronous logs, microtasks, and macrotasks; built the sequential order flow (validateOrder, processPayment, sendConfirmation) using callbacks, Promises, and async/await with try/catch; and tested Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any().

Part E – Performance Optimization & DOM Events (part-e-optimization-events/):
Implemented a 500 ms debounced search input, a 1000 ms throttled scroll counter, a memoized calculateDiscount() function using closures, and product removal using event bubbling, event.stopPropagation(), and parent container event delegation.

Part F – Final Real-Time Integration Challenge (part-f-integration/quickcart.js): Combined a Product class, destructuring, map(), filter(), reduce(), Set, Map, Object.freeze(), JSON.stringify(), and async/await with try/catch to dynamically generate Rahul's QuickCart order summary[cite: 10, 11].
```
