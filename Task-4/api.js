const API_URL = "https://fakestoreapi.com";

// Fetch all products from the API
export async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        // Validate API response
        if (!Array.isArray(products)) {
            throw new Error("Invalid API response: Expected an array");
        }

        // Validate individual products
        const validProducts = products.every(product =>
            product &&
            typeof product.title === "string" &&
            typeof product.category === "string" &&
            typeof product.price === "number" &&
            typeof product.image === "string"
        );

        if (!validProducts) {
            throw new Error("Invalid product data received");
        }

        return products;

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}