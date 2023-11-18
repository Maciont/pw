import { expect, type Locator, type Page} from "@playwright/test";
export class RecoverPasswordPage {

    readonly page: Page
    readonly recoverHeader: Locator;
    readonly recoverText: Locator;
    readonly recoverEmailField: Locator;
    readonly recoverSendResetLink: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly recoveryEmailWarning: Locator;
    readonly recoveryWrongEmailToast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recoverHeader = page.locator('h1', { hasText: 'Recover password'});
        this.recoverText = page.locator('p', { hasText: 'Enter your email and we will send you a link to reset your password'});
        this.recoverEmailField = page.locator('#email');
        this.recoverSendResetLink = page.locator('button', { hasText: 'Send reset link'});
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('a', { hasText: 'Log In' });
        this.recoveryEmailWarning = page.locator('p', { hasText: 'You have entered an invalid email address. Please try again.'});
        this.recoveryWrongEmailToast = page.locator('[id="__next"] div').filter({ hasText: 'The email address you entered' }).nth(2);
    }

    async navigateToPasswordRecoveryPopup() {
        await this.page.goto('https://myqrcode.com');
        await this.loginButton.click();
        await expect(this.page).toHaveURL('https://myqrcode.com/login');
        await expect(this.emailField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await this.page.getByText('Forgot your password?').click();
        await expect(this.recoverHeader).toBeVisible();
        await expect(this.recoverText).toBeVisible();
        await expect(this.recoverSendResetLink).toBeVisible();
        await expect(this.recoverSendResetLink).toBeEnabled();
        await expect(this.recoverEmailField).toBeVisible();
    }
}