function include(path, callback) {
    var script = document.createElement('script')
    script.type = "text/javascript";
    script.src = path;
    document.body.append(script)
    script.onload = function () {
        callback();
    }
}
function includeCSS(path) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = path;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

includeCSS("https://unpkg.com/xizero-wiki/src/style/default.css");
includeCSS("https://unpkg.com/xizero-wiki/src/style/index.css");
include("https://unpkg.com/marked/lib/marked.js", function () { include("https://unpkg.com/xizero-wiki/src/js/index.js", function(){}) });
include("https://unpkg.com/xizero-wiki/src/js/highlight.pack.js", function(){});