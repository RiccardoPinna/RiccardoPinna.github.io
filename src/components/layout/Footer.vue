<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copyright">
        {{ new Date().getFullYear() }} Riccardo Pinna. Biologo Nutrizionista (LM-61) & Chinesiologo (L-22).
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.footer {
  background-color: $slate-900;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid $slate-800;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__copyright {
    color: $slate-400;
    font-size: 0.875rem;
  }

  &__credits {
    color: $slate-500;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>