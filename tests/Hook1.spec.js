
import {test,expect} from '@playwright/test'


test('Home page test',async({page})=>{
  await page.goto('https://demoblaze.com/');
  //login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
 await page.locator("button[onclick='logIn()']").click();
 //Home page
 const products=await page.$$('.hrefch');
 expect(products).toHaveLength(9);
 //logout
 await page.locator('#logout2').click();


})
test('Add Product to cart test',async({page})=>{
  //login
  await page.goto('https://demoblaze.com/');
  //login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
 await page.locator("button[onclick='logIn()']").click();
  //Add product
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator(".btn.btn-success.btn-lg").click();
  page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();
  })
  

  //log out
  await page.locator('#logout2').click();
})

