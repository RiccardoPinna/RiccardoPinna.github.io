<template>
  <section class="contact">
    <div class="container contact__inner">
      <div class="contact__info">
        <h2 class="contact__title">Pronto ad alzare il livello?</h2>
        <p class="contact__description">
          Contattami per una consulenza iniziale. Valuteremo la tua situazione attuale e struttureremo il piano d'azione basato sui tuoi obiettivi.
        </p>

        <div class="contact__details">
          <div class="contact-detail">
            <div class="contact-detail__icon">
              <Mail />
            </div>
            <div>
              <p class="contact-detail__label">Mail</p>
              <a href="mailto:riccardopinnanutrizionista@gmail.com" class="contact-detail__value">riccardopinnanutrizionista@gmail.com</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail__icon">
              <BadgeCheck />
            </div>
            <div>
              <p class="contact-detail__label">PEC</p>
              <a href="mailto:riccardo.pinna@pecobsardegna.it" class="contact-detail__value">riccardo.pinna@pecobsardegna.it</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail__icon">
              <Instagram />
            </div>
            <div>
              <p class="contact-detail__label">Instagram</p>
              <a href="https://instagram.com/riccardopinna.nutrizionista_pt" target="_blank" rel="noreferrer" class="contact-detail__value">@riccardo.pinna.pt</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail__icon">
              <Phone />
            </div>
            <div>
              <p class="contact-detail__label">WhatsApp</p>
              <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="contact-detail__value">Contattami su WhatsApp</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail__icon">
              <MapPin />
            </div>
            <div>
              <p class="contact-detail__label">Sede Operativa</p>
              <p class="contact-detail__value">Cagliari, Sardegna</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact__form-wrapper">
        <h3 class="contact__form-title">Richiedi Informazioni</h3>
        <form class="contact__form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Nome e Cognome</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="form-input"
              :class="{ 'form-input--error': errors.name }"
              placeholder="Mario Rossi"
            />
            <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="form-input"
              :class="{ 'form-input--error': errors.email }"
              placeholder="tu@email.com"
            />
            <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Obiettivo (Ipertrofia, Powerlifting, ecc.)</label>
            <textarea
              id="message"
              rows="4"
              v-model="formData.message"
              class="form-textarea"
              :class="{ 'form-textarea--error': errors.message }"
              placeholder="Scrivi qui i tuoi obiettivi..."
            ></textarea>
            <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
          </div>
          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Invio in corso...' : 'Invia Richiesta' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { Mail, Instagram, Phone, MapPin, MailCheck, ShieldCheck, BadgeCheck } from 'lucide-vue-next';
import { inviaForm } from '@/composables/useContactForm';

// Helper sanitize (simula DOMPurify)
const sanitizeInput = (input) => {
  if (!input) return '';
  // Rimuove tag HTML (regex semplificata)
  const text = String(input).replace(/<[^>]*>/g, '');
  // Escape caratteri pericolosi per evitare injection in attributi
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .trim();
};

// Validazione campi
const validateForm = (data) => {
  const newErrors = {};

  if (!data.name || data.name.length < 2) {
    newErrors.name = 'Il nome deve contenere almeno 2 caratteri.';
  } else if (data.name.length > 100) {
    newErrors.name = 'Il nome è troppo lungo (max 100 caratteri).';
  }

  const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  if (!data.email) {
    newErrors.email = 'L\'email è obbligatoria.';
  } else if (!emailRegex.test(data.email)) {
    newErrors.email = 'Inserisci un indirizzo email valido.';
  }

  if (!data.message) {
    newErrors.message = 'Scrivi il tuo obiettivo o domanda.';
  } else if (data.message.length > 1000) {
    newErrors.message = 'Il messaggio è troppo lungo (max 1000 caratteri).';
  }

  return newErrors;
};

// Stato del form
const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({});
const isSubmitting = ref(false);

const handleSubmit = async () => {
  // Sanitizza i dati
  const cleanData = {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    message: sanitizeInput(formData.message),
  };

  // Valida
  const newErrors = validateForm(cleanData);
  Object.assign(errors, newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  isSubmitting.value = true;

  const risposta = await inviaForm({
    testo: `Nuovo messaggio dal sito\n\nNome: ${cleanData.name}\nEmail: ${cleanData.email}\nMessaggio: ${cleanData.message}`,
  });

  let messaggio = risposta.successo 
    ? 'Richiesta inviata con successo! Ti risponderò al più presto.' 
    : risposta.errore;
 
  // Reset form e mostra feedback
  alert(messaggio);
  if (risposta.successo) {
    formData.name = '';
    formData.email = '';
    formData.message = '';
    Object.keys(errors).forEach(key => delete errors[key]);
  }

  isSubmitting.value = false;
};

const phoneNumber = '393281440814'
const prefilledMessage = 'Buongiorno Riccardo, ti contatto per il tuo servizio di nutrizione e personal training, potresti darmi maggiori informazioni?'
const whatsappLink = computed(() => {
  const encodedText = encodeURIComponent(prefilledMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

// ... (stili identici a quelli già definiti, con aggiunta per gli errori)
.contact {
  padding: 6rem 0;
  background-color: $blue-900;
  color: $white;

  &__details {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  &__inner {
    display: grid;
    gap: 3rem;

    @media (min-width: $screen-lg) {
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }
  }

  &__form-wrapper {
    background-color: $white;
    border-radius: 0.5rem;
    padding: 2rem;
  }

  &__form-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $slate-900;
    margin-bottom: 1.5rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}

.contact-detail__value {
  font-size: 0.9rem;
  color: $white; // per i testi normali (telefono, sede)

  &[href] { // si applica SOLO agli elementi <a>
    color: $red-600;
    font-weight: 600;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: lighten($red-600, 15%);
      text-decoration: underline;
    }
  }
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid $slate-300;
  border-radius: 0.375rem;
  font-family: $font-family;
  font-size: 0.875rem;
  color: $slate-900;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: $blue-900;
    box-shadow: 0 0 0 2px rgba($blue-900, 0.2);
  }

  &--error {
    border-color: #ef4444;
  }
}

.form-error {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: $slate-700;
}

.form-input,
.form-textarea {
  width: 100%;
}

.btn-submit {
  width: 100%;
  padding: 0.75rem;
  background-color: $red-600;
  color: $white;
  font-weight: 700;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: darken($red-600, 5%);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.contact__description {
  padding-bottom: 2rem;
}

</style>