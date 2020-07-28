export default
{
    GET_CUSTOMER_TOKEN(state)
    {
        return state.customerToken;
    },
    GET_IS_CUSTOMER_LOGGED_IN(state)
    {
        return state.customerToken != null;
    }
}