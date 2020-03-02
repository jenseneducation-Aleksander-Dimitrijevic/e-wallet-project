<template>
  <div
    @click="$emit('swap-card', cardDetail)"
    class="card"
    :style="{ 'background-color': cardDetail.bgColor }"
  >
    <span class="delete" @click="deleteCard">&times;</span>
    <div class="vendor">
      <img :src="cardDetail.chip" alt="vendor" />
      <img :src="cardDetail.vendor" alt="vendor" />
    </div>
    <h1 v-if="cardDetail.cardNumber">{{ splitStr }}</h1>
    <ul>
      <li>
        <p>Cardholder name</p>
        <h2>{{ cardDetail.ownerName }}</h2>
      </li>
      <li>
        <p>Valid thru</p>
        <div>
          <h2>{{ cardDetail.month }}</h2>
          <h2 v-show="cardDetail.year">/</h2>
          <h2>{{ cardDetail.year }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardDetail"],
  computed: {
    splitStr() {
      let ccNum = this.cardDetail.cardNumber;
      let ccNumSpaces = ccNum.match(/.{1,4}/g);
      return ccNumSpaces.join(" ");
    }
  },
  methods: {
    deleteCard() {
      if (confirm("Delete this card?")) {
        this.$root.$emit("del-card", this.cardDetail.id);
      }
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  z-index: 1;
  margin: auto;
  height: 250px;
  display: flex;
  padding: 1rem;
  color: #fff;
  flex-flow: column;
  position: relative;
  border-radius: 10px;
  backface-visibility: hidden;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(#000, 0.2);
  text-shadow: 0 0 5px rgba(#000, 0.4);

  .delete {
    width: 30px;
    height: 30px;
    top: -10px;
    right: -10px;
    padding: 10px;
    display: flex;
    color: #fff;
    font-size: 2rem;
    background: rgb(219, 26, 26);
    border-radius: 50%;
    position: absolute;
    align-items: center;
    justify-content: center;
    transform: scale(0);
  }

  &:hover {
    .delete {
      transition: 0.3s;
      cursor: pointer;
      transform: scale(1);
      box-shadow: 0 0 15px rgba(#000, 0.5);
    }
  }

  .vendor {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin: 1rem 0;
    letter-spacing: 2px;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;

    li {
      p {
        font-size: 0.9rem;
      }
      p,
      h2 {
        text-transform: uppercase;
      }

      h2 {
        font-size: 1.2rem;
      }

      &:nth-child(2) {
        text-align: right;
        div {
          text-align: right;
          h2 {
            display: inline;
          }
        }
      }
    }
  }
}
</style>
