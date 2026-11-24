ProductHub – Product Management & Storefront

Project Overview

ProductHub is a responsive web application developed as part of the RabTech Academy Full Stack Development Internship – Task 5: Production Capstone Project & Live Deployment.

The application provides a simple product management dashboard where users can simulate login, explore products, add new products, update existing product details, and delete products.

Product information is stored using browser Local Storage to maintain data across page refreshes.

Features

- Authentication Simulation: Login and logout functionality.
- Interactive Product Catalog: Display and search products by name or category.
- Create Products: Add new products with name, price, category, and description.
- Read Products: View product information dynamically.
- Update Products: Edit existing product details.
- Delete Products: Remove products with confirmation.
- Persistent Storage: Save product data using Local Storage.
- Responsive Design: Adaptable interface for desktop and mobile devices.
- Form Validation: Validate product details before saving.

Technologies Used

- HTML5 – Application structure and semantic elements.
- CSS3 – Styling, responsive layouts, Flexbox and CSS Grid.
- JavaScript (ES6+) – Application logic, modules, DOM manipulation and event handling.
- Local Storage – Persistent product data.
- Session Storage – Simulated login session.
- Git and GitHub – Version control and source code hosting.
- Vercel / Netlify – Live deployment.

Project Architecture

flowchart TD
    A[ProductHub Application] --> B[Login Interface]
    B --> C[Authentication Module]
    C --> D[Dashboard]
    D --> E[Product Management]
    E --> F[Create]
    E --> G[Read]
    E --> H[Update]
    E --> I[Delete]
    E --> J[Storage Module]
    J --> K[Browser Local Storage]

Project Structure

Task-5/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── products.js
│   └── storage.js
│
└── README.md

Installation and Setup

1. Clone the repository:

git clone https://github.com/pri709/rabtech-fullstack-internship.git

2. Navigate to the project directory:

cd rabtech-fullstack-internship/Task-5

3. Open the project in Visual Studio Code.

4. Run "index.html" using the VS Code Live Server extension.

5. Open the application in your browser.

Demo Login Credentials

- Username: "admin"
- Password: "admin123"

Note: This project uses simulated frontend authentication for demonstration purposes. It is not a production-secure authentication system.

Data Persistence

Product information is stored in browser Local Storage using JSON serialization.

The simulated login session uses Session Storage.

Testing

The application supports testing of:

- Login and logout.
- Product creation.
- Product listing.
- Product editing.
- Product deletion.
- Product search.
- Data persistence after browser refresh.
- Responsive interface.

Future Enhancements

- Backend authentication and authorization.
- Database integration.
- Product images and image uploads.
- Shopping cart and checkout functionality.
- User roles and account management.

Internship Details

Program: RabTech Academy Full Stack Development Internship

Assignment: Task 5 – Production Capstone Project & Live Deployment

Developer: Prithika Thinakaran

GitHub Repository: https://github.com/pri709/rabtech-fullstack-internship

Live Application: 
## Live Application

https://rabtech-fullstack-internship.vercel.app/

---

Developed as the final capstone project demonstrating practical frontend development, JavaScript functionality, data persistence, version control, and deployment skills.
