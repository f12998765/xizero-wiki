# xizero-wiki

A simple wiki site project.

## Author

[![](./favicon.ico)](https://github.com/f12998765)
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
      <li><a href="https://github.com/f12998765/xizero-wiki">Github</a></li>
    </ul>
  </div>
  <div id="con"></div>
</body>
<script type="text/javascript" src="https://unpkg.com/xizero-wiki/lib/xizero.wiki.js"></script>

</html>
```

And must Create a `config.js`.

A blank file or like examples.

```js
var config=new Map([
    //If you use github to store your pictures, and make sure to display them everywhere
    ["img_url","https://cdn.rawgit.com/{user_name}/{[project_name]}/master/"],
]);
```

In your project root directory create a folder for storing pictures `.img` .

a markdown file eg:
```md
![](../.img/name.png)
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