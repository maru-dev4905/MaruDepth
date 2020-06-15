const header = document.querySelector(".header");
const nav = document.querySelector(".banner__container");
let delta = false;
let nowScroll;
let lastScroll = 0;

window.addEventListener("scroll",()=>{
    nowScroll = window.scrollY;

    if(nowScroll < lastScroll){
        if(delta){
            header.style.animation="headerShow 0.3s forwards";
            nav.style.height="calc(100% - 170px)";
            delta=false;
        }
    }else if(nowScroll > lastScroll){
        if(delta == false){
            header.style.animation="headerHide 0.3s forwards";
            nav.style.height="calc(100% - 120px)";
            delta=true;
        }
    }
    lastScroll = window.scrollY;
});