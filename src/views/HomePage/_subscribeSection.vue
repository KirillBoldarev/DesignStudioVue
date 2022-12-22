<template>
  <section class="subscribtion">
    <div class="subscribtion__text">
      <h3 class="subscribtion__title">Join the club and get the benefits</h3>
      <div class="subscribtion__description">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </div>
      <div class="subscribtion__features">
        <div class="subscribtion__features--item">
          <img
            class="subscribtion__icon"
            src="\icons\checkmark.svg"
            alt="Check"
          />
          <span>Exclusive offers</span>
        </div>
        <div class="subscribtion__features--item">
          <img
            class="subscribtion__icon"
            src="\icons\checkmark.svg"
            alt="Check"
          />
          <span>Free events</span>
        </div>
        <div class="subscribtion__features--item">
          <img
            class="subscribtion__icon"
            src="\icons\checkmark.svg"
            alt="Check"
          />
          <span>Large discounts</span>
        </div>
      </div>
    </div>
    <SubscribtionForm></SubscribtionForm>
  </section>
</template>

<script setup>
import SubscribtionForm from "../../components/forms/SubscribtionForm.vue";
</script>

<style lang="scss" scoped>
.subscribtion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url("/images/SubscribeBackground.jpg");
  background-size: cover;
  padding: 100px 10px;
  color: var(--dark);
  gap: 40px;

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
  }

  &__title {
    font-family: var(--clash);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    text-align: center;

    margin: 0;
  }

  &__description {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
  }
  &__features {
    display: flex;
    flex-direction: row;
    gap: 20px;

    &--item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
    margin: 0 10px;
  }
}
</style>
