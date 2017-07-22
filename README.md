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
```
bpwa
└───public
│   │___index.html
└───node_modules
└───package.json
  ```

  Now change the package.json file to change the “start” script to start the webpack-dev-server
  
  ./package.json
  
  ```
  ...
"scripts": {
    "start": "webpack-dev-server --progress --colors --config ./webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
  ```
  we are indicating webpack.config.js be used as the config file. So, let's go ahead and create it.
  
  ./webpack.config.js
  
  ```
  module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
    }
};
  ```
  
  Let's create the “entry point”…
  
  ./src/index.js
  
  ```
  console.log("BPWA Webpack is working");
  ```
  From the project’s root directory
  
  ```
  $ npm start
  ```
  
  By default, webpack-dev-server starts on localhost:8080. So, go to http://localhost:8080/ to check if you can see the above console log. If you do, our initial Webpack setup is successful.
  
  ## 3. Setting up & Install  Babel
  We will be working with ES6, JSX code (React); we would need a compiler to convert all of it into ES5 code.
Babel is helps you to write next-generation JavaScript code.

From the project’s root directory

```
$ npm install --save-dev babel-core babel-loader babel-preset-es2015  babel-preset-latest
```

Now Create .babelrc file

./.babelrc

```
{
  "presets": ["latest", "react"],
}
```
Now Update webpack.config.js

./webpack.config.js

```
......... 
 entry: [
        './src/index.js'
    ],
    module: {
    loaders: [{
     test: /\.jsx?$/,
        exclude: /node_modules/,
           use: {
        loader: 'babel-loader'     
    }
    }]
},
resolve: {
    extensions: ['.js', '.jsx']
},
    output: {
        path: __dirname + '/public',
...... 
````
We added a resolve.extensions property so that we don’t have to specify extensions while importing files.

## 4. Install React 

let's install the react packages, along with lodash. Lodash is a JavaScript utility library that will later come handy.

From the project’s root directory

```
$ npm install --save react react-dom lodash
```

###### With the above step, we have setup everything we need to get started with the code. Finally!

#### A. Writing our first React Component

edit the ./src/index.js file and render our first react component onto the DOM.

./src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
class Layout extends React.Component {
  render() {
    return (
        <h2> Welcome... Best Progressive Web App </h2>
    );
  }
};
ReactDOM.render(<Layout />, document.getElementById('app'));
```
Now Run 

```
$ npm start
```
## 5. Setting up & Install  material-ui

Material-UI is a set of React components that implement Google's Material Design specification.

From the project’s root directory

```
$ npm install material-ui
```
##### Insatll React-tap-event-plugin

```
$ npm i --save react-tap-event-plugin
```

Craete a app.js file
