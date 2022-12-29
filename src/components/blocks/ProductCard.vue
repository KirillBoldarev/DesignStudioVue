<template>
  <section class="product">
    <img class="product__image" :src="product.image" alt="" />
    <div class="product__description">
      <div class="product__block">
        <h2 class="product__name product__title">{{ props.product.name }}</h2>
        <strong class="product__price product__title"
          >{{ product.price }}$</strong
        >
      </div>
      <div class="product__block">
        <h3 class="product__text">Product description</h3>
        <div v-html="product.description" class="product__text"></div>
      </div>
      <div class="product__block">
        <h3 class="product__text">Dimensions</h3>
        <span
          class="product__text"
          v-for="(param, i) in product.params"
          :key="i"
          >{{ param.title }} : {{ param.value }}</span
        >
      </div>
      <div class="product__block">
        <span class="product__text product__title">Quantity </span>
        <div class="product__quantity">
          <span
            class="product__quantity--symbol"
            @click="changeQuantity('minus')"
            >-</span
          >
          <span class="product__quantity--value">{{ quantity }}</span>
          <span
            class="product__quantity--symbol"
            @click="changeQuantity('plus')"
            >+</span
          >
        </div>
      </div>
      <div class="product__block">
        <ButtonVue
          @click="cartStore.addToCart(product, quantity)"
          class="mobileFullWidth"
          :color="`purple`"
          >Add to cart</ButtonVue
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonVue from "@/components/tools/ButtonVue.vue";
import { ref } from "vue";
import { useCartStore } from "@/stores/Cart";
const cartStore = useCartStore();

const quantity = ref(1);
const props = defineProps({
  product: { type: Object, required: true },
});

function changeQuantity(action) {
  if (action === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (action === "plus") {
    quantity.value === 3 ? (quantity.value = 3) : quantity.value++;
  }
}
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

  &__title {
    @media (max-width: 767px) {
      width: 100%;
      display: block;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }

  &__image {
    display: flex;
    background-size: cover;
    background-position: center center;
    height: 100%;
    @media (max-width: 767px) {
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

  &__quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 125px;
    height: 50px;
    font-family: var(--satoshi);
    color: var(--purple);
    background-color: #ffffff;
    padding: 5px;

    @media (max-width: 767px) {
      width: 100%;
    }

    &--symbol {
      font-style: normal;
      font-size: 20px;
      line-height: 22px;
      cursor: pointer;
      color: #ebe8f4;
      font-weight: 700;
    }
    &--value {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
