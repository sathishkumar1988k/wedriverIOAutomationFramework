# WebdriverIO with Cucumber framework

WebdriverIO version --> v8

## Pre-requisites:
    1. Install Nodejs version between 18 to 20
    2. Install Vs Code
    3. Install "Cucumber (Gherkin) Full Support" extension

## Steps to install:
    1. Clone this repo.
    2. Install the required dependencies using npm install.(Refer package.json for all dependencies)

## Steps to run cypress scripts with Cucumber framework:
    1. Execute "npm run web" in terminal to run UI/Web tests in headed mode.
    2. Execute "npm run api" in terminal to run API tests in headed mode
    3. Execute "npm run regressioninheadless" in terminal to run UI & API tests in headless mode.

    Reports:
    1. Please check ".tmp/html/index.html" file once you have executed the scripts.

## fixtures -> testData.json
    1. Common test data required for web & api testing will be stored in this json file.

## cucumberReports folder
    1.'.tmp/html' -> This file will have test execution reports in html.
    2.'.tmp/json -> This file will have test execution reports in json.

## Additional npm dependencies
    chromedriver & wdio-chromedriver-service - To execute scripts in chrome browser
    supertest - To perform API automation
    wdio-cucumberjs-json-reporter - To generate json cucumber reports
    multiple-cucumber-html-reporter - To genearte hmtl reports from json reports
    cross-env - To pass multiple tags from "scripts" section in package.json file
    fs-extra - Dependency to delete the reports folder before execution 

## Steps to install webdriverIO
    1. Execute "npm init wdio@latest" to install wdio.
    2. Answer the required questions based on the requirements.


