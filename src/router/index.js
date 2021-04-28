import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register";
import Lesson1 from "../views/Lesson1";
import Bank from "../views/Bank";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Resister',
    component: Register
  },
  {
    path: '/Lesson1',
    name: 'Lesson1',
    component: Lesson1
  },
  {
    path: '/Bank',
    name: 'Bank',
    component: Bank
  }
]

const router = new VueRouter({
  routes
})

export default router
