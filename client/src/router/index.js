import Vue from 'vue';
import Router from 'vue-router';

import LandingPage from '@components/LandingPage';
import LoginPage from '@components/LoginPage';
import RegisterPage from '@components/RegisterPage';
import HomePage from '@components/HomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'logout',
      component: LandingPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    }
  ]
});
