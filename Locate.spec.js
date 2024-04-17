const {test,expect}=require('@playwright/test');

test('locators',async ({page})=>{
    await page.goto("https://www.demoblaze.com/");
// REGISTER xpath
await page.click("//*[@id='signin2']");
await page.fill("//*[@id='sign-username']",'Jasmeet');
await page.fill("//*[@id='sign-password']",'Jasmeet@1234');
await page.click("//*[@id='signInModal']/div/div/div[3]/button[2]");
await page.click("//*[@id='signInModal']/div/div/div[3]/button[1]");
    //click on login button 
    //await page.locator('id=login2').click(); // both works same 
//or 
await page.click('id=login2');
//using css selector provide username
//await  page.locator('').fill("gagan");
await page.fill('id=loginusername','Jasmeet');
await page.fill('id=loginpassword','Jasmeet@1234');
//await page.type('','gagan');

// CLICK ON THE LOGIN BUTTON
await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]")
//await page.click("//*[@id='logInModal']/div/div/div[3]/button[1]");
//check the presence of the  element
const logoutlinks=await page.locator("//*[@id='logout2']");

await expect(logoutlinks).toBeVisible();
await page.close();
})
