const search = function(){
    let
        i,
        path,
        params,
        value,
        item,
        tags,
        tag,
        name;

    const initModule = function(){
        path = window.location.pathname.split("/").pop().toLowerCase();

        if(path == "search.html"){
            params = (new URL(document.location)).searchParams;
            value = params.get("searchInput").toUpperCase();
        }

        _addEventHandlers();
    }
    
    const _addEventHandlers = function(){
        if(path != "contact.html"){
            window.addEventListener("load",show_video);
        }else if(path == "Video.html"){
            return;
        }else if(path == "index.html" && "/"){
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
        }else if(path != "index.html"){
            document.querySelector(".search__text").innerText = "#" + value;
        }

        _filter();
    }
    const _filter = function(){
        tags = document.querySelectorAll(".video__tag");
        item = document.querySelectorAll(".video__box");

        if(path == "dev.html"){
            for(let i = 0; i < item.length; i++){
                tag = tags[i].innerText.toUpperCase();
                name = item[i].querySelector(".video__name").innerText.toUpperCase();
            
                if(tag.indexOf("DEV") > -1 ){
                    item[i].style.display = "inline-flex";
                }
                else if(tag.indexOf("DEV") <= -1){
                    item[i].style.display = "none";
                }
            }
        }else if(path == "design.html"){
            for(let i = 0; i < item.length; i++){
                tag = tags[i].innerText.toUpperCase();
                name = item[i].querySelector(".video__name").innerText.toUpperCase();
            
                if(tag.indexOf("DESIGN") > -1 ){
                    item[i].style.display = "inline-flex";
                }
                else if(tag.indexOf("DESIGN") <= -1){
                    item[i].style.display = "none";
                }
            }
        }else if(path == "useful.html"){
            for(let i = 0; i < item.length; i++){
                tag = tags[i].innerText.toUpperCase();
                name = item[i].querySelector(".video__name").innerText.toUpperCase();
            
                if(tag.indexOf("USEFUL") > -1 ){
                    item[i].style.display = "inline-flex";
                }
                else if(tag.indexOf("USEFUL") <= -1){
                    item[i].style.display = "none";
                }
            }
        }else if(path == "index.html"){
            return;
        }else{
            for(i = 0; i < item.length; i++){
            
                tag = tags[i].innerText.toUpperCase();
                name = item[i].querySelector(".video__name").innerText.toUpperCase();
    
                if(name.indexOf(value) > -1 || tag.indexOf(value) > -1){
                    item[i].style.display = "inline-flex";
                }
                else if(name.indexOf(value) <= -1 || tag.indexOf(value) <= -1){
                    item[i].style.display = "none";
                }
            }
        }
    }

    return {
        init : initModule
    }
}
search().init();