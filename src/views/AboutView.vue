<template>
  <section class="about">
    <div class="container about__inner">
      <div class="about__media">
        <div class="about__image-wrapper">
          <img
            src="../assets/img/pimg3.jpeg"
            alt="Allenamento in palestra"
            class="about__image"
          />
          <div class="about__image-border"></div>
        </div>
      </div>

      <div class="about__content">
        <div class="about__badge">
          <ShieldCheck class="about__badge-icon" />
          <span>Competenza Certificata (LM-61 & L-22)</span>
        </div>

        <h2 class="about__title">Riccardo Pinna</h2>

        <p class="about__text">
          Il miglioramento della composizione corporea non deve essere una tortura. Richiede metodo e qualcuno che ti guidi durante il percorso.
        </p>

        <div class="about__features">
          <div class="feature">
            <div class="feature__icon">
              <Activity />
            </div>
            <div>
              <h3 class="feature__title">Scienze della Nutrizione Umana (LM-61)</h3>
              <p class="feature__text">Pianificazione nutrizionale avanzata per ottimizzazione del proprio tempo.</p>
            </div>
          </div>

          <div class="feature">
            <div class="feature__icon">
              <Dumbbell />
            </div>
            <div>
              <h3 class="feature__title">Scienze Motorie (L-22)</h3>
              <p class="feature__text">Biomeccanica del movimento, programmazione della forza e prevenzione infortuni.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheck, Activity, Dumbbell } from 'lucide-vue-next';
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.about {
  padding: 6rem 0;
  background-color: $white;

  @media (min-width: $screen-lg) {
    padding: 6rem 0;
  }

  &__inner {
    display: grid;
    gap: 3rem;
    align-items: center;

    @media (min-width: $screen-lg) {
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }
  }

  &__media {
    position: relative;
  }

  &__image-wrapper {
    aspect-ratio: 4 / 5;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba($black, 0.25);
    background-color: $slate-100;
    position: relative;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: filter 0.5s;

    &:hover {
      filter: grayscale(0);
    }
  }

  &__image-border {
    position: absolute;
    inset: 0;
    border: 4px solid rgba($blue-900, 0.1);
    border-radius: 0.75rem;
    pointer-events: none;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba($blue-900, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    color: $blue-900;
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  &__badge-icon {
    width: 1rem;
    height: 1rem;
  }

  &__title {
    font-size: 1.875rem;
    font-weight: 800;
    color: $blue-900;
    letter-spacing: -0.025em;
    margin-bottom: 1.5rem;

    @media (min-width: $screen-sm) {
      font-size: 2.25rem;
    }
  }

  &__text {
    font-size: 1.125rem;
    color: $slate-600;
    line-height: 1.625;
    margin-bottom: 2rem;
  }

  &__features {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

.feature {
  display: flex;
  gap: 1rem;

  &__icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background-color: rgba($red-600, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $red-600;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $slate-900;
    margin-bottom: 0.25rem;
  }

  &__text {
    color: $slate-600;
  }
}
</style>