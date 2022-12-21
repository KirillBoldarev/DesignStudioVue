<template>
  <section class="hero">
    <InfoBox
      :title="'Luxury homeware for people who love timeless design quality'"
      :description="'Shop the new Spring 2022 collection today'"
      :button="'View collection'"
    ></InfoBox>
  </section>
</template>

<script setup>
import InfoBox from "./_InfoBox.vue";
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

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    padding: 50px;
    max-width: 630px;
    gap: 20px;
    height: 444px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__title {
    font-family: "Clash Display";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    color: #22202e;
    margin: 0px;
  }
  &__description {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--gray);
  }
  &__button {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--purple);
    border: none;

    width: 170px;
    height: 56px;
    padding: 10px;
  }
}
</style>
