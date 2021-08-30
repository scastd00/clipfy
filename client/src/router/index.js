import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@components/MainPage';
import LoginPage from '@components/LoginPage';
import RegisterPage from '@components/RegisterPage';
import HomePage from '@components/HomePage';
import Profile from '@components/Profile';
import Orders from '@components/Orders';
import Wishlist from '@components/Wishlist';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'landing', component: MainPage },
    { path: '/', name: 'logout', component: MainPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/orders', name: 'orders', component: Orders },
    { path: '/wishlist', name: 'wishlist', component: Wishlist },
  ]
});
