const {test,expect}=require('@playwright/test');
const { request } = require('http');
 let userid;
test('Get',async({request})=>{    // only is use for running a only using test only
const response=await request.get('https://reqres.in/api/users?page=2');
   console.log(response.json());
   expect(response.status()).toBe(200);
})
test('Post',async({request})=>{
const response=await request.post('https://reqres.in/api/users',
                  {
                    data:{"name":"jasprit", "job":"trainer"},
                    headers:{"Accept":"application/json"}

                  })
         console.log(response.json());
          expect(response.status()).toBe(201);
        let res=response.json();
        userid=res;
})
test('Put',async({request})=>{
   const response= await request.put('https://reqres.in/api/users/'+userid,
                   {
                    data:{"name":"jasprit", "job":"engineer"},
                   headers:{"Accept":"application/json"}
                   })
                   console.log(response.json());
                   expect(response.status()).toBe(200);

})
test('Delete',async({request})=>{
const response=await request.delete('https://reqres.in/api/users/'+userid);
expect(response.status()).toBe(204)
})
