import { test, expect } from '@playwright/test';


test('Jones automation test', async ({ page }) => {
  await page.goto('https://test.netlify.app/');
  await page.getByPlaceholder('Your full name').fill('Noam');
  await page.getByPlaceholder('Your email address').fill('Noam.hayun223@gmail.com');
  await page.getByPlaceholder('Your phone number').fill('0549982631');
  await page.getByPlaceholder('Company name').fill('Jones');
  await page.getByPlaceholder('example.com').fill('https://www.linkedin.com/company/jones1/posts/?feedView=all');
  await page.locator('#employees').selectOption('51-500')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', {name: 'Request a call back'}).click()
  await expect(page.getByText('Thank you')).toBeVisible();
  console.log('Successfully reached the thank you page!');
});
