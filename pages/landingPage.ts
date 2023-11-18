import { type Locator, type Page } from "@playwright/test";
export class LandingPage {

    readonly page: Page
    readonly loginButton: Locator;
    readonly createCodeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('a', { hasText: 'Log In' });
        this.createCodeButton = page.locator('a', { hasText: 'Create my QR code'});
    }

    async goto() {
        await this.page.goto('https://myqrcode.com');
      }
async clickLogInButton() {
    await this.loginButton.click();
}

async clickCreateCode() {
    await this.createCodeButton.click();
}

}