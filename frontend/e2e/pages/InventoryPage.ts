import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  readonly backpackAddButton: Locator;
  readonly bikeLightAddButton: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly inventoryTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackAddButton = page.locator(
      "[data-test='add-to-cart-sauce-labs-backpack']"
    );

    this.bikeLightAddButton = page.locator(
      "[data-test='add-to-cart-sauce-labs-bike-light']"
    );

    this.cartBadge = page.locator(
      "[data-test='shopping-cart-badge']"
    );

    this.cartLink = page.locator(
      "[data-test='shopping-cart-link']"
    );

    this.inventoryTitle = page.locator(
      "[data-test='title']"
    );
  }

  async addBackpack() {
    await this.backpackAddButton.click();
  }

  async addBikeLight() {
    await this.bikeLightAddButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async isInventoryPage() {
    return await this.inventoryTitle.isVisible();
  }
}