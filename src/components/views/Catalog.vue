<template>
  <h1>Каталог</h1>

  <div class="navbar__person-search">
    <input type="text" placeholder="Введите название продукта" @change="searchBeer"/>
  </div>
</template>

<script setup type="ts">
import {ref} from 'vue'

const keyword = ref('')

function searchBeer(){
console.log('hello world')
}

</script>
