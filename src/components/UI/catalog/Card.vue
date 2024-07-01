<!-- @format -->
<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" :src="`src/assets/images/catalog/${imageUrl}`" :alt="title" />
    </div>
    <div class="card__content">
      <p class="card__title">{{ title }}</p>
      <p class="card__brand card__strength">{{ strength }}</p>
      <p class="card__brand" v-for="item in category" :key="item">{{ item }}</p>
      <p class="card__price">{{ price }} ₽</p>
      <button class="card__button">Купить</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  price: Number,
  strength: Number,
  category: Array,
  imageUrl: String,
  strength: String,
});
</script>

<style scoped lang="scss">
.card {
  &__image {
    height: 571px;
    width: 214px;
  }
  &__content {
    text-align: center;
  }
  &__title {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    color: #000;
  }
  &__strength {
    margin-right: 8px;
  }
  &__brand {
    display: inline-block;
    margin-top: 3px;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    color: #000;
  }
  &__price {
    margin-top: 8px;
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    color: #000;
  }
  &__button {
    display: inline-block;
    cursor: pointer;
    padding: 10px 61px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #000;
    text-align: center;
    background-color: #fdcf55;
    outline: none;
    margin-top: 7px;
  }
}
</style>
