<template>
 <b-container class="mt-3 d-flex align-items-center justify-content-center" fluid>
  <b-card
    title="Welcome to our hotel!"
    img-src="https://picsum.photos/600/300/?image=18"
    img-alt="Image"
    img-top
    img-width="100"
    tag="article"
    style="max-width: 40rem;"
    class="mb-4 text-center"
  >
      <b-card-text>
      Please fill in the form below with your details to complete the check-in process.
    </b-card-text>
    <b-container fluid>

    <!-- ID Field -->
    <b-form-group
      id="customerID"
      description="Let us know your ID"
      label="Please enter your ID"
      label-for="ID-input"
      :invalid-feedback="this.customerValidator.invalidIDFeedback()"
      :valid-feedback="this.customerValidator.validFeedback()"
      :state="this.customerValidator.checkCustomerID()"
    >
    <b-form-input :state="this.customerValidator.checkCustomerID()" id="ID-input" v-model="customer.customerID" @change="displayCustomer" trim></b-form-input>
    </b-form-group>

    <!-- Password field -->
    <b-form-group
      id="customerPassword"
      description="Your password is required to be granted access"
      label="Please enter your password"
      label-for="password-input"
      :invalid-feedback="this.customerValidator.invalidPasswordFeedback()"
      :valid-feedback="this.customerValidator.validFeedback()"
      :state="this.customerValidator.checkCustomerPassword()"
    >
    <b-form-input :state="this.customerValidator.checkCustomerPassword()" id="password-input" :type="`password`" v-model="customer.password" @change="displayCustomer" trim></b-form-input>
    </b-form-group>
    
    <!-- First name field -->
    <b-form-group
      id="customerFirstName"
      description="What is your first name?"
      label="Please enter your first name"
      label-for="firstname-input"
      :invalid-feedback="this.customerValidator.invalidFirstNameFeedback()"
      :valid-feedback="this.customerValidator.validFeedback()"
      :state="this.customerValidator.checkCustomerFirstName()"
    >
    <b-form-input :state="this.customerValidator.checkCustomerFirstName()" id="firstname-input" :type="`text`" v-model="customer.firstName" @change="displayCustomer" trim></b-form-input>
    </b-form-group>
    

     <!-- Middle name field -->
    <b-form-group
      id="customerMiddleName"
      description="What is your middle name?"
      label="Please enter your middle name"
      label-for="middlename-input"
    >
    <b-form-input  id="middlename-input" :type="`text`" v-model="customer.middleName" @change="displayCustomer" trim></b-form-input>
    </b-form-group>

    <!-- Last name field -->
    <b-form-group
      id="customerLastName"
      description="What is your last name?"
      label="Please enter your last name"
      label-for="lastname-input"
      :invalid-feedback="this.customerValidator.invalidLastNameFeedback()"
      :valid-feedback="this.customerValidator.validFeedback()"
      :state="this.customerValidator.checkCustomerLastName()"
    >
    <b-form-input :state="this.customerValidator.checkCustomerLastName()" id="lastname-input" :type="`text`" v-model="customer.lastName" @change="displayCustomer" trim></b-form-input>
    
    
    </b-form-group>

    <b-button type="submit" variant="success" @click="submit"> Submit</b-button>
    </b-container>
  </b-card>
</b-container>
</template>

<script>

import Customer from "../model/customer/Customer";
import CustomerValidator from "../model/validators/customerValidator";

export default {
  data() {
    let customerFillingForm = new Customer()
    return {
      customer: customerFillingForm,
      customerValidator: new CustomerValidator(customerFillingForm)
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("customers/ACTION_CHECK_IN_CUSTOMER", this.customer);
    },
    displayCustomer() {
      console.log(this.customer.firstName);
    },
  },
};
</script>

<style lang="less">
@import "../styles/main.less";
</style>