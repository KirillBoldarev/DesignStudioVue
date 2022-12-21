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
    <button class="info__button">{{ props.button }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    required: true,
  },
  colorTitle: {
    type: String,
    required: false,
    default: "",
  },
  colorDescription: {
    type: String,
    default: "#5b5676",
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
    color: var(--dark);
    margin: 0px;
  }
  &__description {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--gray);
  }
  &__button {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--purple);
    border: none;
    cursor: pointer;
    width: 170px;
    height: 56px;
    padding: 10px;
  }
}
</style>
