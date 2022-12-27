<template>
  <section class="product">
    <img class="product__image" :src="product.image" alt="" />
    <div class="product__description">
      <div class="product__block">
        <h2 class="product__name">{{ props.product.name }}</h2>
        <strong class="product__price">{{ product.price }}$</strong>
      </div>
      <div class="product__block">
        <h3 class="product__text">Product description</h3>
        <div v-html="product.description" class="product__text"></div>
      </div>
      <div class="product__block">
        <h3 class="product__text">Dimensions</h3>
      </div>
      <div class="product__block line">
        <ButtonVue :color="`purple`">Add to cart</ButtonVue>
        <ButtonVue :color="`white`">Save to favorites</ButtonVue>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonVue from "@/components/tools/ButtonVue.vue";
const props = defineProps({
  product: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.product {
  padding: 20px;
  gap: 0px;
  align-items: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-rows: minmax(1fr, 300px) 1fr;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__image {
    display: flex;
    background-size: cover;
    background-position: center center;
    height: 100%;
    @media (max-width: 767px) {
      /* width: 100%;
      max-height: 300px; */
    }
  }
  &__description {
    background-color: var(--cream);
    height: 100%;
    gap: 35px;

    @media (max-width: 767px) {
      gap: 15px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 15px;

    @media (max-width: 767px) {
      padding: 10px;
    }
  }

  &__name {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    color: var(--purple);
    margin: 0;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__price {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--purple);
  }
  &__text {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #2a254b;
    margin: 0px;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
.line {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
}
</style>
