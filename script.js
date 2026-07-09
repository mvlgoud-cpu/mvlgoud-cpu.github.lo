// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Fade In Sections =====
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ===== Hero Buttons =====
document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });

});

// ===== Leader Cards =====
document.querySelectorAll(".leader-card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

// ===== Gallery Zoom =====
document.querySelectorAll(".gallery-item img").forEach(img => {

  img.addEventListener("click", () => {

    if (img.style.transform === "scale(1.6)") {
      img.style.transform = "scale(1)";
      img.style.zIndex = "1";
    } else {
      img.style.transform = "scale(1.6)";
      img.style.zIndex = "100";
    }

  });

});

// ===== Contact Form =====
const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("ధన్యవాదాలు!\nమీ సందేశం విజయవంతంగా నమోదు అయింది.");

    form.reset();

  });

}

// ===== Header Shadow =====
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

  }else{

    header.style.boxShadow = "0 3px 15px rgba(0,0,0,.15)";

  }

});

// ===== Page Loaded =====
window.onload = () => {

  document.body.style.opacity = "1";

};

console.log("Website Loaded Successfully");
