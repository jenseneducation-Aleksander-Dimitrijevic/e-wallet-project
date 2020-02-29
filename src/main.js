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
        vendor: require("./assets/vendor-evil.svg"),
        cardNumber: "0987654321099876",
        ownerName: "Fernanda Mejia",
        month: "02",
        year: "21",
        bgColor: "#D92E4C"
      },
      {
        id: 2,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-blockchain.svg"),
        cardNumber: "0987654321099876",
        ownerName: "Måns Åkesson",
        month: "05",
        year: "24",
        bgColor: "#7C4FDF"
      },
      {
        id: 3,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-ninja.svg"),
        cardNumber: "1972302917398133",
        ownerName: "Kalle Karlsson",
        month: "06",
        year: "25",
        bgColor: "#000"
      }
    ]
  }),
  mounted() {
    this.$root.$on("add-card", data => {
      this.cards.push(data);
      console.log(data);
    });
  },
  render: h => h(App)
}).$mount("#app");
