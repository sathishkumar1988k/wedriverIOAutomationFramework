import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import homePage from '../pageobjects/home.page.js';

Then('verify home page is displayed', async ()=> {
    let loggedInSuccessMessage = "Logged In Successfully";
    await homePage.verifyHomePageDisplayed(loggedInSuccessMessage);
});