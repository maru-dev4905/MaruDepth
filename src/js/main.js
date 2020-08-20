window.addEventListener("load", () => {
    const path = window.location.href;

    const logo = document.querySelector(".logo img");
    const flogo = document.querySelector(".footer__logo img")
    const banner = document.querySelector(".banner");
    const trend = document.querySelector(".trend");
    const trendImg = document.querySelector(".trend__img");
    const lensIcon = document.querySelector(".contact__icon");
    const searchBtn = document.querySelector("#search--input + button");

    const videoLink = document.querySelectorAll(".video__link");
    const kindLink = document.querySelectorAll(".kind__card__link-ico i");
    const summaryIcon = document.querySelectorAll(".summary__box__icon img");

    if(path.indexOf("localhost")){
        banner.style.backgroundImage="url(./images/main/bg.jpg)";
        trend.style.backgroundImage="url(./images/common/trend-bg.jpg)";
        trendImg.style.backgroundimage="url(./images/common/trend.png)";
        searchBtn.style.backgroundImage="url(./images/icon/search.png)";

        logo.setAttribute("src","./images/logo/logo.png");
        lensIcon.setAttribute("src","./images/icon/lens.png");
        flogo.setAttribute("src","./images/logo/logo.png");

        summaryIcon[0].setAttribute("src","./images/icon/design.png");
        summaryIcon[1].setAttribute("src","./images/icon/programming.png");
        summaryIcon[2].setAttribute("src","./images/icon/useful.png");

        for(let i = 0; i < videoLink.length; i++){
            videoLink[i].style.backgroundImage = "url(./images/icon/next-purple.png)";
            kindLink[i].style.backgroundImage = "url(./images/icon/arrow-black.png)";
        }

    }else{
        return false;
    }

    
});
const submitBtn = document.querySelector("#submit--btn");
const alertMessage = "지금은 사용하실 수 없습니다. 문의사항이 있다면 메일로 보내주세요."

submitBtn.addEventListener("click",()=>{
    alert(alertMessage);
});