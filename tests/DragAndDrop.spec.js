import {test,expect} from '@playwright/test';
test('Mouse right click  actions',async({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const rome=await page.locator('#box6');
    const italy=await page.locator('#box106');

    //Approach 1
    // await rome.hover();
    // await page.mouse.down();

    // await italy.hover();
    // await page.mouse.up();

    //approach 2
    await rome.dragTo(italy);

    const washington=await page.locator('#box3');
    const US=await page.locator('#box103');

    await washington.dragTo(US);



   

    await page.waitForTimeout(5000);
})