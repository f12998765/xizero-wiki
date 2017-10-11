function include(path){ 
    var a=document.createElement("script");
    a.type = "text/javascript"; 
    a.src=path; 
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
    }
function includeCSS(path){ 
    var a=document.createElement("style");
    a.type = "text/css"; 
    a.innerHTML=path; 
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
    }
    
includeCSS("../src/style/default.css");
includeCSS("../src/style/index.css");
include("https://unpkg.com/marked/lib/marked.js");
include("../src/js/highlight.pack.js");
include("../src/js/index.js");