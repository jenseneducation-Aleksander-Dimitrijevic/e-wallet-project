import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    cards: [
      {
        id: 1,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNumber: "0987 6543 2109 9876",
        ownerName: "Fernanda Mejia",
        validThru: "10/24",
        bgColor: "#D92E4C"
      },
      {
        id: 2,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNumber: "0987 6543 2109 9876",
        ownerName: "Måns Åkesson",
        validThru: "10/24",
        bgColor: "#7C4FDF"
      },
      {
        id: 3,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNumber: "1972 3029 1739 8133",
        ownerName: "Kalle Karlsson",
        validThru: "10/24",
        bgColor: "#000"
      }
    ]
  }),
  render: h => h(App)
}).$mount("#app");
