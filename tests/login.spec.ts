import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //Visit url
  await page.goto("https://www.olx.com.pk/");
  //Popup click
  await page.locator("#optInText").click();
  // Click on signUp Button
  await page.pause();
  await page.locator("._261203a9._2e82a662").nth(0).click();
  //Continue with Email
  await page.locator("._495bfc7d._42207ab4._2e82a662").nth(2).click();
  //Verify Email page
  await expect(page.locator("._4d6e1e59._2e82a662")).toContainText(
    "Enter your Email"
  );
  //Enter Email
  await page.locator("#email").fill("usmanjabbar09@gmail.com");
  //Click on next button
  await page.locator("._5fd7b300.f3d05709").nth(1).click();
  //Verify Password page
  await expect(page.locator("._4d6e1e59._2e82a662")).toContainText(
    "Enter your password"
  );
  //Enter password
  await page.locator("#password").fill("Hbl@1122");
  //Click on login button
  await page.locator("._495bfc7d._2e82a662").nth(2).click();
});
