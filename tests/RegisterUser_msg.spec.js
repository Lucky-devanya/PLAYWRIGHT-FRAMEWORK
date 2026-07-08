const{test, expect} = require('@playwright/test');
test("Register User msg", async ({page})=>{
    const name = "Devanya";
    const email = "devanya123@gmail.com";
    await page.goto("https://automationexercise.com/");
    await page.click("a[href='/login']");
    await page.fill("input[data-qa='signup-name']", name);
    await page.fill("input[data-qa='signup-email']", email);
    await page.click("button[data-qa='signup-button']");
    await expect(page.getByText("Email Address already exist!")).toBeVisible();



})