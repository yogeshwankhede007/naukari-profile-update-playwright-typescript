import { Page, expect } from '@playwright/test';

/**
 * Represents the LoginPage object for interacting with the login page of the Naukri website.
 */
export class LoginPage {
    /**
     * Initializes a new instance of the LoginPage class.
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(private page: Page) {}

    /**
     * Navigates to the Naukri website's login page.
     * - Visits the Naukri homepage.
     * - Waits for the page to reach a network idle state.
     * - Verifies that the Naukri logo is visible.
     * - Clicks on the "Login" link.
     * - Ensures the login button is visible on the login page.
     */
    async navigateToLogin(): Promise<void>{
        await this.page.goto('https://www.naukri.com/');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle'); 
        await this.page.setViewportSize({ width: 1280, height: 720 });
        await this.page.screenshot({ path: 'screenshots/loginpage.png' });
        await expect(this.page.getByRole('link', { name: 'Naukri Logo' }).first()).toBeVisible({ timeout: 10000 });
        await this.page.getByRole('link', { name: 'Login', exact: true }).click();
        await expect(this.page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
    }

    /**
     * Logs in to the Naukri website using the provided credentials.
     * - Fills in the email and password fields.
     * - Clicks the "Login" button.
     * - Verifies that the user's name ("Yogesh Wankhede") is visible after login.
     * @param email - The email address to use for login.
     * @param password - The password to use for login.
     */
    async login(email: string, password: string): Promise<void>{
        await this.page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login', exact: true }).click();
        await expect(this.page.getByText('Yogesh Wankhede')).toBeVisible();
    }
}
