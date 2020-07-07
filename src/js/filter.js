const input = document.querySelector("#search--input");

input.addEventListener("keyup", key_up);

function key_up(){
    let value, tag, name, item, tags;

    value = input.value.toUpperCase();
    tags = document.querySelectorAll(".video__tag");
    item = document.getElementsByClassName("video__box");

    for(let i = 0; i < item.length; i++){
        name = item[i].querySelector(".video__name");
        if(name.innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "inline-flex";
        }else{
            item[i].style.display = "none"; 
        }
    }
    
    for(let i = 0; i < tags.length; i++){
        tag = tags[i].innerText.toUpperCase();
        if(tag.indexOf(value) > -1){
            item[i].style.display ="inline-flex";
        }else{
            item[i].style.display ="none";
        }
    }
}