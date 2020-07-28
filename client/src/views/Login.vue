<template>
<b-container class="mt-3 d-flex align-items-center justify-content-center" fluid>
  <b-card
    title="Please log in to access our services"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    img-width="100"
    tag="article"
    style="max-width: 40rem;"
    class="mb-2 text-center"
  >
    <b-container fluid>

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
      this.$store.dispatch("customers/ACTION_LOG_IN_CUSTOMER", this.customer);
    },
    displayCustomer() {
      console.log(this.customer);
    },
  },
};
</script>

<style scoped>
</style>