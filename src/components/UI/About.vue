<template>
  <div class="about__header">
    <div class="container">
      <h2 class="about__header-title">“Чудесное пиво, для замечательных людей”</h2>
    </div>
  </div>
  <div class="about__content">
    <div class="about__content-wrapper">
      <div class="about__content-info">
        <h2 class="about__content-title">О компании</h2>
        <p class="about__content-text">
          Приветствуем на официальном сайте компании «Вундербир» – опытного и квалифицированного производителя и поставщика вкусного, качественного пива! В ассортименте в большом разнообразии
          представлены хмельные напитки собственного изготовления, а также от проверенных и надёжных партнёров – приобрести пиво оптом Москве и Московской области можно на выгодных условиях, а
          главное, будучи уверенным в отличных вкусовых характеристиках!Приветствуем на официальном сайте компании «Вундербир» – опытного и квалифицированного производителя и поставщика вкусного,
          качественного пива! В ассортименте в большом разнообразии представлены хмельные напитки собственного изготовления, а также от проверенных и надёжных партнёров – приобрести пиво оптом Москве
          и Московской области можно на выгодных условиях, а главное, будучи уверенным в отличных вкусовых характеристиках!
        </p>

        <router-link :to="{ name: 'about' }" class="about__content-button"> Подробнее </router-link>
      </div>
      <div class="about__content-photo"><img src="@/assets/images/backgrounds/about/man&beer.jpg" alt="" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about__header {
  background-image: url('@/assets/images/backgrounds/about/header.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.about__header-title {
  width: 511px;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  padding: 86px 10px 78px;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
}
.about__content {
  &-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 30px;
    position: relative;
    padding-bottom: 90px;
  }
  &-wrapper::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 330px;
    background-image: url('@/assets/images/backgrounds/about/asideDecorate.png');
    background-repeat: no-repeat;
    background-position: top left;
    background-size: contain;
  }
  &-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 42px;
    color: #000000;
    margin-bottom: 18px;
    position: relative;
    padding-top: 63px;
  }
  &-title::before {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheatGreen.png');
    bottom: 40px;
    left: 0;
  }
  &-title::after {
    content: '';
    position: absolute;
    height: 18px;
    width: 47px;
    background-image: url('@/assets/images/Icons/wheatGreen.png');
    bottom: 40px;
    left: 50px;
    transform: translateX(30%) rotate(180deg);
  }
  &-photo {
    height: 610px;
    width: 994px;
  }
  &-info {
    width: 540px;
  }
  &-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
    color: #000000;
    margin-bottom: 26px;
  }
  &-button {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #000000;
    padding: 12px 86px;
    display: inline-block;
    border-radius: 50px;
    background-color: #fdcf55;
  }
}
</style>
