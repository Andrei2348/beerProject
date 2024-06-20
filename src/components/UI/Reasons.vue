<template>
<div class="reasons__wrapper">
    <div class="container">
      <div class="reasons__title-wrapper">
        <h2 class="reasons__tilte">Почему мы</h2>
      </div>
      <ul class="reasons__items">
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/solod.png" alt="Солод">
          <p class="reasons__text">Отборный солод</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/hmel.png" alt="Солод">
          <p class="reasons__text">Качественный хмель</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/water.png" alt="Солод">
          <p class="reasons__text">Специальная вода</p>
        </li>
        <li class="reasons__item">
          <img class="reasons__image" src="@/assets/images/sketches/dev.png" alt="Солод">
          <p class="reasons__text">Современное оборудование</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
.reasons__items{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.reasons__item{
    text-align: center;
}
.reasons__image{
    // width: 142px;
    height:100%;
    min-height:180px;
    max-height:180px;
    background-position: center;
    object-fit: contain;
}


</style>

