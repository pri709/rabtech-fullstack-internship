RabTech Academy – Full Stack Web Development Internship

Task 1 – Accessibility Baseline & Repository Architecture Audit

1. Project Overview

This project documents an accessibility audit of the official Sri Krishna College of Engineering and Technology (SKCET) website.

The purpose of this audit is to identify accessibility issues, evaluate keyboard navigation, document evidence, and propose practical remediation recommendations.

The audit uses Google Lighthouse and manual keyboard-only testing.

2. Website Audited

- Website: Sri Krishna College of Engineering and Technology
- URL: https://skcet.ac.in/
- Testing Device: Desktop
- Browser: Google Chrome
- Audit Tool: Chrome Lighthouse 13.5.0
- Audit Date: 18 November 2026

3. Lighthouse Accessibility Results

Initial Accessibility Score: 70/100

The automated audit identified issues involving:

1. Buttons without accessible names.
2. Images without alternative text.
3. Links without discernible names.
4. Dialog elements without accessible names.
5. Insufficient background and foreground colour contrast.

Lighthouse also identified other opportunities involving touch target size, link distinction, and heading order.

Note: Automated accessibility testing covers only a subset of accessibility requirements. Manual testing is also necessary.

4. Accessibility Issues Documented

The following accessibility issues were identified and documented:

Issue ID| Accessibility Issue| WCAG Reference
WEB-001| Button without accessible name| 4.1.2
WEB-002| Image missing alt attribute| 1.1.1
WEB-003| Links without discernible names| 2.4.4
WEB-004| Dialog without accessible name| 4.1.2
WEB-005| Insufficient colour contrast| 1.4.3

Detailed evidence, severity, user impact, and recommended fixes are recorded in "accessibility-audit.xlsx".

5. Keyboard Navigation Testing

Manual keyboard-only testing was performed using the following keys:

- Tab
- Shift + Tab
- Enter
- Escape

Observations

- Tab navigation moved through interactive elements.
- Shift + Tab moved backwards through the elements.
- Enter successfully activated a navigation link.
- The popup was accessible through the keyboard during testing.
- Escape was tested for popup dismissal.
- A visible focus indicator was not observed on the tested elements.

These observations are limited to the elements and interactions tested during the audit.

Detailed results are available in "Keyboard-navigation.xlsx".

6. Evidence and Screenshots

The "lighthouse-screenshots/" directory contains screenshots captured during the Lighthouse accessibility audit.

Multiple screenshots are retained for WEB-005 because Lighthouse identified several affected elements.

The screenshots provide supporting evidence for the accessibility findings documented in the audit workbook.

7. Repository Architecture

The planned monorepo structure is:

rabtech-fullstack-internship/
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

Project Boundaries

- Client: Contains the frontend interface, semantic HTML, CSS, and browser-side JavaScript.
- Server: Contains backend logic and REST API endpoints.
- Docs: Stores audit reports, architecture documentation, and evidence.
- Tests: Contains automated and manual testing resources.

8. Local Setup

The initial audit documentation can be viewed using a web browser and spreadsheet application.

For the planned full-stack project:

1. Clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Follow the setup instructions provided in the client and server directories.
4. Start the frontend and backend using their respective instructions.

9. First Vertical Feature Slice

The first planned feature is an accessible dashboard issue tracker.

It will allow users to:

- View accessibility issues in a structured table.
- Search and filter documented issues.
- View issue details.
- Update issue status.

The frontend will communicate with the backend through REST API endpoints.

Accessibility will be considered throughout the feature, including semantic HTML, keyboard navigation, and accessible form controls.

10. Conclusion

This audit establishes an initial accessibility baseline for the SKCET website.

The findings provide a starting point for understanding accessibility problems and designing more accessible, maintainable web applications.

Project Status: Accessibility audit documentation completed; repository implementation and architecture setup are pending.

---

Task 2 – Semantic HTML5 & Accessible Component Architecture

1. Project Overview

Task 2 focuses on building a structured, multi-page dashboard using Semantic HTML5 and accessible component architecture.

The objective is to apply the accessibility concepts identified in Task 1 to a practical frontend implementation.

