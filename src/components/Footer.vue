<script setup>
import { RouterLink } from 'vue-router'

const quickLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Destinasi', path: '/destinasi' },
  { name: 'Kuliner', path: '/kuliner' },
  { name: 'Penginapan', path: '/penginapan' },
  { name: 'Cafe & Hangout', path: '/cafe' }
]

const destinations = [
  'Pantai Batukaras',
  'Green Canyon',
  'Hutan Mangrove',
  'Legok Pari',
  'Bulak Benda'
]
</script>

<template>
  <footer class="footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 42.5C1248 45 1344 60 1392 67.5L1440 75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="var(--color-primary-dark)"/>
      </svg>
    </div>

    <div class="footer-body">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-col footer-brand">
            <div class="footer-logo">
              <span>
                <span class="logo-main">Batukaras</span>
                <span class="logo-sub">Tourism</span>
              </span>
            </div>
            <p>Jelajahi pesona pantai tersembunyi di Pangandaran, Jawa Barat. Surga surfing, kuliner Sunda autentik, dan ketenangan alam tropis.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li v-for="link in quickLinks" :key="link.path">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Destinations -->
          <div class="footer-col">
            <h4>Destinasi</h4>
            <ul>
              <li v-for="dest in destinations" :key="dest">
                <a href="/destinasi">{{ dest }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Kontak</h4>
            <ul class="contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Batukaras, Cijulang, Pangandaran, Jawa Barat
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +62 265 654321
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@batukaras.tourism.id
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Batukaras Tourism. Semua hak dilindungi.</p>
          <p>Dibuat dengan dedikasi untuk pesona Pangandaran</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  margin-top: auto;
}

.footer-wave {
  position: relative;
  margin-bottom: -2px;
}

.footer-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

.footer-body {
  background: var(--color-primary-dark);
  padding: var(--space-3xl) 0 var(--space-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--space-3xl);
}

/* Brand */
.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-top: var(--space-md);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo .logo-icon {
  font-size: 1.6rem;
}

.footer-logo .logo-main {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-white);
  display: block;
}

.footer-logo .logo-sub {
  font-size: 0.6rem;
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  display: block;
}

.footer-social {
  display: flex;
  gap: 12px;
  margin-top: var(--space-lg);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(1, 186, 239, 0.4);
}

/* Columns */
.footer-col h4 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-lg);
  position: relative;
  padding-bottom: 10px;
}

.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  display: inline-block;
}

.footer-col ul li a:hover {
  color: var(--color-accent);
  transform: translateX(4px);
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.88rem;
  line-height: 1.5;
}

.contact-list li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-accent);
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.82rem;
}

/* Responsive */
@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: var(--space-sm);
  }
}
</style>
