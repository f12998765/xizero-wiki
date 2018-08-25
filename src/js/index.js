var con = document.getElementById('con');
var info = document.createElement("div");
info.classList.add("loding");
con.appendChild(info);
con.classList.add("con-center");

if(typeof root == 'undefined')
  var root = "./"

file = window.location.search.substr(1)
if (file == null || file == "" || file == "/" || !(new RegExp("^.+?\.md$").test(file)))
  file = "README.md"

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

fetch(root+"/"+file)
  .then(function (response) {
    if (response.ok) return response.text()
    else throw "404"
  }).then(function (data) {
    con.classList.remove("con-center");
    con.classList.add("markdown-body");
    con.innerHTML = marked(data);
  }).catch(error=>{
    info.classList.remove("loding");
    info.classList.add("e404");
  })
