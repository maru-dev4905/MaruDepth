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

        params = (new URL(document.location)).searchParams;
        value = params.get("searchInput").toUpperCase();

        _addEventHandlers();
    }
    
    const _addEventHandlers = function(){
        window.addEventListener("load",show_video);
    }

    const show_video = function(){
        document.querySelector(".search__text").innerText = "#" + value;
        _filter();
    }
    const _filter = function(){
        tags = document.querySelectorAll(".video__tag");
        item = document.querySelectorAll(".video__box");

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

    return {
        init : initModule
    }
}
search().init();