<template>
    <Swiper  
    :slides-per-view="1"
    :loop=true
    :modules="modules"
    :grabCursor=true
    navigation
    :pagination=true
    :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
    }"
    >
    <SwiperSlide v-for="slide in slides">
        <div class="slide__card">
            <img class="slide__image" :src="`src/assets/images/slides/${slide}`" alt="" />
        </div>
    </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides: Array = ['slide_01.jpg', 'slide_02.jpg', 'slide_03.jpg'];
const modules: Array = [Autoplay, Navigation, Pagination];
</script>

<style scoped>
.swiper{
    height: 100vh;
    width: 100%;
    overflow: visible;
    position: relative;
}
.swiper-pagination .swiper-pagination-bullets .swiper-pagination-horizontal{
    position: absolute;
    bottom: 100px !important;
    padding-bottom: 200px;
}
.slide__card{
    position: relative;
}
.slide__card::after {
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
  .slide__image{
    width: 100%;
    height: 100vh;
  }
</style>