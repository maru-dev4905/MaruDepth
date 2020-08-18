const search = function(){
    let
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
        if( path === "Video.html" || 
            path === "search.html" ||
            path === "dev.html" ||
            path === "useful.html" ||
            path === "design.html"){
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
            document.querySelector(".search__text").innerText = value;
        }
        _filter();
    }

    const jsonFilter = function(pathName){
        const json = require("../js/video.json");
        let jsonItem = [];
        for(item in json){
            for(let i = 0; i < json[item].length; i++){

                let name = [];
                name.push(json[item][i].siteName);
                
                json[item][i].siteTags.forEach(tags => {
                    tags = tags.toUpperCase();
                    if(tags === pathName){
                        jsonItem.push(json[item][i]);
                    }
                });
                name.forEach(names => {
                    names = names.toUpperCase();
                    if(names === pathName){
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
        switch (path) {
            case "dev.html":
                pathName = "DEV";
                let devJson = jsonFilter(pathName);
                devJson.forEach(devItem => {
                    add_site_card(
                        devItem.siteName,
                        devItem.siteText,
                        devItem.siteLink,
                        devItem.siteTags
                    )
                });
                break;
            case "design.html":
                pathName = "DESIGN";
            
                let designJson = jsonFilter(pathName);
                designJson.forEach(designItem => {
                    add_site_card(
                        designItem.siteName, 
                        designItem.siteText, 
                        designItem.siteLink,
                        designItem.siteTags
                    )
                });
                break;
            case "useful.html":
                pathName = "USEFUL";
                
                let usefulJson = jsonFilter(pathName);
                usefulJson.forEach(usefulItem => {
                    add_site_card(
                        usefulItem.siteName, 
                        usefulItem.siteText, 
                        usefulItem.siteLink,
                        usefulItem.siteTags
                    )
                });
                break;
            case "search.html":
                pathName = "SEARCH";

                let searchJson = jsonFilter(value);
                searchJson.forEach(searchItem => {
                    add_site_card(
                        searchItem.siteName,
                        searchItem.siteText,
                        searchItem.siteLink,
                        searchItem.siteTags
                    )
                })
                break;
            default:
                break;
        }
    }
    const add_site_card = function(name,text,link,tags){
        const siteGroup = document.querySelector(".video__site");
        const box = document.createElement("div");
        box.classList.add("video__box");
        
        const a = document.createElement("a");
        a.classList.add("video__link");
        a.setAttribute("target","_blank");

        const span = document.createElement("span");
        span.classList.add("video__tag");

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
        span.innerText = tags;
        siteName.innerText = name;
        siteText.innerText = text;
        
        boxContent.appendChild(siteName);
        boxContent.appendChild(siteText);
        box.appendChild(span);
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