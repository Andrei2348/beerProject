<template>
  <div class="news__wrapper">
    <div class="container">
      <h2 class="news__title">Новости</h2>
      <ul class="news__items">
        <li class="news__item">
          <img class="news__item-image" src="@/assets/images/backgrounds/news/picture_01.jpg" alt="Картинка для новостей" />
          <h3 class="news__item-title">Откройте для себя наше крафтовое пиво</h3>
          <p class="news__item-text">При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок</p>
        </li>
        <li class="news__item">
          <img class="news__item-image" src="@/assets/images/backgrounds/news/picture_02.jpg" alt="Картинка для новостей" />
          <h3 class="news__item-title">Откройте для себя наше крафтовое пиво</h3>
          <p class="news__item-text">При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок</p>
        </li>
        <li class="news__item">
          <img class="news__item-image" src="@/assets/images/backgrounds/news/picture_03.jpg" alt="Картинка для новостей" />
          <h3 class="news__item-title">Откройте для себя наше крафтовое пиво</h3>
          <p class="news__item-text">При покупки 3-х бутылок нашего крафтого пива 1 бутылка в подарок</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news {
    &__wrapper{
        position: relative;
    }
    &__wrapper::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 224px;
        background-image: url('@/assets/images/backgrounds/news/background.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }
    &__title{
    font-size: 35px;
    font-weight: 500;
    line-height: 42px;
    position: relative;
    text-align: center;
    margin-bottom: 16px;
    padding-top: 125px;
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
  &__wrapper {
    padding-bottom: 100px;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 30px;
    padding-bottom: 100px;
  }
  &__item-image {
    margin-bottom: 16px;
  }
  &__item-title {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #000;
    padding-right: 10px;
    margin-bottom: 14px;
  }
  &__item-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: #000;
    padding-right: 10px;
  }
}
</style>
