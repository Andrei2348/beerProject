<template>
  <div class="assortment__wrapper">
    <div class="container">
      <div class="assortment__content-wrapper">
        <h2 class="assortment__title">Наш ассортимент</h2>
      </div>
      <ul class="assortment__items">
        <li class="assortment__item">
          <BeerTraced />
          <p class="assortment__text">Пиво</p>
        </li>
        <li class="assortment__item">
          <BeerTracedNew />
          <p class="assortment__text">Пивные напитки</p>
        </li>
        <li class="assortment__item">
          <Cider />
          <p class="assortment__text">Сидр</p>
        </li>
        <li class="assortment__item">
          <LemonadeTraced />
          <p class="assortment__text">Квас</p>
        </li>
        <li class="assortment__item">
          <Lemonade />
          <p class="assortment__text">Лимонад</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import BeerTraced from './../sketches/BeerTraced.vue';
import BeerTracedNew from './../sketches/BeerTracedNew.vue';
import Cider from './../sketches/Cider.vue';
import LemonadeTraced from './../sketches/LemonadeTraced.vue';
import Lemonade from './../sketches/Lemonade.vue';
</script>
<style scoped lang="scss">
.assortment {
  &__wrapper {
    background-image: url('@/assets/images/backgrounds/assortment/background.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
  }
  &__content-wrapper{
    display: flex;
    justify-content: center;
    margin-bottom: 31px;
  }
  &__title {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    line-height: 42px;
    color: #fff;
    position: relative;
    padding-top: 63px;
  }
  &__title::before {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheat.png');
    bottom: 46px;
    left: 50%;
    transform: translateX(-130%);
  }
  &__title::after {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheat.png');
    bottom: 46px;
    left: 50%;
    transform: translateX(30%) rotate(180deg);
  }
  &__items {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    column-gap: 137px;
    row-gap: 56px;
    width: 680px;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: 45px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  &__item svg {
    margin-bottom: 24px;
  }
  &__text {
    text-align: center;
    white-space: nowrap;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: #fff;
  }
}
</style>
