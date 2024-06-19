<!-- Поиск товара и переход по ссылке на выбранный товар -->

<template>
  <h1>Каталог</h1>
  <p>{{ productsList }}</p>
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
