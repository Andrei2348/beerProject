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
