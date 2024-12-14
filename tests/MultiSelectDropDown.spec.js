import {test,expect} from '@playwright/test';
test('handle dropwdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //select multiple options from multi select dropdown
   // await page.selectOption('#colors',['Blue','Red','Yellow'])

//Assertions
//1) check number of options in dropdown
// const options=await page.locator('#colors option');
// await expect(options).toHaveCount(7);

//2) Check number of options in dropdown using Js Array
// const options=await page.$$('#colors option');
// await expect(options.length).toBe(7);
//3) check presence of value in the dropdown

const content=await page.locator('#colors').textContent();
await expect(content.includes('Blue')).toBeTruthy();
await expect(content.includes('Purple')).toBeFalsy();


    await page.waitForTimeout(3000);

})