const {test,expect}=require('@playwright/test');//expect: for validation
//objective  capture title of the page  , url is correct or not
//this take two params 1 title and 2 anonymous fxn and in this fxn we have to pass fixture
// contains fxns through them  you can do the automation which is given in playwright
test('Home Page',async ({page})=>{ //async will make fxn and return promise
// launch app
await page.goto('https://www.youtube.com/');// make the fxn and wait for above promise to resolve (in our case it will load the page then go to this url)

//capture title of webpage
let pageTitle =page.title();
console.log(pageTitle);

let pageUrl=page.url();
console.log(pageUrl);

//validation
await expect(page).toHaveTitle('YouTube'); 
await expect(page).toHaveURL('https://www.youtube.com/')
await page.close();

}) 
