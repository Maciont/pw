import test from '../lib/BaseTest';
import { expect } from '@playwright/test';

test.describe('Check elements', () => {
    test.beforeEach('Test setup', async ({generatorMain}) => {
        await generatorMain.navigateToMainGeneratorPage();
    })
    
    test('Check if number of categories is 12', async ({generatorMain}) => {
        await expect(generatorMain.imagesButton).toBeVisible();
        const buttonsCount = await generatorMain.countCategoryButtons();
        const catName = await generatorMain.getCategoryName();
        await expect(buttonsCount).toBe(12);
    }
    
    )

});