import test from '../lib/BaseTest';
import {expect} from "@playwright/test";

test("click test", async ({landing, login, page}) => {
    await landing.goto();
    await landing.clickLogInButton();
    await login.emailField.fill('xxx yyy zzz');
    await login.passwordField.fill('zzz yyy xxx');
    await page.getByText('You have entered an invalid email address. Please try again.').isVisible();
    await page.getByText('Your password must contain at least 8 characters.').isVisible();

}
)

test("go to create", async ({landing, page}) => {
    await landing.goto();
    await landing.clickCreateCode();
    await expect(page).toHaveURL('https://myqrcode.com/generator');
})

test("go to login",async ({login}) => {
    await login.navigateToLoginPage();
})

test("go to password recovery", async ({recover}) => {
    await recover.navigateToPasswordRecoveryPopup();
   
    
})