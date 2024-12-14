//using 
//screenshot:'on' in config file

import {test,expect} from '@playwright/test';

test('test' ,async({page})=>{
await page.goto('https://demoblaze.com/');
await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.locator("button[onclick='logIn()']").click();
await expect(page.locator('#logout2')).toBeVisible();

})