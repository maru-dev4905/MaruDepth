// const animation = function() {
//     let 
//         main,
//         mainTop,

//         // banner
//         banner,
//         bannerContent,
//         menuItem,
//         bannerTop,
        
//         // useful
//         summary,
//         usefulBox,
//         usefulTitle,
//         usefulTitleTop,
//         summaryTop,
//         usefulSite,

//         // video
//         videoBox,
//         videoTitle,

//         // kind
//         kindTitle,
//         kindTitleTop,
//         kindCard,
//         kindContent,
//         kindCardTop,

//         winH,
//         path;

//     const initModule = function() {
//         winH = window.innerHeight;
//         path = window.location.pathname;
//         path = path.split("/").pop();
        
//         // banner section
//         banner = document.querySelector(".banner");
//         bannerContent = document.querySelector(".banner__content");
//         menuItem = document.querySelectorAll(".menu__item");
        
//         if(path == "index.html" || path == "/" || path == ""){
//             // useful section
//             usefulBox = document.querySelectorAll(".useful__summary__box");
//             usefulTitle = document.querySelector(".useful__title");
//             usefulSite = document.querySelector(".useful__site");
//             summary = document.querySelector(".useful__summary");

//             // kind section
//             kindTitle = document.querySelector(".kind__title");
//             kindCard = document.querySelectorAll(".kind__card");
//             kindContent = document.querySelector(".kind__content");
//         }
//         // video section
//         videoTitle = document.querySelector(".video__title");
//         videoBox = document.querySelectorAll(".video__box");

//         main = document.querySelector(".main");

//         _addEventHandlers();
//     }

//     const _addEventHandlers = function() {
//         window.addEventListener("scroll", _checkPosition);
//         window.addEventListener("load", _checkPosition);
//         window.addEventListener("resize", initModule);
//     }
    
//     const _checkPosition = function() {                

//         if(path == "index.html" || path == "/" || path == ""){
            
//             summaryTop = summary.getBoundingClientRect().top;
//             usefulTitleTop = usefulTitle.getBoundingClientRect().top;
//             kindTitleTop = kindTitle.getBoundingClientRect().top;
//             kindCardTop = kindContent.getBoundingClientRect().top;
//             mainTop = main.getBoundingClientRect().top;

//             while ( winH > summaryTop ){
//                 for(let i = 0; i < usefulBox.length; i++){
//                     usefulBox[i].classList.add("fade");
//                 }
//                 break;
//             }
//             while ( winH > usefulTitleTop ){
//                 usefulTitle.classList.add("fade");
//                 usefulSite.classList.add("fade");
//                 break;
//             }
//             while( winH > kindTitleTop ){
//                 kindTitle.classList.add("fade");
//                 break;
//             }
//             while( winH > kindCardTop ){
//                 for(let i = 0; i < kindCard.length; i++){
//                     kindCard[i].classList.add("fade");
//                 }
//                 break;
//             }

//         }
//         mainTop = main.getBoundingClientRect().top;
//         bannerTop = banner.getBoundingClientRect().top;      

//         for(let i = 0; i < menuItem.length; i++){
//             menuItem[i].classList.add("fade");
//         }

//         while( winH > bannerTop ){
//             for(let i = 0; i < menuItem.length; i++){
//             }
//             bannerContent.classList.add("fade");
//             break;
//         }  
//         switch (path) {
//             case "dev.html":
//                 main.classList.add("up");
//                 break;
//             case "design.html":
//                 main.classList.add("up");
//                 break;
//             case "useful.html":
//                 main.classList.add("up");
//                 break;
//             case "Video.html":
//                 main.classList.add("up");
//                 videoTitle.classList.add("fade");
//                 break;
//             case "search.html":
//                 main.classList.add("up");
//                 videoTitle.classList.add("fade");
//                 break;
//             default:
//                 break;
//         }
//     }
//     return {
//         init : initModule
//     }
// }
// animation().init();