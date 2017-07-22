# Best Progressive Web App
### What's this project?
This is a demo of Progressive Web App with features like Home Screen, Splash Screen, Lite app.

### Development
This project I have included:  reactjs, Webpack, Babel, react-router and material-ui.

## 1. Setting up the Project Folder
```javascript
$ mkdir bpwa   (Create Directory)
$ cd bpwa
$ npm init -y  (package.json)
```
Now the root directory of the project, run the following commands in the terminal

```
$ mkdir public
$ cd public
```
 
Create HTML file ( ./public/index.html )

```
<!DOCTYPE html>
<html>
    <head>
        <title> Best Progressive Web App Demo </title>
    </head>
    <body>
        <div id="app"></div>
        <script src="bundle.js"></script>
    </body>
</html>
```


## 2. Setting up Webpack

let's setup webpack and webpack-dev-server

From the project’s root directory Install 

``
$ npm install --save-dev webpack webpack-dev-server
``
