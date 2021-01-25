import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AddNewContact from "../components/AddNewContact.vue";
import ShowContact from "../components/ShowContact.vue";
import editContact from "../components/editContact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/AddNewContact",
    name: "AddNewContact",
    component: AddNewContact,
  },
  {
    path: "/ShowContact/:id",
    name: "ShowContact",
    component: ShowContact,
  },
  {
    path: "/editContact/:id",
    name: "editContact",
    component: editContact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
