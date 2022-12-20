<template>
  <div class="hero">
    <div class="hero__info">
      <div class="hero__text">
        <h2 class="hero__title">
          Luxury homeware for people who love timeless design quality
        </h2>
        <div class="hero__description">
          Shop the new Spring 2022 collection today
        </div>
      </div>
      <button class="hero__button">View collection</button>
    </div>
  </div>
</template>

<script setup></script>

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
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #5b5676;
  }
  &__button {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #2a254b;
    border: none;

    width: 170px;
    height: 56px;
    padding: 10px;
  }
}
</style>
