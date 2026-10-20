Jones Automation Test (Playwright)

This project contains an automated End-to-End (E2E) test for submitting the contact form on https://test.netlify.app/.

Features

Page Status Check: Validates that the website loads with HTTP status 200 before continuing.

Form Filling: Automatically fills out all mandatory input fields and options.

Timestamped Screenshot: Captures a screenshot of the filled form prior to submission.

Error Handling: Uses a try...catch block to verify the "Thank You" message and captures a failure screenshot if needed.

Setup Instructions

1. Install Dependencies

Run the following command in your terminal to install required packages:

npm install


2. Install Playwright Browsers

Install the necessary browser drivers:

npx playwright install


Running the Test

Run the test in headless mode:

npx playwright test


Run the test in headed mode (visible browser):

npx playwright test --headed


Author

Noam Hayun