<template>
  <div class="wrapper">
    <Top heading="E-wallet" />
    <h3>Active card</h3>
    <h4 v-if="!card">No active card selected</h4>
    <Card v-else class="top-card" :cardDetail="card" />
    <CardStack @swap-card="swapCard" />
    <router-link class="btn-primary" to="/add-card">Add new card</router-link>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
export default {
  name: "Home",
  components: { Top, Card, CardStack },

  data() {
    return {
      card: this.$root.cards[0] && 0
    };
  },
  methods: {
    swapCard(data) {
      this.card = data;
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 560px;
  background: #fff;

  h3 {
    color: #999;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  h4 {
    text-align: center;
  }

  .top-card {
    &:hover {
      .delete {
        display: none;
      }
    }
  }
}

.btn-primary {
  width: 80%;
  margin: auto;
  padding: 20px;
  color: #000;
  display: block;
  transition: 0.3s;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  border: 2px solid #000;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background: #000;
  }
}
</style>
