import {test,expect} from '@playwright/test';
test('Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
   
   const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
   //frame3.locator("input[name='mytext3']").fill('welcome');


   //nested frame
   const chilfFrame=await frame3.childFrames();
   await chilfFrame[0].locator('//*[@id="i5"]/div[3]/div').check();
   await page.waitForTimeout(5000);
})