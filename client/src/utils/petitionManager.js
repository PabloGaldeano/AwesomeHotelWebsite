import Vue from 'vue'
import axios from 'axios'
import ServiceResponse from '../model/serviceResponse'

export default function(url, params, successMessage, errorMessage, successCallback, errorCallback)
    {
        axios.post("http://localhost:8080/" + url, JSON.stringify(params),
        {
            headers:
            {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            var response = new ServiceResponse(res.data);
            if (response.isSuccess) 
            {
                Vue.notify({title: 'Success!', text: successMessage || '', type: 'success'});
                successCallback(response) || function(){}
            }
            else
            {
                Vue.notify({title: 'Oops!', text: response.errorMessage, type: 'error'});
                errorCallback(response) || function(){}
            }
        }, (error) => 
        { 
            Vue.notify({ title: 'Oops!', text: (errorMessage || 'Please try again later') + error, type: 'error'});
            errorCallback(error) || function(){}

        })
    }
