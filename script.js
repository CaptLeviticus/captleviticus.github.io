// Simple scroll reveal (lightweight)
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.08 }
);

els.forEach((el) => obs.observe(el));
