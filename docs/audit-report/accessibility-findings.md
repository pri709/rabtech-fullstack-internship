Accessibility Audit Findings

1. Audit Overview

- Website: Sri Krishna College of Engineering and Technology (SKCET)
- URL: https://skcet.ac.in/
- Audit type: Desktop accessibility audit
- Tool: Google Chrome Lighthouse
- Lighthouse version: 13.5.0
- Audit date: 18 November 2026
- Accessibility score: 70/100

2. Identified Accessibility Issues

WEB-001: Button Without an Accessible Name

- Page/component: SKCET homepage
- Affected element: "button.btn.btn-primary"
- WCAG reference: 4.1.2 – Name, Role, Value
- Evidence: Lighthouse identified a button without an accessible name.
- Severity: Medium (provisional)
- User impact: Screen reader users may not understand the button's purpose.
- Recommended fix: Provide descriptive visible button text or an appropriate accessible name.
- Owner: Student
- Status: Open

WEB-002: Image Missing Alternative Text

- Page/component: SKCET homepage
- Affected element: "img.batch_image"
- WCAG reference: 1.1.1 – Non-text Content
- Evidence: Lighthouse identified an image element without an "alt" attribute.
- Severity: Medium (provisional)
- User impact: Screen reader users may miss important information conveyed by the image.
- Recommended fix: Add concise descriptive alternative text to informative images. Use "alt=""" for decorative images.
- Owner: Student
- Status: Open

WEB-003: Links Without Discernible Names

- Page/component: SKCET homepage
- Affected elements: Five anchor ("a") elements
- WCAG reference: 2.4.4 – Link Purpose (In Context)
- Evidence: Lighthouse identified five links without discernible names.
- Severity: Medium (provisional)
- User impact: Screen reader users may not understand the purpose of these links.
- Recommended fix: Give each link a descriptive accessible name using visible text or an appropriate accessible label.
- Owner: Student
- Status: Open

WEB-004: Dialog Without an Accessible Name

- Page/component: SKCET homepage popup
- Affected element: "div#pum-6187.pum.pum-overlay"
- WCAG reference: 4.1.2 – Name, Role, Value
- Evidence: Lighthouse identified a dialog element without an accessible name.
- Severity: Medium (provisional)
- User impact: Screen reader users may not understand the purpose of the popup.
- Recommended fix: Give the dialog an accessible name using "aria-labelledby" or "aria-label".
- Owner: Student
- Status: Open

WEB-005: Insufficient Colour Contrast

- Page/component: SKCET homepage
- Affected elements: Headings, paragraphs, event sections, links and other text elements.
- WCAG reference: 1.4.3 – Contrast (Minimum)
- Evidence: Lighthouse identified multiple elements with insufficient foreground/background contrast.
- Severity: Medium (provisional)
- User impact: Users with low vision or colour-vision deficiencies may struggle to read the content.
- Recommended fix: Adjust foreground and background colours to meet the applicable WCAG contrast requirements.
- Owner: Student
- Status: Open

3. Additional Lighthouse Observations

Lighthouse also reported the following accessibility observations:

- Links rely on colour to distinguish themselves.
- Some touch targets have insufficient size or spacing.
- Heading elements do not always follow a sequential descending order.
- Some accessibility checks require manual verification.

These observations should be reviewed separately before being classified as confirmed issues.

4. Audit Evidence

Screenshots documenting the Lighthouse findings are stored in the "lighthouse-screenshots" folder.

The detailed issue-tracking workbook is:

"accessibility-audit.xlsx"

Keyboard navigation observations are recorded separately in:

"keyboard-navigation.xlsx"

Multiple screenshots were captured for WEB-005 because several page elements were affected.

5. Conclusion

The SKCET homepage received a Lighthouse accessibility score of 70/100.

Five Lighthouse findings were documented, covering accessible names for buttons, alternative text for images, discernible link names, dialog naming and colour contrast.

This audit establishes a baseline for identifying and addressing accessibility issues in the subsequent development tasks.

Note: This document records audit findings. The issues have not yet been fixed or independently re-tested.