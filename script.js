const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.topbar');
toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.topbar nav a').forEach((link) => {
  link.addEventListener('click', () => header.classList.remove('nav-open'));
});
