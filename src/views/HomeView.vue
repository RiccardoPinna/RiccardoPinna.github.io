<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <h1 class="hero__title">
          Ipertrofia, Forza e Dimagrimento.<br />
          <span class="hero__accent">Veloce. Semplice. Sostenibile.</span>
        </h1>
        <p class="hero__subtitle">
          Dimentica le diete estreme e le schede infinite. Ottieni la tua forma migliore con protocolli scientifici certi.
        </p>
      </div>
    </section>

    <!-- Servizi Section -->
    <section id="servizi" class="services">
      <div class="container">
        <div class="services__header">
          <h2 class="services__title">Risultati Massimi. Zero Sacrifici Inutili.</h2>
          <p class="services__description">
            Solo protocolli minimalisti testati per massimizzare l'ipertrofia, la forza e la perdita di grasso nella maniera più semplice e veloce possibile.
          </p>
        </div>

        <div class="services__grid">
          <ServiceCard
            variant="blue"
            :icon="Dumbbell"
            title="Ipertrofia & Forza"
            description="Programmazione basata sui tuoi obiettivi e bisogni. Eliminiamo gli esercizi inutili per focalizzarci sulle tensioni meccaniche che generano i migliori adattamenti."
            :features="['Schede time-efficient', 'Controllo periodico']"
          />
          <ServiceCard
            variant="red"
            :icon="Activity"
            title="Dimagrimento Sostenibile"
            description="Perdi massa grassa velocemente senza sacrificare la massa magra o la tua vita sociale, garantendo risultati duraturi."
            :features="['Nessuna dieta da fame o restrizioni estreme', 'Miglioramento dei livelli di energia']"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ChevronRight, Dumbbell, Activity } from 'lucide-vue-next';
import ServiceCard from '@/components/ui/ServiceCard.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.hero {
  position: relative;
  padding-top: 8rem;
  padding-bottom: 5rem;
  background-color: $blue-900;
  overflow: hidden;

  @media (min-width: $screen-lg) {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: url('../assets/img/psito02.jpg');
    background-size: cover;
    background-position: center;
    mix-blend-mode: overlay;
  }

  &__content {
    position: relative;
    z-index: 10;
    text-align: center;

    @media (min-width: $screen-lg) {
      text-align: left;
    }
  }

  &__title {
    font-size: 2.25rem;
    font-weight: 800;
    color: $white;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin-bottom: 1.5rem;

    @media (min-width: $screen-sm) {
      font-size: 3rem;
    }

    @media (min-width: $screen-lg) {
      font-size: 3.75rem;
    }
  }

  &__accent {
    color: $red-600;
  }

  &__subtitle {
    font-size: 1.125rem;
    color: rgba($white, 0.9);
    margin-bottom: 2.5rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $screen-lg) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media (min-width: $screen-sm) {
      flex-direction: row;
    }

    @media (min-width: $screen-lg) {
      justify-content: flex-start;
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-weight: 700;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: all 0.2s;

  &--primary {
    background-color: $red-600;
    color: $white;
    box-shadow: 0 10px 15px -3px rgba($red-600, 0.3);

    &:hover {
      background-color: darken($red-600, 5%);
    }
  }

  &--secondary {
    background-color: rgba($white, 0.1);
    color: $white;
    border: 1px solid rgba($white, 0.2);
    backdrop-filter: blur(4px);

    &:hover {
      background-color: rgba($white, 0.2);
    }
  }

  &__icon {
    margin-left: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
}

.services {
  padding: 6rem 0;
  background-color: $slate-50;

  &__header {
    text-align: center;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 1.875rem;
    font-weight: 800;
    color: $blue-900;
    letter-spacing: -0.025em;
    margin-bottom: 1rem;

    @media (min-width: $screen-sm) {
      font-size: 2.25rem;
    }
  }

  &__description {
    font-size: 1.125rem;
    color: $slate-600;
  }

  &__grid {
    display: grid;
    gap: 2rem;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $screen-md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>