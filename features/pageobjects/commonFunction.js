import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class commonFunction {
    async launchBrowser (url) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
}
