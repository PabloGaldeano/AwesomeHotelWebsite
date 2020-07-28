<template>
  <div>
    <b-navbar type="dark" toggleable="md" variant="dark">
      <b-navbar-brand>Awesome Hotel</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!customerloggedin" :to="{'name': 'Check-In'}">
           Check-In!
          </b-nav-item>
          <b-nav-item v-if="!customerloggedin" :to="{'name': 'Login'}">
           Login
          </b-nav-item>
          <b-nav-item v-if="customerloggedin" :to="{'path': 'travelSignUp'}">
            Sign UP!
          </b-nav-item>
          <b-nav-item v-if="customerloggedin" :to="{'path': 'itinerary'}">
            Check the trip information!
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//import mapGetters from 'vuex'
export default {
  computed: {
    ...mapGetters({ customerloggedin: "customers/GET_IS_CUSTOMER_LOGGED_IN" }),
  },
};
</script>
<style lang="less">
@import "../styles/main.less";
</style>