// ===== మండవ వెంకటేశ్వర్లు గౌడ్ వెబ్‌సైట్ =====

// పేజీ లోడ్ అయినప్పుడు
document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

    // గ్యాలరీ ఫోటోలపై క్లిక్ చేసినప్పుడు
    const images = document.querySelectorAll(".gallery img");

    images.forEach(function (img) {

        img.addEventListener("click", function () {

            window.open(img.src, "_blank");

        });

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Welcome Message
setTimeout(function () {

    alert("మండవ వెంకటేశ్వర్లు గౌడ్ అధికారిక వెబ్‌సైట్‌కు స్వాగతం.");

}, 1000);
