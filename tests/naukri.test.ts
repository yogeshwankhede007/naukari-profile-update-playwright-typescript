import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../page-objects/LoginPage';
import { ProfilePage } from '../page-objects/ProfilePage';

dotenv.config();

test.describe('Naukri Profile Tests', () => {

  test('@smoke @login Naukri Login and Profile Update Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    /**
     * Represents an instance of the ProfilePage class, initialized with the provided Playwright page object.
     * This object is used to interact with and perform actions on the profile page within the test suite.
     */
    const profilePage = new ProfilePage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(process.env.NAUKRI_EMAIL as string, process.env.NAUKRI_PASSWORD as string);
    await profilePage.navigateToProfile();
    await profilePage.addKeySkill('Playwright');
    await page.close();
  });
});