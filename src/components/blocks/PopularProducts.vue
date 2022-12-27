<template>
  <section class="product-4line__container">
    <loaderSpinner v-if="loading"></loaderSpinner>
    <div v-if="!loading" class="product-4line">
      <ProductCardMini
        v-for="(product, i) in popularProducts"
        :key="i"
        :id="product.id"
        :image="product.img"
        :title="product.title"
        :price="product.price"
      ></ProductCardMini>
    </div>
    <ButtonVue v-if="!loading" class="mobileFullWidth" :color="'purple'"
      >View collection</ButtonVue
    >
  </section>
</template>

<script setup>
import ProductCardMini from "@/components/blocks/ProductCardMini.vue";
import ButtonVue from "@/components/tools/ButtonVue.vue";
import loaderSpinner from "@/components/tools/loaderSpinner.vue";
import { ref, onMounted } from "vue";
import api from "@/api";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
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
