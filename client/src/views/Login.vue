<template>
    <div class="container">
        <div class="header">
            Welcome to the hotel Check in form.
            <div class="subtitle">Please fill in your details to be able to access our services</div>
        </div>
        <div class="form-input">
            <label for="ID">Your ID</label>
            <input v-model=customer.customerID type="text" id="customerID" placeholder="Your ID" @change="displayCustomer"/>
        </div>
        <div class="form-input">
                <label for="customerPassword">Password </label>
                <input v-model=customer.password type="password" id="customerPassword" placeholder="Your middle name" @change="displayCustomer"/>
        </div>
         <div class="form-input">
                <input type="button" class="submit-form" value="Check In!" @click="onSubmit"/>
            </div>
    </div>
</template>

<script>
import Customer from '../model/customer/Customer';

export default 
{
        data()
    {
        return { 
            customer : new Customer()
         }
    },
    methods: 
    {
        onSubmit() 
        {
            this.$store.dispatch('customers/ACTION_LOG_IN_CUSTOMER', this.customer);   
        },
        displayCustomer()
        {
            console.log(this.customer.firstName);
        }
    }
}
</script>

<style scoped>

</style>