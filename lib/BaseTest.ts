import { test as baseTest } from '@playwright/test';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RecoverPasswordPage } from '../pages/recoverPasswordPage';
import { LandingPage } from '../pages/landingPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    recover: RecoverPasswordPage;
    landingPage: LandingPage;
}>({
    loginPage: async ({page, context}, use) => {
        await use(new LoginPage(page));
    },
    recover: async ({page, context}, use) => {
        await use(new RecoverPasswordPage(page));
    },
    landingPage: async ({page, context}, use) => {
        await use(new LandingPage(page));
    }
})

export default test;