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
          <TransitionGroup name="slide-fade">
            <div
              v-for="product in cartStore.cart"
              :key="product.id"
              class="cart__content--product"
            >
              <div class="product__about">
                <div class="product__image">
                  <img :src="product.image" alt="Image" />
                </div>

                <div class="product__textbox">
                  <h4 class="product__name">
                    {{ product.name }}
                  </h4>
                  <span class="product__price">{{ product.price }} $</span>
                  <MqResponsive target="phone">
                    <div class="product__quantity">
                      <span
                        class="product__quantity--symbol"
                        @click="cartStore.changeQuantity(product, 'minus')"
                      >
                        -
                      </span>
                      <span class="product__quantity--value">{{
                        product.quantity
                      }}</span>
                      <span
                        class="product__quantity--symbol"
                        @click="cartStore.changeQuantity(product, 'plus')"
                      >
                        +
                      </span>
                    </div>
                  </MqResponsive>
                </div>
              </div>

              <MqResponsive target="tablet+">
                <div class="product__quantity">
                  <span
                    class="product__quantity--symbol"
                    @click="cartStore.changeQuantity(product, 'minus')"
                  >
                    -
                  </span>
                  <span class="product__quantity--value">{{
                    product.quantity
                  }}</span>
                  <span
                    class="product__quantity--symbol"
                    @click="cartStore.changeQuantity(product, 'plus')"
                  >
                    +
                  </span>
                </div>
              </MqResponsive>

              <div class="product__total">
                {{ calculatePrice(product.price, product.quantity) }} $
              </div>
              <div class="product__delete">
                <img
                  @click="cartStore.deleteFromCart(product)"
                  src="/icons/Close.svg"
                  alt="Close"
                />
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div class="cart__footer">
        <span class="cart__footer--amount"
          >Subtotal
          <span class="cart__footer--total">{{ totalPrice }} $</span></span
        >
        <span class="cart__footer--info"
          >Taxes and shipping are calculated at checkout</span
        >
        <ButtonVue class="mobileFullWidth" :color="'purple'"
          >Go to checkout</ButtonVue
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonVue from "@/components/tools/ButtonVue.vue";
import { useCartStore } from "@/stores/Cart.js";
import { computed } from "vue";
import { MqResponsive } from "vue3-mq";

const cartStore = useCartStore();

function calculatePrice(price, quantity) {
  return price * quantity;
}

const totalPrice = computed(() => {
  const total = cartStore.cart.reduce(
    (accum, product) => accum + product.quantity * product.price,
    0
  );
  return Math.floor(total * 100) / 100;
});
</script>

<style lang="scss" scoped>
.cart {
  background: #f9f9f9;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #ffffff;

    @media (max-width: 767px) {
      padding: 15px;
    }
    @media (max-width: 450px) {
      padding: 10px;
    }
  }
  &__title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;
    color: var(--purple);

    @media (max-width: 767px) {
      font-size: 24px;
    }
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
      margin: 0;

      & span:first-child {
        text-align: left;
      }

      @media (max-width: 767px) {
        display: none;
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
      position: relative;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    padding: 10px;
    color: #4e4d93;

    &--amount {
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      text-align: right;
    }

    &--info {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: right;
    }

    &--total {
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      text-align: right;
      color: var(--purple);
      padding: 0px 10px;
    }
  }
}

.product {
  &__image {
    display: flex;
    width: 150px;
    height: 150px;
    text-align: center;

    @media (max-width: 767px) {
      display: grid;
      width: auto;
      height: auto;
      grid-area: a;
    }

    @media (max-width: 400px) {
      display: grid;
      min-width: 150px;
      min-height: 150px;
      grid-area: a;
    }
  }

  &__about {
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__textbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--purple);
    justify-content: space-around;

    @media (max-width: 767px) {
      width: 100%;
      align-items: center;
      grid-area: b;
    }
  }

  &__name {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin: 0px;

    @media (max-width: 767px) {
      text-align: center;
      font-size: 16px;
    }
  }

  &__price {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  &__quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    min-width: 150px;
    font-family: var(--satoshi);
    color: var(--purple);
    background-color: #ffffff;
    gap: 10px;
    padding: 15px;
    height: 100%;

    @media (max-width: 767px) {
      width: 100%;
      grid-area: c;
      padding: 5px;
      gap: 20px;
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

    @media (max-width: 767px) {
      display: none;
    }
  }
  &__delete {
    position: absolute;
    top: 50%;
    right: 0;
    width: 15px;
    height: 15px;
    cursor: pointer;

    @media (max-width: 767px) {
      top: 5%;
    }
  }
}
</style>
