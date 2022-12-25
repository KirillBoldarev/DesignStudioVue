<template>
  <HeroView></HeroView>
  <AboutBrand></AboutBrand>
  <Products4Columns :products="props.products"></Products4Columns>
  <IdeasView></IdeasView>
  <SubscribeSection></SubscribeSection>
</template>

<script setup>
import HeroView from "./_HeroView.vue";
import AboutBrand from "./_AboutBrand.vue";
import Products4Columns from "../../components/tools/Products4Columns.vue";
import IdeasView from "./_IdeasView.vue";
import SubscribeSection from "./_subscribeSection.vue";

/* import { MqResponsive } from "vue3-mq"; */

const props = defineProps({
  products: {
    type: Array,
    required: false,
  },
});
</script>
