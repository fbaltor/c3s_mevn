import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/transactions",
      name: "transactions",
      component: () => import("./components/TransactionList"),
    },
    {
      path: "/transactions/:id",
      name: "transaction-details",
      component: () => import("./components/Transaction"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTransaction"),
    },
  ],
});
