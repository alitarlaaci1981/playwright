import {test,expect} from '@playwright/test';
test('Mouse right click  actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill('Welcome to automation');
   // await page.type('name="text1"','Welcome to automation');
    //ctrl + A  - select the text
    await page.keyboard.press('Control+A')
    //ctrl + C -copy the text
    await page.keyboard.press('Control+C')
    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    //Ctrl + V
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000);
})