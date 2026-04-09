<template>
  <div>
    <Navbar />
  </div>
  <main>
    <RouterView />
  </main>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

const route = useRoute();

useHead({
  title: () => route.meta.title,
  meta: [
    { name: 'description',        content: () => route.meta.description },
    { property: 'og:title',       content: () => route.meta.title },
    { property: 'og:description', content: () => route.meta.description },
    { property: 'og:type',        content: 'website' },
    { property: 'og:url',         content: () => window.location.href },
  ],
});
</script>

<style lang="scss">
@import '@/assets/global.scss';

main {
  flex: 1;
}
</style>