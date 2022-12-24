<template>
  <form class="subscribe" action="submit">
    <input
      class="subscribe__input"
      type="text"
      :placeholder="props.placeholder"
      :style="{ background: props.bgInput, color: props.colorText }"
    />
    <ButtonVue :color="props.buttonColor || 'purple'">Sign up</ButtonVue>
  </form>
</template>

<script setup>
import ButtonVue from "../tools/ButtonVue.vue";

const props = defineProps({
  buttonColor: {
    type: String,
    required: false,
  },
  bgInput: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  colorText: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.subscribe {
  display: grid;
  grid-template-columns: 3fr 1fr;
  background: none;
  padding: 0;
  gap: 0px;

  &__input {
    padding: 10px;
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--purple);
    border: none;
    height: 100%;
    max-height: 56px;

    @media (max-width: 767px) {
      font-size: 12px;
      padding: 5px;
      line-height: 14px;
    }

    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
  }
}
</style>
