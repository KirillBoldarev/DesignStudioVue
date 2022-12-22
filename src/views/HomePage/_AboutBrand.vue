<template>
  <section class="brand">
    <div class="brand__title">What makes our brand different</div>
    <div class="brand__sections">
      <div class="brand__feature" v-for="(item, i) in features" :key="i">
        <img class="brand__feature--icon" :src="item.icon" alt="Icon" />
        <h4 class="brand__feature--title">{{ item.title }}</h4>
        <span class="brand__feature--description">{{ item.description }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
    icon: "/icons/Delivery.svg",
  },
  {
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
    icon: "/icons/Check.svg",
  },
  {
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
    icon: "/icons/Card.svg",
  },
  {
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
    icon: "/icons/Flower.svg",
  },
]);
</script>

<style lang="scss" scoped>
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 35px;

  &__title {
    font-family: "Clash Display";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--purple);
  }
  &__sections {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
  }
  &__feature {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: var(--cream);
    padding: 25px;

    &--icon {
      width: 25px;
      height: 25px;
    }

    &--title {
      font-family: "Clash Display";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      color: var(--purple);
      margin: 0;
      padding: 0;
    }

    &--description {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: var(--purple);
    }
  }
}
</style>
