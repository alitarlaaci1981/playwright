const {test,expect}=require('@playwright/test');

test('Take Screen shot with playwrights', async({page})=>{

    //element screen shot
    await page.goto('https://www.youtube.com/@testerstalk');
    //element screen shot
    await page.locator(".yt-spec-avatar-shape__image-overlays.yt-spec-avatar-shape__image").screenshot({path:'./screenshots/element.png'});
    //page screen shot
    await page.screenshot({path:'./screenshots/page.png'});
    //full page screen shot
    await page.screenshot({path:'./screenshots/fullpage.png',fullPage:true});
    await page.waitForTimeout(2000);

})