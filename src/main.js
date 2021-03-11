import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "tailwindcss/tailwind.css";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    nano: 300,
    // => @media (min-width: 280px) { ... }
    sm: 640,
    // => @media (min-width: 640px) { ... }
    md: 768,
    // => @media (min-width: 768px) { ... }
    ml: 885,
    // => @media (min-width: 885px) { ... }
    lg: 1024,
    // => @media (min-width: 1024px) { ... }
    xl: 1280,
    // => @media (min-width: 1280px) { ... }
    desktop: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
