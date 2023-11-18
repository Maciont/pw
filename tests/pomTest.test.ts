import {expect, test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";
import { url } from "inspector";
import { LoginPage } from "../pages/loginPage";
import { RecoverPasswordPage } from "../pages/recoverPasswordPage";

test("click test", async ({page}) => {
    const landing = new LandingPage(page);
    const login = new LoginPage(page);
    await landing.goto();
    await landing.clickLogInButton();
    await login.emailField.fill('xxx yyy zzz');
    await login.passwordField.fill('zzz yyy xxx');
    await page.getByText('You have entered an invalid email address. Please try again.').isVisible();
    await page.getByText('Your password must contain at least 8 characters.').isVisible();

}
)

test("go to create", async ({page}) => {
    const landing = new LandingPage(page);
    await landing.goto();
    await landing.clickCreateCode();
    await expect(page).toHaveURL('https://myqrcode.com/generator');
})

test("go to login",async ({page}) => {
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
})

test("go to password recovery", async ({page}) => {
    const recovery = new RecoverPasswordPage(page);
    await recovery.navigateToPasswordRecoveryPopup();
   
    
})