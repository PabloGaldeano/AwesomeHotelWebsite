import axios from 'axios'
import ServiceResponse from '../../model/serviceResponse';

export default{
    ACTION_RETRIEVE_TRIP_DATA_WITH_CUSTOMERS(context,params)
    {
        
        axios.post("http://localhost:8080/tour/itinerary",JSON.stringify({token:params}), 
        {
            headers: 
            {
                'Content-Type' : 'application/json'
            }
        }).then(res => 
        {
            var response = new ServiceResponse(res.data);
            if(response.isSuccess)
            {
                context.commit('SET_ITINERARY', response.data);
            }
        }, (error) => { console.log(error)})
    },
    ACTION_REGISTER_CUSTOMER_FOR_TRIP(context,params)
    {
        axios.post("http://localhost:8080/tour/sign_up",JSON.stringify(params), 
        {
            headers: 
            {
                'Content-Type' : 'application/json'
            }
        }).then(res => 
        {
            var response = new ServiceResponse(res.data);
            if(response.isSuccess)
            {
                console.log(response)
            }
        }, (error) => { console.log(error)})
    }
}