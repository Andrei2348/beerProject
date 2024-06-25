<!-- @format -->
<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" :src="`src/assets/images/catalog/${imageUrl}`" :alt="title" />
    </div>
    <div class="card__content">
      <p class="card__title">{{ title }}</p>
      <p class="card__brand">{{ strength }}</p>
      <p class="card__brand">{{ category }}</p>
      <p class="card__price">{{ price }} ₽</p>
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
});
</script>

<style scoped lang="scss">
.card__image{
    height: 571px;
    width: 214px;
}


</style>
