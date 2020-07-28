import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkin from '../views/Checkin.vue'
import Login from '../views/Login.vue'
import TripInfo from '../views/Tour.vue'
import TripSignUp from '../views/SignUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkin',
    name: 'Check-In',
    component: Checkin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/travelSignUp',
    name: 'Sign Up for a trip!',
    component: TripSignUp
  },
  {
    path: '/itinerary',
    name: 'Trip tour',
    component: TripInfo
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
