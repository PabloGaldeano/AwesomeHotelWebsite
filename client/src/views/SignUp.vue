<template>
  <div class="container hotel-container" fluid>
    <div class="d-flex flex-wrap flex-column flex-sm-column flex-md-row">
      <div class="p-2" v-bind:key="path.id" v-for="path in getTripInfoWithCustomers">
        <Destination :name="path.name" :id="path.id"></Destination>
        <br />
        <b-button type="button" variant="info" @click="signUp(path.id)">Sign Up</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Destination from "../components/Destination.vue";

export default {
  components: {
    Destination,
  },
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
  methods: {
    signUp(ID) {
      this.$store.dispatch("trip/ACTION_REGISTER_CUSTOMER_FOR_TRIP", {
        token: this.getCustomerToken,
        to: ID,
      });
    },
  },
};
</script>