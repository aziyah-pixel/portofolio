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
