const showVideo = function(){
    let
        path,
        localPath,
        tags;

    const initModule = function(){
        path = window.location.pathname.split("/").pop().toLowerCase();
        localPath = window.location.href.indexOf("localhost");
        
        if(path == "video.html"){
            _addEventHandlers();
        }
    }
    const _addEventHandlers = function(){
        window.addEventListener("load",show_video);
    }
    const show_video = function(){
        const json = require("../js/video.json");
        for (const key in json) {
            for(let i = 0; i < json[key].length; i++){
                
                let name = json[key][i].siteName;
                let text = json[key][i].siteText;
                let link = json[key][i].siteLink;

                const siteGroup = document.querySelector(".video__site");
        
                const box = document.createElement("div");
                box.classList.add("video__box");
                
                const a = document.createElement("a");
                a.classList.add("video__link");
                a.setAttribute("target","_blank");

                const boxContent = document.createElement("div");
                boxContent.classList.add("video__content");

                const siteName = document.createElement("h4");
                siteName.classList.add("video__name");

                const siteText = document.createElement("p");

                const img = document.createElement("img");
                img.classList.add("video__img");
                
                img.setAttribute("src","./images/common/thumbnail/"+name+"-thumbnail.png");
                img.setAttribute("alt",name+"-thumbnail");
                a.setAttribute("href",link);
                siteName.innerText = name;
                siteText.innerText = text;
                
                boxContent.appendChild(siteName);
                boxContent.appendChild(siteText);
                box.appendChild(img);
                box.appendChild(boxContent);
                box.appendChild(a);
                
                siteGroup.appendChild(box);
            }
        }
    }
    return {
        init : initModule
    }
}
showVideo().init();