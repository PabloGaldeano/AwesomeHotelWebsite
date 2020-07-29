import Vue from 'vue'
class CookiesManager {
    constructor() {

    }

    setCookie(key, value) {
        Vue.$cookies.set(key, value);
    }

    getCookieStringValue(key) {
        return Vue.$cookies.get(key);
    }

    deleteCookie(key) {
        Vue.$cookies.remove(key);
    }

    setTokenCookie(token) {
        this.setCookie('token', token)
    }

    deleteTokenCookie() {
        this.deleteCookie('token')
    }

    getTokenCookie() {
        return this.getCookieStringValue('token')
    }
}

export default new CookiesManager();