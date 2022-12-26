<template>
  <section class="product-4line__container">
    <div v-if="data" class="product-4line">
      <ProductCard
        v-for="(product, i) in popularProducts"
        :key="i"
        :id="product.id"
        :image="product.img"
        :title="product.title"
        :price="product.price"
      ></ProductCard>
    </div>
    <ButtonVue v-if="data" class="mobileFullWidth" :color="'purple'"
      >View collection</ButtonVue
    >
    <loaderSpinner v-if="!data"></loaderSpinner>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import ButtonVue from "./ButtonVue.vue";
import { ref, onMounted } from "vue";
import api from "@/api";
import loaderSpinner from "./loaderSpinner.vue";

const popularProducts = ref([]);
const data = ref(false);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  data.value = true;
});
</script>

<style lang="scss" scoped>
.product-4line {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;

    @media (max-width: 767px) {
      gap: 15px;
      padding: 10px;
    }
  }
}
</style>
