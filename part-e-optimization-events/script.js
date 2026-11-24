// PART E: PERFORMANCE OPTIMIZATION & DOM EVENTS

// TASK 1: DEBOUNCING


// Creating a debounce function

function debounce(callback, delay) {

    let timer;

    return function () {

        // Clear the previous timer whenever the user types again.
        clearTimeout(timer);

        // Execute the callback after the specified delay.
        timer = setTimeout(callback, delay);

    };

}


// Getting the search input and result elements

const searchInput = document.getElementById("searchInput");

const searchResult = document.getElementById("searchResult");


// Function to perform the search

function searchProducts() {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {

        searchResult.textContent = "Please enter a product name.";

    } else {

        searchResult.textContent = "Searching for: " + searchValue;

        console.log("Search executed:", searchValue);

    }

}


// Attaching the debounced function to the input event.
// Search executes only after the user stops typing for 500 ms.

const debouncedSearch = debounce(searchProducts, 500);

searchInput.addEventListener("input", debouncedSearch);


// TASK 2: THROTTLING

// Creating a throttle function

function throttle(callback, delay) {

    let shouldWait = false;

    return function () {

        // Ignore the event while waiting for the next interval.
        if (shouldWait === true) {

            return;

        }

        // Execute the callback immediately.
        callback();

        shouldWait = true;

        // Allow another execution after the delay.
        setTimeout(function () {

            shouldWait = false;

        }, delay);

    };

}


// Getting the scroll result element

const scrollResult = document.getElementById("scrollResult");


// Counter to track throttled scroll events

let scrollCount = 0;


// Function to update the scroll count

function handleScroll() {

    scrollCount++;

    scrollResult.textContent = "Scroll events: " + scrollCount;

    console.log("Throttled scroll event:", scrollCount);

}


// Attaching throttle to the window scroll event.
// The callback runs at most once every 1000 ms.

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);


// TASK 3: MEMOIZATION

// Function to calculate discount

function calculateDiscount(price, percentage) {

    const discountAmount = (price * percentage) / 100;

    const finalPrice = price - discountAmount;

    return finalPrice;

}


// Creating a cache to store previously calculated results

const discountCache = new Map();


// Creating a memoized version of calculateDiscount

function memoizedDiscount(price, percentage) {

    // Create a unique key using the function arguments.
    const cacheKey = price + "-" + percentage;

    // Check whether the result already exists in the cache.
    if (discountCache.has(cacheKey)) {

        console.log("Result came from cache.");

        return discountCache.get(cacheKey);

    }

    // Calculate the result if it is not available in the cache.
    const result = calculateDiscount(price, percentage);

    // Store the result for future use.
    discountCache.set(cacheKey, result);

    console.log("Fresh calculation performed.");

    return result;

}


// Getting input elements and button

const priceInput = document.getElementById("priceInput");

const discountInput = document.getElementById("discountInput");

const calculateButton = document.getElementById("calculateButton");

const discountResult = document.getElementById("discountResult");


// Adding click event to the Calculate Discount button

calculateButton.addEventListener("click", function () {

    const price = Number(priceInput.value);

    const percentage = Number(discountInput.value);

    // Validate the entered values.
    if (
        priceInput.value.trim() === "" ||
        discountInput.value.trim() === "" ||
        Number.isNaN(price) ||
        Number.isNaN(percentage) ||
        price < 0 ||
        percentage < 0 ||
        percentage > 100
    ) {

        discountResult.textContent =
            "Please enter a valid price and discount percentage.";

        return;

    }

    // Calling the memoized function.
    const finalPrice = memoizedDiscount(price, percentage);

    discountResult.textContent =
        "Final Price after Discount: ₹" + finalPrice;

});


// TASK 4: EVENT BUBBLING AND DELEGATION

// Getting the product list and result elements

const productList = document.getElementById("productList");

const eventResult = document.getElementById("eventResult");


// A. DEMONSTRATING EVENT BUBBLING


// Adding a click event to the parent container.

productList.addEventListener("click", function () {

    console.log("Parent container event executed.");

});


// Adding a click event to every Remove button.

const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        console.log("Remove button clicked.");

        // Stop the event from reaching the parent container.
        event.stopPropagation();

        console.log("Event bubbling stopped.");

    });

});


// B. EVENT DELEGATION


// Adding one click listener to the parent container.
// The parent checks whether the clicked element is a Remove button.

productList.addEventListener("click", function (event) {

    if (event.target.classList.contains("remove-button")) {

        // Find the product item containing the clicked button.
        const productItem = event.target.parentElement;

        // Remove that product from the page.
        productItem.remove();

        eventResult.textContent = "Product removed successfully.";

        console.log("Product removed using event delegation.");

    }

});
