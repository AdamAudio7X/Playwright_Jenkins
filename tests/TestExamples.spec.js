// @ts-check
import { test, expect } from '@playwright/test';

test('test_Title_01', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log ("testing by PK after updating")
  await page.waitForTimeout(2000)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.close()
});

// test('test_StartedLink_01', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
