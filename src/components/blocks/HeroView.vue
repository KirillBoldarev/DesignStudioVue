<template>
  <section class="hero">
    <InfoBox
      :title="'Luxury homeware for people who love timeless design quality'"
      :description="'Shop the new Spring 2022 collection today'"
      :buttonTitle="'View collection'"
    ></InfoBox>
  </section>
</template>

<script setup>
import InfoBox from "@/components/blocks/InfoBox.vue";
</script>

<style lang="scss" scoped>
.hero {
  padding: 50px;
  background-image: url(/images/Hero.jpg);
  background-size: cover;
  height: 700px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 767px) {
    height: 450px;
  }
}
</style>
