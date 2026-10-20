

import { test, expect } from '@playwright/test';

/**
 * @description Automated end-to-end test for submitting a contact form on Netlify test site.
 * Verifies form input filling, screenshot capture, submission, and confirmation message visibility.
 */

test('Submit contact form successfully', async ({ page }) => {
  // Navigate to the main landing page
  try {
    const response = await page.goto('https://test.netlify.app/', { timeout: 10000 });
    if (response?.status() !== 200) {
      throw new Error(`Page returned status code ${response?.status()}`);
    }
  } catch (error) {
    throw new Error(`Failed to navigate to website: ${error.message}`);
  }

  // Fill in required contact details
  await page.getByPlaceholder('Your full name').fill('Noam');
  await page.getByPlaceholder('Your email address').fill('Noam.hayun223@gmail.com');
  await page.getByPlaceholder('Your phone number').fill('0549982631');
  await page.getByPlaceholder('Company name').fill('Jones');
  await page.getByPlaceholder('example.com').fill('https://www.linkedin.com/company/jones1/posts/?feedView=all');

  // Select company size option from the dropdown
  await page.locator('#employees').selectOption('51-500');

 // Get current date and format as YYYY-MM-DD
  const now = new Date();
  const date = now.toISOString().split('T')[0]; 

  // Format local time as HH-mm-ss
  const time = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
  const timestamp = `${date}_${time}`;

  // Capture full page screenshot with timestamped filename    
  await page.screenshot({ path: `form-filled-${timestamp}.png`, fullPage: true });

  // Submit Form
  await page.getByRole('button', { name: 'Request a call back' }).click();

  // Verify that the success confirmation message is displayed
  try {
    await expect(page.getByText('Thank you')).toBeVisible({ timeout: 5000 });
    console.log('Successfully reached the thank you page!');
  } catch (error) {
  
    throw new Error('Test Failed: Form was submitted but "Thank you" confirmation page/message was not displayed.');
  }
});