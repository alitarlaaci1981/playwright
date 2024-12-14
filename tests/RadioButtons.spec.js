import {test,expect} from '@playwright/test';
test('handle readio buttons',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check();
   // await page.check('#male');
   await expect(page.locator('#male')).toBeChecked();
   expect(await page.locator('#male').isChecked()).toBeTruthy();

 
   expect(await page.locator("#female").isChecked()).toBeFalsy();
   await page.waitForTimeout(3000);
})