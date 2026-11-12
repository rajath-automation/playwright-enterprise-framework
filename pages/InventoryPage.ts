import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addItemToCartBySlug(itemSlug: string) {
    await this.page.locator(`[data-test="add-to-cart-${itemSlug}"]`).click();
  }

  async assertCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }
}