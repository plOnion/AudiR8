const section3 = document.querySelector("#section3");
const cards = [...document.querySelectorAll("#section4 .card")];

window.addEventListener("scroll", ()=>{
if (window.scrollY > 160){
    section3.style.animationDuration = "2.5s";
    section3.classList.add("animated", "fadeIn", "delay-1s");
}

if (window.scrollY > 575){
    cards[0].style.animationDuration = "2.5s";
    cards[0].classList.add("animated", "fadeInLeft", "delay-1s");
}

if (window.scrollY > 675){
    cards[1].style.animationDuration = "2.5s";
    cards[1].classList.add("animated", "fadeInRight", "delay-1s");
}
})