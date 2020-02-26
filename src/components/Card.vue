<template>
  <div
    @click="$emit('swap-card', cardDetail)"
    class="card"
    :style="{'background-color': cardDetail.bgColor}"
  >
    <div class="vendor">
      <img :src="cardDetail.chip" alt="vendor" />
      <img :src="cardDetail.vendor" alt="vendor" />
    </div>
    <h1>{{cardDetail.cardNumber}}</h1>
    <ul>
      <li>
        <p>Cardholder name</p>
        <h2>{{cardDetail.ownerName}}</h2>
      </li>
      <li>
        <p>Valid thru</p>
        <h2>{{cardDetail.validThru}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardDetail"]
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
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(#000, 0.2);
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
        text-transform: uppercase;
      }
      &:nth-child(2) {
        text-align: right;
      }
    }
  }
}
</style>