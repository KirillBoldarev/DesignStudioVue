<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top--buttonbox">
        <button class="header__button">
          <img src="/icons/Search.svg" alt="Search" />
        </button>
        <MqResponsive target="phone"
          ><button class="header__button">
            <img src="/icons/Menu.svg" alt="Profile" /></button
        ></MqResponsive>
      </div>

      <router-link class="header__top--logo" to="/">AVION</router-link>

      <MqResponsive target="tablet+">
        <div class="header__top--buttonbox">
          <router-link to="/cart">
            <img src="/icons/Shop.svg" alt="Shop" />
          </router-link>

          <router-link to="/profile">
            <img src="/icons/Profile.svg" alt="Profile" />
          </router-link>
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

import { ref } from "vue";
const links = ref([
  { name: "Plant pots", path: "/plant" },
  { name: "Ceramics", path: "/ceramics" },
  { name: "Tables", path: "/tables" },
  { name: "Chairs", path: "/chairs" },
  { name: "Crockery", path: "/crockery" },
  { name: "Tableware", path: "/tableware" },
  { name: "Cutlery", path: "/cutlery" },
]);
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  height: auto;
  width: 100%;

  &__button {
    border: none;
    background-color: none;
    background: none;
    cursor: pointer;
  }

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
    }
  }
}
</style>
