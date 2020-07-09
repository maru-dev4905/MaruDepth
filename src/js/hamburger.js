const hamburger = function(){
    let toggle,
        winWidth;

    const hamburgerBtn = document.querySelector("#menu--toggle"),
          hamburgerMenu = document.querySelector(".hamburger__content"),
          hamburgerItem = document.querySelectorAll(".hamburger__nav__item"),
          hamburgerSns = document.querySelector(".hamburger__sns"),
          IPHONE_SIZE = 475;

          
    const initModule = function() {
        toggle = false;
        winWidth = window.innerWidth;

        _addEventaHandlers();
    }
    
    const _addEventaHandlers = function() {
        window.addEventListener("scroll", _moveHamburger);
        window.addEventListener("load", _moveHamburger);
        window.addEventListener("resize", initModule);
        hamburgerBtn.addEventListener("click", _clickHamburger);
    }

    const _moveHamburger = function() {
        if(winWidth > IPHONE_SIZE){
            hamburgerBtn.classList.remove("show");
            hamburgerBtn.classList.add("hide");
        }else if(winWidth < IPHONE_SIZE){
            hamburgerBtn.classList.add("show");
            hamburgerBtn.classList.remove("hide");

        }
        return false;
    }
    
    const _clickHamburger = function() {
        toggle = !toggle;

        if(toggle == true){
            hamburgerBtn.classList.add("open");
            hamburgerMenu.classList.add("open");
            hamburgerMenu.classList.remove("hide");
            for(let i = 0; i < hamburgerItem.length; i++){
                hamburgerItem[i].classList.add("fade");
            }
            hamburgerSns.classList.add("fade");
        }else if(toggle == false){
            hamburgerBtn.classList.remove("open");
            hamburgerMenu.classList.remove("open");
            hamburgerMenu.classList.add("hide");
            for(let i = 0; i < hamburgerItem.length; i++){
                hamburgerItem[i].classList.remove("fade");
            }
            hamburgerSns.classList.remove("fade");
        }
    }
    return {
        init : initModule
    }
}
hamburger().init();