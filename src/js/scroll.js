// const scroll = function () {
//     let delta,
//         nowScroll,
//         lastScroll,
//         winWidth,
//         headerCheck,
//         path;

//     const header = document.querySelector(".header"),
//           nav = document.querySelector(".banner__container"),
//           TABLET_SIZE = 768;

//     const initModule = function () {
//         delta = false;
//         lastScroll = 0;
//         winWidth = window.innerWidth;
//         headerCheck = header.classList.contains("show");

//         _addEventHandlers();
//     }

//     const _addEventHandlers = function () {
//         window.addEventListener("scroll", _checkPosition);
//         window.addEventListener("load", _checkPosition);
//         window.addEventListener("resize", initModule);
//     }

//           const _checkPosition = function () {
//         if(winWidth < TABLET_SIZE){
//         }else if(winWidth > TABLET_SIZE){
//             _changeHeaderPosition();
//         }

//     }
//     const _changeHeaderPosition = function () {
//         nowScroll = window.scrollY;

//         if (nowScroll < lastScroll) {
//             if (delta) {
//                 header.classList.remove("hide")
//                 header.classList.add("show");
//                 delta = false;
//             }
//         } else if (nowScroll > lastScroll) {
//             if (delta == false) {
//                 header.classList.remove("show")
//                 header.classList.add("hide");
//                 delta = true;
//             }
//         }
//         lastScroll = window.scrollY;
//     };
//     return {
//         init : initModule
//     }

// }
// scroll().init();