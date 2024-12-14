import {test,expect} from '@playwright/test';
test('Assertions Test',async ({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
 
   const table=await page.locator("//table[@id='productTable']");
   //total number of rows and columns
   const columns =await table.locator('thead tr th');
   console.log(await columns.count());
   const rows=await table.locator('tbody tr');
   console.log(await rows.count());
   expect(await columns.count()).toBe(4);
   expect(await rows.count()).toBe(5);

   //2) select check box fro product 4
   // const matchedRow= rows.filter({
   //    has: page.locator('td'),
   //    hasText:'Smartwatch'
   // });
   // matchedRow.locator('input').check();

   //3) select multiple product by re-usable function
   // await selectProduct(rows,page,'Tablet')
   // await selectProduct(rows,page,'Smartwatch')
   // await selectProduct(rows,page,'Wireless Earbuds')

   //4) print all product details using loop
   // for(let i=0; await rows.count(); i++)
   // {
   //    const row=rows.nth(i);
   //    const tds=row.locator('td')
   //    for(let j=0;j<await tds.count()-1;j++)
   //    {
   //       console.log(await tds.nth(j).textContent());
   //    }
   // }


   //5) read data from all pages (pagination)

   const pages = await page.locator('.pagination li a');
console.log('Number of pages in the table:', await pages.count());

for (let p = 0; p < await pages.count(); p++) {
  if (p > 0) {
    await pages.nth(p).click();
    // Wait for page content to update (you might need a more specific selector here).
    await page.waitForSelector('#productTable tbody tr');
  }

  // Redefine `rows` after each page click to capture the new rows
  const rows = await page.locator('#productTable tbody tr');
  for (let i = 0; i < await rows.count(); i++) {
    const row = rows.nth(i);
    const tds = row.locator('td');
    
    for (let j = 0; j < await tds.count() - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  // Optional delay for observation (if necessary)
  await page.waitForTimeout(3000);
}

await page.waitForTimeout(5000);

})

async function selectProduct(rows,page,name){
     const matchedRow= rows.filter({
      has: page.locator('td'),
      hasText:name
   });
   await matchedRow.locator('input').check();

}