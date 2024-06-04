import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import testData from '../testData/testData.json' assert { type: 'json' };

import loginPage from '../pageobjects/login.page.js';

Given('the user lauch the practice test automation website', async ()=> {
    await loginPage.launchBrowser(testData.url);
});

When('the user enter {string} as username and {string} as passwod and click on Submit button', async (username, password)=> {
    await loginPage.login(username,password);
});

Then('verify invalid username error message is displayed', async ()=> {
    let errorMessage = "Your username is invalid!";
    await loginPage.verifyInvalidUsername(errorMessage);
});