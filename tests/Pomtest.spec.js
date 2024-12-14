
import {test,expect} from '@playwright/test';
import { loginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

//without using Page Object Model
test('test' ,async({page})=>{


//Login
const login=new loginPage(page);
await login.gotoLoginPage();
await login.login('pavanol','test@123');
await page.waitForTimeout(3000);

//Home

 const home=new HomePage(page);
 await home.addProductToCart('Nexus 6');
 await page.waitForTimeout(3000);
 await home.gotoCart();
//Cart
const cart=new CartPage(page);
await page.waitForTimeout(3000);
const status=await cart.checkProductInCart('Nexus 6');
expect(await status).toBe(true);


})