const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "admin123";

// Check login credentials
export function login(username, password) {
    if (
        username === DEMO_USERNAME &&
        password === DEMO_PASSWORD
    ) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", username);

        return true;
    }

    return false;
}

// Logout the user
export function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");
}

// Check whether the user is logged in
export function isLoggedIn() {
    return sessionStorage.getItem("isLoggedIn") === "true";
}

// Get the logged-in username
export function getUsername() {
    return sessionStorage.getItem("username");
}