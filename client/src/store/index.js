import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import customers from './customer/index'

export default new Vuex.Store({
  modules: 
  {
      customers
  }
});


