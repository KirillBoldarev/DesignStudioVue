<template>
  <section class="ideas">
    <InfoBox
      :title="'It started with a small idea'"
      :description="'A global brand with local beginnings, our story begain in a small studio in South London in early 2014'"
      :button-title="'View collection'"
      :button-color="'white'"
      :background="'var(--purple)'"
      :color-title="'#FFFFFF'"
      :color-description="'#FFFFFF'"
    ></InfoBox>
    <div class="ideas__image"></div>
  </section>
</template>

<script setup>
import InfoBox from "./_InfoBox.vue";
</script>

<style lang="scss" scoped>
.ideas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 15px;

  &__image {
    background-image: url(/images/Room.jpg);
    background-size: cover;
    height: 450px;
  }
}
</style>
