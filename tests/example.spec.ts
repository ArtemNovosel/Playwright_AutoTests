import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://sima-land.ru/');

  await expect(page).toHaveTitle(/Сима-ленд — интернет-магазин товаров для комфортной жизни/);
  await page.screenshot({path: 'scrin.png'});
  await page.close();
});