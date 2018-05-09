var flag = true;
if (typeof config == "undefined") {
  flag = false;
}
url = window.location.search.substr(1)
if (url == null || url == "" || url == "/" || !(new RegExp("^.*?\.md$").test(url)))
  url = "README.md"

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

fetch("./" + url)
  .then(function (response) {
    if (response.ok)
      return response.text()
    document.getElementById('con').innerHTML = "<div id='e404'>404</div>"
  }).then(function (data) {
    if (flag && config.has("img_url")) {
      var url = config.get("img_url");
      var re = /!\[.*\]\(.*(\.img\/\S+)\)/g;
      data = data.replace(re, "![]\(" + url + "$1\)");
    }
    document.getElementById('con').innerHTML = marked(data);
  })
