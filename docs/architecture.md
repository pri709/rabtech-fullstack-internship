Repository Architecture

1. Project Overview

This repository is being developed as part of the RabTech Academy Full Stack Web Development Internship.

The project follows a modular structure that separates frontend code, backend services, documentation and testing resources.

The initial stage focuses on documenting the accessibility baseline of the SKCET website.

2. Repository Structure

SKCET-Accessibility-Audit/
│
├── client/
│   └── README.md
│
├── server/
│   └── README.md
│
├── docs/
│   ├── audit-report/
│   │   └── accessibility-findings.md
│   └── architecture.md
│
├── tests/
│   └── README.md
│
├── lighthouse-screenshots/
│
├── accessibility-audit.xlsx
├── keyboard-navigation.xlsx
└── README.md

3. Component Responsibilities

Client

Contains frontend application resources.

Planned technologies:

- HTML5
- CSS3
- JavaScript

Server

Reserved for backend application logic and REST API development.

Documentation

Stores project documentation, accessibility audit reports and architecture information.

Tests

Reserved for testing documentation and test resources.

Lighthouse Screenshots

Stores screenshots collected during the SKCET accessibility audit.

4. Development Approach

The project will be developed in stages:

1. Audit accessibility and document findings.
2. Build a semantic and accessible HTML structure.
3. Implement responsive CSS and design tokens.
4. Add JavaScript DOM interactions and REST API integration.
5. Develop and deploy the final capstone project.

5. Planned Feature

The planned application direction is an accessible dashboard with an issue-tracking interface.

Potential features include:

- Viewing accessibility issues.
- Searching and filtering issues.
- Viewing individual issue details.
- Updating issue status.

The final implementation will be developed in later internship tasks.

6. Current Status

- Accessibility baseline audit: Documented.
- Lighthouse findings: Documented.
- Keyboard navigation observations: Recorded separately.
- Repository architecture: Initial structure created.
- Frontend implementation: Pending.
- Backend implementation: Pending.
- Testing and deployment: Pending.

This architecture will be updated as the project develops.

7. Local Setup Instructions

Prerequisites

- Visual Studio Code
- Git
- A modern web browser
- Node.js and npm (required for the planned backend development)

Getting Started

1. Clone the GitHub repository:
   
   "git clone https://github.com/pri709/rabtech-fullstack-internship.git"

2. Open the project folder in Visual Studio Code.

3. Explore the following directories:
   
   - "client/" – frontend resources.
   - "server/" – backend resources.
   - "docs/" – documentation and audit reports.
   - "tests/" – testing resources.

4. Frontend and backend application setup instructions will be added when their implementations are created.

Current Setup Status

The repository currently contains the documentation and initial project structure. The application itself is not yet implemented.

8. First Vertical Feature Slice

The first planned vertical feature slice is an accessible issue-tracking dashboard.

It will connect the frontend, backend and data layer through one complete user workflow.

Planned workflow:

1. A user opens the accessibility dashboard.
2. The frontend requests accessibility issues from the backend.
3. The backend returns issue information through a REST API.
4. The frontend displays the issues.
5. The user searches, filters or views an issue.
6. The user updates an issue's status.
7. The updated information is reflected in the dashboard.

This feature will be implemented incrementally in the subsequent internship tasks.
