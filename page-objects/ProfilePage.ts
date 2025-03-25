import { Page, expect } from '@playwright/test';

/**
 * Represents the ProfilePage object containing methods to interact with the profile page.
 */
export class ProfilePage {
    /**
     * Initializes a new instance of the ProfilePage class.
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(private page: Page) { }

    /**
     * Navigates to the user's profile page by interacting with the UI elements.
     * Ensures that the profile page is loaded by verifying the presence of specific elements.
     * @throws Will throw an error if the expected elements are not visible or clickable.
     */
    async navigateToProfile(): Promise<void> {
        await this.page.getByRole('img', { name: 'naukri user profile img' }).click();
        await expect(this.page.getByRole('link', { name: 'View & Update Profile' })).toBeVisible();
        await this.page.getByRole('link', { name: 'View & Update Profile' }).click();
        await this.page.screenshot({ path: 'screenshots/profilepage.png' });
        await expect(this.page.locator('#root')).toContainText('Quick links');
        await expect(this.page.locator('#root')).toContainText('Key skills');
    }

    /**
     * Adds a key skill to the user's profile.
     * Interacts with the "Key skills" section, types the skill character by character,
     * waits for the suggestion dropdown, and selects the skill from the suggestions.
     * @param skill - The skill to be added to the user's profile.
     * @throws Will throw an error if the skill cannot be added or the expected elements are not visible.
     */
    async addKeySkill(skill: string): Promise<void> {
        await this.page.getByRole('listitem').filter({ hasText: 'Key skills' }).locator('span').click();
        await expect(this.page.locator('#lazyKeySkills').getByText('Key skills')).toBeVisible();
        await this.page.locator('#lazyKeySkills').getByText('editOneTheme').click();
        // await this.page.locator('form[name="keySkillsForm"]').getByRole('textbox', { name: 'Add skills' }).fill(skill);
        // await this.page.locator('#sugDrp_keySkillSugg').getByText(skill).click({ timeout: 10000 });
        const skillInput = this.page.getByRole('textbox', { name: 'Add skills' });

        // Click on the input field
        await skillInput.click();

        // Type one character at a time using `keyboard.press()`
        for (const char of skill) {
            await this.page.keyboard.press(char);
            await this.page.waitForTimeout(100); // Add a small delay for realism
        }

        // Wait for the suggestion dropdown to be visible
        await this.page.locator('#sugDrp_keySkillSugg').waitFor({ state: 'visible', timeout: 10000 });

        // Click on the suggested skill
        await this.page.locator('#sugDrp_keySkillSugg').getByText(skill).click();

        await this.page.getByRole('button', { name: 'Save' }).click();
    }
}