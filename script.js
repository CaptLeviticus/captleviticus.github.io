// Scroll reveal + stagger children
const els = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;

      e.target.classList.add("show");

      // stagger children cards (portfolio grids, etc.)
      const kids = e.target.querySelectorAll(".card.soft.reveal, a.card.soft.reveal");
      kids.forEach((k, i) => {
        k.style.transitionDelay = `${i * 60}ms`;
        k.classList.add("show");
      });

      obs.unobserve(e.target);
    });
  },
  { threshold: 0.10 }
);

els.forEach((el) => obs.observe(el));
