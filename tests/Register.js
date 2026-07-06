const{test, expect} = require('@playwright/test');
test('Register User', async ({page})=>{

    await page.goto('https://automationexercise.com/');
    await page.click(a[href="/login"]);
    const name ="Devanya";
    const email ="devanya123@gmail.com";
    await page.fill("input[data-qa='signup-name']", name);
    await page.fill("input[data-qa='signup-email']", email);
    await page.click("button[data-qa='signup-button']");
    await page.expect(page.locator("#name")).toBeVisible();
    await page.expect(page.getByText("Enter Account Information")).toBeVisible();
    await page.expect(page.getByText("Tittle")).toBeVisible();
    await page.check("#id_gender2");
    await page.expect(page.locator("#name")).toBeVisible();

});