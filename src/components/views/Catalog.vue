<template>
  <HeroSlider :name="'Каталог'" />
  <div class="container">
    <div class="catalog__wrapper">
      <SearchPanel @changeSearchParam="changeSearchParam" />
      <div class="catalog__products-wrapper" v-if="productsList.length > 0">
        <Card v-for="item in productsList" :id="item.id" :key="item.id" :title="item.title" :price="item.price" :strength="item.strength" :category="item.category" :imageUrl="item.imageUrl" />
      </div>
      <div class="catalog__products-empty" v-else>Список товаров пуст!</div>
    </div>
  </div>
  <pagination :currentPage="paginationInfo.current_page" :totalPages="paginationInfo.total_pages" @selectPage="selectPage" v-if="productsList.length > 0" />
</template>

<script setup type="ts">
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import axiosClient from '@/axiosClient.js';
import HeroSlider from '@/components/UI/HeroSlider.vue';
import Card from '@/components/UI/catalog/Card.vue';
import Pagination from '@/components/UI/catalog/Pagination.vue';
import SearchPanel from '@/components/UI/SearchPanel.vue';

const productsList = ref([]);
const paginationInfo = ref({"currentPage": 1})
const searchParam = ref('')

function selectPage(value){
  paginationInfo.value.current_page = value
  sendRequest(value, searchParam.value)
}

function changeSearchParam(param){
  searchParam.value = param
  sendRequest(1, searchParam.value)
}

const sendRequest = async (page, search = '') =>{
  let http = `?page=${page}&limit=6`
  if(search !== ''){
    http = `?title=*${search}*&page=${page}&limit=6`
  }
  const response = await axiosClient.get(http);
  productsList.value = response.data.items;
  paginationInfo.value = response.data.meta
}

onMounted(async () => {
  sendRequest(1)
});
</script>

<style scoped lang="scss">
.catalog__wrapper {
  margin-top: 35px;
  display: grid;
  grid-template-columns: (255px minmax(100px, 1fr));
  gap: 50px;
}
.catalog__products-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 214px);
  gap: 60px 70px;
}
.catalog__products-empty{
  font-size: 28px;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
}
</style>
