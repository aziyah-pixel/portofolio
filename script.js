/* =========================
   HAMBURGER MENU
========================= */
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");
const icon = menuIcon.querySelector("i");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.className = "ph ph-x";
    } else {
        icon.className = "ph ph-list";
    }
});

// Tutup menu saat klik link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        icon.className = "ph ph-list";
    });
});

/* =========================
   BLUR NAVBAR SAAT SCROLL
========================= */
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* =========================
   TYPING TEXT (ABOUT NAME)
========================= */
const typingText = "Nanda Nur Aziyah";
const typingElement = document.getElementById("typing-name");

if (typingElement) {
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      typingElement.textContent = typingText.substring(0, index + 1);
      index++;

      if (index === typingText.length) {
        setTimeout(() => isDeleting = true, 1500);
      }
    } else {
      typingElement.textContent = typingText.substring(0, index - 1);
      index--;

      if (index === 0) {
        isDeleting = false;
      }
    }

    setTimeout(typeLoop, isDeleting ? 80 : 120);
  }

  typeLoop();
}


/* =========================
   SCROLL ANIMATION PROJECT
========================= */
const projects = document.querySelectorAll(".project.animate");

function revealProjects() {
  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      project.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

/* =========================
   EXPERIENCE SCROLL ANIMATION
========================= */
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

/* =========================
   CONTACT SCROLL ANIMATION
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
