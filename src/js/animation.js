// section Variable
const useful = document.querySelector(".useful");
const usefulBox = document.querySelectorAll(".useful__summary__box");
const usefulBoxHeight = document.querySelector(".useful__summary").offsetHeight;
let windowScroll;
let windowHeight;

window.addEventListener("scroll",()=>{
    windowScroll = window.scrollY;
    
    if( usefulBoxHeight => windowScroll){
        createAnimation();
    }
});
function createAnimation(){
    for(let i = 0; i < usefulBox.length; i++){
        usefulBox[i].style.position="relative";
        usefulBox[i].style.animation="1s ease forwards fade-left";
        usefulBox[i].style.animationDelay= i * 0.25+"s";
    }
}