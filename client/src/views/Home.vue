<template>
  <div class="home hotel-master-container">
    <h1>Welcome to Awesome Hotel!</h1>

    <div v-if="customerloggedin">
      <h2>To access our services please log-in or check-in</h2>
      <div class="hotel-container">
        <b-card
          title="Check our trip!"
          img-src="https://picsum.photos/600/300/?image=10"
          img-alt="Image"
          img-top
          img-width="100"
          tag="article"
          style="max-width: 40rem;"
          class="mb-4 text-center"
        >
          <b-card-text>You can check the tour information here</b-card-text>
          <b-button type="button" variant="info" :to="{'path': 'itinerary'}">Tour information</b-button>
        </b-card>
        <b-card
          title="Sign up for a ride!"
          img-src="https://picsum.photos/600/300/?image=9"
          img-alt="Image"
          img-top
          img-width="100"
          tag="article"
          style="max-width: 40rem;"
          class="mb-4 text-center"
        >
          <b-card-text>If you want to go to see the city, look no further!</b-card-text>
          <b-button type="button" variant="info" :to="{'path': 'travelSignUp'}">Go on a trip!</b-button>
        </b-card>
      </div>
    </div>

    <div v-if="!customerloggedin">
      <h2>To access our services please log-in or check-in</h2>
      <div class="hotel-container">
        <b-card
          title="Check-in"
          img-src="https://picsum.photos/600/300/?image=12"
          img-alt="Image"
          img-top
          img-width="100"
          tag="article"
          style="max-width: 40rem;"
          class="mb-4 text-center"
        >
          <b-card-text>If you are a new customer, please check-in</b-card-text>
          <b-button type="button" variant="info" :to="{'path': 'checkin'}">check-in</b-button>
        </b-card>
        <b-card
          title="Login"
          img-src="https://picsum.photos/600/300/?image=13"
          img-alt="Image"
          img-top
          img-width="100"
          tag="article"
          style="max-width: 40rem;"
          class="mb-4 text-center"
        >
          <b-card-text>If you are already registered, please log-in</b-card-text>
          <b-button type="button" variant="info" :to="{'path': 'login'}">Log-in</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ customerloggedin: "customers/GET_IS_CUSTOMER_LOGGED_IN" }),
  },
  name: "Home",
  components: {},
};
</script>
<style scoped lang="less">
@import "../styles/main.less";
</style>