import { fetchProducts } from "./api.js";
const productList = document.getElementById("productList");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

// Store all products received from the API
let allProducts = [];

// Load products from the API
async function loadProducts() {
    try {
        loadingMessage.hidden = false;
        errorMessage.hidden = true;

        allProducts = await fetchProducts();

populateCategories();

loadPreferences();

applyFilters();
    } catch (error) {
    console.error("Loading failed:", error);

    errorMessage.textContent =
        "Oops! Products could not be loaded. Please check your internet connection and try again.";

    errorMessage.hidden = false;
    productList.innerHTML = "";
}finally {
        loadingMessage.hidden = true;
    }
}
function displayProducts(products) {
    productList.innerHTML = "";

    if (products.length === 0) {
        productList.textContent = "No products found.";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("article");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.width = 120;

        const productTitle = document.createElement("h2");
        productTitle.textContent = product.title;

        const productCategory = document.createElement("p");
        productCategory.textContent = `Category: ${product.category}`;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productCategory);
        productCard.appendChild(productPrice);

        productList.appendChild(productCard);
    });
}
const searchInput = document.getElementById("searchInput");


const categoryFilter = document.getElementById("categoryFilter");

// Get unique product categories
function populateCategories() {
    // Remove old categories but preserve All Categories
    categoryFilter.querySelectorAll('option:not([value="all"])')
        .forEach(option => option.remove());

    // Get unique product categories
    const categories = [...new Set(
        allProducts.map(product => product.category)
    )];

    // Add categories to dropdown
    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}

// Filter products by category

const sortSelect = document.getElementById("sortSelect");

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortSelect.value;

    // Step 1: Apply search and category filters
    let filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Step 2: Apply sorting
    if (selectedSort === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Step 3: Display final results
    displayProducts(filteredProducts);
}
function savePreferences() {
    const preferences = {
        category: categoryFilter.value,
        sort: sortSelect.value
    };

    localStorage.setItem(
        "productPreferences",
        JSON.stringify(preferences)
    );
}
function loadPreferences() {
    try {
        const savedPreferences = localStorage.getItem(
            "productPreferences"
        );

        if (!savedPreferences) return;

        const preferences = JSON.parse(savedPreferences);

        // Validate saved category
        const categoryExists = [
            ...categoryFilter.options
        ].some(option => option.value === preferences.category);

        if (categoryExists) {
            categoryFilter.value = preferences.category;
        }

        // Validate saved sorting option
        const validSortOptions = [
            "default",
            "low-high",
            "high-low"
        ];

        if (validSortOptions.includes(preferences.sort)) {
            sortSelect.value = preferences.sort;
        }

    } catch (error) {
        console.error("Could not load saved preferences:", error);

        localStorage.removeItem("productPreferences");
    }
}

// Listen to all three controls
searchInput.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", () => {
    savePreferences();
    applyFilters();
});

sortSelect.addEventListener("change", () => {
    savePreferences();
    applyFilters();
});
// Start the application
loadProducts();