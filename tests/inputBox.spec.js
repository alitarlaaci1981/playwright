import {test,expect} from '@playwright/test';
test('Input box elements', async({page})=>{
   await  page.goto('https://testautomationpractice.blogspot.com/');
   await expect(page.locator('#name')).toBeVisible();
   await expect(page.locator('#name')).toBeEmpty();
   await expect(page.locator('#name')).toBeEditable();
   await expect(page.locator('#name')).toBeEnabled();


    await page.locator('#name').fill('John');
    await page.waitForTimeout(3000);
   
})