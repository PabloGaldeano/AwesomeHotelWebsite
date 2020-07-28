import axios from 'axios'
import ServiceResponse from '../../model/serviceResponse';

export default
{
    async ACTION_CHECK_IN_CUSTOMER(context, params)
    {
        axios.post("http://localhost:8080/customer/check_in",JSON.stringify(params), 
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
                    // Dispatch alert
            }
        }, (error) => { console.log(error)})
    },

    async ACTION_LOG_IN_CUSTOMER(context, params)
    {
        console.log(context)
        axios.post("http://localhost:8080/customer/log_in",JSON.stringify(params), 
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
                     context.commit('SET_CUSTOMER_TOKEN', response.data)
                }
            }, (error) => { console.log(error)})
    }
}