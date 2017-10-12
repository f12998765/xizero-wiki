function include(path) {
    var script = document.createElement('script')
    script.type = "text/javascript";
    script.src = path;
    script.onload = script.onreadystatechange = function () {
        if (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) {
            resolve(window[namespace][name])
            sc.onload = sc.onreadystatechange = null
        }
    }
    document.body.append(script)
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
include("https://unpkg.com/marked/lib/marked.js");
include("https://unpkg.com/xizero-wiki/src/js/highlight.pack.js");
include("https://unpkg.com/xizero-wiki/src/js/index.js");