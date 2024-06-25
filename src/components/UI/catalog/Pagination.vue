<template>
  <div class="pagination__wrapper">
    <button :disabled="prevButtonDisabled" @click="(data) => emit('selectPage', currentPage - 1)">prev</button>

    <button class="pagination__button" v-if="currentPage > 3" @click="(data) => emit('selectPage', currentPage - 3)">
      {{ currentPage - 3 }}
    </button>

    <button class="pagination__button" v-if="currentPage > 2" @click="(data) => emit('selectPage', currentPage - 2)">
      {{ currentPage - 2 }}
    </button>

    <button class="pagination__button" v-if="currentPage > 1" @click="(data) => emit('selectPage', currentPage - 1)">
      {{ currentPage - 1 }}
    </button>

    <button class="pagination__button" :disabled="true">{{ currentPage }}</button>

    <button class="pagination__button" v-if="currentPage < totalPages" @click="(data) => emit('selectPage', currentPage + 1)">
      {{ currentPage + 1 }}
    </button>

    <button class="pagination__button" v-if="currentPage + 1 < totalPages" @click="(data) => emit('selectPage', currentPage + 2)">
      {{ currentPage + 2 }}
    </button>

    <button class="pagination__button" v-if="currentPage + 2 < totalPages" @click="(data) => emit('selectPage', currentPage + 3)">
      {{ currentPage + 3 }}
    </button>

    <span v-if="currentPage + 3 < totalPages">. . .</span>

    <button :disabled="nextButtonDisabled" @click="(data) => emit('selectPage', currentPage + 1)">next</button>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const data = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const nextButtonDisabled = ref(data.totalPages > 1 ? false : true);
const prevButtonDisabled = ref(data.currentPage === 1 ? true : false);

watch(
  data,
  (newValue) => {
    newValue.currentPage === data.totalPages ? (nextButtonDisabled.value = true) : (nextButtonDisabled.value = false);
    newValue.currentPage === 1 ? (prevButtonDisabled.value = true) : (prevButtonDisabled.value = false);
  },
  { deep: true }
);

const emit = defineEmits(['selectPage']);
</script>

<style scoped lang="scss">
.pagination__wrapper {
  display: flex;
  gap: 30px;
}
.pagination__button {
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #737b84;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.pagination__button:disabled {
  color: #fdcf55;
}
</style>
