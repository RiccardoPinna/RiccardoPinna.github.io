<template>
  <div class="service-card" :class="`service-card--${variant}`">
    <div class="service-card__icon" :class="`service-card__icon--${variant}`">
      <component :is="icon" />
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <ul class="service-card__list">
      <li v-for="item in features" :key="item" class="service-card__list-item">
        <ChevronRight class="service-card__list-icon" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (val) => ['blue', 'red'].includes(val),
  },
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(item => typeof item === 'string'),
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.service-card {
  background-color: $white;
  border-radius: 1rem;
  border: 1px solid $slate-200;
  padding: 2rem;
  transition: box-shadow 0.2s;
  border-top-width: 4px;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba($black, 0.05), 0 10px 10px -5px rgba($black, 0.01);
  }

  &--blue {
    border-top-color: $blue-900;
  }

  &--red {
    border-top-color: $red-600;
  }

  &__icon {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;

    &--blue {
      background-color: rgba($blue-900, 0.1);
      color: $blue-900;
    }

    &--red {
      background-color: rgba($red-600, 0.1);
      color: $red-600;
    }
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $slate-900;
    margin-bottom: 1rem;
  }

  &__description {
    color: $slate-600;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  &__list {
    list-style: none;
    margin-top: 1.5rem;
  }

  &__list-item {
    display: flex;
    align-items: center;
    color: $slate-700;
    margin-bottom: 0.75rem;
  }

  &__list-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: $red-600;
    margin-right: 0.5rem;
  }
}
</style>