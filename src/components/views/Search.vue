<!-- Поиск товара и переход по ссылке на выбранный товар -->

<template>
    <h1>Каталог</h1>
  
    <div class="navbar__person-search">
      <input
        v-model="keyword"
        type="text"
        placeholder="Введите название продукта"
        @input="searchBeer"
      />
    </div>
    <div v-for="beerCard of beer" :key="beer.id">
      <router-link :to="{ name: 'beerDetails', params: { id: beerCard.id } }">{{
        beerCard
      }}</router-link>
    </div>
  </template>
  
  <script setup type="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  
  import store from '@/store'
  
  const router = useRouter()
  const keyword = ref('')
  const beer = computed(() => store.state.searchedBeer)
  
  function searchBeer(event){
    store.dispatch('searchBeer', event.target.value)
  }
  
  onMounted(() => {
    console.log(router.params)
    // keyword.value = router.params.name
  })
  </script>
  
