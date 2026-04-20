import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://demo.ingenx:8080/login');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('user_pro@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter your Password' }).fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Approvals').click();
  await page.getByText('Asset').nth(2).click();
  await page.getByText('Pending').nth(2).click();
  await page.getByRole('textbox', { name: '.form-control-lg example' }).click();
  await page.getByRole('textbox', { name: '.form-control-lg example' }).fill('approved');
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByText('Asset Approved').click();
});