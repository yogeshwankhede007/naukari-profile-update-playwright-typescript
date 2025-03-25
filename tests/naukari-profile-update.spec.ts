import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await expect(page.getByRole('link', { name: 'Naukri Logo' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).press('ControlOrMeta+v');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('ControlOrMeta+v');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page.getByText('Yogesh Wankhede')).toBeVisible();
  await page.getByRole('img', { name: 'naukri user profile img' }).click();
  await expect(page.getByRole('link', { name: 'View & Update Profile' })).toBeVisible();
  await page.getByRole('link', { name: 'View & Update Profile' }).click();
  await expect(page.locator('#root')).toContainText('Quick links');
  await expect(page.locator('#root')).toContainText('Key skills');
  await page.getByRole('listitem').filter({ hasText: 'Key skills' }).locator('span').click();
  await expect(page.locator('#lazyKeySkills').getByText('Key skills')).toBeVisible();
  await page.locator('#lazyKeySkills').getByText('editOneTheme').click();
  await page.locator('form[name="keySkillsForm"]').getByTitle('Playwright').getByRole('link').click();
  await page.getByRole('textbox', { name: 'Add skills' }).click();
  await page.getByRole('textbox', { name: 'Add skills' }).fill('Playwright');
  await page.locator('#sugDrp_keySkillSugg').getByText('Playwright').click();
  await page.getByRole('button', { name: 'Save' }).click();
});