
import {test,expect} from '@playwright/test'

test('Single file',async({page})=>{
  await page.goto('https://practice.expandtesting.com/upload');
  await page.waitForTimeout(3000);
  await page.waitForSelector("//input[@id='fileInput']")
// await page.locator("//input[@id='fileInput']").click();
  await page.locator("//input[@id='fileInput']").setInputFiles('tests/uploadFiles/hello.txt');
  await page.locator("//button[@id='fileSubmit']").click();
  const successfullUploadMessage=await page.locator("//h1[normalize-space()='File Uploaded!']").textContent();
  await expect(successfullUploadMessage).toContain('File Uploaded!');
  await page.waitForTimeout(3000);
   
})

test.only('Multiple  file',async({page})=>{
   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
   await page.locator("#filesToUpload")
   .setInputFiles(['tests/uploadFiles/hello.txt','tests/uploadFiles/hello2.txt'])
   expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('hello.txt');
   expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('hello2.txt');
   await page.waitForTimeout(3000);
   //removing files
   await page.locator("#filesToUpload").setInputFiles([]);
   await page.waitForTimeout(3000);
   expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('No Files Selected')


   await page.waitForTimeout(4000);


})