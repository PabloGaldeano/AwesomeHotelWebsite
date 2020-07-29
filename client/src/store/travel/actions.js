import Petition from '../../utils/petitionManager'

export default {
    ACTION_RETRIEVE_TRIP_DATA_WITH_CUSTOMERS(context, params) {
        Petition('tour/itinerary', { token: params }, 'Itinerary received succesfully', 'Please try again later',
            (responseData) => {
                context.commit('SET_ITINERARY', responseData.data);
            })
    },
    ACTION_REGISTER_CUSTOMER_FOR_TRIP(context, params) {
        Petition('tour/sign_up', params,
            'Congratulations! You have been registered succesfully', 'Please try again later')
    }
}