import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login', async({page}) => {
    test.setTimeout(60000);
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('iamemon222@gmail.com', '12345678');
   
});

//npx playwright test --headed --project=chromium