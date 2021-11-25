import {Given, When,Then} from '@cucumber/cucumber'
import LandingPage from '../pageobjects/LandingPage'
import AuthenticationPage from '../pageobjects/AuthenticationPage'
import CreatePage from '../pageobjects/CreatePage'
import MyAccountPage from '../pageobjects/MyAccountPage'

Given("landing on automation pratices page", async ()=>{
     await LandingPage.openPage();
     await browser.maximizeWindow();
     //await browser.pause(5000);

})

When("click on sign-in", async ()=>{
     
     await LandingPage.clickSignIn()
    // await browser.pause(5000);
})
//============================================================================================
Then("landing on AUTHENTICATION page", async ()=>{
     //await console.log(LandingPage.authenticationHeader.getText());
     await expect(browser).toHaveUrlContaining("authentication");
     await expect(AuthenticationPage.authenticationHeader).toBeDisplayed();

})
When("provide email id click create an account",async ()=>{
     await AuthenticationPage.emailAddress();
     await AuthenticationPage.createAnAccountElement.click()
  //   await browser.pause(5000);
})
//===============================================================================================
Then("landing on CREATE AN ACCOUNT page",async ()=>{
    await expect(CreatePage.createPageHeading).toBeDisplayed(); 

})
When("fill personal infromation click register", async ()=>{
     await CreatePage.genderElement.click();
     await CreatePage.firstName();
     await CreatePage.lastName();
     await CreatePage.f_email();
     await CreatePage.password();
     await CreatePage.days();
     await CreatePage.months();
     await CreatePage.years();
     await CreatePage.clickLetterCheckBox();
     await CreatePage.CheckBox2();


     await CreatePage.address_firstName();
     await CreatePage.address_lastName();
     await CreatePage.company();
     await CreatePage.address();
     await CreatePage.address2();
     await CreatePage.city();
     await CreatePage.state();
     await CreatePage.postalCode();
     await CreatePage.country();
     await CreatePage.additional();
     await CreatePage.homePhone();
     await CreatePage.mobilePhone();
     await CreatePage.assignAddress();
     await CreatePage.register();

     await browser.pause(5000);

})

Then("should be landing on MY ACCOUNT page", async ()=>{
     await expect(browser).toHaveUrlContaining("my-account");
     await expect(MyAccountPage.myAccountElement).toBeDisplayed();
})