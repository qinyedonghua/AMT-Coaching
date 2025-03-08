const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__links");

hamburger.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 550px)").matches) {
        closeMenu();
    }
});

if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
}

function closeMenu(){
    links.forEach((link) => {
        link.addEventListener("click", () => {
            linksContainer.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
}

// This is getting the submitted data
function myfunc(event) {
    event.preventDefault();

    var full_name = document.getElementById("fname").value;
    var date__scheduled = document.getElementById("date").value;
    var time__scheduled = document.getElementById("time").value;
    var email = document.getElementById("email").value;

    localStorage.setItem('full__name', full_name);
    localStorage.setItem('date__scheduled', date__scheduled);
    localStorage.setItem('time_scheduled', time__scheduled);
    localStorage.setItem('email', email);
}