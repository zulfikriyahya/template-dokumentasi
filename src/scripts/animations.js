// src/scripts/animations.js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fungsi untuk init semua animasi
function initAnimations() {
  // 1. Animasi Hero Section / Banner
  gsap.from('.sl-markdown-content > h1', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power2.out',
  })

  // 2. Animasi untuk gambar/assets
  gsap.from('.sl-markdown-content img', {
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.sl-markdown-content img',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })

  // 3. Animasi Card/Section dengan scroll trigger
  const sections = gsap.utils.toArray(
    '.sl-markdown-content > section, .sl-markdown-content > div'
  )
  sections.forEach((section, i) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      delay: i * 0.05,
    })
  })

  // 4. Animasi untuk code blocks
  gsap.from('.expressive-code', {
    opacity: 0,
    x: -20,
    duration: 0.5,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.expressive-code',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  })

  // 5. Animasi Sidebar Navigation (smooth entrance)
  gsap.from('.sidebar nav a', {
    opacity: 0,
    x: -20,
    duration: 0.4,
    stagger: 0.03,
    ease: 'power2.out',
  })

  // 6. Hover effect untuk navigation links
  const navLinks = document.querySelectorAll('.sidebar nav a, .top-nav a')
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      gsap.to(this, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out',
      })
    })

    link.addEventListener('mouseleave', function () {
      gsap.to(this, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    })
  })

  // 7. Animasi untuk Mermaid diagrams (jika ada)
  gsap.from('.mermaid', {
    opacity: 0,
    scale: 0.9,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.mermaid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })

  // 8. Smooth scroll untuk anchor links
  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     const href = this.getAttribute('href')
  //     if (href !== '#') {
  //       e.preventDefault()
  //       const target = document.querySelector(href)
  //       if (target) {
  //         gsap.to(window, {
  //           duration: 0.8,
  //           scrollTo: {
  //             y: target,
  //             offsetY: 70,
  //           },
  //           ease: 'power2.inOut',
  //         })
  //       }
  //     }
  //   })
  // })

  // 9. Parallax effect untuk banner/hero images
  const heroImages = document.querySelectorAll('.hero img, .banner img')
  heroImages.forEach(img => {
    gsap.to(img, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  })

  // 10. Fade in untuk tables
  gsap.from('table', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    scrollTrigger: {
      trigger: 'table',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  })
}

// Init saat page load pertama kali
document.addEventListener('DOMContentLoaded', initAnimations)

// Re-init saat navigasi Astro (View Transitions)
document.addEventListener('astro:page-load', () => {
  // Kill semua ScrollTrigger sebelumnya untuk avoid conflicts
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())

  // Init ulang animasi
  initAnimations()
})

// Cleanup saat before navigate
document.addEventListener('astro:before-preparation', () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

export { initAnimations }
