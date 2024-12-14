import {test,expect} from '@playwright/test';
test('Mouse right click  actions',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  
   const rightClickButton=await page.locator("//span[@class='context-menu-one btn btn-neutral']");
   //right click action
   await rightClickButton.click({button:'right'});
    await page.waitForTimeout(5000);
})