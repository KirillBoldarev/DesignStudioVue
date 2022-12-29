<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top--buttonbox">
        <button class="header__button">
          <img class="header__icon" src="/icons/Search.svg" alt="Search" />
        </button>
        <MqResponsive target="phone"
          ><button @click="isMenuOpen = !isMenuOpen" class="header__button">
            <img class="header__icon" src="/icons/Menu.svg" alt="Profile" />
          </button>
        </MqResponsive>
        <MqResponsive target="phone">
          <div v-if="isMenuOpen" class="header__mobileMenu">
            <router-link
              class="header__nav--link"
              v-for="(link, i) in links"
              :key="i"
              :to="link.path"
              >{{ link.name }}
            </router-link>
          </div>
        </MqResponsive>
      </div>

      <router-link class="header__top--logo" to="/">AVION</router-link>

      <MqResponsive target="tablet+">
        <div class="header__top--buttonbox">
          <div class="header__button">
            <router-link to="/cart">
              <img class="header__icon" src="/icons/Cart.svg" alt="Cart" />
              <span v-if="cartStore.cart.length" class="header__counter">{{
                cartStore.cart.length
              }}</span>
            </router-link>
          </div>

          <div class="header__button">
            <router-link to="/profile">
              <img
                class="header__icon"
                src="/icons/Profile.svg"
                alt="Profile"
              />
            </router-link>
          </div>
        </div>
      </MqResponsive>
    </div>

    <nav class="header__nav">
      <router-link
        class="header__nav--link"
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        >{{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { MqResponsive } from "vue3-mq";
import { useCartStore } from "@/stores/Cart";
import { ref } from "vue";

const cartStore = useCartStore();

const links = ref([
  { name: "Plant pots", path: "/plant" },
  { name: "Ceramics", path: "/ceramics" },
  { name: "Tables", path: "/tables" },
  { name: "Chairs", path: "/chairs" },
  { name: "Crockery", path: "/crockery" },
  { name: "Tableware", path: "/tableware" },
  { name: "Cutlery", path: "/cutlery" },
]);

const isMenuOpen = ref(false);
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  height: auto;
  width: 100%;
  position: relative;

  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;

    @media (max-width: 767px) {
      border-bottom: none;
      margin: 0 15px;
    }

    &--search {
      @media (max-width: 767px) {
        order: 2;
      }
    }

    &--logo {
      font-family: "Clash Display";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #22202e;
      text-decoration: none;

      @media (max-width: 767px) {
        order: 1;
      }
    }
    &--buttonbox {
      display: flex;
      flex-direction: row;
      gap: 15px;

      @media (max-width: 767px) {
        order: 2;
      }

      @media (max-width: 320px) {
        gap: 10px;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 20px 20px;

    @media (max-width: 767px) {
      display: none;
    }

    &--link {
      font-family: var(--satoshi);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #726e8d;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__button {
    border: none;
    background-color: none;
    background: none;
    cursor: pointer;
    position: relative;
  }

  &__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    left: -45%;
    bottom: 0;
    position: absolute;
    width: 15x;
    height: 15px;
    border-radius: 50%;
    background-color: var(--purple);
    font-size: 12px;
    text-decoration: none;
    color: #ffffff;
    padding: 5px;
  }

  &__icon {
    min-width: 35px;
    min-height: 35px;

    @media (max-width: 320px) {
      min-width: 25px;
      min-height: 25px;
    }
  }

  &__mobileMenu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 81px;
    right: 0px;
    background: #ffffff;
    padding: 20px 40px;
    gap: 30px;
  }
}
</style>
