<template>
  <div class="container" fluid>
    <div class="d-flex flex-md-row flex-sm-column">
    <div class="p-2" v-bind:key="path.id" v-for="path in getTripInfoWithCustomers">
      
    <b-card
    title="Destination"
    img-src="https://picsum.photos/600/300/?image=18"
    img-alt="Image"
    img-top
    img-width="100"
    tag="article"
    style="max-width: 40rem;"
    class="mb-4 text-center"
  >
      <b-card-text>
      {{path.pathName}}
    </b-card-text>
    </b-card>
    <b-button type="button" variant="info" @click="signUp(path.id)"> Sign Up</b-button>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
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
    signUp(ID) 
    {
        this.$store.dispatch("trip/ACTION_REGISTER_CUSTOMER_FOR_TRIP", {
          token: this.getCustomerToken,
          to: ID,
        });
    },
  },
};
</script>