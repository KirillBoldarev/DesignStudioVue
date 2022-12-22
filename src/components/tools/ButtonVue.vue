<template>
  <button
    v-if="type === 'button'"
    :class="[
      `btn`,
      { 'btn--primary': color === 'primary' },
      { 'btn--gray': color === 'gray' },
      { 'btn--purple': color === 'purple' },
      { 'btn--white': color === 'white' },
    ]"
  >
    <slot></slot>
  </button>

  <router-link
    v-else
    :to="props.to"
    :class="[
      `btn`,
      { 'btn--primary': color === 'primary' },
      { 'btn--gray': color === 'gray' },
      { 'btn--purple': color === 'purple' },
      { 'btn--white': color === 'white' },
    ]"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
    required: false,
  },
  to: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "primary",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--satoshi);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: none;
  width: 170px;
  height: 56px;
  padding: 10px;
  cursor: pointer;

  &--primary {
    background: var(--dark);
    color: white;
  }

  &--gray {
    background: var(--gray);
    color: var(--purple);
  }

  &--purple {
    background: var(--purple);
    color: white;
  }

  &--white {
    color: var(--purple);
    background: white;
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
