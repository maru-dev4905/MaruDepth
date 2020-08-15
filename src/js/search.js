const search = function(){
    let
        i,
        path,
        params,
        value,
        item,
        tags,
        pathName;
    

    const initModule = function(){
        path = window.location.pathname.split("/").pop().toLowerCase();

        if(path == "search.html"){
            params = (new URL(document.location)).searchParams;
            value = params.get("searchInput").toUpperCase();
        }

        _addEventHandlers();
    }
    
    const _addEventHandlers = function(){
        if(path == "Video.html" || path == "search.html"){
            window.addEventListener("load",show_video);
            return;
        }if(path == "index.html" && "/"){
            return;
        }
    }

    const show_video = function(){

        if(path == "dev.html"){
            document.querySelector(".search__text").innerText = "develop";
        }else if(path == "design.html"){
            document.querySelector(".search__text").innerText = "design";
        }else if(path == "useful.html"){
            document.querySelector(".search__text").innerText = "useful";
        }else if(path == "search.html"){
        }

        _filter();
    }

    const jsonFilter = function(pathName){
        const json = require("../js/video.json");
        let jsonItem = [];
        for(item in json){
            for(let i = 0; i < json[item].length; i++){

                json[item][i].siteTags.forEach(tags => {
                    tags = tags.toUpperCase();

                    if(tags === pathName){
                        jsonItem.push(json[item][i]);
                    }else if(tags === pathName){
                        jsonItem.push(json[item][i]);
                    }else if(tags === pathName){
                        jsonItem.push(json[item][i]);
                    }
                });
            }
        }
        return jsonItem;
    }

    const _filter = function(){

        const span = document.createElement("span");
        span.classList.add("video__tag");

        tags = document.querySelectorAll(".video__tag");
        item = document.querySelectorAll(".video__box");

        if(path == "dev.html"){
            pathName = "DEV";
            let devJson = jsonFilter(pathName);

            devJson.forEach(devItem => {
                add_site_card(devItem.siteName, devItem.siteText, devItem.siteLink);
            });

        }else if(path == "design.html"){
            pathName = "DESIGN";
            
            let designJson = jsonFilter(pathName);
            designJson.forEach(designItem => {
                add_site_card(designItem.siteName, designItem.siteText, designItem.siteLink);
            });
        }else if(path == "useful.html"){
            pathName = "USEFUL";
            
            let usefulJson = jsonFilter(pathName);
            usefulJson.forEach(usefulItem => {
                add_site_card(usefulItem.siteName, usefulItem.siteText, usefulItem.siteLink);
            });
        }else if(path == "index.html"){
            return;
        }else if(path == "search.html"){
            // document.querySelector(".search__text").innerText = "#" + value;
            // searchText.innerText = "검색 정보가 없습니다."
        }
    }
    const add_site_card = function(name,text,link){
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
        
        img.setAttribute("src","../images/common/thumbnail/"+name+"-thumbnail.png");
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

    return {
        init : initModule
    }
}
search().init();