
import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
  console.log('this is beforeAll Hook')
})

test.afterAll(async()=>{
  console.log('this is AfterAll Hook')
})

test.beforeEach(async()=>{
  console.log('this is beforeEach Hook')
})

test.afterEach(async()=>{
  console.log('this is afterEach Hook')
})



test.describe('Group1',()=>{
  test('Test 1',async()=>{
    console.log('This is test 1.....')
   
   })
   test('Test 2',async()=>{
    
     console.log('This is test 2.....')
   })
})


test.describe('Group2',()=>{
  test('Test 3',async()=>{
 
    console.log('This is test 3.....')
  })
  
  test('Test 4',async()=>{
   
    console.log('This is test 4.....')
  })
})


