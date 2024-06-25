<template>
  <HeroSlider :name="'Каталог'" />
  <div class="catalog__header">
    <h2 class="catalog__header-title">Каталог</h2>
  </div>
  <div class="catalog__products-wrapper">
    <Card v-for="item in productsList" :id="item.id" :key="item.id" :title="item.title" :price="item.price" :strength="item.strength" :category="item.category" :imageUrl="item.imageUrl" />
  </div>
  {{ paginationInfo }}
  <pagination :currentPage="paginationInfo.current_page" :totalPages="paginationInfo.total_pages" @selectPage="selectPage" />
</template>

<script setup type="ts">
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import axiosClient from '@/axiosClient.js';
import HeroSlider from '@/components/UI/HeroSlider.vue';
import Card from '@/components/UI/catalog/Card.vue';
import Pagination from '@/components/UI/catalog/Pagination.vue';

const productsList = ref([]);
const paginationInfo = ref({"currentPage": 1})

function selectPage(value){
  paginationInfo.value.current_page = value
  sendRequest(value)
}


const sendRequest = async (data) =>{
  const response = await axiosClient.get(`?page=${data}&limit=6`);
  productsList.value = response.data.items;
  paginationInfo.value = response.data.meta
}

onMounted(async () => {
  sendRequest(1)
});
</script>

<style scoped lang="scss">
.catalog__products-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
