
import {test,expect} from '@playwright/test';

test.beforeEach('run bevore each test',async({page})=>{
  console.log('running before each test');
  await page.goto('https://www.youtube.com/');
})

test.beforeAll('run before All test',async()=>{
  console.log('running before all test');
 
});

test.afterEach('run after each test',async()=>{
  console.log('running after each test');
 
});

test.afterAll('run after all test',async()=>{
  console.log('running after all test');
 
});


test('Hooks in Playwright', async ({page})=>{
 
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

test('Hooks in Playwright 2', async ({page})=>{
 
  await page.waitForTimeout(3000);
  await page.locator("//form[@class='ytSearchboxComponentSearchForm']").click();
  await page.locator("//input[@role='combobox']").fill('cypress by testers talk');

  await expect(page.getByRole('button',{name:'Search',exact:true})).toBeEnabled();
  await page.getByRole('button', {name: 'Search', exact:true}).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();
  

})


