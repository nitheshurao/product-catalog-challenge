import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/tests",

  timeout: 30000,

  retries: 1,

  reporter: [
    ["html"],
    ["list"],
  ],

  use: {
    baseURL: "https://www.saucedemo.com",

    headless: false,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",
  },
});