<template>
  <div class="container">
    <div id="tour" class="tourInfo" v-bind:key="path.id" v-for="path in getTripInfoWithCustomers">
      <div class="tourStep">
        <label>{{path.pathName}}</label>
        <a @click="signUp(path.id)">Sign up for {{path.pathName}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { forKey: 3 };
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