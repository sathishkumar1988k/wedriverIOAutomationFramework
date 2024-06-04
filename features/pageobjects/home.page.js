import { expect,$ } from '@wdio/globals'
import commonFunction from './commonFunction.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends commonFunction {
    /**
     * define selectors using getter methods
     */
    get loggedInSuccessTitle () {
        return $("[class='post-title']");
    }

    async verifyHomePageDisplayed (loggedInSuccessMessage) {
       await expect(this.loggedInSuccessTitle).toHaveText(loggedInSuccessMessage);
    }

}

export default new homePage();
