const {test,expect} =require('@playwright/test');

test('Validate youtube title', async ({page})=>{
   await page.goto('https://www.youtube.com/');
   await page.waitForTimeout(3000);
   await page.locator("//form[@class='ytSearchboxComponentSearchForm']").click();
   await page.locator("//input[@role='combobox']").fill('cypress by testers talk');

   await expect(page.getByRole('button',{name:'Search',exact:true})).toBeEnabled();
   await page.getByRole('button', {name: 'Search', exact:true}).click();
   await page.waitForTimeout(2000);
   await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();
   await page.waitForTimeout(2000);
   await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

})