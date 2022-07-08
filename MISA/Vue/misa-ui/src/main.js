import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import EmployeeList from "./views/employee/EmployeeList.vue";
import CustomerList from "./views/customer/CustomerList.vue";
import MLoading from "./components/base/Loading.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const routes = [
  { path: "/cash", component: EmployeeList },
  { path: "/overview", component: CustomerList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.component("MLoading", MLoading);
app.use(router).mount("#app");
app.use(Toast, {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
});
