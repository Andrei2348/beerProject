<!-- @format -->

<template>
  <div class="main__page-wrapper">
    <img
      class="main__page-slide"
      src="@/assets/images/slides/slide_01.jpg"
      alt="Слайд главной страницы"
    />
    <div class="main__page-content">
      <h1 class="main__page-title">
        В стремлении <span>к совершенству.</span>
      </h1>
      <p class="main__page-text">
        В ассортименте в большом разнообразии представлены хмельные напитки
        собственного изготовления, а также от проверенных и надёжных партнёров –
        приобрести пиво оптом Москве и Московской области можно на выгодных
        условиях, а главное, будучи уверенным в отличных вкусовых
        характеристиках!
      </p>
    </div>
  </div>
  <h1>Домашняя страница</h1>
  <p>{{ productsList }}</p>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import axiosClient from '@/axiosClient.js';

const productsList = ref([]);
onMounted(async () => {
  const response = await axiosClient.get('/');
  productsList.value = response.data;
});
</script>
<style scoped>
.main__page-wrapper {
  position: relative;
  z-index: -1;
  height: 100vh;
}
.main__page-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  z-index: 1;
}
.main__page-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000099;
  z-index: 2;
}
.main__page-content{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
}
</style>
