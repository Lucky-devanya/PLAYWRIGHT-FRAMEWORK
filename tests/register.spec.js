const{test, expect} = require('@playwright/test');
test('Register User', async ({page}) =>{
    const name ="Devanya";
    //const email ="devanya123@gmail.com";
    // one time user register--we get error "Email Address already exist!"- we r use Date.now() to generate unique email address for each test run
    const email = `devanya${Date.now()}@gmail.com`;
    const password = "devany@1123";
    const day = "20";
    const month = "December";
    const year = "1999";
    const firstname = "Devanya";
    const lastname = "Pindi";
    const company = "AWS Solutions";
    const address1 = "Geethanjali Apts, Hyderabad";
    const country = "India";
    const state = "Telangana";
    const city = "Hyderbad";
    const zipcode = "500032";
    const mobileno = "9848539593";

    await page.goto('https://automationexercise.com/');
    await page.click("a[href='/login']");
    await page.fill("input[data-qa='signup-name']", name);
    await page.fill("input[data-qa='signup-email']", email);
    await page.click("button[data-qa='signup-button']");
    await expect(page.getByText("ENTER ACCOUNT INFORMATION")).toBeVisible();
    await expect(page.locator("label").filter({ hasText: "Title" })).toBeVisible();
    await expect(page.getByLabel("Mr.")).toBeVisible();
    await expect(page.getByLabel("Mrs.")).toBeVisible();
    await page.check("#id_gender2");
    await expect(page.locator("label[for='name']")).toBeVisible();
    await expect(page.getByText("Email *", { exact: true })).toBeVisible();
    //await expect(page.getByText("Email *")).toBeVisible();
    await expect(page.getByText("Password *")).toBeVisible();
    await page.fill("#password", password);
    await expect(page.getByText("Date of Birth")).toBeVisible();
    await page.selectOption("#days", day);
    await page.selectOption("#months", month);
    await page.selectOption("#years", year);
    await expect(page.getByText("ADDRESS INFORMATION")).toBeVisible();
    await expect(page.getByText("First name *")).toBeVisible();
    await page.fill("#first_name", firstname);
    await expect(page.getByText("Last name *")).toBeVisible();
    await page.fill("#last_name", lastname);
    await expect(page.locator("label[for='company']")).toBeVisible();
    await page.fill("#company", company);
    await expect(page.locator("label[for='address1']")).toBeVisible();
    await page.fill("#address1", address1);
    await expect(page.getByText("Country *")).toBeVisible();
    await page.selectOption("#country", country);
    await expect(page.locator("label[for='state']")).toBeVisible();
    await page.fill("#state", state);
    await expect(page.getByText("City *")).toBeVisible();
    await page.fill("#city", city);
    await expect(page.getByText("Zipcode *")).toBeVisible();
    await page.fill("#zipcode", zipcode);
    await expect(page.getByText("Mobile Number *")).toBeVisible();
    await page.fill("#mobile_number", mobileno);
    await page.click("button[data-qa='create-account']");
    // Verify Account Created heading
    await expect(page.locator("h2[data-qa='account-created']")).toHaveText("Account Created!");

     // Verify success message
    await expect(page.getByText("Congratulations! Your new account has been successfully created!")).toBeVisible();

     // Click Continue button
    await page.click("a[data-qa='continue-button']");




});

// alraedy user exists or Email Address already exist!

/* const{test, expect} = require('@playwright/test');
test('Register User", async ({page}) => {
const name = "Devanys";
const email ="devanya123@gmail.com";
   await page.goto('https://automationexercise.com/');
    await page.click("a[href='/login']");
    await page.fill("input[data-qa='signup-name']", name);
    await page.fill("input[data-qa='signup-email']", email);
    await page.click("button[data-qa='signup-button']");
    await expect(page.getByText("Email Address already exist!")).toBeVisible();


})*/