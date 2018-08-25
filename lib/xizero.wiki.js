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

includeCSS("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css");
includeCSS("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css");
includeCSS("https://unpkg.com/xizero-wiki/src/style/index.css");
includeJS("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js", function(){});
includeJS("https://cdnjs.cloudflare.com/ajax/libs/marked/0.4.0/marked.min.js", function () {
    includeJS("https://cdn.rawgit.com/f12998765/xizero-wiki/master/src/js/index.js", function () {});
});

