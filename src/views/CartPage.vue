<template>
  <section class="cart">
    <div class="cart__container">
      <h2 class="cart__title">Your shopping cart</h2>
      <div class="cart__content">
        <div class="cart__content--title">
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div class="cart__content--list">
          <div
            v-for="(product, i) in cartStore.cart"
            :key="i"
            class="cart__content--product"
          >
            <div class="product__about">
              <div class="product__image">
                <img :src="product.image" alt="Image" />
              </div>
              <div class="product__textbox">
                <h4 class="product__name">{{ product.name }}</h4>

                <span class="product__price">{{ product.price }} $</span>
              </div>
            </div>
            <div class="product__quantity">
              <span
                class="product__quantity--symbol"
                @click="cartStore.changeQuantity(product, 'minus')"
                >-</span
              >
              <span class="product__quantity--value">{{
                product.quantity
              }}</span>
              <span
                class="product__quantity--symbol"
                @click="cartStore.changeQuantity(product, 'plus')"
                >+</span
              >
            </div>
            <div class="product__total">
              {{ calculatePrice(product.price, product.quantity) }} $
            </div>
          </div>
        </div>
      </div>
      <div class="cart__footer">
        <strong class="cart__amount">Subtotal </strong>
        <ButtonVue :color="'purple'">Go to checkout</ButtonVue>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonVue from "@/components/tools/ButtonVue.vue";
import { useCartStore } from "@/stores/Cart.js";

const cartStore = useCartStore();

function calculatePrice(price, quantity) {
  return price * quantity;
}
</script>

<style lang="scss" scoped>
.cart {
  background: #f9f9f9;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: #ffffff;
  }
  &__title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;
    color: var(--purple);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &--title {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: var(--purple);
      text-align: center;

      & span:first-child {
        text-align: left;
      }
    }

    &--list {
      display: flex;
      flex-direction: column;
      border-top: 2px solid #ebe8f4;
      border-bottom: 2px solid #ebe8f4;
      padding: 5px;
      gap: 20px;
    }

    &--product {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    padding: 10px;
  }
}

.product {
  &__about {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__image img {
    max-width: 300px;
    max-height: 150px;
  }

  &__textbox {
    display: flex;
    flex-direction: column;
    color: var(--purple);
    justify-content: space-around;
    padding: 10px;
  }

  &__name {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin: 0px;
  }

  &__description {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }

  &__price {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  &__quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    height: 100%;
    font-family: var(--satoshi);
    color: var(--purple);
    background-color: #ffffff;
    padding: 5px;

    @media (max-width: 767px) {
      width: 100%;
    }
    &--symbol {
      font-style: normal;
      font-size: 22px;
      line-height: 22px;
      cursor: pointer;
      color: #ebe8f4;
      font-weight: 700;
    }
    &--value {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
