url = window.location.search.substr(1)
console.log(url)
if (url == null || url=="" || url == "/")
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
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

fetch("./" + url)
  .then(function(response) {
    if (response.status != 200)
      window.location.href='./'
    else {
      return response.text()
    }

  }).then(function(data) {
    document.getElementById('con').innerHTML = marked(data)
  })
