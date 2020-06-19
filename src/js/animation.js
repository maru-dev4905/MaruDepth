// section Variable
const useful = document.querySelector(".useful");
const usefulBox = document.querySelectorAll(".useful__summary__box");
const usefulTop = Math.round(useful.getBoundingClientRect().top);
const usefulBoxTop = usefulBox[1].offsetHeight;

let windowScroll;
let windowHeight;

window.addEventListener("scroll",()=>{
    windowScroll = window.scrollY;
    windowHeight = window.innerHeight;
    if( usefulBoxTop < windowScroll){
        for(let i = 0; i < usefulBox.length; i++){
            usefulBox[i].style.position="relative";
            usefulBox[i].style.animation="1s ease forwards fade-left";
            usefulBox[i].style.animationDelay= i * 0.25+"s";
        }
    }
});