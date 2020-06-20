// section Variable
const useful = document.querySelector(".useful");
const bannerContent = document.querySelector(".banner__content");
const usefulBoxHeight = document.querySelector(".useful__summary").offsetHeight;

const usefulBox = document.querySelectorAll(".useful__summary__box");
const menuItem = document.querySelectorAll(".menu__item");

let windowScroll;
let windowHeight;

window.addEventListener("load",()=>{
    addClassBaner();
});

window.addEventListener("scroll",()=>{
    scrollDetact();
});

function scrollDetact(){
    windowScroll = window.scrollY;
    
    if( usefulBoxHeight => windowScroll){
        addClassUseful();
    }
}
function addClassBaner(){
    for(let i = 0; i < menuItem.length; i++){
        menuItem[i].classList.add("fade");
    }    
    bannerContent.classList.add("fade");
}
function addClassUseful(){
    for(let i = 0; i < usefulBox.length;i++){
        usefulBox[i].classList.add("fade");
    }
}