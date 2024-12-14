import {test,expect} from '@playwright/test';
test('Handle checkboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   
  // await page.fill('#datepicker','06/30/2025')
   
    //date picker;
    const year='2025';
    const month='March';
    const date='15';
    await page.click('#datepicker');
    while(true)
    {
       const currentMonth= await page.locator('.ui-datepicker-month').textContent();
       const currentyear= await page.locator('.ui-datepicker-year').textContent();
       if(currentyear==year && currentMonth ==month){
        break;
       }
       await page.locator("a[title='Next']").click();
    }

    const dates =await page.$$('.ui-state-default');
    //date selection using loop
    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==date){
    //         await dt.click();
    //         break;
    //     }
    // }

    //date selection -without loop by clicking on the date we want

    await page.click(`//a[@class='ui-state-default'][text()=${date}]`)

    await page.waitForTimeout(5000);
})