The project demonstrates how semantic elements, accessible navigation, structured tables, properly labelled forms, and accessible dialog components can be used to develop a more inclusive and maintainable web interface.

The implementation uses HTML5, ARIA attributes, native browser validation, and JavaScript for modal interaction.

2. Project Structure

The Task 2 implementation contains the following files:

Task-2/
│
├── index.html
│
├── pages/
│   ├── reports.html
│   └── settings.html
│
├── components/
│   ├── data-table.html
│   ├── accessible-form.html
│   └── modal.html
│
└── README.md

File Responsibilities

- index.html: Main dashboard page containing the semantic layout and navigation.
- pages/reports.html: Reports page within the dashboard.
- pages/settings.html: Settings page within the dashboard.
- components/data-table.html: Demonstrates an accessible employee data table.
- components/accessible-form.html: Demonstrates an accessible employee registration form.
- components/modal.html: Demonstrates an accessible confirmation modal using the native HTML dialog element.
- README.md: Documents the Task 2 implementation and testing.

3. Technologies Used

The following technologies were used:

1. HTML5: Used to create the structure and content of the web pages.
2. Semantic HTML5: Used to provide meaningful structure and improve accessibility.
3. ARIA: Used to provide accessible names and descriptions for interface components where required.
4. JavaScript: Used to implement modal opening behaviour.
5. Native HTML Form Validation: Used to validate user input through built-in browser functionality.

4. Semantic HTML5 Dashboard

The main dashboard was developed using meaningful HTML5 structural elements instead of relying entirely on generic containers.

Semantic Elements Implemented

HTML Element| Purpose
"<header>"| Defines the introductory header section.
"<nav>"| Contains navigation links.
"<aside>"| Represents supplementary navigation or related content.
"<main>"| Identifies the primary content of the page.
"<section>"| Groups related content.
"<article>"| Represents independent content.
"<footer>"| Defines footer information.

Accessibility Features

- Implemented a skip-to-main-content link.
- Used meaningful HTML5 structural elements.
- Organised page content into logical sections.
- Provided navigation links to other dashboard pages.
- Used semantic elements to improve document structure and assistive technology interpretation.

Importance

Semantic HTML makes the structure of a web page easier to understand for browsers, developers, and assistive technologies.

It also improves maintainability by giving different parts of the page clear purposes.

5. Multi-Page Dashboard Navigation

The project includes three main pages:

A. Dashboard – index.html

The dashboard acts as the main landing page.

It contains:

- Main page structure.
- Header and navigation.
- Supplementary navigation.
- Main content area.
- Links to reports, settings, and accessible component demonstrations.
- Footer section.

B. Reports – pages/reports.html

The Reports page demonstrates a separate page within the dashboard.

It uses semantic HTML elements to organise its content and provides navigation back to the main dashboard.

C. Settings – pages/settings.html

The Settings page demonstrates another dashboard section.

It follows the same semantic page structure and provides navigation between the available pages.

Navigation Testing

The navigation links were tested to verify that users could move between the dashboard, Reports, and Settings pages.

6. Accessible Data Table – components/data-table.html

An employee data table was created to demonstrate accessible table structure.

HTML Elements Used

- "<table>" – Defines the table.
- "<caption>" – Provides a meaningful table description.
- "<thead>" – Groups the table header content.
- "<tbody>" – Groups the main table data.
- "<tr>" – Defines a table row.
- "<th>" – Defines a header cell.
- "<td>" – Defines a data cell.
- "scope="col"" – Identifies column headers.

Accessibility Features

1. Added a meaningful table caption.
2. Used semantic table elements.
3. Used column headers with the "scope="col"" attribute.
4. Organised the table into header and body sections.
5. Provided a structured relationship between headings and their corresponding data.

Importance

Accessible tables help users understand relationships between rows and columns.

Proper table headings and captions make tabular information easier to interpret, including when using assistive technologies.

7. Accessible Employee Registration Form – components/accessible-form.html

An employee registration form was created to demonstrate accessible form design and native browser validation.

Implementation Details

The form includes:

- Properly associated labels and input fields.
- Appropriate input types, including email.
- Required-field validation.
- Autocomplete attributes where appropriate.
- Field grouping using "<fieldset>".
- Group descriptions using "<legend>".

