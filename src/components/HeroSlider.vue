<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import heroBeach from '@/assets/images/hero-beach.png'
import heroSurf from '@/assets/images/hero-surf.png'
import greenCanyon from '@/assets/images/green-canyon.png'

const slides = [
  {
    image: heroBeach,
    title: 'Selamat Datang di Batukaras',
    subtitle: 'Surga tersembunyi di pesisir selatan Jawa Barat',
    cta: 'Mulai Jelajahi'
  },
  {
    image: heroSurf,
    title: 'Surfing Paradise',
    subtitle: 'Ombak sempurna untuk pemula hingga profesional',
    cta: 'Lihat Destinasi'
  },
  {
    image: greenCanyon,
    title: 'Green Canyon',
    subtitle: 'Keajaiban alam Cukang Taneuh yang memukau',
    cta: 'Eksplorasi'
  }
]

const currentSlide = ref(0)
const isTransitioning = ref(false)
let intervalId = null

function nextSlide() {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % slides.length
  setTimeout(() => { isTransitioning.value = false }, 1000)
}

function goToSlide(index) {
  if (isTransitioning.value || index === currentSlide.value) return
  isTransitioning.value = true
  currentSlide.value = index
  resetInterval()
  setTimeout(() => { isTransitioning.value = false }, 1000)
}

function resetInterval() {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(nextSlide, 5000)
}

onMounted(() => {
  resetInterval()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="hero-slider" id="hero-slider">
    <!-- Slides -->
    <div class="slides-container">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: currentSlide === index }"
      >
        <img :src="slide.image" :alt="slide.title" class="slide-image" />
        <div class="slide-overlay"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="hero-content container">
      <TransitionGroup name="hero-text">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index" class="hero-text-block">
          <span class="hero-badge">📍 Pangandaran, Jawa Barat</span>
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.subtitle }}</p>
          <div class="hero-buttons">
            <router-link to="/destinasi" class="btn btn-primary">
              {{ slide.cta }}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </router-link>
            <router-link to="/penginapan" class="btn btn-secondary">
              Cari Penginapan
            </router-link>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Slide Indicators -->
    <div class="hero-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      >
        <span class="indicator-fill"></span>
      </button>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  height: 100vh;
  min-height: 650px;
  overflow: hidden;
  margin-top: calc(var(--navbar-height) * -1);
}

/* Slides */
.slides-container {
  position: absolute;
  inset: 0;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}

.slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 8s ease;
}

.slide.active .slide-image {
  transform: scale(1.08);
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(11, 79, 108, 0.3) 0%,
    rgba(28, 37, 44, 0.65) 60%,
    rgba(28, 37, 44, 0.85) 100%
  );
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: var(--space-4xl);
}

.hero-text-block {
  max-width: 700px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(1, 186, 239, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(1, 186, 239, 0.3);
  border-radius: var(--radius-xl);
  color: var(--color-accent-light);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: var(--space-lg);
}

.hero-text-block h1 {
  color: var(--color-white);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  letter-spacing: -0.02em;
}

.hero-text-block p {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Text transitions */
.hero-text-enter-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-text-leave-active {
  transition: all 0.4s ease;
}

.hero-text-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.hero-text-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Indicators */
.hero-indicators {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.indicator {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: width var(--transition-normal);
}

.indicator.active {
  width: 60px;
}

.indicator-fill {
  display: block;
  width: 0%;
  height: 100%;
  background: var(--color-accent);
  border-radius: 2px;
  transition: width 5s linear;
}

.indicator.active .indicator-fill {
  width: 100%;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 3;
  animation: float 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 2px;
  animation: scrollWheel 1.5s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

.scroll-indicator span {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-slider {
    min-height: 580px;
  }

  .hero-content {
    padding-bottom: 100px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    text-align: center;
    justify-content: center;
  }

  .scroll-indicator {
    display: none;
  }

  .hero-indicators {
    bottom: 24px;
  }
}
</style>
