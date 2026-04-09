<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <div class="navbar__logo">
        <router-link to="/" class="home_nav_link">RICCARDO<span class="navbar__logo-accent">PINNA</span></router-link>
      </div>

      <!-- Links desktop -->
      <nav class="navbar__links">
        <router-link :to="{ path:'/', hash:'#servizi' }" class="navbar__link">Servizi</router-link>
        <router-link to="/contact" class="navbar__link">Contattami</router-link>
        <router-link to="/about" class="navbar__link">Chi Sono</router-link>
      </nav>

      <router-link to="/contact" class="navbar__cta">Inizia Ora</router-link>

      <!-- Pulsante hamburger (solo mobile) -->
      <button class="navbar__hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Menu mobile (verticale) -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <router-link :to="{ path:'/', hash:'#servizi' }" class="navbar__mobile-link" @click="menuOpen = false">Servizi</router-link>
      <router-link to="/contact" class="navbar__mobile-link" @click="menuOpen = false">Contattami</router-link>
      <router-link to="/about" class="navbar__mobile-link" @click="menuOpen = false">Chi Sono</router-link>
      <router-link to="/contact" class="navbar__mobile-cta" @click="menuOpen = false">Inizia Ora</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba($white, 0.95);
  backdrop-filter: blur(4px);
  box-shadow: 0 1px 2px rgba($black, 0.05);
  z-index: 50;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
  }

  &__logo {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
    color: $blue-900;

    &-accent {
      color: $red-600;
    }
  }

  // --- DESKTOP ---
  &__links {
    display: none;

    @media (min-width: $screen-md) {
      display: flex;
      gap: 2rem;
    }
  }

  &__link {
    font-weight: 500;
    font-size: 0.875rem;
    color: $slate-600;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: $blue-900;
    }
  }

  &__cta {
    display: none;

    @media (min-width: $screen-md) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.625rem 1.5rem;
      background-color: $red-600;
      color: $white;
      font-weight: 700;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 10px 15px -3px rgba($red-600, 0.3);

      &:hover {
        background-color: darken($red-600, 5%);
        transform: translateY(-4px);
      }
    }
  }

  // --- HAMBURGER (solo mobile) ---
  &__hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1.5rem;
    height: 1.125rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: $blue-900;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    @media (min-width: $screen-md) {
      display: none;
    }
  }

  // --- MENU MOBILE (verticale) ---
  &__mobile {
    display: flex;
    flex-direction: column;       // ← elementi in verticale
    align-items: stretch;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease;
    background: rgba($white, 0.98);
    border-top: 1px solid rgba($black, 0.06);

    &--open {
      max-height: 400px;          // valore abbondante per l'animazione
      padding: 1rem 0;
    }

    @media (min-width: $screen-md) {
      display: none;              // nascosto su desktop
    }
  }

  &__mobile-link {
    padding: 0.875rem 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    color: $slate-600;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: rgba($blue-900, 0.05);
      color: $blue-900;
    }
  }

  &__mobile-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0.75rem 1.5rem 0.25rem;
    padding: 0.75rem 1.5rem;
    background-color: $red-600;
    color: $white;
    font-weight: 700;
    font-size: 0.875rem;
    border-radius: 0.375rem;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($red-600, 5%);
    }
  }

  .home_nav_link {
    text-decoration: none;
    color: inherit;
    &:visited { color: inherit; }
  }
}
</style>