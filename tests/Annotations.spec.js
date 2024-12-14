
import {test,expect} from '@playwright/test';


// test('Test 1',async()=>{
//     console.log('this is test 1')
   
//    })

// test('Test 2',async()=>{
//     console.log('this is my test 2')
   
//    })

//    test.skip('Test 3',async({page,browserName})=>{
//     console.log('this is my test 3')
//    if(browserName==='chromium'){
//     test.skip
//    }
//    })


//fix me
// test('Test 4',async()=>{
//     test.fixme()
//     console.log('this is test 4')
   
//    })


//fail
//    test('Test 5',async()=>{
//     test.fail();//expected
//     console.log('this is test 5');
//     expect(1).toBe(2);//actual
   
//    })
   

//    test('Test 6',async({page,browserName})=>{
//     if(browserName==='milenium'){
//         test.fail();//expected
//     }
    
//     console.log('this is test 6');
    
   
//    })


   test('Test 7',async({page})=>{
    test.slow();
    await page.goto('https://demoblaze.com/')
    console.log('this is test 7');
    
   })






