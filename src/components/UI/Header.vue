<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar__menu-items">
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'catalog' }" class="navbar__menu-item--link"
            >Каталог</router-link
          >
        </li>
        <li class="navbar__menu-item">
          <router-link
            :to="{ name: 'distribute' }"
            class="navbar__menu-item--link"
            >Дистрибуция</router-link
          >
        </li>
        <li class="navbar__menu-item">
          <router-link
            :to="{ name: 'complectation' }"
            class="navbar__menu-item--link"
            >Комплектация магазинов</router-link
          >
        </li>
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'about' }" class="navbar__menu-item--link"
            >О компании</router-link
          >
        </li>
        <li class="navbar__menu-item">
          <router-link
            :to="{ name: 'contacts' }"
            class="navbar__menu-item--link"
            >Контакты</router-link
          >
        </li>
      </ul>
      <div class="navbar__person-wrapper">
        <div class="navbar__person-cart">
          <router-link :to="{ name: 'cart' }" class="navbar__menu-item--link">
            <img
              class="navbar__person-image"
              src="@/assets/images/Icons/Cart.svg"
              alt=""
            />
            <span>{{ resultCount }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import store from '@/store'

const resultCount: Number = computed(() => store.state.resultCount)
console.log(store)
</script>

<style scoped>
.navbar__menu-items {
  display: flex;
  gap: 20px;
}
.navbar__person-image {
  height: 28px;
  width: 30px;
  cursor: pointer;
}
.navbar__menu-item--link {
  cursor: pointer;
}
</style>
