# xizero-wiki

A simple wiki site project.

## Author

[<div align=center>![](./favicon.ico)</div>](https://github.com/f12998765)

## Quick Start

Create an `index.html`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Demo</title>
</head>

<body>
  <div class="head">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/?=">Search</a></li>
      <li><a href="https://github.com/f12998765">Github</a></li>
    </ul>
  </div>
  <div id="con"></div>
</body>
<script>
  var repo = "f12998765/xizero-wiki";
  var branch = "master";
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/f12998765/xizero-wiki/lib/xizero.wiki.js"></script>

</html>
```

Open the directory in a http server.

## Extended

Get the project source.

```sh
git clone git@github.com:f12998765/xizero-wiki.git
```
or
```sh
npm install xizero-wiki && npm install 
```

Run the project.
```sh
npm start
```
## License

For mor information on this license, [click here](https://github.com/f12998765/xizero-wiki/blob/master/LICENSE).