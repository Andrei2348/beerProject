<!-- Поиск товара и переход по ссылке на выбранный товар -->

<template>
  <div class="catalog__header">
    <h2 class="catalog__header-title">Каталог</h2>

  </div>
  <div class="catalog__products-wrapper">
    <p>{{ productsList }}</p>

  </div>
  
</template>

<script setup type="ts">
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import axiosClient from '@/axiosClient.js';



const productsList = ref([]);
onMounted(async () => {
  const response = await axiosClient.get('/');
  productsList.value = response.data;
});
</script>

