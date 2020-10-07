const path = window.location.pathname.split("/").pop().toLowerCase();

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

if(path === "search.html"){
    const params = (new URL(document.location)).searchParams;
    const value = params.get("search").toUpperCase();

    const searchText = document.querySelector(".search-text");
    searchText.innerText = value;

    const devJson = require("../js/json/dev.json");
    const designJson = require("../js/json/design.json");
    const accountJson = require("../js/json/accounting.json");
    const etcJson = require("../js/json/etc.json");
    
    let jsonItem = [];
    
    for(const item in devJson){
        for(let i = 0; i < devJson[item].length; i++){
            let name = [];
            name.push(devJson[item][i].siteName);

            devJson[item][i].siteTags.forEach(tags => {
                tags = tags.toUpperCase();
                if(tags === value){
                    jsonItem.push(devJson[item][i]);
                }
            });
            name.forEach(names => {
                names = names.toUpperCase();
                if(names === value){
                    jsonItem.push(json[item][i]);
                }
            })
        }
    }
    for(const item in designJson){
        for(let i = 0; i < designJson[item].length; i++){
            let name = [];
            name.push(designJson[item][i].siteName);

            designJson[item][i].siteTags.forEach(tags => {
                tags = tags.toUpperCase();
                if(tags === value){
                    jsonItem.push(designJson[item][i]);
                }
            });
            name.forEach(names => {
                names = names.toUpperCase();
                if(names === value){
                    jsonItem.push(json[item][i]);
                }
            })
        }
    }
    for(const item in accountJson){
        for(let i = 0; i < accountJson[item].length; i++){
            let name = [];
            name.push(accountJson[item][i].siteName);

            accountJson[item][i].siteTags.forEach(tags => {
                tags = tags.toUpperCase();
                if(tags === value){
                    jsonItem.push(accountJson[item][i]);
                }
            });
            name.forEach(names => {
                names = names.toUpperCase();
                if(names === value){
                    jsonItem.push(json[item][i]);
                }
            })
        }
    }
    for(const item in etcJson){
        for(let i = 0; i < etcJson[item].length; i++){
            let name = [];
            name.push(etcJson[item][i].siteName);

            etcJson[item][i].siteTags.forEach(tags => {
                tags = tags.toUpperCase();
                if(tags === value){
                    jsonItem.push(etcJson[item][i]);
                }
            });
            name.forEach(names => {
                names = names.toUpperCase();
                if(names === value){
                    jsonItem.push(json[item][i]);
                }
            })
        }
    }

    jsonItem.forEach(siteItem => {
        create__card(
            siteItem.siteName,
            siteItem.siteText,
            siteItem.siteLink,
            siteItem.siteTags 
        )
    });
    
    
    function create__card(name, text, link, tags) {
        const siteGroup = document.querySelector("ul.site__rows");

        const li = document.createElement("li");

        li
            .classList
            .add("site-item");

        const imgBox = document.createElement("div");
        imgBox
            .classList
            .add("site__img");

        const a1 = document.createElement("a");
        a1.setAttribute("href", link);
        a1.setAttribute("target", "_blank");

        const img = document.createElement("img");
        img
            .classList
            .add("site--img");
        img.setAttribute("src", "./images/common/thumbnail/" + name + ".png");
        img.setAttribute("alt", name + "-img");

        const contentBox = document.createElement("div");
        contentBox
            .classList
            .add("site__content");

        const strong = document.createElement("strong");
        strong
            .classList
            .add("site--title");
        strong.innerText = name;

        const p = document.createElement("p");
        p
            .classList
            .add("site--desc");
        p.innerText = text;

        const a2 = document.createElement("a");
        a2
            .classList
            .add("site--link");
        a2.setAttribute("href", link);
        a2.setAttribute("target", "_blank");
        a2.innerText = "Go to Site";

        const span = document.createElement("span");
        span
            .classList
            .add("sr");
        span
            .classList
            .add("site--tags");
        span.innerText = tags;

        contentBox.appendChild(strong);
        contentBox.appendChild(p);
        contentBox.appendChild(a2);
        contentBox.appendChild(span);

        a1.appendChild(img);
        imgBox.appendChild(a1);

        li.appendChild(imgBox);
        li.appendChild(contentBox);

        siteGroup.appendChild(li);
    }
}