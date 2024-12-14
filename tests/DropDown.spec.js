import {test,expect} from '@playwright/test';
test('Handle drowdonw',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //multiple ways to select optin from the dropdown
  //  await page.locator('#country').selectOption({label:'India'})
  //await page.locator('#country').selectOption('India')
  //await page.locator('#country').selectOption({value:'canada'})
  //await page.locator('#country').selectOption({index:1})
 // await page.selectOption('#country','India');

 //Assertions
 //1)check number of options in dropwdown
//  const options=await page.locator('#country option');
//  await expect(options).toHaveCount(10);

//2) check number of optiosn in drowdown
//const options=await page.$$('#country option');
//console.log(`Number of options ${options.length}`);
//await expect(options.length).toBe(10);

//3) check presence of value in the dropdown (checking a specific value includes in dropdown element)
// const content=await page.locator('#country').textContent();
// await expect(content.includes('India')).toBeTruthy();


//4)checking presence of value in drowdown by using loop
// const options=await page.$$('#country option');
// let status=false;
// for(const option of options){
//     let value=await option.textContent();
//     if(value.includes('France')){
//         status=true;
//         break;
//     }
// }
// expect(status).toBeTruthy();

//5) Select option from dropdown by using loop
const options=await page.$$('#country option');
for (const option of options) {
    let text = await option.textContent();
    if (text && text.includes('France')) {
        let value = await option.getAttribute('value'); // get the 'value' attribute
        await page.selectOption('#country', value); // use the value attribute for selection
        break;
    }
}
    await page.waitForTimeout(3000);
    //await page.pause();
})