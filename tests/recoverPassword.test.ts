// import {expect, test} from "@playwright/test";
import test from '../lib/BaseTest';
import expect from '../lib/BaseTest';
import { beforeEach } from "node:test";



test.describe('Recovery email validation', () => {
    test.beforeEach('Test setup', async ({recover}) => {
        // const recover = new RecoverPasswordPage(page);
        await recover.navigateToPasswordRecoveryPopup();
    })


    test('error message is displayed when recovery email is not valid', async ({recover}) => {
        // const recover = new RecoverPasswordPage(page);
        await recover.emailField.fill('Im not an email');
        await recover.recoverHeader.click();
        await expect(recover.recoveryEmailWarning).toBeVisible;
        await recover.emailField.click(); //just to see warning message in test runner
}
)
    test('error message is NOT displayed when recovery email is valid', async ({recover}) => {
        // const recover = new RecoverPasswordPage(page);
        await recover.emailField.fill('abx@xyz.com');
        await recover.recoverHeader.click();
        await expect(recover.recoveryEmailWarning).not.toBeVisible;
        await recover.emailField.click();
    })
}
)