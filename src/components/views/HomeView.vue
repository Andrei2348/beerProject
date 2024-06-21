<!-- @format -->

<template>
  <div class="main__page-wrapper">
    <Slider />
    <div class="main__page-content">
      <h1 class="main__page-title">В стремлении <span>к совершенству.</span></h1>
      <p class="main__page-text">
        В ассортименте в большом разнообразии представлены хмельные напитки собственного изготовления, а также от проверенных и надёжных партнёров – приобрести пиво оптом Москве и Московской области
        можно на выгодных условиях, а главное, будучи уверенным в отличных вкусовых характеристиках!
      </p>
      <div class="main__page-button">Перейти в каталог</div>
    </div>
    <div class="main__page-button--scroll">
      <p class="main__page-button--text">Пролистать вниз</p>
      <div class="main__page-button--wrapper" @click="scrollToElement">
        <img class="main__page-mouse--image" src="@/assets/images/Icons/Mouse.png" alt="Кнопка скролл" />
        <img class="main__page-arrow--image" src="@/assets/images/Icons/Arrow.png" alt="Стрелка скролла" />
      </div>
    </div>
  </div>
  <div class="assortment__container" ref="dataElement">
    <Assortment />
  </div>
  <Reasons />
  <About />
  <Services />
  <News />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Slider from '@/components/UI/main/Slider.vue';
import Assortment from '@/components/UI/main/Assortment.vue';
import Reasons from '@/components/UI/main/Reasons.vue';
import About from '@/components/UI/main/About.vue';
import Services from '@/components/UI/main/Services.vue';
import News from '@/components/UI/main/News.vue'

const dataElement = ref(null);
const scrollToElement = () => {
  dataElement.value.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped lang="scss">
.main {
  &__page-wrapper {
    position: relative;
    z-index: 1;
    height: 100vh;
  }
  &__page-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 30;
  }
  &__page-title {
    font-size: 80px;
    line-height: 75px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 28px;
  }
  &__page-title span {
    color: #fdcf55;
  }
  &__page-text {
    width: 920px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 40px;
  }
  &__page-button {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #000;
    display: inline-block;
    padding: 15px 58px;
    border-radius: 50px;
    background-color: #fdcf55;
    cursor: pointer;
  }
  &__page-button--wrapper {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__page-button--text {
    margin-bottom: 9px;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  &__page-mouse--image {
    height: 38px;
    width: 21px;
    display: inline-block;
    margin-bottom: 13px;
  }
  &__page-arrow--image {
    height: 28px;
    width: 7px;
    display: inline-block;
  }
  &__page-button--scroll {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom: 44px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
}
</style>
