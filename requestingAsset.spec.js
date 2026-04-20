import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://demo.ingenx:8080/login');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('user_pro@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter your Password' }).fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('a').filter({ hasText: 'Asset' }).click();
  await page.getByText('New Request').nth(3).click();
  await page.getByRole('radio', { name: 'Self' }).check();
  await page.locator('.mat-mdc-select-arrow > svg').first().click();
  await page.getByText('Hardware').click();
  await page.locator('.mat-mdc-select-arrow.ng-tns-c1771602899-7 > svg').click();
  await page.getByText('Hard Disk').click();
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Remarks' }).fill('T');
  await page.getByRole('textbox', { name: 'Remarks' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Remarks' }).fill('Testing with automated script.');
  await page.getByRole('button', { name: 'Submit →' }).click();
  // await page.getByRole('cell', { name: 'AR_0317' }).click();
  // await page.getByRole('button').filter({ hasText: /^$/ }).click();
  // await page.getByText('US', { exact: true }).click();
  // await page.getByText('Logout').click();
});