import {test,expect} from '@playwright/test';
test('Soft assertions',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE123');//title is wrong because execution continues because we are using soft assertions!!
    await expect.soft(page).toHaveURL('https://demoblaze.com/');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})