Task 2 – Semantic HTML5 & Accessible Component Architecture

1. Project Overview

Task 2 focuses on developing a structured, multi-page dashboard using Semantic HTML5 and accessible component architecture.

The main objective is to understand and implement semantic page structures, accessible navigation, structured data tables, accessible forms, and interactive dialog components.

This task demonstrates how accessibility principles can be applied during frontend development to create user-friendly, maintainable, and inclusive web applications.

2. Project Structure

The project is organised into separate HTML pages and component demonstrations.

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

File Descriptions

- index.html: Main dashboard page containing the semantic layout and navigation.
- pages/reports.html: Reports page demonstrating a separate dashboard section.
- pages/settings.html: Settings page demonstrating another dashboard section.
- components/data-table.html: Accessible employee data table.
- components/accessible-form.html: Employee registration form with native HTML validation.
- components/modal.html: Confirmation modal implemented using the native HTML dialog element.
- README.md: Documentation describing the Task 2 implementation.

3. Technologies Used

The following technologies were used:

1. HTML5: Defines the structure and content of the web pages.
2. Semantic HTML5: Organises page content using meaningful structural elements.
3. ARIA: Provides accessible names and descriptions for interface components where appropriate.
4. JavaScript: Implements the modal opening interaction.
5. Native HTML Form Validation: Provides built-in browser validation for form inputs.

4. Semantic HTML5 Dashboard

The main dashboard was developed using meaningful HTML5 structural elements.

Semantic Elements Implemented

Element| Purpose
"<header>"| Defines the introductory header section.
"<nav>"| Contains navigation links.
"<aside>"| Represents supplementary content or navigation.
"<main>"| Identifies the primary content of the page.
"<section>"| Groups related content.
"<article>"| Represents independent content.
"<footer>"| Defines footer information.

Accessibility Features

- Implemented a skip-to-main-content link.
- Used meaningful HTML5 structural elements.
- Organised page content into logical sections.
- Added navigation links to different dashboard pages.
- Used semantic elements to make the document structure easier to understand.

Importance of Semantic HTML

Semantic HTML provides meaning to different parts of a web page.

It helps browsers, developers, and assistive technologies understand the purpose and structure of page content.

It also improves code readability and maintainability.

5. Multi-Page Dashboard Navigation

The project contains three main pages.

A. Dashboard – index.html

The dashboard acts as the main landing page.

It contains:

- Header and navigation.
- Supplementary navigation.
- Main content area.
- Logical content sections.
- Links to Reports and Settings.
- Links to the component demonstrations.
- Footer section.

B. Reports – pages/reports.html

The Reports page demonstrates a separate page within the dashboard.

It uses semantic HTML elements to organise its content and provides navigation back to the main dashboard.

C. Settings – pages/settings.html

The Settings page demonstrates another dashboard section.

It follows the semantic page structure and provides navigation between the available pages.

Navigation Testing

The navigation links were tested to verify movement between the Dashboard, Reports, and Settings pages.

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
5. Established meaningful relationships between headings and their corresponding data.

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

Form Validation Testing

The form was tested using the browser's built-in HTML validation.

The tests included:

- Submitting the form with required fields left empty.
- Checking required-field validation.
- Entering invalid email information.
- Checking the browser's validation feedback.

Importance

Accessible forms help users understand what information is required and how to provide it.

Proper labels, grouping, and validation improve usability for keyboard users and assistive technology users.

Note: Native HTML validation checks user input. It does not automatically save submitted employee information to a database.

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

9. HTML Validation and Accessibility Testing

All six HTML files were checked using the W3C Nu HTML Checker.

HTML Validation Results

HTML File| Result
index.html| Zero validation errors
pages/reports.html| Zero validation errors
pages/settings.html| Zero validation errors
components/data-table.html| Zero validation errors
components/accessible-form.html| Zero validation errors
components/modal.html| Zero validation errors

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

Page Navigation Testing

Navigation links were tested to verify movement between the Dashboard, Reports, and Settings pages.

10. Accessibility Principles Applied

The Task 2 implementation applies the following accessibility principles:

A. Semantic Structure

Meaningful HTML elements are used to organise page content.

B. Keyboard Accessibility

Interactive elements are tested through keyboard navigation.

C. Accessible Names and Descriptions

ARIA attributes are used to provide meaningful names and descriptions for the dialog.

D. Form Accessibility

Labels, appropriate input types, required attributes, fieldsets, and legends are used to improve form accessibility.

E. Accessible Dialog Interaction

The native dialog element is used with keyboard interaction testing.

F. Maintainable Architecture

Pages and component demonstrations are separated into organised directories.

11. Conclusion

Task 2 demonstrates the practical implementation of Semantic HTML5 and accessible component architecture.

The project includes a multi-page dashboard, semantic page structure, accessible employee data table, employee registration form, and confirmation modal.

All six HTML files were validated using the W3C Nu HTML Checker, with zero validation errors after corrections.

Keyboard navigation, native form validation, page navigation, and modal interactions were also tested.

This task establishes a foundation for developing more accessible, structured, and maintainable frontend applications in future internship tasks.

Project Status: Task 2 implementation and accessibility testing completed.

---

Internship: RabTech Academy – Full Stack Web Development Internship

GitHub Repository: https://github.com/pri709/rabtech-fullstack-internship
