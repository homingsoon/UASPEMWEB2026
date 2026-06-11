<script setup>
import { ref, computed, onMounted } from 'vue'

import homestayImg from '@/assets/images/beach-homestay.png'
import heroBeach from '@/assets/images/hero-beach.png'
import cafeImg from '@/assets/images/beach-cafe.png'

const activeFilter = ref('Semua')
const filters = ['Semua', 'Resort', 'Homestay', 'Surf Camp']

const accommodations = ref([
  {
    id: 1,
    name: 'HAU Eco Lodges',
    type: 'Resort',
    description: 'Eco lodge mewah dengan arsitektur bambu tradisional Sunda, kolam renang infinity menghadap laut, dan suasana tenang yang memanjakan jiwa.',
    price: 'Rp 650.000',
    priceNote: '/malam',
    rating: 4.9,
    amenities: ['Pool', 'WiFi', 'AC', 'Restaurant', 'Garden'],
    image: homestayImg
  },
  {
    id: 2,
    name: 'Sunrise Beach Resort',
    type: 'Resort',
    description: 'Resort modern di tepi pantai dengan pemandangan sunrise yang spektakuler. Fasilitas lengkap termasuk spa, restoran seafood, dan akses langsung ke pantai.',
    price: 'Rp 850.000',
    priceNote: '/malam',
    rating: 4.8,
    amenities: ['Beachfront', 'Spa', 'WiFi', 'AC', 'Restaurant'],
    image: heroBeach
  },
  {
    id: 3,
    name: 'Batukaras Surf Camp',
    type: 'Surf Camp',
    description: 'Surf camp legendaris dengan instruktur profesional, rental papan lengkap, dan suasana komunitas surfer yang seru. Paket termasuk pelajaran surfing.',
    price: 'Rp 250.000',
    priceNote: '/malam + lesson',
    rating: 4.7,
    amenities: ['Surf Lesson', 'Board Rental', 'WiFi', 'Shared Kitchen'],
    image: cafeImg
  },
  {
    id: 4,
    name: 'Pondok Citra Batukaras',
    type: 'Homestay',
    description: 'Homestay nyaman dan bersih dengan harga terjangkau. Dekat dengan pantai dan warung makan lokal. Cocok untuk backpacker dan keluarga.',
    price: 'Rp 150.000',
    priceNote: '/malam',
    rating: 4.5,
    amenities: ['Fan', 'WiFi', 'Parking', 'Near Beach'],
    image: homestayImg
  },
  {
    id: 5,
    name: 'Villa Karang Nini',
    type: 'Resort',
    description: 'Villa privat dengan taman tropis yang asri, kolam renang, dan dapur lengkap. Ideal untuk keluarga atau grup yang menginginkan privasi dan kenyamanan.',
    price: 'Rp 1.200.000',
    priceNote: '/malam (4 tamu)',
    rating: 4.8,
    amenities: ['Pool', 'Kitchen', 'WiFi', 'AC', 'Garden'],
    image: heroBeach
  },
  {
    id: 6,
    name: 'Wave Riders Camp',
    type: 'Surf Camp',
    description: 'Surf camp bergaya kasual dengan dorm dan kamar privat. Sesi yoga pagi, BBQ malam, dan vibe komunitas yang ramah. Cocok untuk solo traveler.',
    price: 'Rp 180.000',
    priceNote: '/malam',
    rating: 4.6,
    amenities: ['Yoga', 'Surf Gear', 'WiFi', 'BBQ Night'],
    image: cafeImg
  },
  {
    id: 7,
    name: 'Omah Kampung Homestay',
    type: 'Homestay',
    description: 'Homestay tradisional dengan suasana rumah Sunda yang hangat. Pemilik yang ramah, sarapan lokal, dan tips wisata dari penduduk setempat.',
    price: 'Rp 120.000',
    priceNote: '/malam + sarapan',
    rating: 4.4,
    amenities: ['Breakfast', 'Fan', 'Garden', 'Local Guide'],
    image: homestayImg
  },
  {
    id: 8,
    name: 'The Jungle Glamp',
    type: 'Resort',
    description: 'Glamping unik di tengah hutan tropis dekat pantai. Tenda mewah dengan kasur empuk, pencahayaan romantis, dan suara alam yang menenangkan.',
    price: 'Rp 450.000',
    priceNote: '/malam',
    rating: 4.7,
    amenities: ['Glamping', 'Nature', 'WiFi', 'Breakfast'],
    image: heroBeach
  }
])

