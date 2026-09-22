document.addEventListener("DOMContentLoaded", () => {
  /* ================= TYPING ANIMATION ================= */

  const typing = document.getElementById("typing");

  const texts = [
    "Full-Stack Developer",
    "COMPUTER Sceince Sudent",
    "AI Enthusiast",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const current = texts[textIndex];

    typing.textContent = current.substring(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;

      setTimeout(typeEffect, 100);
    } else if (!deleting && charIndex === current.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);
    } else if (deleting && charIndex > 0) {
      charIndex--;

      setTimeout(typeEffect, 50);
    } else {
      deleting = false;

      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }

      setTimeout(typeEffect, 400);
    }
  }

  typeEffect();

  /* ================= SCROLL REVEAL ================= */

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  reveals.forEach((element) => {
    observer.observe(element);
  });

  /* ================= NAVBAR SCROLL ================= */

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
