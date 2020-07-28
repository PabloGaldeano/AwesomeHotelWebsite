<template>
   <div id="nav">
      <router-link v-if="!customerloggedin" to="/checkin">Checkin</router-link>
      <router-link v-if="!customerloggedin" to="/login">Login</router-link>

      <router-link v-if="customerloggedin" to="/travelSignUp">Sign up for a trip!</router-link>
      <router-link v-if="customerloggedin" to="/itinerary">Check the trip information!</router-link>
    
    </div>
</template>

<script>
import { mapGetters }from 'vuex'

//import mapGetters from 'vuex'
export default {
    computed: {
        ...mapGetters({customerloggedin: 'customers/GET_IS_CUSTOMER_LOGGED_IN'})
    }  
}
 
</script>
<style lang="less">
    @import "../styles/main.less";
</style>