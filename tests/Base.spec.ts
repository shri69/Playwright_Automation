import { test } from '@playwright/test';
import config from '../playwright.config';
test.only('Step1:Launch browser', async({browser}) => {
    const context= await browser.newContext();
    const page = await context.newPage();
});
test("Open Amazon", async ({ page }) => {
    await page.goto('https://www.amazon.in/'); // Wait for 3 seconds to ensure the page loads completely
});
