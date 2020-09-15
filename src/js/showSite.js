const _addEventHandlers = function () {
    window.addEventListener("load", show_site);
}
const show_site = function () {
    const DevJson = require("../json/dev.json");
    const DesignJson = require("../json/design.json");
    const AccountingJson = require("../json/accounting.json");
    const EtcJson = require("../json/etc.json");

    enumerator_json();

    for (const key in DevJson) {
        for (let i = 0; i < DevJson[key].length; i++) {
            
        }
    }
}
const create_site = function (name,text,link,tags){
    
}
_addEventHandlers();