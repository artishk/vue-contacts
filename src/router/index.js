import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import AddNewContact from '../views/AddNewContact.vue';
import ShowContact from '../views/ShowContact.vue';
import editContact from '../views/editContact.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
}, {
  path: '/AddNewContact',
  name: 'AddNewContact',
  component: AddNewContact,
}, {
  path: '/ShowContact/:id',
  name: 'ShowContact',
  component: ShowContact,
}, {
  path: '/editContact/:id',
  name: 'editContact',
  component: editContact,
}];

const router = new VueRouter({
  routes,
});

export default router;
