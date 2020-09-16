
window.addEventListener("load",()=>{
    const path = window.location.pathname.split("/").pop();
    if(path === "index.html"){
        const devJson = require("../js/json/dev.json");
        const designJson = require("../js/json/design.json");
        const etcJson = require("../js/json/etc.json");
        
        const siteGroup = document.querySelector("ul.site__rows");
        
        for (const key in devJson) {
            for (let i = 0; i < devJson[key].length; i++) {
        
                let name = devJson[key][i].siteName;
                let text = devJson[key][i].siteText;
                let link = devJson[key][i].siteLink;
                let tags = devJson[key][i].siteTags;
        
                create__card(name, text, link, tags);
            }
        }
        
        for (const key in designJson) {
            for (let i = 0; i < designJson[key].length; i++) {
        
                let name = designJson[key][i].siteName;
                let text = designJson[key][i].siteText;
                let link = designJson[key][i].siteLink;
                let tags = designJson[key][i].siteTags;
        
                create__card(name, text, link, tags);
            }
        }
        
        for (const key in etcJson) {
            for (let i = 0; i < etcJson[key].length; i++) {
        
                let name = etcJson[key][i].siteName;
                let text = etcJson[key][i].siteText;
                let link = etcJson[key][i].siteLink;
                let tags = etcJson[key][i].siteTags;
        
                create__card(name, text, link, tags);
            }
        }
        function create__card(name, text, link, tags) {
        
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
})