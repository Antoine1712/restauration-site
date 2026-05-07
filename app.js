console.log('Application GourmetExpress chargée');

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

window.addEventListener("scroll", () => {

    const header = document.getElementById("mainHeader");
    const menuSection = document.getElementById("menu");

    const menuTop = menuSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= menuTop - 100) {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }

});