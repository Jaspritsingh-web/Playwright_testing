const {test,expect}=require('@playwright/test');
const exp = require('constants');
// assertions test
test('assertions',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store'); //pass text of title element
   const logoElement=await page.locator('.header-logo img');
   await expect(logoElement).toBeVisible();
    const searchstorebox=await page.locator('#small-search-box-form #small-searchterms');
    await expect(searchstorebox).toBeEnabled();

    //radiobutton
    
})
test('checkboxradiobutton',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
   // const register=await page.locator('/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a');
     //await page.click(register);
    //await page.waitForSelector("#gender-male");
  const radbut=  await page.locator("#gender-male");

  await radbut.click();
  await expect(radbut).toBeChecked();

  //checkbox
  const chkbox =await page.locator('#Newsletter');
  await expect(chkbox).toBeChecked();
})