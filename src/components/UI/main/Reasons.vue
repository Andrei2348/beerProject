<template>
  <div class="reasons__wrapper">
    <div class="container">
      <div class="reasons__title-wrapper">
        <h2 class="reasons__title">Почему мы</h2>
      </div>
      <ul class="reasons__items">
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/solod.png" alt="Солод" />
          <p class="reasons__text">Отборный солод</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/hmel.png" alt="Солод" />
          <p class="reasons__text">Качественный хмель</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/water.png" alt="Солод" />
          <p class="reasons__text">Специальная вода</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/dev.png" alt="Солод" />
          <p class="reasons__text">Современное оборудование</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reasons {
  &__wrapper {
    padding-bottom: 130px;
    background-image: url('@/assets/images/backgrounds/reasons/background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__title-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 47px;
  }
  &__title {
    font-size: 35px;
    font-weight: 500;
    line-height: 42px;
    color: #000000;
    padding: 80px 0 0;
    position: relative;
  }
  &__title::before {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheatGreen.png');
    bottom: 46px;
    left: 50%;
    transform: translateX(-130%);
  }
  &__title::after {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheatGreen.png');
    bottom: 46px;
    left: 50%;
    transform: translateX(30%) rotate(180deg);
  }
  &__items {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  &__text {
    width: 140px;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #262022;
    text-align: center;
  }
  &__image {
    height: 100%;
    min-height: 180px;
    max-height: 180px;
    background-position: center;
    object-fit: contain;
    margin-bottom: 50px;
  }
}
</style>
