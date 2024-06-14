<template>
  <h1>Инфо о выбранном пиве</h1>
  <h3>{{ beer }}</h3>
</template>

<script setup type="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '@/axiosClient'

const route = useRoute()
const beer = ref({})

onMounted(() => {
  console.log(route.params.id)
  axiosClient.get(`/?id=${route.params.id}`)
  .then(({ data }) => {
    beer.value = data[0] || {}
  })
})
</script>
