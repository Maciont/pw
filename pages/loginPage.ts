import { expect, type Locator, type Page } from "@playwright/test";
export class LoginPage {

    readonly page: Page
    readonly loginButton: Locator;
    readonly createCodeButton: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly emailWarning: Locator;
    readonly loginHeading: Locator;
    readonly forgotPasswordLink: Locator;
    readonly passTooShortWarning: Locator;
    readonly passShouldHaveNumbersAndLettersWarning: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('a', { hasText: 'Log In' });
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.emailWarning = page.locator('p', { hasText: 'You have entered an invalid email address. Please try again.'});
        this.loginHeading = page.locator('h1', { hasText: 'Log In'});
        this.forgotPasswordLink = page.locator('a', { hasText: 'Forgot your password?'});
        this.passTooShortWarning = page.locator('p', { hasText: 'Your password must contain at least 8 characters.'});
        this.passShouldHaveNumbersAndLettersWarning = page.locator('p', { hasText: 'Your password must contain a combination of both letters and numbers.'});
    }

    async navigateToLoginPage() {
        await this.page.goto('https://myqrcode.com');
        await this.loginButton.click();
        await expect(this.page).toHaveURL('https://myqrcode.com/login');
        await expect(this.emailField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
      }
}