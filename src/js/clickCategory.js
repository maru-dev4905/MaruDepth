const path = window.location.pathname.split("/").pop().toLowerCase();

const devJson = require("../js/json/dev.json");

const devStudyBtn = document.getElementById("devStudyBtn");
const devCommunityBtn = document.getElementById("devCommunityBtn");
const devSimulationBtn = document.getElementById("devSimulationBtn");
const devBlogBtn = document.getElementById("devBlogBtn");
const devTipBtn = document.getElementById("devTipBtn");
const devEtcBtn = document.getElementById("devEtcBtn");

// dev
devStudyBtn.addEventListener("click",()=>{
    if(path === "index.html"){
        remove__card();
        for(let i = 0; i < devJson.study.length; i++){
            let name = devJson.study[i].siteName;
            let text = devJson.study[i].siteText;
            let link = devJson.study[i].siteLink;
            let tags = devJson.study[i].siteTags;
    
            create__card(name,text,link,tags);
        }
    }else{
        window.location.href = "index.html"
    }
});

devCommunityBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < devJson.community.length; i++){
        let name = devJson.community[i].siteName;
        let text = devJson.community[i].siteText;
        let link = devJson.community[i].siteLink;
        let tags = devJson.community[i].siteTags;

        create__card(name,text,link,tags);
    }
});

devSimulationBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < devJson.simulation.length; i++){
        let name = devJson.simulation[i].siteName;
        let text = devJson.simulation[i].siteText;
        let link = devJson.simulation[i].siteLink;
        let tags = devJson.simulation[i].siteTags;

        create__card(name,text,link,tags);
    }
});

devBlogBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < devJson.blog.length; i++){
        let name = devJson.blog[i].siteName;
        let text = devJson.blog[i].siteText;
        let link = devJson.blog[i].siteLink;
        let tags = devJson.blog[i].siteTags;

        create__card(name,text,link,tags);
    }
});

devTipBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < devJson.tip.length; i++){
        let name = devJson.tip[i].siteName;
        let text = devJson.tip[i].siteText;
        let link = devJson.tip[i].siteLink;
        let tags = devJson.tip[i].siteTags;

        create__card(name,text,link,tags);
    }
});

devEtcBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < devJson.etc.length; i++){
        let name = devJson.etc[i].siteName;
        let text = devJson.etc[i].siteText;
        let link = devJson.etc[i].siteLink;
        let tags = devJson.etc[i].siteTags;

        create__card(name,text,link,tags);
    }
});


const designJson = require("../js/json/design.json");

const designImageBtn = document.getElementById("designImageBtn");
const designIconBtn = document.getElementById("designIconBtn");
const designColorBtn = document.getElementById("designColorBtn");
const designFontBtn = document.getElementById("designFontBtn");
const designTipBtn = document.getElementById("designTipBtn");
const designEtcBtn = document.getElementById("designEtcBtn");

// design
designImageBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.image.length; i++){
        let name = designJson.image[i].siteName;
        let text = designJson.image[i].siteText;
        let link = designJson.image[i].siteLink;
        let tags = designJson.image[i].siteTags;

        create__card(name,text,link,tags);
    }
});

designIconBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.icon.length; i++){
        let name = designJson.icon[i].siteName;
        let text = designJson.icon[i].siteText;
        let link = designJson.icon[i].siteLink;
        let tags = designJson.icon[i].siteTags;

        create__card(name,text,link,tags);
    }
});

designColorBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.color.length; i++){
        let name = designJson.color[i].siteName;
        let text = designJson.color[i].siteText;
        let link = designJson.color[i].siteLink;
        let tags = designJson.color[i].siteTags;

        create__card(name,text,link,tags);
    }
});

designFontBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.font.length; i++){
        let name = designJson.font[i].siteName;
        let text = designJson.font[i].siteText;
        let link = designJson.font[i].siteLink;
        let tags = designJson.font[i].siteTags;

        create__card(name,text,link,tags);
    }
});

designTipBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.tip.length; i++){
        let name = designJson.tip[i].siteName;
        let text = designJson.tip[i].siteText;
        let link = designJson.tip[i].siteLink;
        let tags = designJson.tip[i].siteTags;

        create__card(name,text,link,tags);
    }
});

designEtcBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < designJson.etc.length; i++){
        let name = designJson.etc[i].siteName;
        let text = designJson.etc[i].siteText;
        let link = designJson.etc[i].siteLink;
        let tags = designJson.etc[i].siteTags;

        create__card(name,text,link,tags);
    }
});

// etc
const etcJson = require("../js/json/etc.json");

const etcPptBtn = document.getElementById("etcPptBtn");
const etcMusicBtn = document.getElementById("etcMusicBtn");
const etcTipBtn = document.getElementById("etcTipBtn");

etcPptBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < etcJson.ppt.length; i++){
        let name = etcJson.ppt[i].siteName;
        let text = etcJson.ppt[i].siteText;
        let link = etcJson.ppt[i].siteLink;
        let tags = etcJson.ppt[i].siteTags;

        create__card(name,text,link,tags);
    }
});

etcMusicBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < etcJson.music.length; i++){
        let name = etcJson.music[i].siteName;
        let text = etcJson.music[i].siteText;
        let link = etcJson.music[i].siteLink;
        let tags = etcJson.music[i].siteTags;

        create__card(name,text,link,tags);
    }
});

etcTipBtn.addEventListener("click",()=>{
    remove__card();
    for(let i = 0; i < etcJson.tip.length; i++){
        let name = etcJson.tip[i].siteName;
        let text = etcJson.tip[i].siteText;
        let link = etcJson.tip[i].siteLink;
        let tags = etcJson.tip[i].siteTags;

        create__card(name,text,link,tags);
    }
});

const siteGroup = document.querySelector("ul.site__rows");

function remove__card(){
    while( siteGroup.hasChildNodes() ){
        siteGroup.removeChild( siteGroup.firstChild );
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