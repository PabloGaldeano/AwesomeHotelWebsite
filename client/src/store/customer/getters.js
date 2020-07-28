import CookiesManager from '../../utils/cookiesManager'

export default
    {
        GET_CUSTOMER_TOKEN(state) 
        {
            return CookiesManager.getTokenCookie() || state.customerToken;
        },
        GET_IS_CUSTOMER_LOGGED_IN(state) 
        {
            return CookiesManager.getTokenCookie() != null || state.customerToken != null;
        }
    }