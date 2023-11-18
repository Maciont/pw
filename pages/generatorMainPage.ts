import { expect, type Locator, type Page } from "@playwright/test";
export class GeneratorMainPage {

    readonly page: Page
    readonly helpButton: Locator;
    readonly websiteUrlButton: Locator;
    readonly businessPageButton: Locator;
    readonly videoButton: Locator;
    readonly pdfButton: Locator;
    readonly facebookButton: Locator;
    readonly wifiButton: Locator;
    readonly vcardButton: Locator;
    readonly appButton: Locator;
    readonly menuButton: Locator;
    readonly socialmediaButton: Locator;
    readonly simpletextButton: Locator;
    readonly imagesButton: Locator;
    readonly createCodeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createCodeButton = page.locator('a', { hasText: 'Create my QR code'});
        this.helpButton = page.getByRole('button', { name: 'Help' });
        this.websiteUrlButton = page.locator('p', { hasText: 'Business Page'});
        this.videoButton = page.locator('p', { hasText: 'Video'});
        this.pdfButton = page.locator('p', { hasText: 'PDF'});
        this.facebookButton = page.locator('p', { hasText: 'Facebook'});
        this.wifiButton = page.locator('p', { hasText: 'Wi-Fi'});
        this.vcardButton = page.locator('p', { hasText: 'vCard'});
        this.appButton = page.locator('p', { hasText: 'App'});
        this.menuButton = page.locator('p', { hasText: 'Menu'});
        this.socialmediaButton = page.locator('p', { hasText: 'Social Media'});
        this.simpletextButton = page.locator('p', { hasText: 'Simple Text'});
        this.imagesButton = page.getByRole('button', { name: 'Images Display an image' });
    }

    async navigateToMainGeneratorPage() {
        await this.page.goto('https://myqrcode.com');
        await this.createCodeButton.click();
        await expect(this.page).toHaveURL('https://myqrcode.com/generator');
        await expect(this.helpButton).toBeVisible();
    }

    async countCategoryButtons() {
        const count = await this.page.getByTestId(`qr-code-types-list`).locator(`[type="button"]`).count();
        return count;
    }

    async getCategoryNames() {
      const numOfElements = await this.countCategoryButtons();
      for(let i = 0; i < numOfElements; i++) {
      const categoryNames = await this.page.locator('[data-testid="qr-code-types-list"] p.template-selector__item-container_caption-title span').allTextContents();
      console.log(categoryNames);
      return categoryNames
      }
      
      
      }
}