import Petition from '../../utils/petitionManager'
import router from '../../router/index'
export default
    {
        async ACTION_CHECK_IN_CUSTOMER(context, params) {
            Petition('customer/check_in', params, 'You can now log-in!', 'Please try again later')
        },

        async ACTION_LOG_IN_CUSTOMER(context, params) {
            Petition('customer/log_in', params, 'Welcome back!', 'Please try again later',
                (response) => {
                    context.commit('SET_CUSTOMER_TOKEN', response.data)
                    router.push("home")
                }, function () { })
        }
    }