// Reveal on scroll
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.10 }
);
els.forEach((el) => obs.observe(el));

// Subtle parallax glow (updates CSS vars)
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY || 0;
    // tiny movement only
    const gx = Math.round((y * 0.02) * 10) / 10;  // 0.1px steps
    const gy = Math.round((y * -0.03) * 10) / 10;

    document.documentElement.style.setProperty("--gx", `${gx}px`);
    document.documentElement.style.setProperty("--gy", `${gy}px`);

    ticking = false;
  });
}, { passive: true });
