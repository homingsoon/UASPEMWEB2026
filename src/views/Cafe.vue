<script setup>
import { ref, onMounted } from 'vue'

import cafeImg from '@/assets/images/beach-cafe.png'
import heroBeach from '@/assets/images/hero-beach.png'
import homestayImg from '@/assets/images/beach-homestay.png'

const activeVibe = ref('Semua')
const vibes = ['Semua', 'Beach Vibes', 'Coffee Lover', 'Sunset Chill', 'Live Music']

const cafes = ref([
  {
    id: 1,
    name: 'InOut Cafe Batukaras',
    vibe: 'Beach Vibes',
    description: 'Cafe ikonik tepat di tepi pantai dengan kursi bean bag di pasir. Terkenal dengan kopi susu dan smoothie bowl tropisnya. Live acoustic setiap Jumat malam.',
    hours: '07:00 — 22:00',
    popular: ['Kopi Susu Gula Aren', 'Smoothie Bowl', 'Nasi Goreng Seafood'],
    priceRange: '$$',
    image: cafeImg,
    vibeTag: 'Beach Vibes'
  },
  {
    id: 2,
    name: 'Surf Cafe',
    vibe: 'Beach Vibes',
    description: 'Hangout spot para surfer dengan papan selancar sebagai dekorasi. Menyajikan western dan local food dengan porsi besar. Wifi kencang untuk digital nomad.',
    hours: '06:30 — 23:00',
    popular: ['Fish Tacos', 'Burger Batukaras', 'Fresh Juice'],
    priceRange: '$$',
    image: heroBeach,
    vibeTag: 'Surfer Hub'
  },
  {
    id: 3,
    name: 'Kopi Nusantara',
    vibe: 'Coffee Lover',
    description: 'Kedai kopi specialty dengan biji kopi single origin dari Jawa Barat. Barista berpengalaman, metode brewing manual, dan suasana minimalis yang tenang.',
    hours: '08:00 — 21:00',
    popular: ['V60 Java Preanger', 'Cold Brew', 'Matcha Latte'],
    priceRange: '$$$',
    image: cafeImg,
    vibeTag: 'Specialty Coffee'
  },
  {
    id: 4,
    name: 'Sunset Lounge',
    vibe: 'Sunset Chill',
    description: 'Lounge bar dengan rooftop menghadap barat, spot terbaik untuk menikmati sunset sambil menyeruput koktail tropis. Playlist chill house musik sepanjang sore.',
    hours: '14:00 — 00:00',
    popular: ['Sunset Mojito', 'Coconut Colada', 'Nachos'],
    priceRange: '$$$',
    image: homestayImg,
    vibeTag: 'Sunset Spot'
  },
  {
    id: 5,
    name: 'Warung Kreatif',
    vibe: 'Live Music',
    description: 'Tempat nongkrong anak muda dengan live music lokal setiap malam Sabtu. Menyajikan makanan fusion dan minuman kreatif dengan harga bersahabat.',
    hours: '10:00 — 23:30',
    popular: ['Mie Goreng Fusion', 'Teh Tarik', 'Roti Bakar Coklat'],
    priceRange: '$',
    image: cafeImg,
    vibeTag: 'Live Music'
  },
  {
    id: 6,
    name: 'The Green Bamboo',
    vibe: 'Sunset Chill',
    description: 'Cafe bambu di atas bukit kecil dengan pemandangan panorama laut. Fokus pada menu sehat: salad, Buddha bowl, dan cold-pressed juice. Vibes zen dan damai.',
    hours: '09:00 — 20:00',
    popular: ['Buddha Bowl', 'Green Smoothie', 'Avocado Toast'],
    priceRange: '$$',
    image: homestayImg,
    vibeTag: 'Healthy Eats'
  }
])

const filteredCafes = ref([...cafes.value])

function filterByVibe(vibe) {
  activeVibe.value = vibe
  if (vibe === 'Semua') {
    filteredCafes.value = [...cafes.value]
  } else {
    filteredCafes.value = cafes.value.filter(c => c.vibe === vibe)
  }
}

