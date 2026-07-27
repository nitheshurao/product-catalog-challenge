import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test.describe("Cart Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      "standard_user",
      "secret_sauce"
    );
  });

  test("should add backpack to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpack();

    await expect(inventoryPage.cartBadge).toHaveText("1");

    await inventoryPage.openCart();

    await expect(cartPage.backpackItem).toBeVisible();
  });

  test("should remove backpack from cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpack();

    await inventoryPage.openCart();

    await expect(cartPage.backpackItem).toBeVisible();

    await cartPage.removeBackpack();

    await expect(cartPage.backpackItem).toHaveCount(0);
  });

  test("should add two products to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpack();

    await inventoryPage.addBikeLight();

    await expect(inventoryPage.cartBadge).toHaveText("2");
  });

  test("should continue shopping", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpack();

    await inventoryPage.openCart();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
  });

  test("should navigate to checkout page", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpack();

    await inventoryPage.openCart();

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);
  });
});