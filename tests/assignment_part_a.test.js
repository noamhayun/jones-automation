import { test, expect } from '@playwright/test';

/**
 * @description Automated end-to-end test for submitting a contact form on Netlify test site.
 * Verifies form input filling, screenshot capture, submission, and confirmation message visibility.
 */

test('Jones automation test', async ({ page }) => {
  // Navigate to the main landing page
  await page.goto('https://test.netlify.app/');

  // Fill in required contact details
  await page.getByPlaceholder('Your full name').fill('Noam');
  await page.getByPlaceholder('Your email address').fill('Noam.hayun223@gmail.com');
  await page.getByPlaceholder('Your phone number').fill('0549982631');
  await page.getByPlaceholder('Company name').fill('Jones');
  await page.getByPlaceholder('example.com').fill('https://www.linkedin.com/company/jones1/posts/?feedView=all');
 
 // Select company size option from the dropdown
  await page.locator('#employees').selectOption('51-500')

  // Capture a screenshot of the filled form prior to submission
  await page.screenshot({ path: 'screenshot.png' });

  // Submit the form
  await page.getByRole('button', {name: 'Request a call back'}).click()

  // Verify that the success confirmation message is displayed
  await expect(page.getByText('Thank you')).toBeVisible();
  
  // Log success message to the console
  console.log('Successfully reached the thank you page!');
});
