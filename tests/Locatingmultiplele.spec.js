const {test,expect}=require('@playwright/test');

test('Locatemultiple',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    // // to get the links of the  home page 
    // const links=await page.$$('a');
    // for(const link of links){
    //     const linktext=await link.textContent();
    //     console.log(linktext);      
    // }
    // to scrape the name of the items displayed on the first page\
    await page.waitForSelector("//div/h4/a");
     const links=await page.$$("//div/h4/a");
     for(const link of links){
        const linktext=await link.textContent();
        console.log(linktext);
     }

});
