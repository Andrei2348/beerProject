<template>
  <h1>Домашняя страница</h1>
  <p>{{ productsList }}</p>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import store from "@/store"
import axiosClient from '@/axiosClient.js'


const productsList = ref([])
onMounted(async () => {
  const response = await axiosClient.get('/')
  productsList.value = response.data
})

</script>
