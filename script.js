// menu mobile + header scroll + faq suave
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}, { passive: true });

// fecha apenas um FAQ por vez (estilo fitfolio)
document.querySelectorAll('details.faq').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('details.faq').forEach(o => {
        if (o !== d) o.open = false;
      });
    }
  });
});
