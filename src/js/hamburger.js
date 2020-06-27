const hamburger = function(){
    let toggle,
        winWidth;

    const hamburgerBtn = document.querySelector("#menu--toggle"),
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
        }else if(toggle == false){
            hamburgerBtn.classList.remove("open");
        }
    }
    return {
        init : initModule
    }
}
hamburger().init();