<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: #eee;
}
</style>