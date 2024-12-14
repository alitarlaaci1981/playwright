import {test,expect} from '@playwright/test';
test('Mouse right click  actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
  
   const doubleClick= await page.locator("//button[normalize-space()='Copy Text']");
   await doubleClick.dblclick();
   const f2=await page.locator('#field2');
   await expect(f2).toHaveValue('Hello World!');


    await page.waitForTimeout(5000);
})