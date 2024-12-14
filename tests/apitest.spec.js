import {test,expect} from '@playwright/test';

test('get users', async({request})=>{
    
  const response=await request.get('https://reqres.in/api/users?page=2');
                                   
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
  
    
})

test.only('Create a user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users?page=2', {
    data: { name: 'ali', job: 'trainer' },
    headers: { Accept: 'application/json' },
  });

  // Log the JSON response
  const responseBody = await response.json();
  console.log(responseBody);

  // Validate the response status
  expect(response.status()).toBe(201);
});

