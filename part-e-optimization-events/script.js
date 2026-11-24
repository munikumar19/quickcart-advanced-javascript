// PART E: PERFORMANCE OPTIMIZATION & DOM EVENTS

// TASK 1: DEBOUNCING

function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
}

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchProducts() {
    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        searchResult.textContent = "Please enter a product name.";
    } else {
        searchResult.textContent = "Searching for: " + searchValue;
        console.log("Search executed:", searchValue);
    }
}

const debouncedSearch = debounce(searchProducts, 500);
searchInput.addEventListener("input", debouncedSearch);


// TASK 2: THROTTLING

function throttle(callback, delay) {
    let shouldWait = false;

    return function () {
        if (shouldWait === true) {
            return;
        }

        callback();
        shouldWait = true;

        setTimeout(function () {
            shouldWait = false;
        }, delay);
    };
}

const scrollResult = document.getElementById("scrollResult");
let scrollCount = 0;

function handleScroll() {
    scrollCount++;
    scrollResult.textContent = "Scroll events: " + scrollCount;
    console.log("Throttled scroll event:", scrollCount);
}

const throttledScroll = throttle(handleScroll, 1000);
window.addEventListener("scroll", throttledScroll);


// TASK 3: MEMOIZATION

function calculateDiscount(price, percentage) {
    const discountAmount = (price * percentage) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}

const discountCache = new Map();

function memoizedDiscount(price, percentage) {
    const cacheKey = price + "-" + percentage;

    if (discountCache.has(cacheKey)) {
        console.log("Result came from cache.");
        return discountCache.get(cacheKey);
    }

    const result = calculateDiscount(price, percentage);
    discountCache.set(cacheKey, result);
    console.log("Fresh calculation performed.");
    return result;
}

const priceInput = document.getElementById("priceInput");
const discountInput = document.getElementById("discountInput");
const calculateButton = document.getElementById("calculateButton");
const discountResult = document.getElementById("discountResult");

calculateButton.addEventListener("click", function () {
    const price = Number(priceInput.value);
    const percentage = Number(discountInput.value);

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

    const finalPrice = memoizedDiscount(price, percentage);
    discountResult.textContent =
        "Final Price after Discount: ₹" + finalPrice;
});


// TASK 4: EVENT BUBBLING AND DELEGATION

const productList = document.getElementById("productList");
const eventResult = document.getElementById("eventResult");

// A. Event Bubbling & stopPropagation() demonstration
// Clicking a product row bubbles up to the parent container;
// clicking the Remove button stops propagation to outer ancestors after delegation runs.
document.body.addEventListener("click", function () {
    console.log("Document body received bubbled event.");
});

productList.addEventListener("click", function (event) {
    console.log("Parent container (#productList) handler ran (event bubbled).");

    // B. Event Delegation: check event.target and remove the clicked product
    if (event.target.classList.contains("remove-button")) {
        const productItem = event.target.parentElement;
        const productName = productItem.querySelector("span").textContent;

        // Stop the click event from bubbling further up beyond #productList
        event.stopPropagation();
        console.log("event.stopPropagation() called: stopped bubbling above #productList.");

        productItem.remove();
        eventResult.textContent = "Removed: " + productName;
        console.log("Product removed via event delegation:", productName);
    }
});