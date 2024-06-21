<template>
  <div class="services__header">
    <h2 class="services__title">Услуги</h2>
  </div>
  <div class="services__wrapper">

    <div class="services__card">
      <img class="services__card-img" src="@/assets/images/backgrounds/services/distrib.jpg" alt="Дистрибуция" />
      <div class="services__card-content">
        <h3 class="services__card-title">Дистрибуция</h3>
        <p class="services__card-text">Предоставляем услуги по комплектации магазинов разливного пива "под ключ"</p>
        <router-link :to="{ name: 'distribute' }" class="services__card-button"> Подробнее </router-link>
      </div>
    </div>

    <div class="services__card">
      <img class="services__card-img" src="@/assets/images/backgrounds/services/compl.jpg" alt="Комплектация магазинов" />
      <div class="services__card-content">
        <h3 class="services__card-title">Комплектация магазинов</h3>
        <p class="services__card-text">Дистрибьюция по Москве и Московской области, региональных производителей пива пивных напитков</p>
        <router-link :to="{ name: 'complectation' }" class="services__card-button"> Комплектация магазинов </router-link>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.services {
  &__wrapper {
    display: flex;
    justify-content: baseline;
  }
  &__title{
    font-size: 35px;
    font-weight: 500;
    line-height: 42px;
    position: relative;
    text-align: center;
    margin-bottom: 16px;
    padding-top: 20px;
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
  &__card {
    position: relative;
    height: 447px;
    width: 100%;
    z-index: 0;
  }
  &__card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000B2;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  &__card-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__card-content{
    position: absolute;
    bottom: 40px;
    left: 30px;
    width: 500px;
    z-index: 10;
  }
  &__card-title{
    font-size: 30px;
    line-height: 36px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 24px;
  }
  &__card-text{
    font-size: 20px;
    font-weight: 300;
    list-style: 24px;
    color: #fff;
    margin-bottom: 26px;
  }
  &__card-button{
    color: #000;
    background-color: #FDCF55;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    cursor: pointer;
    border-radius: 50px;
    padding: 12px 86px;
    display: inline-block;
    text-align: center;
  }
}
</style>
