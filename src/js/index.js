var flag = true;
var url = "./";
if (typeof config == "undefined") {
  flag = false;
} else if (config.has("url"))
  url = config.get("url");

file = window.location.search.substr(1)
if (file == null || file == "" || file == "/" || !(new RegExp("^.*?\.md$").test(file)))
  file = "README.md"
file = url + file;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

fetch(file)
  .then(function (response) {
    if (response.ok)
      return response.text()
    else {
      flag = false;
      return "<div id='e404'>404</div>"
    }
  }).then(function (data) {
    if (flag) {
      var re = /!\[.*\]\(.*(\.img\/\S+)\)/g;
      data = data.replace(re, "![]\(" + url + "$1\)");
    }
    var con = document.getElementById('con');
    con.classList.add("markdown-body");
    con.innerHTML = marked(data);
  })
