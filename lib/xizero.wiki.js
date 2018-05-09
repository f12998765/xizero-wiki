function includeJS(path, callback) {
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

includeCSS("//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.12.0/build/styles/default.min.css");
includeCSS("https://unpkg.com/xizero-wiki/src/style/index.css");
includeJS("//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.12.0/build/highlight.min.js", function(){});
includeJS("https://unpkg.com/marked/lib/marked.js", function () { 
    includeJS("./config.js", function () {
        includeJS("https://unpkg.com/xizero-wiki/src/js/index.js",function(){})
    }) });
