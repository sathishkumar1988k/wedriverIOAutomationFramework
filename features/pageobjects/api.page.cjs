const request = require('supertest');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class apiPage {
    async getListUsers(getListUserUrl,getListUserUri) {
        try {
            return await request(getListUserUrl)
                .get(getListUserUri)
                .set('Accept', '*/*')
                .expect(200)
        } catch (err) {
            return err.message = `Error making GET Call with ${getListUserUrl}`
        }
    }

    async postCreateUser(postCreateUserUrl,postCreateUserUri, postCreateUserPayload){
        try {
            return await request(postCreateUserUrl)
                .post(postCreateUserUri)
                .set('Accept', '*/*')
                .send(postCreateUserPayload)
                .expect(201)
        } catch (err) {
            return err.message = `Error making GET Call with ${postCreateUserUrl}`
        }
    }
}

module.exports = new apiPage();

