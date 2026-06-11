<script setup>
import { ref, onMounted } from 'vue'

import heroBeach from '@/assets/images/hero-beach.png'
import heroSurf from '@/assets/images/hero-surf.png'
import greenCanyon from '@/assets/images/green-canyon.png'

const destinations = ref([
  {
    id: 1,
    name: 'Pantai Batukaras — Legok Pari',
    tagline: 'Surfer\'s Paradise untuk Pemula',
    description: 'Legok Pari adalah spot surfing utama di Batukaras yang terkenal dengan ombak kecil dan ramah untuk peselancar pemula. Pantai berpasir putih keemasan ini dikelilingi oleh perbukitan hijau, menciptakan suasana yang tenang dan indah.',
    features: ['Surfing Pemula', 'Pasir Putih', 'Sunset View', 'Rental Board'],
    image: heroBeach,
    level: 'Beginner'
  },
  {
    id: 2,
    name: 'Pantai Bulak Benda',
    tagline: 'Tantangan untuk Pro Surfer',
    description: 'Bulak Benda menawarkan ombak yang lebih besar dan menantang, cocok untuk peselancar berpengalaman. Pantai ini lebih sepi dan memberikan pengalaman surfing yang eksklusif dengan pemandangan tebing karang yang dramatis.',
    features: ['Surfing Pro', 'Reef Break', 'Tebing Karang', 'Spot Foto'],
    image: heroSurf,
    level: 'Advanced'
  },
  {
    id: 3,
    name: 'Green Canyon (Cukang Taneuh)',
    tagline: 'Keajaiban Alam yang Memukau',
    description: 'Green Canyon atau Cukang Taneuh adalah ngarai hijau yang terbentuk dari aliran Sungai Cijulang. Air sungai berwarna hijau zamrud mengalir di antara tebing-tebing batu karst yang menjulang, dengan stalaktit menggantung dari langit-langit gua. Wisata body rafting menjadi daya tarik utama.',
    features: ['Body Rafting', 'Air Hijau Zamrud', 'Stalaktit', 'Gua Alam'],
    image: greenCanyon,
    level: 'All Levels'
  },
  {
    id: 4,
    name: 'Hutan Mangrove Batukaras',
    tagline: 'Ekowisata & Keindahan Alam',
    description: 'Hutan Mangrove Batukaras menawarkan jalur trekking di atas boardwalk kayu yang meliuk-liuk di antara pepohonan mangrove. Tempat ini menjadi habitat burung-burung tropis dan biota laut, memberikan pengalaman ekowisata yang edukatif dan menenangkan.',
    features: ['Boardwalk', 'Bird Watching', 'Foto Estetik', 'Edukasi Alam'],
    image: heroBeach,
    level: 'Family'
  }
])

function getLevelClass(level) {
  const map = {
    'Beginner': 'badge-beginner',
    'Advanced': 'badge-advanced',
    'All Levels': 'badge-all',
    'Family': 'badge-family'
  }
  return map[level] || ''
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
  <div class="destinasi-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBeach" alt="Destinasi Batukaras" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <span class="section-badge">Destinasi Wisata</span>
        <h1>Jelajahi Keindahan Batukaras</h1>
        <p>Dari pantai surfing hingga ngarai hijau zamrud, temukan destinasi menakjubkan di pesisir Pangandaran</p>
      </div>
    </section>

    <!-- Destinations List -->
    <section class="destinations-section section">
      <div class="container">
        <div class="dest-list">
          <div
            v-for="(dest, index) in destinations"
            :key="dest.id"
            class="dest-card animate-on-scroll"
            :class="{ reversed: index % 2 !== 0 }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="dest-image-wrap">
              <img :src="dest.image" :alt="dest.name" />
              <div class="dest-image-overlay"></div>
              <span class="dest-level" :class="getLevelClass(dest.level)">{{ dest.level }}</span>
            </div>

            <div class="dest-info">
              <span class="dest-tagline">{{ dest.tagline }}</span>
              <h3>{{ dest.name }}</h3>
              <p class="dest-description">{{ dest.description }}</p>
              <div class="dest-features">
                <span v-for="feature in dest.features" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map / Info Section -->
    <section class="info-section section">
      <div class="container">
        <div class="info-grid animate-on-scroll">
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4>Lokasi</h4>
            <p>Desa Batukaras, Kec. Cijulang, Kab. Pangandaran, Jawa Barat 46354</p>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            </div>
            <h4>Akses</h4>
            <p>4-5 jam dari Bandung via Ciamis, atau 7-8 jam dari Jakarta via tol Cipali</p>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42"/><path d="M22 17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5 5 5 0 0 1 8-4.07 7 7 0 0 1 12 4.07z"/></svg>
            </div>
            <h4>Cuaca Terbaik</h4>
            <p>April — Oktober (musim kemarau) untuk surfing dan aktivitas outdoor</p>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/><path d="M22 10h-6a2 2 0 0 0 0 4h6"/></svg>
            </div>
            <h4>Budget</h4>
            <p>Mulai dari Rp 150.000/malam untuk penginapan. Surfing rental Rp 50.000/jam</p>
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

/* ── Destination Cards ── */
.dest-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.dest-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.dest-card:hover {
  box-shadow: var(--shadow-lg);
}

.dest-card.reversed {
  direction: rtl;
}

.dest-card.reversed > * {
  direction: ltr;
}

/* Image */
.dest-image-wrap {
  position: relative;
  height: 100%;
  min-height: 320px;
  overflow: hidden;
}

.dest-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.dest-card:hover .dest-image-wrap img {
  transform: scale(1.05);
}

.dest-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%);
}

.dest-level {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 16px;
  border-radius: var(--radius-xl);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-beginner { background: #10b981; color: white; }
.badge-advanced { background: #ef4444; color: white; }
.badge-all { background: var(--color-accent); color: white; }
.badge-family { background: var(--color-secondary); color: white; }

/* Info */
.dest-info {
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
}

.dest-tagline {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-sm);
}

.dest-info h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
}

.dest-description {
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: var(--space-md);
  color: var(--color-neutral-mid);
}

.dest-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  padding: 6px 14px;
  background: rgba(125, 155, 150, 0.08);
  border: 1px solid rgba(125, 155, 150, 0.15);
  border-radius: var(--radius-xl);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary);
}

/* ── Info Grid ── */
.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.info-card {
  text-align: center;
  padding: var(--space-2xl);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.info-icon {
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

.info-icon svg {
  width: 24px;
  height: 24px;
}

.info-card h4 {
  margin-bottom: var(--space-sm);
  font-size: 1.05rem;
}

.info-card p {
  font-size: 0.88rem;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .dest-card {
    grid-template-columns: 1fr;
  }

  .dest-card.reversed {
    direction: ltr;
  }

  .dest-image-wrap {
    min-height: 240px;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    height: 40vh;
    min-height: 300px;
  }
}
</style>
