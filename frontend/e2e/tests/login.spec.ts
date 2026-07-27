import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
  test("should login successfully with valid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      "standard_user",
      "secret_sauce"
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test("should show error for invalid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      "standard_user",
      "wrong_password"
    );

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });

  test("should show error for locked out user", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      "locked_out_user",
      "secret_sauce"
    );

    await expect(loginPage.errorMessage).toContainText(
      "Sorry, this user has been locked out"
    );
  });
});