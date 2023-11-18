import test from '../lib/BaseTest';
import {expect} from "@playwright/test";


test.describe('email validation', () => {
    test.beforeEach('Test setup', async ({login}) => {
        await login.navigateToLoginPage();
    })

    test('error message is displayed when email is not valid', async ({login}) => {
        await login.emailField.fill('wr0ng t3st d4ta');
        await login.loginHeading.click();
        await expect(login.emailWarning).toBeVisible();

    }
)

    test('error message is NOT displayed when email is valid', async ({login}) => {
    await login.emailField.fill('proper@email.com');
    await login.loginHeading.click();
    await expect(login.emailWarning).not.toBeVisible();

}
)
}
)
test.describe('password validation', () => {
    test.beforeEach('Test setup', async ({login}) => {
        await login.navigateToLoginPage();
    })


    test('error message is displayed when password is too short', async ({login}) => {
        await login.passwordField.fill('1234');
        await expect(login.passTooShortWarning).toBeVisible();
    })

    test('error message is displayed when password doesnt have numbers', async ({login}) => {
        await login.passwordField.fill('asdfasdf');
        await expect(login.passShouldHaveNumbersAndLettersWarning).toBeVisible();
    }
)
    test('error message is displayed when password doesnt have letters', async ({login}) => {
        await login.passwordField.fill('12341234');
        await expect(login.passShouldHaveNumbersAndLettersWarning).toBeVisible();
    })
})