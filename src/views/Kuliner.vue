<script setup>
import { onMounted } from 'vue'

import culinaryImg from '@/assets/images/culinary-seafood.png'
import heroBeach from '@/assets/images/hero-beach.png'

const dishes = [
  {
    name: 'Seafood Bakar Batukaras',
    category: 'Seafood',
    description: 'Ikan, udang, cumi, dan kerang segar langsung dari nelayan lokal, dibakar dengan bumbu khas Sunda dan disajikan dengan sambal terasi pedas serta lalapan segar.',
    price: 'Rp 35.000 — Rp 80.000',
    rating: 4.8,
    image: culinaryImg,
    ingredients: ['Ikan Segar', 'Udang', 'Sambal Terasi', 'Lalapan']
  },
  {
    name: 'Nasi Liwet Pangandaran',
    category: 'Nasi',
    description: 'Nasi yang dimasak dengan santan, daun salam, dan serai, disajikan dengan ikan asin, lauk pauk Sunda, dan sambal. Hidangan tradisional yang penuh cita rasa.',
    price: 'Rp 20.000 — Rp 35.000',
    rating: 4.7,
    image: culinaryImg,
    ingredients: ['Santan', 'Daun Salam', 'Ikan Asin', 'Sambal']
  },
  {
    name: 'Soto Pangandaran',
    category: 'Sup',
    description: 'Soto khas Pangandaran dengan kuah kuning bening, daging ayam kampung yang empuk, tauge, dan pelengkap lengkap. Cocok untuk sarapan atau makan siang.',
    price: 'Rp 15.000 — Rp 25.000',
    rating: 4.6,
    image: culinaryImg,
    ingredients: ['Ayam Kampung', 'Kunyit', 'Tauge', 'Bawang Goreng']
  },
  {
    name: 'Pepes Ikan',
    category: 'Tradisional',
    description: 'Ikan segar dibumbui dengan rempah-rempah Sunda, dibungkus daun pisang dan dikukus hingga matang. Aroma dan rasanya yang khas menjadi favorit wisatawan.',
    price: 'Rp 25.000 — Rp 45.000',
    rating: 4.5,
    image: culinaryImg,
    ingredients: ['Ikan Mas', 'Kemangi', 'Daun Pisang', 'Cabai']
  },
  {
    name: 'Es Kelapa Muda',
    category: 'Minuman',
    description: 'Kelapa muda segar langsung dari pohon, disajikan dengan es dan gula aren. Minuman sempurna untuk menyegarkan diri setelah bermain di pantai.',
    price: 'Rp 10.000 — Rp 15.000',
    rating: 4.9,
    image: heroBeach,
    ingredients: ['Kelapa Muda', 'Gula Aren', 'Es Batu']
  },
  {
    name: 'Lotek Sunda',
    category: 'Tradisional',
    description: 'Sayuran segar seperti kangkung, tauge, kol, dan kacang panjang, disiram bumbu kacang pedas manis khas Sunda. Sehat dan lezat.',
    price: 'Rp 12.000 — Rp 20.000',
    rating: 4.4,
    image: culinaryImg,
    ingredients: ['Kangkung', 'Tauge', 'Bumbu Kacang', 'Kencur']
  }
]

const spots = [
  { name: 'Warung Bu Imas', specialty: 'Seafood Bakar', location: 'Pantai Batukaras' },
  { name: 'Rumah Makan Sunda Asli', specialty: 'Nasi Liwet & Pepes', location: 'Jl. Batukaras' },
  { name: 'Warung Pak Dede', specialty: 'Soto & Lotek', location: 'Pasar Cijulang' },
  { name: 'Kedai Pantai', specialty: 'Es Kelapa & Gorengan', location: 'Tepi Pantai' }
]

function getStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '')
}



onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="kuliner-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img :src="culinaryImg" alt="Kuliner Batukaras" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <span class="section-badge">Kuliner Lokal</span>
        <h1>Cita Rasa Batukaras</h1>
        <p>Nikmati kelezatan masakan Sunda autentik dan seafood segar langsung dari laut Pangandaran</p>
      </div>
    </section>

    <!-- Dishes Grid -->
    <section class="dishes-section section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Menu Khas Batukaras</h2>
          <p>Hidangan tradisional yang wajib kamu coba saat berkunjung</p>
        </div>

        <div class="dishes-grid">
          <div
            v-for="(dish, index) in dishes"
            :key="dish.name"
            class="dish-card animate-on-scroll"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <div class="dish-image-wrap">
              <img :src="dish.image" :alt="dish.name" />
              <div class="dish-image-overlay"></div>
              <span class="dish-category">
                {{ dish.category }}
              </span>
            </div>

            <div class="dish-body">
              <div class="dish-header">
                <h3>{{ dish.name }}</h3>
                <div class="dish-rating">
                  <span class="stars">{{ getStars(dish.rating) }}</span>
                  <span class="rating-num">{{ dish.rating }}</span>
                </div>
              </div>

              <p class="dish-desc">{{ dish.description }}</p>

              <div class="dish-ingredients">
                <span v-for="ing in dish.ingredients" :key="ing" class="ingredient-tag">
                  {{ ing }}
                </span>
              </div>

              <div class="dish-footer">
                <span class="dish-price">{{ dish.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommended Spots -->
    <section class="spots-section section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Tempat Makan Rekomendasi</h2>
          <p>Warung dan rumah makan terbaik yang harus kamu kunjungi</p>
        </div>

        <div class="spots-grid animate-on-scroll">
          <div v-for="spot in spots" :key="spot.name" class="spot-card">
            <div class="spot-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div class="spot-info">
              <h4>{{ spot.name }}</h4>
              <p class="spot-specialty">{{ spot.specialty }}</p>
              <p class="spot-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loc-pin-svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ spot.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Page Hero ── */
.page-hero {
  position: relative;
  height: 50vh;
  min-height: 380px;
  display: flex;
  align-items: center;
  margin-top: calc(var(--navbar-height) * -1);
  padding-top: var(--navbar-height);
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 79, 108, 0.5) 0%, rgba(28, 37, 44, 0.8) 100%);
}

.page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.page-hero-content h1 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.page-hero-content p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.section-badge {
  display: inline-block;
  padding: 6px 18px;
  background: rgba(1, 186, 239, 0.15);
  border: 1px solid rgba(1, 186, 239, 0.3);
  border-radius: var(--radius-xl);
  color: var(--color-accent-light);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

/* ── Dishes Grid ── */
.dishes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.dish-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.dish-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.dish-image-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.dish-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.dish-card:hover .dish-image-wrap img {
  transform: scale(1.08);
}

.dish-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%);
}

.dish-category {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-neutral-dark);
}

/* Body */
.dish-body {
  padding: var(--space-lg) var(--space-xl);
}

.dish-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-sm);
}

.dish-header h3 {
  font-size: 1.1rem;
  flex: 1;
  margin-right: var(--space-sm);
}

.dish-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.stars {
  color: #f59e0b;
  font-size: 0.85rem;
}

.rating-num {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-neutral-mid);
}

.dish-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dish-ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--space-md);
}

.ingredient-tag {
  padding: 3px 10px;
  background: var(--color-neutral-light);
  border-radius: var(--radius-xl);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-neutral-mid);
}

.dish-footer {
  padding-top: var(--space-sm);
  border-top: 1px solid rgba(0,0,0,0.06);
}

.dish-price {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-primary);
}

/* ── Spots Grid ── */
.spots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.spot-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.spot-card:hover {
  transform: translateX(6px);
  box-shadow: var(--shadow-md);
}

.spot-icon {
  width: 56px;
  height: 56px;
  background: rgba(125, 155, 150, 0.1);
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-accent-dark);
}

.spot-icon svg {
  width: 24px;
  height: 24px;
}

.loc-pin-svg {
  width: 14px;
  height: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: -2px;
  color: var(--color-accent-dark);
}

.spot-info h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.spot-specialty {
  font-size: 0.85rem;
  color: var(--color-accent-dark);
  font-weight: 500;
}

.spot-location {
  font-size: 0.8rem;
  color: var(--color-neutral-mid);
  margin-top: 4px;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .dishes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .dishes-grid {
    grid-template-columns: 1fr;
  }

  .spots-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    height: 40vh;
    min-height: 300px;
  }
}
</style>
