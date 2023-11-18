import test from '../lib/BaseTest';
import { expect } from '@playwright/test';
// import { beforeEach } from 'node:test';



test.describe('Recovery email validation', () => {
    test.beforeEach('Test setup', async ({recover}) => {
        await recover.navigateToPasswordRecoveryPopup();
    })

    test('error message is displayed when recovery email is not valid', async ({recover}) => {
        await recover.emailField.fill('Im not an email');
        await recover.recoverHeader.click();
        await expect(recover.recoveryEmailWarning).toBeVisible();
        await recover.emailField.click(); //just to see warning message in test runner
}
)
    test('error message is NOT displayed when recovery email is valid', async ({recover}) => {
        await recover.emailField.fill('abx@xyz.com');
        await recover.recoverHeader.click();
        await expect(recover.recoveryEmailWarning).not.toBeVisible();
        await recover.emailField.click();
    })

    
}

)

test.describe('Error toast message', () =>{
    test.beforeEach('Test setup', async ({recover}) => {
    await recover.navigateToPasswordRecoveryPopup();
})

    test('Check if toast message appears when email is not found in DB', async ({recover}) => {
        // const toast = await recover.page.getByRole('alert');
        await recover.emailField.fill('abx@xyz.com');
        await recover.recoverSendResetLink.click();
        await expect(recover.recoveryWrongEmailToast).toBeVisible();
        await expect(recover.recoveryWrongEmailToast).toHaveText('The email address you entered was not found. To reset your password, please enter the email address you used to create your account.');
}
)
}
)