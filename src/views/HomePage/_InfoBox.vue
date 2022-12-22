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
    <ButtonVue :color="props.buttonColor || 'primary'">{{
      buttonTitle
    }}</ButtonVue>
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
    height: 450px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    margin: 0px;
  }
  &__description {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }
}
</style>
