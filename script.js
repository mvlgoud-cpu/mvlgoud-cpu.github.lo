// Smooth scroll for menu links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Button hover animation
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
}

// Gallery image click effect
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});

// Contact form message
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("ధన్యవాదాలు! మీ వివరాలు విజయవంతంగా నమోదు అయ్యాయి.");

    form.reset();
  });
}

// Header shadow while scrolling
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
  }
});
