import {expect, test} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { describe } from "node:test";

test.describe('email validation', () => {
    test('error message is displayed when email is not valid', async ({page}) => {
        const login = new LoginPage(page);
        await login.navigateToLoginPage();
        await login.emailField.fill('wr0ng t3st d4ta');
        await login.loginHeading.click();
        await expect(login.emailWarning).toBeVisible;

    }
)

test('error message is NOT displayed when email is valid', async ({page}) => {
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.emailField.fill('proper@email.com');
    await login.loginHeading.click();
    await expect(login.emailWarning).not.toBeVisible;

}
)

}
)