# Jones Automation Test (Playwright)

This project contains an automated test for submitting the contact form on `https://test.netlify.app/`.

##  Features
- **Page Status Check**: Validates that the website loads with HTTP status 200 before continuing.
- **Form Filling**: Automatically fills out all mandatory input fields and options.
- **Timestamped Screenshot**: Captures a screenshot of the filled form prior to submission.
- **Error Handling**: Uses a `try...catch` block to verify the "Thank You" message.
##  Setup Instructions

### 1. Install Dependencies
Run the following command in your terminal to install required packages:
```bash
npm install
```

### 2. Install Playwright Browsers
Install the necessary browser drivers:
```bash
npx playwright install
```

##  Running the Test

Run the test in headless mode:
```bash
npx playwright test
```

Run the test in headed mode (visible browser):
```bash
npx playwright test --headed
```

##  Author
**Noam Hayun**