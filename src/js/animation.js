const animation = function() {
    let 
        main,
        mainTop,

        // banner
        banner,
        bannerContent,
        menuItem,
        bannerTop,
        
        // useful
        summary,
        usefulBox,
        usefulTitle,
        usefulTitleTop,
        summaryTop,

        // video
        videoRows,
        videoBox,
        videoTop,
        videoTitle,

        // kind
        kindTitle,
        kindTitleTop,
        kindCard,
        kindContent,
        kindCardTop,

        winH,
        path;

    const initModule = function() {
        winH = window.innerHeight;
        path = window.location.pathname;
        path = path.split("/").pop();
        
        if(path == "index.html" && "/"){
            // useful section
            usefulBox = document.querySelectorAll(".useful__summary__box");
            usefulTitle = document.querySelector(".useful__title");
            summary = document.querySelector(".useful__summary");

            // kind section
            kindTitle = document.querySelector(".kind__title");
            kindCard = document.querySelectorAll(".kind__card");
            kindContent = document.querySelector(".kind__content");

            
            // banner section
            banner = document.querySelector(".banner");
            bannerContent = document.querySelector(".banner__content");
        }
        if(path == "video.html"){
            videoTitle = document.querySelector(".video__title");
        }
        menuItem = document.querySelectorAll(".menu__item");

        // video section
        videoRows = document.querySelectorAll(".video__site__rows");
        videoBox = document.querySelectorAll(".video__box");

        main = document.querySelector(".main");

        _addEventHandlers();
    }

    const _addEventHandlers = function() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    }
    
    const _checkPosition = function() {
        
        if(path == "index.html" && "/"){
            
            summaryTop = summary.getBoundingClientRect().top;
            usefulTitleTop = usefulTitle.getBoundingClientRect().top;
            kindTitleTop = kindTitle.getBoundingClientRect().top;
            kindCardTop = kindContent.getBoundingClientRect().top;
            videoTop = videoRows[0].getBoundingClientRect().top;
            bannerTop = banner.getBoundingClientRect().top;      

            while ( winH > summaryTop ){
                for(let i = 0; i < usefulBox.length; i++){
                    usefulBox[i].classList.add("fade");
                }
                break;
            }
            while ( winH > usefulTitleTop ){
                usefulTitle.classList.add("fade");
                break;
            }
            while( winH > kindTitleTop ){
                kindTitle.classList.add("fade");
                break;
            }
            while( winH > kindCardTop ){
                for(let i = 0; i < kindCard.length; i++){
                    kindCard[i].classList.add("fade");
                }
                break;
            }
        
            while( winH > bannerTop ){
                for(let i = 0; i < menuItem.length; i++){
                }
                bannerContent.classList.add("fade");
                break;
            }
        }
        mainTop = main.getBoundingClientRect().top;
        if(path == "video.html"){
            videoTop = videoRows[0].getBoundingClientRect().top;
        }
        for(let i = 0; i < menuItem.length; i++){
            menuItem[i].classList.add("fade");
        }

        while( winH > videoTop ){
            for(let i = 0; i < videoRows.length; i++){
                videoRows[i].classList.add("fade");
            }
            break;
        }
        while( winH > mainTop){
            videoTitle.classList.add("fade");
            break;
        }
    }
    return {
        init : initModule
    }
}
animation().init();