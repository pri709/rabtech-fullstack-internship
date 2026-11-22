Accessibility Baseline & Repository Architecture Audit

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

Issue ID| Accessibility Issue| WCAG Reference
WEB-001| Button without accessible name| 4.1.2
WEB-002| Image missing alt attribute| 1.1.1
WEB-003| Links without discernible names| 2.4.4
WEB-004| Dialog without accessible name| 4.1.2
WEB-005| Insufficient colour contrast| 1.4.3

Detailed evidence, severity, user impact, and recommended fixes are recorded in "accessibility-audit.xlsx".

5. Keyboard Navigation Testing

Manual keyboard-only testing was performed using the Tab, Shift + Tab, Enter, and Escape keys.

Observations

- Tab navigation moved through interactive elements.
- Shift + Tab moved backwards through the elements.
- Enter successfully activated a navigation link.
- The popup was accessible through the keyboard during testing.
- Escape was tested for popup dismissal.
- A visible focus indicator was not observed on the tested elements.

These observations are limited to the elements and interactions tested during the audit.

Detailed results are available in "keyboard-navigation.xlsx".

6. Evidence and Screenshots

The "lighthouse-screenshots/" directory contains screenshots captured during the Lighthouse accessibility audit.

Multiple screenshots are retained for WEB-005 because Lighthouse identified several affected elements.

7. Repository Architecture

The planned monorepo structure is:

accessibility-audit-project/
│
├── client/
│   └── README.md
│
├── server/
│   └── README.md
│
├── docs/
│   ├── audit-report.md
│   ├── architecture.md
│   └── screenshots/
│
├── tests/
│   └── README.md
│
└── README.md

Project boundaries

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