const filteredAccommodations = computed(() => {
  if (activeFilter.value === 'Semua') return accommodations.value
  return accommodations.value.filter(a => a.type === activeFilter.value)
})

function setFilter(filter) {
  activeFilter.value = filter
}

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
  <div class="penginapan-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img :src="homestayImg" alt="Penginapan Batukaras" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <span class="section-badge">Penginapan</span>
        <h1>Tempat Menginap Terbaik</h1>
        <p>Dari eco lodge mewah hingga homestay tradisional, temukan tempat istirahat sempurna di Batukaras</p>
      </div>
    </section>

    <!-- Filter & List -->
    <section class="accommodation-section section">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="filter-bar animate-on-scroll">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-btn"
            :class="{ active: activeFilter === filter }"
            @click="setFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Accommodation Grid with animation -->
        <TransitionGroup name="accom-list" tag="div" class="accom-grid">
          <div
            v-for="accom in filteredAccommodations"
            :key="accom.id"
            class="accom-card"
          >
            <div class="accom-image-wrap">
              <img :src="accom.image" :alt="accom.name" />
              <div class="accom-image-overlay"></div>
              <span class="accom-type-badge">
                {{ accom.type }}
              </span>
              <div class="accom-price-tag">
                <span class="price-amount">{{ accom.price }}</span>
                <span class="price-note">{{ accom.priceNote }}</span>
              </div>
            </div>

            <div class="accom-body">
              <div class="accom-header">
                <h3>{{ accom.name }}</h3>
                <div class="accom-rating">
                  <span class="stars">{{ getStars(accom.rating) }}</span>
                  <span class="rating-num">{{ accom.rating }}</span>
                </div>
              </div>

              <p>{{ accom.description }}</p>

              <div class="accom-amenities">
                <span v-for="amenity in accom.amenities" :key="amenity" class="amenity-tag">
                  {{ amenity }}
                </span>
              </div>

              <button class="btn btn-outline accom-cta">
                Lihat Detail
              </button>
            </div>
          </div>
        </TransitionGroup>
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

/* ── Filter Bar ── */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: var(--space-3xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 28px;
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-neutral-mid);
  background: var(--color-white);
  border: 2px solid transparent;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.filter-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--gradient-ocean);
  color: var(--color-white);
  border-color: transparent;
  box-shadow: var(--shadow-md), var(--shadow-glow);
}

/* ── Accommodation Grid ── */
.accom-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.accom-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.accom-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Image */
.accom-image-wrap {
  position: relative;
  height: 100%;
  min-height: 260px;
  overflow: hidden;
}

.accom-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.accom-card:hover .accom-image-wrap img {
  transform: scale(1.06);
}

.accom-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.3) 100%);
}

.accom-type-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  font-size: 0.75rem;
  font-weight: 600;
}

.accom-price-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  padding: 8px 16px;
  background: rgba(11, 79, 108, 0.9);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
}

.price-amount {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-white);
}

.price-note {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Body */
.accom-body {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
}

.accom-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-sm);
}

.accom-header h3 {
  font-size: 1.15rem;
  flex: 1;
  margin-right: var(--space-sm);
}

.accom-rating {
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

.accom-body > p {
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
  flex: 1;
}

.accom-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--space-lg);
}

.amenity-tag {
  padding: 4px 12px;
  background: var(--color-neutral-light);
  border-radius: var(--radius-xl);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-neutral-mid);
}

.accom-cta {
  align-self: flex-start;
  padding: 10px 24px;
  font-size: 0.85rem;
}

/* ── TransitionGroup animations ── */
.accom-list-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accom-list-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.accom-list-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.accom-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.accom-list-move {
  transition: transform 0.4s ease;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .accom-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .accom-card {
    grid-template-columns: 1fr;
  }

  .accom-image-wrap {
    min-height: 200px;
  }

  .page-hero {
    height: 40vh;
    min-height: 300px;
  }
}
</style>
