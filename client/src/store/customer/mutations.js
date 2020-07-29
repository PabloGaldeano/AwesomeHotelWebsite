import CookiesManager from '../../utils/cookiesManager'
import router from '../../router/index'
import Vue from 'vue'

export default
    {
        SET_CUSTOMER_TOKEN: function (state, data) {
            state.customerToken = data;
            CookiesManager.setTokenCookie(data)
        },
        SET_LOGOUT_STATE(state) {
            CookiesManager.deleteTokenCookie();
            Vue.set(state, 'customerToken', "")
            router.push("home")
            router.go()
        }
    }