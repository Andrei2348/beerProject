<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__logo-wrapper">
          <router-link :to="{ name: 'home' }" class="footer__logo-link">
            <img class="footer__logo-link--img" src="@/assets/images/logo/logoFooter.png" alt="Logo" />
            <h3 class="footer__logo-link--text">Wunderbeer</h3>
          </router-link>
          <p class="footer__logo-text">В ассортименте в большом разнообразии представлены хмельные напитки собственного изготовления, а также от проверенных и надёжных партнёров.</p>

          <ul class="footer__logo-social">
            <li class="footer__logo-item">
              <img src="@/assets/images/Icons/social/Instagram.svg" alt="Инстаграм" />
            </li>
            <li class="footer__logo-item">
              <img src="@/assets/images/Icons/social/VK.svg" alt="Вконтакте" />
            </li>
            <li class="footer__logo-item">
              <img src="@/assets/images/Icons/social/facebook.svg" alt="Фейсбук" />
            </li>
          </ul>
        </div>

        <div class="footer__contacts">
          <h3 class="footer__contacts-title">Контактная информация</h3>
          <p class="footer__contacts-text">
            <span
              ><svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.00001 0C10.8692 0 14 3.13086 14 7.00001C14 7.83399 13.9043 8.69532 13.5488 9.44728L8.57228 20.0293C8.28517 20.6309 7.65626 21 7.00001 21C6.34376 21 5.71485 20.6309 5.44141 20.0293L0.451172 9.44728C0.0957032 8.69532 0 7.83399 0 7.00001C0 3.13086 3.13086 0 7.00001 0ZM7.00006 10.5C8.9278 10.5 10.5001 8.92771 10.5001 6.99998C10.5001 5.07224 8.9278 3.49997 7.00006 3.49997C5.07233 3.49997 3.50006 5.07224 3.50006 6.99998C3.50006 8.92771 5.07233 10.5 7.00006 10.5Z"
                  fill="#FDCF55"
                />
              </svg>
            </span>
            Россия, Москва, Рязанский проспект 22, к2
          </p>

          <p class="footer__contacts-text">
            <span>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2566 10.7333C12.6591 8.21332 13.534 6.61111 12.8815 5.92667C12.8518 5.89556 12.7925 5.83333 12.7035 5.74C12.2586 5.27333 11.9546 4.9 11.7915 4.62C11.6284 4.34 11.5987 3.92 11.7025 3.36C11.8063 2.8 12.1697 2.11556 12.7925 1.30667C13.0891 0.933331 13.3635 0.630001 13.6156 0.396667C13.8677 0.163332 14.1272 0.038889 14.3942 0.0233333C14.6611 0.0077777 14.8836 0 15.0615 0C15.2395 0 15.4545 0.10111 15.7067 0.303333C15.9588 0.505557 16.1367 0.645555 16.2405 0.723333C16.3444 0.801112 16.5371 0.995554 16.8189 1.30667C17.1007 1.61778 17.2564 1.78889 17.2861 1.82C17.9979 2.56667 17.9534 4.07554 17.1526 6.34667C16.3518 8.61779 14.8391 10.9044 12.6146 13.2067C10.39 15.54 8.20259 17.1344 6.0522 17.99C3.90181 18.8456 2.47071 18.9 1.75886 18.1533C1.7292 18.1222 1.55866 17.9511 1.24722 17.64C0.935784 17.3289 0.750408 17.1344 0.691087 17.0567C0.631766 16.9789 0.498296 16.7922 0.290672 16.4967C0.0830481 16.2011 -0.0133472 15.96 0.00148305 15.7733C0.0163133 15.5867 0.0311434 15.3533 0.0459736 15.0733C0.0608039 14.7933 0.172029 14.5211 0.379653 14.2567C0.587277 13.9922 0.869048 13.7044 1.22497 13.3933C1.84785 12.8644 2.3669 12.4989 2.78214 12.2967C3.19739 12.0944 3.5978 12.0789 3.98339 12.25C4.36898 12.4211 4.6285 12.5611 4.76198 12.67C4.89545 12.7789 5.18463 13.0667 5.62954 13.5333C6.28207 14.2178 7.8244 13.2845 10.2566 10.7333Z"
                  fill="#FDCF55"
                />
              </svg>
            </span>
            <a href="tel:74957404051">+7 (495) 740-40-51</a>
          </p>

          <p class="footer__contacts-text">
            <span>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2566 10.7333C12.6591 8.21332 13.534 6.61111 12.8815 5.92667C12.8518 5.89556 12.7925 5.83333 12.7035 5.74C12.2586 5.27333 11.9546 4.9 11.7915 4.62C11.6284 4.34 11.5987 3.92 11.7025 3.36C11.8063 2.8 12.1697 2.11556 12.7925 1.30667C13.0891 0.933331 13.3635 0.630001 13.6156 0.396667C13.8677 0.163332 14.1272 0.038889 14.3942 0.0233333C14.6611 0.0077777 14.8836 0 15.0615 0C15.2395 0 15.4545 0.10111 15.7067 0.303333C15.9588 0.505557 16.1367 0.645555 16.2405 0.723333C16.3444 0.801112 16.5371 0.995554 16.8189 1.30667C17.1007 1.61778 17.2564 1.78889 17.2861 1.82C17.9979 2.56667 17.9534 4.07554 17.1526 6.34667C16.3518 8.61779 14.8391 10.9044 12.6146 13.2067C10.39 15.54 8.20259 17.1344 6.0522 17.99C3.90181 18.8456 2.47071 18.9 1.75886 18.1533C1.7292 18.1222 1.55866 17.9511 1.24722 17.64C0.935784 17.3289 0.750408 17.1344 0.691087 17.0567C0.631766 16.9789 0.498296 16.7922 0.290672 16.4967C0.0830481 16.2011 -0.0133472 15.96 0.00148305 15.7733C0.0163133 15.5867 0.0311434 15.3533 0.0459736 15.0733C0.0608039 14.7933 0.172029 14.5211 0.379653 14.2567C0.587277 13.9922 0.869048 13.7044 1.22497 13.3933C1.84785 12.8644 2.3669 12.4989 2.78214 12.2967C3.19739 12.0944 3.5978 12.0789 3.98339 12.25C4.36898 12.4211 4.6285 12.5611 4.76198 12.67C4.89545 12.7789 5.18463 13.0667 5.62954 13.5333C6.28207 14.2178 7.8244 13.2845 10.2566 10.7333Z"
                  fill="#FDCF55"
                />
              </svg>
            </span>
            <a href="tel:79259240700">+7 (925) 924-07-00</a>
          </p>

          <p class="footer__contacts-text">
            <span>
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.95 5.05933C19.616 5.42708 19.2375 5.75025 18.8367 6.02885C16.9776 7.28811 15.1072 8.55852 13.2926 9.8735C12.3574 10.5644 11.1996 11.4114 9.98615 11.4114H9.97501H9.96388C8.7504 11.4114 7.59259 10.5644 6.65743 9.8735C4.84278 8.54737 2.97246 7.28811 1.12442 6.02885C0.712501 5.75025 0.333985 5.42708 0 5.05933V13.9076C0 14.8883 0.801564 15.6906 1.78125 15.6906H18.1688C19.1485 15.6906 19.95 14.8883 19.95 13.9076V5.05933Z"
                  fill="#FDCF55"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.95 1.78303C19.95 0.802362 19.1373 0 18.1688 0H1.78125C0.59004 0 0 0.936089 0 2.02819C0 3.04229 1.12442 4.30155 1.91485 4.83646C3.64043 6.04 5.38829 7.24355 7.11388 8.45823C7.83751 8.95971 9.06212 9.98495 9.96388 9.98495H9.97501H9.98615C10.8879 9.98495 12.1125 8.95971 12.8361 8.45823C14.5617 7.24355 16.3096 6.04 18.0463 4.83646C19.026 4.15668 19.95 3.03115 19.95 1.78303Z"
                  fill="#FDCF55"
                />
              </svg>
            </span>
            <a href="mailto:wunderbeer@mail.ru">wunderbeer@mail.ru</a>
          </p>
        </div>
        <div class="footer__navigation">
          <ul class="footer__menu-items">
            <li class="footer__menu-item">
              <router-link :to="{ name: 'catalog' }" class="footer__menu-item--link">Каталог</router-link>
            </li>
            <li class="footer__menu-item">
              <router-link :to="{ name: 'distribute' }" class="footer__menu-item--link">Дистрибуция</router-link>
            </li>
            <li class="footer__menu-item">
              <router-link :to="{ name: 'complectation' }" class="footer__menu-item--link">Комплектация магазинов</router-link>
            </li>
            <li class="footer__menu-item">
              <router-link :to="{ name: 'about' }" class="footer__menu-item--link">О компании</router-link>
            </li>
            <li class="footer__menu-item">
              <router-link :to="{ name: 'contacts' }" class="footer__menu-item--link">Контакты</router-link>
            </li>
            <li class="footer__menu-item">
              <router-link :to="{ name: 'cart' }" class="footer__menu-item--link">Корзина</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <div class="footer__copyright-container">
          <p class="footer__copyright-text">ООО “Вундербир” 2010 - 2020</p>
          <p class="footer__copyright-text">Все права защищены ©</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-image: url('@/assets/images/backgrounds/footer/background.jpg');
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-top: 63px;
    padding-bottom: 60px;
  }
  &__logo-wrapper {
    transform: translateY(-33px);
    width: 360px;
  }
  &__logo-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 26px;
  }
  &__logo-link--img {
    height: 97px;
    width: 82px;
  }
  &__logo-link--text {
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
    color: #fdcf55;
    text-transform: uppercase;
  }
  &__logo-text {
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    color: #fff;
    padding-right: 10px;
    margin-bottom: 42px;
  }
  &__logo-social {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__logo-item img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  &__copyright {
    border-top: 1px solid #3f3f3f;
  }
  &__copyright-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  &__copyright-text {
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    color: #fff;
  }
  &__menu-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 10px;
  }
  &__menu-item--link {
    color: #fdcf55;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  }
  &__contacts {
    width: 240px;
  }
  &__contacts-text + .footer__contacts-text {
    margin-top: 20px;
  }
  &__contacts-text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
    padding-right: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
  }
  &__contacts-text span {
    width: 20px;
    height: 21px;
  }
  &__contacts-text a {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
  }
  &__contacts-title {
    color: #fdcf55;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 25px;
  }
}
</style>
