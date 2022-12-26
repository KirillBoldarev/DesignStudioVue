<template>
  <div class="product">
    <router-link class="product__image" :to="`/${id}`">
      <img :src="props.image" :alt="props.title" />
    </router-link>
    <router-link class="product__title" :to="`/${id}`">{{
      props.title
    }}</router-link>
    <span class="product__price">{{ props.price }}$</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 767px) {
    gap: 10px;
  }

  &__title {
    font-family: "Clash Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--purple);

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  &__price {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--purple);

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
