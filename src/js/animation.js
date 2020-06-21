const animation = function() {
    let 
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

        winH

    const initModule = function() {
        // banner section
        banner = document.querySelector(".banner");
        bannerContent = document.querySelector(".banner__content");
        menuItem = document.querySelectorAll(".menu__item");
        
        // useful section
        usefulBox = document.querySelectorAll(".useful__summary__box");
        usefulTitle = document.querySelector(".useful__title");
        summary = document.querySelector(".useful__summary");

        // video section
        videoRows = document.querySelectorAll(".video__site__rows");
        videoBox = document.querySelectorAll(".video__box");

        winH = window.innerHeight;

        _addEventHandlers();
    }

    const _addEventHandlers = function() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    }
    
    const _checkPosition = function() {
        bannerTop = banner.getBoundingClientRect().top;        
        summaryTop = summary.getBoundingClientRect().top;
        usefulTitleTop = usefulTitle.getBoundingClientRect().top;
        videoTop = videoRows[0].getBoundingClientRect().top;

        while( winH > bannerTop ){
            for(let i = 0; i < menuItem.length; i++){
                menuItem[i].classList.add("fade");
            }
            bannerContent.classList.add("fade");
            break;
        }
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
        while( winH > videoTop ){
            for(let i = 0; i < videoRows.length; i++){
                videoRows[i].classList.add("fade");
            }
            break;
        }
    }
    return {
        init : initModule
    }
}
animation().init();