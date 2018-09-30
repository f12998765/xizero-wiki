var con = document.getElementById('con');
var info = document.createElement("div");
info.classList.add("loding");
con.appendChild(info);
con.classList.add("con-center");

if (typeof repo == 'undefined')
  var repo = "./"
if (typeof branch == 'undefined')
  var branch = "master"

var root = "https://cdn.rawgit.com/" + repo + "/" + branch;

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

var parm = window.location.search;
if (parm.startsWith("?="))
  search(parm.substr(2));
else
  load(parm.substr(1));

function load(file) {
  if (file == null || file == "" || file == "/" || !(new RegExp("^.+?\.md$").test(file)))
    file = "README.md"

  fetch(root + "/" + file)
    .then(function (response) {
      if (response.ok) return response.text()
      else throw "404"
    }).then(function (data) {
      con.classList.remove("con-center");
      con.classList.add("markdown-body");
      con.innerHTML = marked(data);
    }).catch(error => {
      info.classList.remove("loding");
      info.classList.add("e404");
    })
}

function search(parm) {
  initSearch();
  if (null != parm && parm.trim() != "") {

    var api = "https://api.github.com/search/code?q=" + parm + "+in:file+repo:" + repo + "+extension:md";
    fetch(api, {
      headers: {
        "Accept": "application/vnd.github.v3.text-match+json"
      }
    })
      .then(function (response) {
        if (response.ok) return response.json()
        else throw "404"
      }).then(function (json) {
        var reg = new RegExp("(" + parm + ")", "g");
        var result = '<div class="result"><div id="conut">找到 ' + json.total_count + ' 篇文章</div>';
        for (var i in json.items) {
          result += '<div class="page"><div class="page_title"><a href=?' + json.items[i].path + '>' + json.items[i].name + '</a></div>';
          var list = json.items[i].text_matches;
          for (var j in list) {
            result += '<div class="page_text">' + htmlEncode(list[j].fragment).replace(reg, "<y>$1</y>").replace(/(\n)+/g, "<br/>") + '</div>';
          }
          result += '</div>';
        }
        result += '</div>';
        con.innerHTML += result;
        document.getElementById("text").value = parm;
        document.getElementById("sub").onclick = toSearch;
        document.getElementById("text").onkeypress = function (e) {
          if (e.which == 13) toSearch();
        }
      }).catch(error => {
        info.classList.remove("loding");
        info.classList.add("e404");
      })
  }
}

function htmlEncode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  return s;
}

function initSearch() {
  con.classList.remove("con-center");
  con.innerHTML = `
  <div class="so">
      <div class="in">
          <input type="text" id="text" maxlength="2048" autofocus="autofocus" placeholder="🐱‍🚀🐱‍🚀🐱‍🚀">
      </div>
      <div class="sub" id="sub"></div>
  </div>
  `;
  document.getElementById("sub").onclick = toSearch;
  document.getElementById("text").onkeypress = function (e) {
    if (e.which == 13) toSearch();
  }
}
function toSearch() {
  window.location.href = "/?=" + document.getElementById("text").value;
}