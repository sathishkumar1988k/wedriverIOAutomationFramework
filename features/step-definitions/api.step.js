import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import apiPage from '../pageobjects/api.page.cjs';
import testData from '../testData/testData.json' assert { type: 'json' };

let getListUsersResponse, postCreateUserResponse;

Given('the list of users GET request available in reqres.in', async () => {
    // Check the reqres.in page is working fine
});

When('the GET request is triggered to get the list of users', async () => {
    const getListUserUrl = testData.reqresUrl;
    const getListUserUri = "/api/users?page=2";
    getListUsersResponse = await apiPage.getListUsers(getListUserUrl, getListUserUri);
    console.log(JSON.stringify(getListUsersResponse));
});

Then('verify list of users API response body should have {string}', async (responseText) => {
    expect(getListUsersResponse).toHaveText(responseText);
});

Given('the create user POST request available in reqres.in', async () => {
    // Check the reqres.in page is working fine
});

When('the POST request is triggered to create an user with name as {string} and job as {string}', async (name, job) => {
    const postCreateUserUrl = testData.reqresUrl;
    const postCreateUserUri = "/api/users";
    const postCreateUserPayload = { data: { "name": name, "job": job } }
    postCreateUserResponse = await apiPage.postCreateUser(postCreateUserUrl,postCreateUserUri, postCreateUserPayload);
    console.log(JSON.stringify(postCreateUserResponse));
});

Then('verify create new user API response body should have {string}', async (responseText) => {
    expect(postCreateUserResponse).toHaveText(responseText);
});