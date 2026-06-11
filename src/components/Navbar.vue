<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Destinasi', path: '/destinasi' },
  { name: 'Kuliner', path: '/kuliner' },
  { name: 'Penginapan', path: '/penginapan' },
  { name: 'Cafe & Hangout', path: '/cafe' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 30
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="navbar-inner container">
      <!-- Logo -->
      <router-link to="/" class="navbar-logo" @click="closeMobileMenu">
        <span class="logo-text">
          <span class="logo-main">Batukaras</span>
          <span class="logo-sub">Tourism</span>
        </span>
      </router-link>

      <!-- Desktop Nav Links (Centered) -->
      <ul class="navbar-links">
        <li v-for="link in navLinks" :key="link.path">
          <router-link
            :to="link.path"
            class="nav-link"
            :class="{ active: route.path === link.path }"
          >
            {{ link.name }}
            <span class="nav-link-indicator"></span>
          </router-link>
        </li>
      </ul>

      <!-- CTA Button (right side) -->
      <a href="#" class="navbar-cta btn btn-primary" @click.prevent>
        Jelajahi
      </a>

      <!-- Hamburger -->
      <button
        class="hamburger"
        :class="{ active: isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <ul>
            <li v-for="(link, index) in navLinks" :key="link.path" :style="{ animationDelay: `${index * 0.08}s` }">
              <router-link
                :to="link.path"
                class="mobile-link"
                :class="{ active: route.path === link.path }"
                @click="closeMobileMenu"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  transition: all var(--transition-normal);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(11, 79, 108, 0.92);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.navbar.menu-open {
  background: rgba(11, 79, 108, 0.98);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

.logo-icon {
  font-size: 1.8rem;
  animation: wave 3s ease-in-out infinite;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.logo-sub {
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Nav Links (centered) */
.navbar-links {
  display: flex;
  align-items: center;
  gap: 6px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  transition: color var(--transition-fast);
  border-radius: var(--radius-md);
}

.nav-link:hover {
  color: var(--color-white);
}

.nav-link.active {
  color: var(--color-white);
}

.nav-link-indicator {
  display: block;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
  transition: width var(--transition-normal);
  margin-top: 4px;
}

.nav-link:hover .nav-link-indicator,
.nav-link.active .nav-link-indicator {
  width: 100%;
}

/* CTA */
.navbar-cta {
  padding: 10px 24px;
  font-size: 0.85rem;
  z-index: 10;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
  padding: 8px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all var(--transition-normal);
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  top: var(--navbar-height);
  background: rgba(11, 79, 108, 0.98);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.mobile-menu-content ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.mobile-menu-content li {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.mobile-link {
  display: block;
  padding: 16px 40px;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-link:hover,
.mobile-link.active {
  color: var(--color-white);
  background: rgba(1, 186, 239, 0.12);
}

/* Transitions */
.mobile-menu-enter-active {
  animation: fadeIn 0.3s ease forwards;
}

.mobile-menu-leave-active {
  animation: fadeIn 0.2s ease reverse forwards;
}

/* Responsive */
@media (max-width: 960px) {
  .navbar-links {
    display: none;
  }

  .navbar-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
