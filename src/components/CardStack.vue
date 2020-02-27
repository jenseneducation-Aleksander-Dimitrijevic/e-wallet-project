<template>
  <div class="card-stack">
    <Card
      @swap-card="$emit('swap-card', card)"
      v-for="card in cards"
      :key="card.id"
      :cardDetail="card"
      class="card-item"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardStack",
  props: {
    cardDetail: Object
  },
  components: { Card },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-stack {
  display: grid;
  margin: 4rem 0 14rem;
  grid-auto-rows: 4rem;

  .card-item {
    transition: 0.3s;

    &:hover {
      transform: translateY(-20px);
    }
  }
}
</style>