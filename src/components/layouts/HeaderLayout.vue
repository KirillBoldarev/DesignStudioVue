<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top--search">
        <img src="/icons/Search.svg" alt="Search" />
      </div>
      <router-link class="header__top--logo" to="/">AVION</router-link>
      <div class="header__top--buttonbox">
        <div class="header__top--button">
          <router-link to="/cart">
            <img src="/icons/Shop.svg" alt="Shop" />
          </router-link>
        </div>
        <div class="header__top--button">
          <router-link to="/profile">
            <img src="/icons/Profile.svg" alt="Profile" />
          </router-link>
        </div>
      </div>
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
  height: 132px;
  width: 100%;

  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;

    &--logo {
      font-family: "Clash Display";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #22202e;
    }
    &--buttonbox {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
  }
  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 20px 20px;

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
