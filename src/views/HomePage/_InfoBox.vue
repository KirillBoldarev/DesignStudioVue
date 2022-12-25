<template>
  <div class="info__container" :style="{ backgroundColor: props.background }">
    <div class="info__text">
      <h2 class="info__title" :style="{ color: props.colorTitle }">
        {{ props.title }}
      </h2>
      <div class="info__description" :style="{ color: props.colorDescription }">
        {{ props.description }}
      </div>
    </div>
    <ButtonVue
      class="mobileFullWidth"
      :color="props.buttonColor || 'primary'"
      >{{ buttonTitle }}</ButtonVue
    >
  </div>
</template>

<script setup>
import ButtonVue from "../../components/tools/ButtonVue.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  colorTitle: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  colorDescription: {
    type: String,
    default: "#5b5676",
    required: false,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
  buttonColor: {
    type: String,
    required: false,
  },
  background: {
    type: String,
    required: false,
    default: "#fff",
  },
});
</script>

<style lang="scss" scoped>
.info {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    padding: 50px;
    max-width: 630px;
    gap: 20px;
    height: auto;

    @media (max-width: 767px) {
      padding: 20px;
      gap: 10px;
      height: auto;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 767px) {
      gap: 10px;
    }
  }
  &__title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 140%;
    margin: 0px;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  &__description {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