Accessibility Features

1. Every form input has an associated label.
2. Appropriate input types are used for different kinds of information.
3. Mandatory fields use the "required" attribute.
4. Autocomplete attributes help browsers identify relevant input information.
5. Related controls are grouped using fieldsets and legends.
6. Native browser validation provides feedback when required information is missing or invalid.

Form Validation

The form was tested using the browser's built-in HTML validation.

The tests included:

- Submitting the form with required fields left empty.
- Checking required-field validation.
- Entering invalid email information.
- Checking the browser's validation feedback.

Importance

Accessible forms help users understand what information is required and how to provide it.

Proper labels, grouping, and validation improve usability for keyboard users and assistive technology users.

Note: Native form validation checks the input fields. It does not automatically save submitted employee information to a database or display a persistent employee record.

8. Accessible Confirmation Modal – components/modal.html

A confirmation modal was implemented using the native HTML "<dialog>" element.

The modal demonstrates accessible dialog interaction through JavaScript and native browser functionality.

HTML Implementation

The dialog uses:

- "<dialog>" to define the modal.
- "aria-labelledby" to associate the dialog with its title.
- "aria-describedby" to associate the dialog with its description.
- "<form method="dialog">" to provide a native dialog-closing mechanism.
- Buttons for user interaction.

JavaScript Implementation

JavaScript was used to open the modal when the user activates the opening button.

The implementation uses:

- "document.getElementById()" to select the dialog and opening button.
- "addEventListener()" to listen for the button click.
- "showModal()" to display the dialog.

Accessibility Features

1. The dialog has an accessible title and description.
2. The native dialog element provides built-in modal behaviour.
3. Keyboard interaction was tested.
4. Escape closes the modal.
5. Focus moves into the dialog when it opens.
6. Focus returns to the opening button after the dialog closes.

Importance

An accessible modal should allow users to interact with its content without losing track of the page they were using.

Using the native dialog element provides built-in browser behaviour that supports accessible modal interactions.

9. Accessibility Testing and Validation

All six HTML files were checked using the W3C Nu HTML Checker.

HTML Validation Results

File| Validation Result
index.html| Zero HTML validation errors
pages/reports.html| Zero HTML validation errors
pages/settings.html| Zero HTML validation errors
components/data-table.html| Zero HTML validation errors
components/accessible-form.html| Zero HTML validation errors
components/modal.html| Zero HTML validation errors

All six files were successfully validated after correcting the initial modal-related validation issue.

Keyboard Navigation Testing

Keyboard navigation was tested using the Tab key.

The dashboard's interactive navigation elements were checked to verify that they could be reached using the keyboard.

Form Testing

The form was tested to verify:

- Required-field validation.
- Email input validation.
- Browser-generated validation feedback.

Modal Testing

The modal was tested to verify:

- Opening through the trigger button.
- Keyboard focus moving into the dialog.
- Closing through the Escape key.
- Focus returning to the opening button.

Navigation Testing

Navigation links were tested to verify movement between the dashboard, Reports, and Settings pages.

10. Accessibility Principles Applied

The Task 2 implementation applies several important accessibility principles:

- Semantic Structure: Using meaningful HTML elements to organise page content.
- Keyboard Accessibility: Supporting interaction through keyboard navigation.
- Accessible Names and Descriptions: Providing meaningful labels and descriptions for interface components.
- Form Accessibility: Associating labels with input fields and providing native validation.
- Accessible Dialog Interaction: Using the native dialog element and testing keyboard behaviour.
- Maintainable Architecture: Separating pages and component demonstrations into organised files.

11. Conclusion

Task 2 demonstrates the practical implementation of Semantic HTML5 and accessible component architecture.

The project includes a multi-page dashboard, semantic page structure, accessible employee data table, employee registration form, and confirmation modal.

All six HTML files were validated using the W3C Nu HTML Checker, with zero validation errors after corrections.

Keyboard navigation, native form validation, page navigation, and modal interactions were also tested.

This task establishes a foundation for developing more accessible, structured, and maintainable frontend applications in future internship tasks.

Project Status: Task 2 implementation and accessibility testing completed.
