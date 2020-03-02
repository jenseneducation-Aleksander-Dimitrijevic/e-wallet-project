import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    cards: []
  }),
  mounted() {
    if (localStorage.getItem("card")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("card"));
      } catch (error) {
        console.log(error);
      }
    }

    this.$root.$on("add-card", card => {
      this.cards.push(card);
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem("card", parsed);
    });

    this.$root.$on("del-card", id => {
      this.cards = JSON.parse(localStorage.getItem("card"));
      this.cards = this.cards.filter(card => card.id != id);
      localStorage.setItem("card", JSON.stringify(this.cards));
    });
  },
  render: h => h(App)
}).$mount("#app");
