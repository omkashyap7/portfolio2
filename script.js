const header = document.querySelector("header");

window.addEventListener ("scroll", function()
{
    header.classList.toggle("sticky", window.scrollY > 0);
});


 
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '100px',
    duration: 3000,
    reset: true
})

sr.reveal('.home-text', {Delay:350, origin: 'left'})
sr.reveal('.home-img', {Delay:350, origin: 'right'})
sr.reveal('.sub-service, .about, .portfolio, .serivce, .cta, .contact ',{delay:100, origin:'bottom'})
