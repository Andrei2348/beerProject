<template>
  <nav class="navbar">
    <ul class="navbar__menu-items">
      <li class="navbar__menu-item">
        <router-link to="/catalog" class="navbar__menu-item--link"
          >Каталог</router-link
        >
      </li>
      <li class="navbar__menu-item">
        <router-link to="/distribute" class="navbar__menu-item--link"
          >Дистрибуция</router-link
        >
      </li>
      <li class="navbar__menu-item">
        <router-link to="/complectation" class="navbar__menu-item--link"
          >Комплектация магазинов</router-link
        >
      </li>
      <li class="navbar__menu-item">
        <router-link to="/about" class="navbar__menu-item--link"
          >О компании</router-link
        >
      </li>
      <li class="navbar__menu-item">
        <router-link to="/contacts" class="navbar__menu-item--link"
          >Контакты</router-link
        >
      </li>
    </ul>
    <div class="navbar__person-wrapper">
      <div class="navbar__person-cart">
        <router-link to="/cart" class="navbar__menu-item--link">
          <img
            class="navbar__person-image"
            src="@/assets/images/Icons/Cart.svg"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>

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
