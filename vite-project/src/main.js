import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// ========== Smooth scroll delegation (works always) ==========
function setupSmoothScroll() {
  // single delegated listener for all anchor clicks
  document.addEventListener('click', (e) => {
    // closest finds the <a> even if you click an inner <span> or icon
    const anchor = e.target.closest && e.target.closest('a[href^="#"]')
    if (!anchor) return

    const href = anchor.getAttribute('href')
    if (!href || href === '#') return

    const id = href.slice(1)
    const target = document.getElementById(id)
    if (!target) return

    // prevent default anchor jump
    e.preventDefault()

    // compute offset to avoid being hidden under fixed navbar
    const nav = document.querySelector('nav')
    const navHeight = nav ? nav.getBoundingClientRect().height : 80

    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight

    window.scrollTo({
      top,
      behavior: 'smooth'
    })

    // optional: trigger a custom event so navbar component can react (highlight active)
    window.dispatchEvent(new CustomEvent('app:smooth-scroll', { detail: { id } }))
  })
}

// Attach immediately (works whether DOM is ready or not)
if (document.readyState === 'loading') {
  // DOM not ready yet — run after it is
  document.addEventListener('DOMContentLoaded', setupSmoothScroll)
} else {
  // DOM already ready
  setupSmoothScroll()
}
