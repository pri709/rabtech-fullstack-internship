const STORAGE_KEY = "productHubProducts";

// Get products from localStorage
export function getProducts() {
    const storedProducts = localStorage.getItem(STORAGE_KEY);

    if (storedProducts) {
        return JSON.parse(storedProducts);
    }

    // Default products for first-time users
    const defaultProducts = [
        {
            id: "1",
            name: "Laptop",
            price: 55000,
            category: "Electronics",
            description: "Powerful laptop for everyday work."
        },
        {
            id: "2",
            name: "Headphones",
            price: 2500,
            category: "Accessories",
            description: "Comfortable headphones with clear sound."
        },
        {
            id: "3",
            name: "Smartphone",
            price: 18000,
            category: "Electronics",
            description: "Modern smartphone with useful features."
        }
    ];

    saveProducts(defaultProducts);

    return defaultProducts;
}

// Save products to localStorage
export function saveProducts(products) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
    );
}