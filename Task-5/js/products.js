import { getProducts, saveProducts } from "./storage.js";

// Display products
export function displayProducts(searchText = "") {
    const productList = document.getElementById("productList");
    const productCount = document.getElementById("productCount");
    const emptyMessage = document.getElementById("emptyMessage");

    productList.replaceChildren();

    const products = getProducts();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    productCount.textContent = `Total Products: ${filteredProducts.length}`;
    emptyMessage.hidden = filteredProducts.length !== 0;

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = `₹${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        const description = document.createElement("p");
        description.textContent = product.description;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            editProduct(product.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => {
            deleteProduct(product.id);
        });

        card.append(name, price, category, description, editButton, deleteButton);
        productList.appendChild(card);
    });
}

// Add or update a product
export function saveProduct(product) {
    const products = getProducts();

    if (product.id) {
        const index = products.findIndex(item => item.id === product.id);

        if (index !== -1) {
            products[index] = product;
        }
    } else {
        product.id = Date.now().toString();
        products.push(product);
    }

    saveProducts(products);
    displayProducts();
}

// Edit an existing product
function editProduct(id) {
    const products = getProducts();
    const product = products.find(item => item.id === id);

    if (!product) return;

    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productDescription").value = product.description;

    document.getElementById("formTitle").textContent = "Edit Product";
    document.getElementById("productFormSection").hidden = false;

    document.getElementById("productFormSection").scrollIntoView({
        behavior: "smooth"
    });
}

// Delete a product
function deleteProduct(id) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    const products = getProducts();
    const updatedProducts = products.filter(product => product.id !== id);

    saveProducts(updatedProducts);
    displayProducts();
}