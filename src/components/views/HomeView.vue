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
      <div class="main__page-button--scroll">
        <p class="main__page-button--text">
          Пролистать вниз
        </p>
        <img class="main__page-mouse--image" src="@/assets/images/Icons/Mouse.png" alt="Кнопка скролл">
        <img class="main__page-arrow--image" src="@/assets/images/Icons/Arrow.png" alt="Стрелка скролл">
      </div>
    </div>
  </div>
  <h1>Домашняя страница</h1>
  <Catalog />
</template>

<script setup lang="ts">
import Slider from '@/components/UI/Slider.vue';
import Catalog from './Catalog.vue';
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
}
</style>
