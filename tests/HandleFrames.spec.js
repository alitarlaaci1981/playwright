import {test,expect} from '@playwright/test';
test.skip('Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    //how to get total count of frames
    const allFrames=await page.frames();
    console.log('Number of frames', allFrames.length);

    //Approach 1: name or url of the page
    //if name is not availabel use url const var=await page.frame(frameName)
//    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
//    await frame1.fill("[name='mytext1']",'Hello');

//approach 2 using frame locator
const inputBox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
await inputBox.fill('Hello');
   

   await page.waitForTimeout(5000);
})
test('handle iframe in playwrights',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForTimeout(1000);
    //Iframe
    const iframeElement=page.frameLocator(".demo-frame");
    const dragElement=iframeElement.locator("//div[@id='draggable']");
    const dropElement=iframeElement.locator("//div[@id='droppable']");
    await dragElement.dragTo(dropElement);

    await page.waitForTimeout(6000);
})

