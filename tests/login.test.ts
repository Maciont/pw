import test from '../lib/BaseTest';
import {expect} from "@playwright/test";


test.describe('email validation', () => {
    test('error message is displayed when email is not valid', async ({login}) => {
        await login.navigateToLoginPage();
        await login.emailField.fill('wr0ng t3st d4ta');
        await login.loginHeading.click();
        await expect(login.emailWarning).toBeVisible();

    }
)

    test('error message is NOT displayed when email is valid', async ({login}) => {
    await login.navigateToLoginPage();
    await login.emailField.fill('proper@email.com');
    await login.loginHeading.click();
    await expect(login.emailWarning).not.toBeVisible();

}
)

}
)