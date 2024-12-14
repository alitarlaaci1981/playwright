import {test,expect} from '@playwright/test';
test('Handle checkboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator("//input[@id='monday' and @type='checkbox']").check();
    // expect( await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    // expect( await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    // expect( await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();

    //multiple checkboxes
    await page.waitForTimeout(3000);
    const checkboxLocators=[
        "//input[@id='monday']",
        "//input[@id='tuesday']",
        "//input[@id='wednesday']"
    ];

    for(const locator of checkboxLocators){
        await page.locator(locator).check();
    }

    await page.waitForTimeout(3000);
})