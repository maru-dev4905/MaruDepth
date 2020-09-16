const openBtn = document.querySelector(".search__open-btn");
const searchForm = document.querySelector(".search-form");

let formCheck = true;

openBtn.addEventListener("click",openSearch);

function openSearch(){
    if(formCheck == true){
        searchForm.classList.add("open");
        searchForm.classList.remove("close");
        
        formCheck = false;
    }else{
        searchForm.classList.add("close");
        searchForm.classList.remove("open");

        formCheck = true;
    }
}