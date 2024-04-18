const {test,expect}=require('@playwright/test');
test('builtin',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click();

    const name=await page.locator("//*[@id='app']/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p").textContent();
    await expect(await page.getByText(name)).toBeVisible();
})