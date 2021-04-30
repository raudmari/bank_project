import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Register from "../views/Register";
import Bank from "../views/Bank";
import Lesson1 from "../views/Lesson1";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
