const loc = document.querySelector('.location')
const nav = document.querySelector('.on-click-text')
const body = document.querySelector('body')
const bottomNav = document.querySelector('.bottom-nav')

const stickyNav = document.querySelector('.top')

const realnav = document.querySelector('.header')

loc.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }

});

window.addEventListener('scroll', () => {
    const clientHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    const currentScrollHeight = window.pageYOffset;


    if (currentScrollHeight > 66) {
        stickyNav.style.display = "block";
        realnav.style.display = "none";
    } else {
        stickyNav.style.display = "none";
        realnav.style.display = "flex";

    }




    if (clientHeight - windowHeight - 100 < currentScrollHeight) {
        bottomNav.style.height = 0;
    } else {

        bottomNav.style.height = "64px";
    }


    console.log(currentScrollHeight);


})

