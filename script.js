const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const words = ["data", "AI", "code", "ideas"];
const wordTarget = document.getElementById("rotating-word");
let wordIndex = 0;
setInterval(() => {
  wordTarget.style.opacity = "0";
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    wordTarget.textContent = words[wordIndex];
    wordTarget.style.opacity = "1";
  }, 180);
}, 2100);

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
