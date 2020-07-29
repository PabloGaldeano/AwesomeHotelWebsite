<template>
  <div class="container" fluid>
    <div class="hotel-master-container">
      <h1>This is our current information of the trip.</h1>
      <h2> If you want, you can sign up <b-button type="button" variant="info" :to="{'path': 'travelSignUp'}">Here</b-button></h2>
    </div>
    <div class="d-flex flex-wrap flex-column flex-sm-column flex-md-row">
      <div class="p-2" v-bind:key="path.id" v-for="path in getTripInfoWithCustomers">
        <Destination :name="path.name" :id="path.id"></Destination>
        <span>
          Distance travelled to here:
          <br />
          {{path.totalDistance}} Km.
        </span>
        <div class="d-flex flex-column">
          <span class="text-center">Customers travelling here:</span>
          <div class="p-4" v-bind:key="customer.id" v-for="customer in path.customers">{{customer}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Destination from "../components/Destination.vue";

export default {
  components: { Destination },
  computed: {
    ...mapGetters({
      getTripInfoWithCustomers: "trip/GET_TOUR_INFORMATION",
      getCustomerToken: "customers/GET_CUSTOMER_TOKEN",
    }),
  },
  mounted() {
    this.$store.dispatch(
      "trip/ACTION_RETRIEVE_TRIP_DATA_WITH_CUSTOMERS",
      this.getCustomerToken
    );
  },
};
</script>
