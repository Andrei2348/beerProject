<!-- @format -->

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <router-link :to="{ name: 'home' }" class="navbar__logo-wrapper">
          <img class="navbar__logo-image" src="@/assets/images/logo/logoHeader.png" alt="Наш фирменный логотип" />
          <h2 class="navbar__logo-title">Wunderbeer</h2>
        </router-link>

        <ul class="navbar__menu-items">
          <li class="navbar__menu-item">
            <router-link :to="{ name: 'catalog' }" class="navbar__menu-item--link">Каталог</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link :to="{ name: 'distribute' }" class="navbar__menu-item--link">Дистрибуция</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link :to="{ name: 'complectation' }" class="navbar__menu-item--link"
              >Комплектация магазинов</router-link
            >
          </li>
          <li class="navbar__menu-item">
            <router-link :to="{ name: 'about' }" class="navbar__menu-item--link">О компании</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link :to="{ name: 'contacts' }" class="navbar__menu-item--link">Контакты</router-link>
          </li>
        </ul>

        <div class="navbar__person-wrapper">
          <div v-if="isLogin" @click="logoutFunction" class="navbar__menu-item--link">
            <img class="navbar__person-image" src="@/assets/images/Icons/logout.svg" alt="Страница поиска" />
          </div>

          <div v-else @click="loginFunction" class="navbar__menu-item--link">
            <img class="navbar__person-image" src="@/assets/images/Icons/user.svg" alt="Страница поиска" />
          </div>

          <router-link :to="{ name: 'catalog' }" class="navbar__menu-item--link">
            <img class="navbar__person-image" src="@/assets/images/Icons/Search.svg" alt="Страница поиска" />
          </router-link>

          <router-link :to="{ name: 'cart' }" class="navbar__menu-item--link">
            <img
              class="navbar__person-image navbar__person-cart"
              src="@/assets/images/Icons/Cart.svg"
              alt="Корзина товаров"
            />
            <span v-if="isLogin && resultCount">{{ resultCount }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import store from '@/store';

const resultCount: Number = computed(() => store.state.resultCout);
const isLogin: Boolean = computed(() => store.state.isLogin);

// Временные функции для login и logout
const logoutFunction = () => {
  store.dispatch('setIsLogin', false);
};

const loginFunction = () => {
  store.dispatch('setIsLogin', true);
};
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 20;
  &__wrapper {
    position: relative;
  }
  &__logo-wrapper {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__logo-image {
    height: 111px;
    width: 94px;
    margin-bottom: 5px;
  }
  &__logo-title {
    font-size: 35px;
    font-weight: 400;
    line-height: 1;
    display: inline-block;
    text-transform: uppercase;
    color: #ffffff;
  }
  &__menu-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding-top: 190px;
  }
  &__menu-item--link {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #fff;
    display: inline-block;
    padding: 2px;
    position: relative;
    cursor: pointer;
  }
  &__person-wrapper {
    display: flex;
    align-items: center;
    gap: 35px;
    position: absolute;
    top: 72px;
    right: 0;
  }
  &__person-image {
    cursor: pointer;
    height: 28px;
  }
  &__menu-item--link span {
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    padding: 0 6px;
    border-radius: 50%;
    background-color: #fff;
    color: #000;
    font-size: 15px;
    line-height: 1.1;
    font-weight: 500;
  }
}
</style>
