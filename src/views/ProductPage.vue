<template>
  <section class="productContainer">
    <loaderSpinner v-if="loading"></loaderSpinner>
    <ProductCard v-else :product="currentProduct"></ProductCard>
    <PopularProducts></PopularProducts>
    <AboutBrand></AboutBrand>
    <SubscribeSection></SubscribeSection>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import loaderSpinner from "@/components/tools/LoaderSpinner.vue";
import ProductCard from "@/components/blocks/ProductCard.vue";
import PopularProducts from "@/components/blocks/PopularProducts.vue";
import SubscribeSection from "@/components/blocks/SubscribeSection.vue";
import AboutBrand from "../components/blocks/AboutBrand.vue";
import api from "@/api.js";

const route = useRoute();

const productId = ref("");
const currentProduct = ref({});
const loading = ref(true);

onMounted(async () => {
  productId.value = route.params.id;
  currentProduct.value = await api.getProduct(productId.value);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
