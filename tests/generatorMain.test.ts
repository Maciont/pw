import test from '../lib/BaseTest';
import { expect } from '@playwright/test';

test.describe('Check elements', () => {
    test.beforeEach('Test setup', async ({generatorMain}) => {
        await generatorMain.navigateToMainGeneratorPage();
    })
    
    test('Check if number of categories is 12', async ({generatorMain}) => {
        const buttonsCount = await generatorMain.countCategoryButtons();
        await expect(buttonsCount).toBe(12);
    }
    )
    
    test('Check if category names match the list', async ({generatorMain}) => {
        const expectedCategoryNames =['Website URL', 'vCard', 'Business Page', 
        'App', 'Video', 'Menu', 'PDF', 'Social Media', 'Facebook', 'Simple Text',"Wi-Fi", 'Images'];
        const actualCategoryNames = await generatorMain.getCategoryNames();
        console.log('Actual categories:', actualCategoryNames);
        expect(actualCategoryNames).toEqual(expectedCategoryNames);
    }
    )
});