export default class ServiceResponse
{
    constructor({success, data, errorMessage}) 
    {
        this.isSuccess =  success;
        this.data = data;
        this.errorMessage = errorMessage;
    }
}