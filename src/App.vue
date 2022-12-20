<template>
  <div class="container">
    <HeaderLayout></HeaderLayout>
    <HeroImg></HeroImg>
  </div>
</template>

<script setup>
import HeaderLayout from "./components/layouts/HeaderLayout.vue";
import HeroImg from "./components/HeroImg.vue";
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");
@import url("https://fonts.cdnfonts.com/css/clash-display");

* {
  box-sizing: border-box;
}

body {
  font-family: "Satoshi", sans-serif;
  margin: 0;
  padding: 0;
  /* font-family: "Clash Display", sans-serif; */
}
img {
  max-width: 100%;
}
.container {
  max-width: 1440px;
  margin: auto;
}
</style>
