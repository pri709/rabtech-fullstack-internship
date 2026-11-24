import { login, logout, isLoggedIn, getUsername } from "./auth.js";
import { displayProducts, saveProduct } from "./products.js";

// Get HTML elements
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const logoutBtn = document.getElementById("logoutBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const addProductBtn = document.getElementById("addProductBtn");
const productFormSection = document.getElementById("productFormSection");
const productForm = document.getElementById("productForm");

const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("searchInput");

// Show dashboard
function showDashboard() {
    loginSection.hidden = true;
    dashboardSection.hidden = false;

    welcomeMessage.textContent = `Welcome, ${getUsername()}!`;

    displayProducts();
}

// Show login page
function showLogin() {
    loginSection.hidden = false;
    dashboardSection.hidden = true;
}

// Handle login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (login(username, password)) {
        loginError.textContent = "";
        loginForm.reset();
        showDashboard();
    } else {
        loginError.textContent = "Invalid username or password!";
    }
});

// Handle logout
logoutBtn.addEventListener("click", function() {
    logout();
    productForm.reset();
    productFormSection.hidden = true;
    showLogin();
});

// Show add product form
addProductBtn.addEventListener("click", function() {
    productForm.reset();

    document.getElementById("productId").value = "";
    document.getElementById("formTitle").textContent = "Add New Product";

    productFormSection.hidden = false;
    productFormSection.scrollIntoView({ behavior: "smooth" });
});

// Handle product form submission
productForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const product = {
        id: document.getElementById("productId").value,
        name: document.getElementById("productName").value.trim(),
        price: Number(document.getElementById("productPrice").value),
        category: document.getElementById("productCategory").value.trim(),
        description: document.getElementById("productDescription").value.trim()
    };

    if (!product.name || !product.category || !product.description || !Number.isFinite(product.price) || product.price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    saveProduct(product);

    productForm.reset();
    productFormSection.hidden = true;

    alert("Product saved successfully!");
});

// Cancel product form
cancelBtn.addEventListener("click", function() {
    productForm.reset();
    productFormSection.hidden = true;
});

// Search products
searchInput.addEventListener("input", function() {
    displayProducts(searchInput.value);
});

// Check existing login session
if (isLoggedIn()) {
    showDashboard();
} else {
    showLogin();
}