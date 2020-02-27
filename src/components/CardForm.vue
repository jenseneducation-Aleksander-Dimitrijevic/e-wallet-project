<template>
  <form @submit.prevent="addCard">
    <label for="card-number">Card number</label>
    <input
      id="card-number"
      v-model="cardDetail.cardNumber"
      type="text"
      maxlength="16"
      placeholder="XXXX-XXXX-XXXX-XXXX"
    />

    <label for="name">Cardholder name</label>
    <input type="text" id="name" v-model="cardDetail.ownerName" placeholder="Firstname Lastname" />
    <div>
      <div>
        <label for="month">Month</label>
        <select v-model="cardDetail.month" id="month">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label for="year">Year</label>
        <select v-model="cardDetail.year" id="year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select
      id="vendor"
      v-model="cardDetail.vendorOptions"
      @change="$emit('select', cardDetail.vendorOptions)"
    >
      <option value="bitcoin-inc">Bitcoin Inc</option>
      <option value="blockchain-inc">Blockchain Inc</option>
      <option value="evil-corp">Evil Corp</option>
      <option value="ninja-bank">Ninja Bank</option>
    </select>
    <button class="btn-primary">Add card</button>
  </form>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    cardDetail: Object
  },
  methods: {
    addCard() {
      this.$root.$emit("add-card", this.cardDetail);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  margin: 4rem auto;

  label {
    display: block;
    margin: 2rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  div {
    display: flex;
    justify-content: space-between;

    select {
      width: 190px;
    }

    div {
      display: flex;
      flex-flow: column;
    }
  }

  input,
  select,
  button {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 20px;
    cursor: pointer;
    margin-top: 1rem;
    background: #fff;
  }
}
</style>