import { test, expect } from '@playwright/test';
test('Locate multiple elements', async({page})=>{
   await page.goto('https://demoblaze.com/');
//   const links= await page.$$('a');
//   for(const link of links){
//     const linkText=await link.textContent();
//     console.log(linkText);
//   }
await page.waitForSelector("//div[@id='tbodyid']//h4[@class='card-title']/a");
const products=await page.$$("//div[@id='tbodyid']//h4[@class='card-title']/a")
for(const product of products){
    const productText = await product.evaluate(el => el.textContent);
    console.log(productText);
}

})