// const filter = function(){
//     let 
//         value,
//         tag,
//         name,
//         item,
//         tags,
//         i,
//         path;

//     const 
//         input = document.querySelector("#filtering--input");

//     const initModule = function(){
//         path = window.location.pathname.split("/").pop().toLowerCase();
        
//         _addEventHandlers();
//     }
    
//     const _addEventHandlers = function(){
//         if(path == "video.html"){
//             input.addEventListener("keyup", show_videoFilter);
//         }
//     }
    
//     const show_videoFilter = function(){
//         value = input.value.toUpperCase();
//         tags = document.querySelectorAll(".video__tag");
//         item = document.querySelectorAll(".video__box");

//         for(i = 0; i < item.length; i++){
            
//             tag = tags[i].innerText.toUpperCase();
//             name = item[i].querySelector(".video__name").innerText.toUpperCase();

//             if(name.indexOf(value) > -1 || tag.indexOf(value) > -1){
//                 item[i].style.display = "inline-flex";
//             }
//             else if(name.indexOf(value) <= -1 || tag.indexOf(value) <= -1){
//                 item[i].style.display = "none";
//             }
//         }
//     }
//     return {
//         init : initModule
//     }
// }
// filter().init();