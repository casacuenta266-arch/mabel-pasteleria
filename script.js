// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar menú al hacer click en un link (móvil)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Animación reveal al hacer scroll
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Año automático en el footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formulario: generar mensaje y abrir WhatsApp
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nombre = (data.get("nombre") || "").toString().trim();
    const pedido = (data.get("pedido") || "").toString().trim();
    const detalle = (data.get("detalle") || "").toString().trim();

    const msg = `Hola Mabel, soy ${nombre}. Quiero: ${pedido}. ${detalle ? "Detalles: " + detalle : ""}`.trim();
    const url = `https://wa.me/51951017572?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  });
}