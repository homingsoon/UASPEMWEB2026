import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Beranda — Batukaras Tourism' }
  },
  {
    path: '/destinasi',
    name: 'Destinasi',
    component: () => import('@/views/Destinasi.vue'),
    meta: { title: 'Destinasi — Batukaras Tourism' }
  },
  {
    path: '/kuliner',
    name: 'Kuliner',
    component: () => import('@/views/Kuliner.vue'),
    meta: { title: 'Kuliner — Batukaras Tourism' }
  },
  {
    path: '/penginapan',
    name: 'Penginapan',
    component: () => import('@/views/Penginapan.vue'),
    meta: { title: 'Penginapan — Batukaras Tourism' }
  },
  {
    path: '/cafe',
    name: 'Cafe',
    component: () => import('@/views/Cafe.vue'),
    meta: { title: 'Cafe & Hangout — Batukaras Tourism' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Batukaras Tourism'
})

export default router
