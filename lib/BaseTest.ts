import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RecoverPasswordPage } from '../pages/recoverPasswordPage';
import { LandingPage } from '../pages/landingPage';

const test = baseTest.extend<{
    login: LoginPage;
    recover: RecoverPasswordPage;
    landing: LandingPage;
}>({
    login: async ({page, context}, use) => {
        await use(new LoginPage(page));
    },
    recover: async ({page, context}, use) => {
        await use(new RecoverPasswordPage(page));
    },
    landing: async ({page, context}, use) => {
        await use(new LandingPage(page));
    }
})

export default test;