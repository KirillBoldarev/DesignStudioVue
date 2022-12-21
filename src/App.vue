<template>
  <div class="container">
    <HeaderLayout></HeaderLayout>
    <router-view :products="products"></router-view>
    <!-- <HomePage :products="products"></HomePage> -->
  </div>
</template>

<script setup>
import HeaderLayout from "@/components/layouts/HeaderLayout.vue";

/* import HomePage from "./views/HomePage/HomePage.vue"; */
import { ref } from "vue";

const products = ref([
  {
    title: "Lucy Lamp",
    price: 399,
    image: "/images/productsImages/LucyLamp.jpg",
  },
  {
    title: "Rustic Vase Set",
    price: 155,
    image: "/images/productsImages/RusticVaseSet.jpg",
  },
  {
    title: "The Dandy Chair",
    price: 250,
    image: "/images/productsImages/TheDandyChair.jpg",
  },
  {
    title: "Silky Vase",
    price: 125,
    image: "/images/productsImages/SilkyVase.jpg",
  },
]);
</script>

<style lang="scss"></style>
