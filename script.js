const navToggle = document.getElementById("nav-toggle");
const navCollapse = document.getElementById("nav-collapse");
const navItems = document.querySelectorAll(".nav-item");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Mobile nav toggle */
if (navToggle && navCollapse) {
  navToggle.addEventListener("click", () => {
    const isOpen = navCollapse.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navCollapse.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navCollapse.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Active nav link on scroll */
const sectionIds = ["about", "highlights", "projects", "experience", "why-me", "resume", "contact"];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navItems.forEach((item) => {
        const link = item.querySelector("a");
        const href = link?.getAttribute("href")?.slice(1);
        item.classList.toggle("active", href === id);
      });
    });
  },
  { threshold: 0.25, rootMargin: "-30% 0px -55% 0px" }
);

sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});
