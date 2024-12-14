import {test,expect} from '@playwright/test';
test('Assertions Test',async ({page})=>{
   await page.goto('https://demo.nopcommerce.com/register');
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');
  const logoElement =page.locator('.header-logo');
  await expect(logoElement).toBeVisible();
  const serachBox=await page.locator('#small-searchterms');
  await expect(serachBox).toBeEnabled();
 const radioButton=page.locator('#gender-male');
 await radioButton.click();
 await expect(radioButton).toBeChecked();

 const newsletterCheckBox=await page.locator('#Newsletter');
 await expect(newsletterCheckBox).toBeChecked();

 const registerButton=page.locator('#register-button');
 expect(registerButton).toHaveAttribute('type','submit');

 const registerText=page.locator('.page-title h1');
 await expect(registerText).toHaveText('Register');
 await expect(registerText).toContainText('Regi');

 const emailValue=page.locator('#Email');
 await emailValue.fill('test@demo.com');
 await expect(emailValue).toHaveValue('test@demo.com');

 const options=page.locator("select[name='DateOfBirthMonth'] option");
 await expect(options).toHaveCount(13);

})