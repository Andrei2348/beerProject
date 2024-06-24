<template>
  <main class="main">
    <Navbar />
    <div class="main__router-wrapper">
      <router-view />
    </div>
    <Footer class="main__footer-wrapper" />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/UI/Header.vue';
import Footer from '@/components/UI/Footer.vue';
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__router-wrapper {
    flex: 1 0 auto;
  }
  &__footer-wrapper {
    flex: 0 0 auto;
  }
}
</style>
