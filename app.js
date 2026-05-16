console.log("App GourmetExpress OK");

function toggleMenu() {
    document.querySelector(".nav-links")?.classList.toggle("active");
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelector(".nav-links")?.classList.remove("active");
        });
    });
});