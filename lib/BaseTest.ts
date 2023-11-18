import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RecoverPasswordPage } from '../pages/recoverPasswordPage';
import { LandingPage } from '../pages/landingPage';
import { GeneratorMainPage } from '../pages/generatorMainPage';

const test = baseTest.extend<{
    login: LoginPage;
    recover: RecoverPasswordPage;
    landing: LandingPage;
    generatorMain: GeneratorMainPage;
}>({
    login: async ({page, context}, use) => {
        await use(new LoginPage(page));
    },
    recover: async ({page, context}, use) => {
        await use(new RecoverPasswordPage(page));
    },
    landing: async ({page, context}, use) => {
        await use(new LandingPage(page));
    },
    generatorMain: async ({page, context}, use) => {
        await use(new GeneratorMainPage(page));
    }
})

export default test;