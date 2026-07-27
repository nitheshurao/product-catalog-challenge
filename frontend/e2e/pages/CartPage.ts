import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  readonly backpackItem: Locator;
  readonly bikeLightItem: Locator;
  readonly removeBackpackButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackItem = page.locator("text=Sauce Labs Backpack");

    this.bikeLightItem = page.locator("text=Sauce Labs Bike Light");

    this.removeBackpackButton = page.locator(
      "[data-test='remove-sauce-labs-backpack']"
    );

    this.continueShoppingButton = page.locator(
      "[data-test='continue-shopping']"
    );

    this.checkoutButton = page.locator(
      "[data-test='checkout']"
    );
  }

  async removeBackpack() {
    await this.removeBackpackButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async isBackpackVisible() {
    return await this.backpackItem.isVisible();
  }

  async isBikeLightVisible() {
    return await this.bikeLightItem.isVisible();
  }
}