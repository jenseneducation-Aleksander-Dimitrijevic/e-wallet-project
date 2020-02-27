<template>
  <div class="wrapper">
    <Top heading="Add a new bank card" />
    <h3>New card</h3>
    <Card :cardDetail="cardDetail" />
    <CardForm :cardDetail="cardDetail" />
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
      chip: require("../assets/chip-light.svg"),
      vendor: require("../assets/vendor-bitcoin.svg"),
      cardNumber: "",
      ownerName: "",
      validThru: "",
      vendorOptions: null,
      cvv: "",
      bgColor: "#ccc"
    }
  })
};
</script>

<style lang="scss" scoped>
</style>