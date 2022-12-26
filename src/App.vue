<template>
  <div class="container">
    <HeaderLayout></HeaderLayout>
    <router-view :products="popularProducts"></router-view>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script setup>
import HeaderLayout from "@/components/layouts/HeaderLayout.vue";
import FooterLayout from "./components/layouts/FooterLayout.vue";
import { ref, onMounted } from "vue";
import api from "./api";

const popularProducts = ref([]);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
});
</script>

<style lang="scss"></style>
