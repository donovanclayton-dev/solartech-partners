/* ── Year ─────────────────────────────────────────── */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Sticky header ────────────────────────────────── */
const header = document.querySelector("[data-header]");
if (header) {
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ── Smooth scroll for anchor links ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", id);
  });
});

/* ── Form submission feedback ─────────────────────── */
const form = document.querySelector(".apply-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    const action = form.getAttribute("action");
    // If Formspree isn't configured yet, fall back to mailto
    if (action && action.includes("REPLACE_WITH_YOUR_ID")) {
      e.preventDefault();
      const name = form.querySelector("#name")?.value || "there";
      alert(
        `Thanks, ${name}! Please email your application to:\nmarketing@solartechonline.com\n\nWe'll review it and get back to you within 48 hours.`
      );
      return;
    }
    // Let Formspree handle the real submission
  });
}
