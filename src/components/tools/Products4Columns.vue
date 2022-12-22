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
    <ButtonVue :color="'purple'">View collection</ButtonVue>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import ButtonVue from "./ButtonVue.vue";

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
}
</style>