function getVibeColor(vibe) {
  const map = {
    'Beach Vibes': '#01BAEF',
    'Surfer Hub': '#0B4F6C',
    'Specialty Coffee': '#8B5E3C',
    'Sunset Spot': '#E0A96D',
    'Live Music': '#9333EA',
    'Healthy Eats': '#10B981'
  }
  return map[vibe] || 'var(--color-accent)'
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
  <div class="cafe-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img :src="cafeImg" alt="Cafe Batukaras" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <span class="section-badge">Cafe & Hangout</span>
        <h1>Nongkrong di Batukaras</h1>
        <p>Temukan kafe tepi pantai, kedai kopi specialty, dan spot sunset terbaik untuk bersantai</p>
      </div>
    </section>

    <!-- Vibe Selector -->
    <section class="cafe-section section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Pilih Vibes-mu</h2>
          <p>Filter berdasarkan suasana yang kamu cari</p>
        </div>

        <!-- Vibes Selector -->
        <div class="vibe-selector animate-on-scroll">
          <button
            v-for="vibe in vibes"
            :key="vibe"
            class="vibe-btn"
            :class="{ active: activeVibe === vibe }"
            @click="filterByVibe(vibe)"
          >
            {{ vibe }}
          </button>
        </div>

        <!-- Cafe Cards -->
        <TransitionGroup name="cafe-list" tag="div" class="cafe-grid">
          <div
            v-for="cafe in filteredCafes"
            :key="cafe.id"
            class="cafe-card"
          >
            <div class="cafe-image-wrap">
              <img :src="cafe.image" :alt="cafe.name" />
              <div class="cafe-image-overlay"></div>
              <span
                class="cafe-vibe-tag"
                :style="{ backgroundColor: getVibeColor(cafe.vibeTag) }"
              >
                {{ cafe.vibeTag }}
              </span>
            </div>

            <div class="cafe-body">
              <h3>{{ cafe.name }}</h3>
              <p class="cafe-desc">{{ cafe.description }}</p>

              <div class="cafe-details">
                <div class="detail-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>{{ cafe.hours }}</span>
                </div>
                <div class="detail-row">
                  <span class="price-indicator">{{ cafe.priceRange }}</span>
                </div>
              </div>

              <div class="cafe-popular">
                <span class="popular-label">Menu Populer:</span>
                <div class="popular-items">
                  <span v-for="item in cafe.popular" :key="item" class="popular-tag">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="tips-section section">
      <div class="container">
        <div class="tips-grid animate-on-scroll">
          <div class="tip-card">
            <div class="tip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h4>Best Time</h4>
            <p>Datang saat golden hour (16:00 — 18:00) untuk foto dan sunset terbaik</p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A7 7 0 0 0 5 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg>
            </div>
            <h4>Tips</h4>
            <p>Bawa power bank! Beberapa cafe pantai memiliki stop kontak terbatas</p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.1a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
            </div>
            <h4>WiFi</h4>
            <p>InOut Cafe dan Surf Cafe memiliki WiFi tercepat untuk digital nomad</p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <h4>Live Music</h4>
            <p>Setiap Jumat & Sabtu malam di InOut Cafe dan Warung Kreatif</p>
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

/* ── Vibe Selector ── */
.vibe-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: var(--space-3xl);
  flex-wrap: wrap;
}

.vibe-btn {
  padding: 12px 24px;
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--color-neutral-mid);
  background: var(--color-white);
  border: 2px solid transparent;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.vibe-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.vibe-btn.active {
  background: var(--gradient-ocean);
  color: var(--color-white);
  border-color: transparent;
  box-shadow: var(--shadow-md), var(--shadow-glow);
}

/* ── Cafe Grid ── */
.cafe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.cafe-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.cafe-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.cafe-image-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.cafe-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.cafe-card:hover .cafe-image-wrap img {
  transform: scale(1.08);
}

.cafe-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.3) 100%);
}

.cafe-vibe-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 14px;
  border-radius: var(--radius-xl);
  font-size: 0.72rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Body */
.cafe-body {
  padding: var(--space-lg) var(--space-xl);
}

.cafe-body h3 {
  font-size: 1.15rem;
  margin-bottom: var(--space-sm);
}

.cafe-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cafe-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--color-neutral-mid);
}

.detail-row svg {
  color: var(--color-accent-dark);
}

.price-indicator {
  font-size: 0.85rem;
}

.cafe-popular {
  margin-top: var(--space-sm);
}

.popular-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-neutral-mid);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 6px;
}

.popular-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.popular-tag {
  padding: 4px 12px;
  background: rgba(224, 169, 109, 0.1);
  border: 1px solid rgba(224, 169, 109, 0.2);
  border-radius: var(--radius-xl);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-secondary-dark);
}

/* ── TransitionGroup ── */
.cafe-list-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cafe-list-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.cafe-list-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.cafe-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.cafe-list-move {
  transition: transform 0.4s ease;
}

/* ── Tips ── */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.tip-card {
  text-align: center;
  padding: var(--space-2xl);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.tip-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgba(125, 155, 150, 0.1);
  border-radius: var(--radius-md);
  margin: 0 auto var(--space-md);
  color: var(--color-accent-dark);
}

.tip-icon svg {
  width: 24px;
  height: 24px;
}

.tip-card h4 {
  margin-bottom: var(--space-sm);
  font-size: 1.05rem;
}

.tip-card p {
  font-size: 0.88rem;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .cafe-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cafe-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    height: 40vh;
    min-height: 300px;
  }

  .vibe-selector {
    gap: 6px;
  }

  .vibe-btn {
    padding: 10px 16px;
    font-size: 0.8rem;
  }
}
</style>
