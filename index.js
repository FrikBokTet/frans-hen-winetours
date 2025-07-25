    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const subMenu = document.querySelector(".sub-menu");

        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            subMenu.classList.toggle("active");
        });
    });