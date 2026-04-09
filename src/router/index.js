import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Riccardo Pinna | Nutrizionista e Chinesiologo a Cagliari',
      description: 'Biologo Nutrizionista (LM-61) e Chinesiologo (L-22). Percorsi scientifici per ipertrofia, forza e dimagrimento sostenibile. Consulenze a Cagliari e online.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Chi Sono | Riccardo Pinna – Scienze della Nutrizione e Motorie',
      description: 'Laurea in Scienze della Nutrizione Umana (LM-61) e Scienze Motorie (L-22). Approccio evidence‑based per risultati reali e sostenibili.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contatti | Richiedi una consulenza – Riccardo Pinna',
      description: 'Contattami per un percorso personalizzato di ipertrofia, forza o dimagrimento. Valutazione iniziale senza impegno.',
    },
  },
];

const router = createRouter({
  history:  createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) { return { el:to.hash, behavior:'smooth' } }
    return { top:0 }
  }
})

export default router