const {test,expect}=require('@playwright/test');

test('dropdown test',async({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.waitForTimeout(1000);
    const dropdownlist=page.locator("//select[@id='dropdown']");
    //select with value
   // await dropdownlist.selectOption('1');
    //select with visible text
    await dropdownlist.selectOption('Option 1');
    await expect(dropdownlist).toHaveValue('1');
    await page.waitForTimeout(5000);



})