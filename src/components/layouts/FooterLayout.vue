<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__top">
        <div class="footer__menu">
          <h5 class="footer__menu--title">Menu</h5>
          <router-link class="footer__menu--link" to="/newArrivals"
            >New arrivals</router-link
          >
          <router-link class="footer__menu--link" to="/Best sellers"
            >Best sellers</router-link
          >
          <router-link class="footer__menu--link" to="/Recently_viewed"
            >Recently viewed</router-link
          >
          <router-link class="footer__menu--link" to="/Popular"
            >Popular this week</router-link
          >
          <router-link class="footer__menu--link" to="/Products"
            >All products</router-link
          >
        </div>
        <div class="footer__menu">
          <h5 class="footer__menu--title">Categories</h5>
          <router-link class="footer__menu--link" to="/Crockery"
            >Crockery</router-link
          >
          <router-link class="footer__menu--link" to="/Furniture"
            >Furniture</router-link
          >
          <router-link class="footer__menu--link" to="/Homeware"
            >Homeware</router-link
          >
          <router-link class="footer__menu--link" to="/PlantPots"
            >Plant pots</router-link
          >
          <router-link class="footer__menu--link" to="/Chairs"
            >Chairs</router-link
          >
        </div>
        <div class="footer__menu">
          <h5 class="footer__menu--title">Our company</h5>
          <router-link class="footer__menu--link" to="/about"
            >About us</router-link
          >
          <router-link class="footer__menu--link" to="/Vacancies"
            >Vacancies</router-link
          >
          <router-link class="footer__menu--link" to="/ContactUs"
            >Contact us</router-link
          >
          <router-link class="footer__menu--link" to="/Privacy"
            >Privacy</router-link
          >
          <router-link class="footer__menu--link" to="/ReturnsPolicy"
            >Returns policy</router-link
          >
        </div>
        <div class="footer__menu">
          <h5 class="footer__menu--title">Join our mailing list</h5>
          <SubscribtionForm
            :buttonColor="'white'"
            :bgInput="'#5b5676'"
            placeholder="your@email.com"
          ></SubscribtionForm>
        </div>
      </div>

      <div class="footer__bottom">
        <strong class="footer__copyright">Copyright 2022 Avion LTD</strong>
        <div class="footer__links"></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribtionForm from "../forms/SubscribtionForm.vue";
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--purple);

  &__content {
    padding: 20px;
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    padding: 20px;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;

    &--title {
      display: block;
      font-family: var(--clash);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      margin: 0;
    }
    &--link {
      display: block;
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #5b5676;
    padding: 10px;
  }

  &__copyright {
    font-family: var(--satoshi);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
}
</style>
