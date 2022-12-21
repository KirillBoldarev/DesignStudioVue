<template>
  <HeroView></HeroView>
  <AboutBrand></AboutBrand>
  <Products4Columns :products="props.products"></Products4Columns>
  <IdeasView></IdeasView>
</template>

<script setup>
import HeroView from "./_HeroView.vue";
import AboutBrand from "./_AboutBrand.vue";
import Products4Columns from "../../components/tools/Products4Columns.vue";
import IdeasView from "./_IdeasView.vue";

const props = defineProps({
  products: {
    type: Array,
    required: false,
  },
});
</script>
