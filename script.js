/* =========================
   HAMBURGER MENU
========================= */
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");
const icon = menuIcon.querySelector("i");

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
   TYPING TEXT (ABOUT NAME)
========================= */
const typingText = "Nanda Nur Aziyah";
const typingElement = document.getElementById("typing-name");

let index = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting) {
        // MENGETIK
        typingElement.textContent = typingText.substring(0, index + 1);
        index++;

        if (index === typingText.length) {
            setTimeout(() => isDeleting = true, 1500); // jeda setelah selesai
        }
    } else {
        // MENGHAPUS
        typingElement.textContent = typingText.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeLoop, isDeleting ? 80 : 120);
}

typeLoop();
