import { $ } from '@wdio/globals'
import commonFunction from './commonFunction.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends commonFunction {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("[name='username']");
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $("[id='submit']");
    }

    get errorMessage() {
        return $("[id='error']")
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async verifyInvalidUsername(errorMessage){
        await expect (this.errorMessage).toHaveText(errorMessage);
    }

}

export default new loginPage();
