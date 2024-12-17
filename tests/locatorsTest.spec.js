const {test,expect} =require('@playwright/test');

test('locators', async ({page})=>{
   // await page.goto("https://www.google.com/search?q=cypress+by+testers+talk");
    // await page.getByRole('link',{name:'Images'}).click();
    // await page.goto('https://www.google.com/')
    // await page.waitForTimeout(2000);
    //await page.waitForSelector('[aria-label="Search"]');
    // await page.getByLabel('Search',{exact:true}).fill('api testing by testers talk');
    // await page.getByLabel('Search',{exact:true}).press('Enter');


   // await page.getByLabel('Search',{exact:true}).fill('api testing by testers talk');

   //altText
//    await page.goto('https://practice.expandtesting.com/');
//    await page.waitForTimeout(1000);
//    page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.');

    //getbytestid
        // await page.goto('https://github.com/login');
        // page.getByTestId('username').fill('testers talk')


    //getByText;
    // await page.goto('https://www.youtube.com/@testerstalk');
    // await page.waitForTimeout(1000);
    // await page.getByText('Cypress by').click();
    // await page.waitForTimeout(2000);

    //getByTitle
    // await page.goto('https://www.youtube.com/@testerstalk');
    // await page.waitForTimeout(1000);
    // await page.getByTitle('Cypress testers talk');


    //xpath
    // await page.goto('https://www.google.com/');
    // await page.locator("//textarea[@id='APjFqb']").fill('Ali Tarlaci');
    // await page.locator("//textarea[@id='APjFqb']").press('Enter');

    //css selector
    // await page.goto('https://www.google.com/');
    // await page.locator("#APjFqb").fill('Ali Tarlaci');
    // await page.locator("#APjFqb").press('Enter');
    await page.waitForTimeout(2000);
})

