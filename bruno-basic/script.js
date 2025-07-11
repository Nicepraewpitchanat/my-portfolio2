// เน้น Top‑scroll behavior หรือเมนู Mobile (ต่อเติมได้)
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
  });
});

// ไฮไลท์เมนูขณะ scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}
