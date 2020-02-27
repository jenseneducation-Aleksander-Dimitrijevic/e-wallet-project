<template>
  <form>
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
        <label for="valid-thru">Valid thru</label>
        <select v-model="cardDetail.validThru" id="valid-thru">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label for="cvv">Ccv</label>
        <input type="text" id="cvv" maxlength="3" v-model="cardDetail.cvv" />
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select id="vendor" v-model="cardDetail.vendorOptions">
      <option value="bitcoin-inc">Bitcoin Inc</option>
      <option value="blockchain-inc">Blockchain Inc</option>
      <option value="evil-corp">Evil Corp</option>
      <option value="ninja-bank">Ninja Bank</option>
    </select>
  </form>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    cardDetail: Object
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

    div {
      display: flex;
      flex-flow: column;
    }
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}
</style>