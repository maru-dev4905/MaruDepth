// const up = function(){
//     let 
//         winHeight,
//         winScroll,
//         toggle;

//     const scrollUpBtn = document.querySelector(".scroll__content");

//     const initModule = function(){
//         _addEventHandlers();
//     }

//     const _addEventHandlers = function(){
//         window.addEventListener("scroll", _moveScroll);
//         window.addEventListener("load", _moveScroll);
//         window.addEventListener("resize", initModule);
//         scrollUpBtn.addEventListener("click", click_scroll);
//     }
    
//     const _moveScroll = function(){
        
//         winHeight = document.querySelector(".banner").scrollHeight;
//         winHeight = (winHeight / 2);
//         winScroll = window.scrollY;

//         if(winScroll < winHeight){
//             scrollUpBtn.classList.remove("show");
//             scrollUpBtn.classList.add("hide");
//         }else if(winScroll > winHeight){
//             scrollUpBtn.classList.add("show");
//             scrollUpBtn.classList.remove("hide");
//         }
//     }
    
//     const click_scroll = function(){
//         toggle = !toggle;

//         if(toggle == true){
//             window.scrollTo({top:0, left:0, behavior:'smooth'});
//         }
//     }
//     return {
//         init : initModule
//     }
// }
// up().init();