import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import customers from './customer/index'
import trip from './travel/index'

export default new Vuex.Store({
  modules: 
  {
      customers,trip
  }
});


