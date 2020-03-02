<template>
  <div class="wrapper">
    <Top heading="Add a new bank card" />
    <h3>New card</h3>
    <Card :cardDetail="cardDetail" class="top-card" />
    <CardForm @select="changeBgColor" :cardDetail="cardDetail" />
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
export default {
  name: "AddCard",
  components: { Top, Card, CardForm },
  data: () => ({
    cardDetail: {
      id: Date.now(),
      chip: require("../assets/chip-light.svg"),
      vendor: require("../assets/vendor-bitcoin.svg"),
      cardNumber: "",
      ownerName: "",
      month: "MM",
      year: "YY",
      vendorOptions: null,
      bgColor: "#ccc"
    }
  }),
  methods: {
    changeBgColor(vendor) {
      if (vendor === "ninja-bank") {
        this.cardDetail.bgColor = "#000";
        this.cardDetail.vendor = require("../assets/vendor-ninja.svg");
      }
      if (vendor === "evil-corp") {
        this.cardDetail.bgColor = "#D92E4C";
        this.cardDetail.vendor = require("../assets/vendor-evil.svg");
      }
      if (vendor === "blockchain-inc") {
        this.cardDetail.bgColor = "#7C4FDF";
        this.cardDetail.vendor = require("../assets/vendor-blockchain.svg");
      }
      if (vendor === "bitcoin-inc") {
        this.cardDetail.bgColor = "#ffb649";
        this.cardDetail.vendor = require("../assets/vendor-bitcoin.svg");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>