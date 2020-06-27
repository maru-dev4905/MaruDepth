const hamburgerBtn = document.querySelector("#menu--toggle");

let toggle = false;

hamburgerBtn.addEventListener("click",()=>{
    toggle = !toggle;

    if(toggle == true){
        hamburgerBtn.classList.add("open");
    }else if(toggle == false){
        hamburgerBtn.classList.remove("open");
    }
}, false);