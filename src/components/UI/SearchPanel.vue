<template>
  <div class="search__panel-wrapper">
    <div class="search__input-container">
      <input class="search__input" type="text" placeholder="Начать поиск..." @input="searchBeer" />
      <img class="search__button" src="@/assets/images/Icons/Search.svg" alt="Search Button" />
    </div>

    <h3 class="search__filter-title">Категории</h3>
    <ul class="search__filter-items">
      <li class="search__filter-item">Темное</li>
      <li class="search__filter-item">Светлое</li>
      <li class="search__filter-item">Нефильрованное</li>
      <li class="search__filter-item">Фильрованное</li>
      <li class="search__filter-item">Пшеничное</li>
    </ul>
  </div>
</template>

<script setup type="ts">
import debounce from "lodash.debounce";
const emit = defineEmits(['changeSearchParam']);


const searchBeer = debounce((event) => {
    emit('changeSearchParam', event.target.value);
}, 800);
</script>

<style scoped>
.search__panel-wrapper {
  background-color: #262022;
  width: 255px;
  padding: 20px 11px 0 11px;
}
.search__input-container {
  position: relative;
  margin-bottom: 33px;
}
.search__input {
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: #000000;
  padding: 15px 40px 15px 22px;
  outline: none;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  border-radius: 50px;
}
.search__button {
  height: 28px;
  width: 28px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.search__input::placeholder {
  color: #000000;
}
.search__filter-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
  position: relative;
  padding: 7px 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid #3c3c3c;
}
.search__filter-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  background-image: url('@/assets/images/Icons/wheat.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 11px;
  width: 29px;
}
.search__filter-title::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 26px;
  transform: translateY(-50%) rotate(180deg);
  background-image: url('@/assets/images/Icons/wheat.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 11px;
  width: 29px;
}
.search__filter-items{
    padding-left: 40px;
}
.search__filter-item {
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;
}
.search__filter-item + .search__filter-item{
    margin-top: 11px;
}
</style>
