<template>
    <div class="container">
        <div class="header">
            Welcome to the hotel Check in form.
            <div class="subtitle">Please fill in your details to be able to access our services</div>
        </div>
        <form>
            <div class="form-input">
                <label for="ID">Your ID</label>
                <input v-model=customer.customerID type="text" id="customerID" placeholder="Your ID" @change="displayCustomer"/>
            </div>
            <div class="form-input">
                <label for="customerPassword">Password </label>
                <input v-model=customer.password type="password" id="customerPassword" placeholder="Your middle name" @change="displayCustomer"/>
            </div>

            <div class="form-input">
                <label for="customerfirstName">First Name</label>
                <input v-model=customer.firstName type="text" id="customerfirstName" placeholder="Your first name" @change="displayCustomer"/>
            </div>

            <div class="form-input">
                <label for="customerMiddleName">Middle Name</label>
                <input v-model=customer.middleName type="text" id="customerMiddleName" placeholder="Your middle name" @change="displayCustomer"/>
            </div>

            

            <div class="form-input">
                <label for="customerLastName">Last Name</label>
                <input v-model=customer.lastName type="text" id="customerLastName" placeholder="Your last name" @change="displayCustomer"/>
            </div>

            <div class="form-input">
                <input type="button" class="submit-form" value="Check In!" @click="onSubmit"/>
            </div>
        </form>
    </div>    
</template>

<script>
import Customer from '../model/customer/Customer';
export default {
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
            this.$store.dispatch('customers/ACTION_CHECK_IN_CUSTOMER', this.customer);
        },
        displayCustomer()
        {
            console.log(this.customer.firstName);
        }
    }
}
</script>

<style lang="less">
    @import '../styles/main.less';
</style>