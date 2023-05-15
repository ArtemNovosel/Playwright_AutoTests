import { test, expect } from '@playwright/test';

test('authorization', async ({ page }) => {
  //переходим на сайт
  await page.goto('https://www.sima-land.ru/');

  //В хедере нажать на кнопку "Войти"
  await page.getByText('Войти').click();

  //Ввести логин: qa_test@test.ru
  await page
    .locator('//*[@class="kfX46B bTTMKM"]').nth(0)
    .fill("qa_test@test.ru");
    
    //Ввести пароль: qa_test
  await page
    .locator('//*[@type="password"]')
    .fill("qa_test");

    //Нажать кнопку "Войти"
  await page.locator('//*[@class="Xqv8JY huJTmi FGtHop NkchRg RgDBpc"]').click();

    //Проверить, что авторизация прошла успешно
  await page.getByText('Профиль').click(); //нажимаем кнопку профиль
  await expect(page).toHaveURL(/.*cabinet/); //проверяем что мы в личной кабинете
  await page.close();
});


// тест записанный через codegen
test('auth', async ({ page }) => {
  await page.goto('https://www.sima-land.ru/');
  await page.getByTestId('nav-item:cabinet').getByTestId('link').click();
  await page.getByTestId('login-field').getByTestId('text-field:field').click();
  await page.getByTestId('login-field').getByTestId('text-field:field').fill('qa_test@test.ru');
  await page.getByTestId('password-field').getByTestId('text-field:field').click();
  await page.getByTestId('password-field').getByTestId('text-field:field').fill('qa_test');
  await page.getByTestId('button').click();
  await page.getByTestId('nav-item:cabinet').getByTestId('link').click();
  await page.close();
});