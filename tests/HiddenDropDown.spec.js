import {test,expect} from '@playwright/test';
test('Auto suggest dropdow', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    //wait for the options

    await page.waitForTimeout(3000);
    const options=await page.$$("//div[@role='listbox']//span");
    for(let option of options){
        const value=await option.textContent();
        //console.log(value)
        if(value.includes('QA Engineer')){
            option.click()
            break;
        }
    }
    await page.waitForTimeout(3000);

})