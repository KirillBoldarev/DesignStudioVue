<template>
  <section class="product-4line__container">
    <div class="product-4line">
      <ProductCard
        v-for="(product, i) in props.products"
        :key="i"
        :image="product.image"
        :title="product.title"
        :price="product.price"
      ></ProductCard>
    </div>
    <button class="product-4line--button">View collection</button>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.product-4line {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;
  }
  &--button {
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
    cursor: pointer;
  }
}
</style>
