//const {test,expect}=require('@playwright/test');
import {test,expect} from '@playwright/test'

test('locators',async({page})=>{
    await page.goto('https://demoblaze.com/');
   // await page.locator('id=login2').click();
    await page.click('id=login2');
  //  await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click("//button[normalize-space()='Log in']")

    const logoutLink=page.locator('//a[normalize-space()="Log out"]');
    await expect(logoutLink).toBeVisible();
})