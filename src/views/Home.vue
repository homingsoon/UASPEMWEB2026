<script setup>
import { onMounted } from 'vue'
import HeroSlider from '@/components/HeroSlider.vue'

import heroBeach from '@/assets/images/hero-beach.png'
import greenCanyon from '@/assets/images/green-canyon.png'
import culinaryImg from '@/assets/images/culinary-seafood.png'
import homestayImg from '@/assets/images/beach-homestay.png'
import cafeImg from '@/assets/images/beach-cafe.png'
import heroSurf from '@/assets/images/hero-surf.png'

// highlights removed

const stats = [
  { number: '12+', label: 'Pantai Eksotis' },
  { number: '50+', label: 'Penginapan' },
  { number: '30+', label: 'Spot Kuliner' },
  { number: '365', label: 'Hari Cerah' }
]

function onIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
    }
  })
}

onMounted(() => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(onIntersect, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSlider />

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item animate-on-scroll">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text animate-on-scroll slide-left">
            <span class="section-badge">Tentang Batukaras</span>
            <h2>Surga Tersembunyi di Pesisir Selatan</h2>
            <p>
              Batukaras adalah desa pantai yang terletak di Kecamatan Cijulang, Kabupaten Pangandaran, Jawa Barat.
              Dikenal sebagai "hidden paradise", pantai ini menawarkan ombak yang ramah untuk peselancar pemula,
              pasir putih keemasan, dan suasana yang masih alami dan tenang.
            </p>
            <p>
              Dikelilingi oleh perbukitan hijau dan hutan tropis, Batukaras menjadi destinasi favorit wisatawan
              lokal dan mancanegara yang mencari ketenangan, petualangan, dan kuliner Sunda autentik.
            </p>
            <router-link to="/destinasi" class="btn btn-outline">
              Jelajahi Destinasi
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </router-link>
          </div>
          <div class="intro-image animate-on-scroll slide-right">
            <div class="image-stack">
              <img :src="heroBeach" alt="Pantai Batukaras" class="stack-main" />
              <img :src="greenCanyon" alt="Green Canyon" class="stack-accent" />
              <div class="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access Cards -->
    <section class="quick-access section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Mulai Petualanganmu</h2>
          <p>Temukan berbagai hal menarik yang bisa kamu lakukan di Batukaras</p>
        </div>

        <div class="access-grid">
          <router-link to="/destinasi" class="access-card animate-on-scroll" style="animation-delay: 0.1s">
            <div class="access-card-image">
              <img :src="greenCanyon" alt="Destinasi" />
              <div class="access-card-overlay"></div>
            </div>
            <div class="access-card-content">
              <span class="access-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              </span>
              <h3>Destinasi</h3>
              <p>Pantai, canyon, dan hutan mangrove</p>
            </div>
          </router-link>

          <router-link to="/kuliner" class="access-card animate-on-scroll" style="animation-delay: 0.2s">
            <div class="access-card-image">
              <img :src="culinaryImg" alt="Kuliner" />
              <div class="access-card-overlay"></div>
            </div>
            <div class="access-card-content">
              <span class="access-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8V2M22 2v20M12 2v10M12 22V16M15 8V2M9 8V2M6 8V2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6"/></svg>
              </span>
              <h3>Kuliner</h3>
              <p>Seafood segar dan masakan Sunda</p>
            </div>
          </router-link>

          <router-link to="/penginapan" class="access-card animate-on-scroll" style="animation-delay: 0.3s">
            <div class="access-card-image">
              <img :src="homestayImg" alt="Penginapan" />
              <div class="access-card-overlay"></div>
            </div>
            <div class="access-card-content">
              <span class="access-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22V2M2 12h20M22 22v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>
              </span>
              <h3>Penginapan</h3>
              <p>Resort, homestay, dan eco lodges</p>
            </div>
          </router-link>

          <router-link to="/cafe" class="access-card animate-on-scroll" style="animation-delay: 0.4s">
            <div class="access-card-image">
              <img :src="cafeImg" alt="Cafe & Hangout" />
              <div class="access-card-overlay"></div>
            </div>
            <div class="access-card-content">
              <span class="access-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
              </span>
              <h3>Cafe & Hangout</h3>
              <p>Nongkrong di tepi pantai</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img :src="heroSurf" alt="Batukaras background" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container cta-content animate-on-scroll">
        <h2>Siap Menjelajahi Batukaras?</h2>
        <p>Temukan pengalaman tak terlupakan di pantai tersembunyi paling indah di Jawa Barat</p>
        <div class="hero-buttons">
          <router-link to="/destinasi" class="btn btn-primary">
            Mulai Sekarang
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
          <router-link to="/penginapan" class="btn btn-secondary">Lihat Penginapan</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Stats Bar ── */
.stats-bar {
  background: var(--color-primary);
  padding: var(--space-2xl) 0;
  position: relative;
  z-index: 2;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* ── Section Badge ── */
.section-badge {
  display: inline-block;
  padding: 6px 18px;
  background: rgba(1, 186, 239, 0.1);
  border: 1px solid rgba(1, 186, 239, 0.2);
  border-radius: var(--radius-xl);
  color: var(--color-accent-dark);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

/* ── Intro Section ── */
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.intro-text h2 {
  margin-bottom: var(--space-lg);
}

.intro-text p {
  margin-bottom: var(--space-md);
  font-size: 1.02rem;
}

.intro-text .btn {
  margin-top: var(--space-lg);
}

.image-stack {
  position: relative;
  padding: 20px;
}

.stack-main {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.stack-accent {
  position: absolute;
  bottom: -10px;
  left: -20px;
  width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 4px solid var(--color-white);
  box-shadow: var(--shadow-md);
}

.image-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border: 3px solid var(--color-accent);
  border-radius: var(--radius-md);
  opacity: 0.3;
  z-index: -1;
}

/* Visual Accordion Gallery styles removed */

/* ── Quick Access ── */
.access-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.access-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 320px;
  display: flex;
  align-items: flex-end;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.access-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.access-card-image {
  position: absolute;
  inset: 0;
}

.access-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.access-card:hover .access-card-image img {
  transform: scale(1.1);
}

.access-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(28, 37, 44, 0.85) 100%);
}

.access-card-content {
  position: relative;
  z-index: 2;
  padding: var(--space-xl);
  width: 100%;
}

.access-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-sm);
  color: var(--color-accent-light);
  transition: transform var(--transition-normal), color var(--transition-normal);
}

.access-icon svg {
  width: 24px;
  height: 24px;
}

.access-card:hover .access-icon {
  color: var(--color-white);
  transform: scale(1.1);
}

.access-card-content h3 {
  color: var(--color-white);
  font-size: 1.2rem;
  margin-bottom: 4px;
}

.access-card-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

/* ── CTA Section ── */
.cta-section {
  position: relative;
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
}

.cta-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(11, 79, 108, 0.9) 0%, rgba(28, 37, 44, 0.9) 100%);
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: var(--space-4xl) 0;
}

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: var(--space-md);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

.cta-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: var(--space-2xl);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-content .hero-buttons {
  justify-content: center;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .intro-text {
    order: 1;
  }

  .intro-image {
    order: 2;
  }

  /* highlight slider media overrides removed */

  .access-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .access-grid {
    grid-template-columns: 1fr;
  }

  .access-card {
    height: 240px;
  }

  .stack-accent {
    width: 130px;
    height: 100px;
    left: -10px;
  }
}
</style>
