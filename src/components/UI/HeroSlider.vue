<template>
  <div class="hero__wrapper">
    <Swiper
      :slides-per-view="1"
      :loop="true"
      :modules="modules"
      :navigation="false"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="slide in slides">
        <div class="slide__card">
          <img class="slide__image" :src="`src/assets/images/slides/${slide}`" alt="Слайд" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="hero__content">
      <div class="container">
        <h3 class="hero__title">{{ name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

defineProps({
  name: String,
});

const slides: Array = ['hero_slide01.jpg', 'hero_slide02.jpg', 'hero_slide03.jpg'];
const modules: Array = [Autoplay, Navigation];
</script>

<style scoped lang="scss">
.swiper {
  height: 390px;
  width: 100%;
  overflow: visible;
  position: relative;
}
.slide__card {
  position: relative;
}
.slide__card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 390px;
  background-color: #00000099;
  z-index: 2;
}
.slide__image {
  width: 100%;
  height: 390px;
}
.hero {
  &__wrapper {
    position: relative;
  }
  &__content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 20;
  }
  &__title {
    font-size: 50px;
    line-height: 60px;
    font-weight: 500;
    color: #fff;
  }
}
</style>
