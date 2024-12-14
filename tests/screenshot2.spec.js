//using 
//screenshot:'on' in config file

import {test,expect} from '@playwright/test';

test('test' ,async({page})=>{
await page.goto('https://demoblaze.com/');
await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.locator("button[onclick='logIn()']").click();
//after text execution please check test result folder to see screen shot after text execution.we cant see the screen shot inside the
//screen shot folder we created directly becaseu in config file we added a variable using screen shot automaticaly withoud adding any
//code to take screen shot.

})