import {test,expect} from '@playwright/test';

test('Test1', async({page})=>{
    
  
    
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle("STORE");
    
    })
test('Test2', async({page})=>{
 
        await page.goto('https://demo.opencart.com/');
        await expect(page).toHaveTitle("Your Store");

 })

 test('Test3', async({page})=>{
 
    await page.goto('https://www.orangehrm.com/');
    await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM");

})