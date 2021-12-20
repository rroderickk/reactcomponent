// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$██████╗ ██████╗ ██╗   ██╗███████╗██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗ ███████╗███╗   ███╗ █████╗  ██████╗██╗  ██╗██╗███╗   ██╗███████╗$$$$$
// $$$$$██╔══██╗██╔══██╗██║   ██║██╔════╝██╔══██╗██╔══██╗████╗  ██║██╔═══██╗██╔══██╗██╔════╝████╗ ████║██╔══██╗██╔════╝██║  ██║██║████╗  ██║██╔════╝$$$$$
// $$$$$██████╔╝██████╔╝██║   ██║█████╗  ██████╔╝███████║██╔██╗ ██║██║   ██║██║  ██║█████╗  ██╔████╔██║███████║██║     ███████║██║██╔██╗ ██║█████╗  $$$$$
// $$$$$██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██║   ██║██║  ██║██╔══╝  ██║╚██╔╝██║██╔══██║██║     ██╔══██║██║██║╚██╗██║██╔══╝  $$$$$
// $$$$$██║     ██║  ██║╚██████╔╝███████╗██████╔╝██║  ██║██║ ╚████║╚██████╔╝██████╔╝███████╗██║ ╚═╝ ██║██║  ██║╚██████╗██║  ██║██║██║ ╚████║███████╗$$$$$
// $$$$$╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ██╗███╗   ██╗██████╗ ███████╗██╗  ██╗
// ██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝
// ██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝ v=
// ██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗
// ██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗
// ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
// //* index.js 1. Escribiendo un archivo que se llama src/index.js que contiene comandos basicos reacts en directorio src*/
const fs = require("fs");
var path = require("path");
const v = "./botonneon";
const i_ = "/src/index.js";
const title = "App";
const dataIndexJs = `import React from "react";\nimport ReactDOM from 'react-dom';\nimport "./index.css";\ import App from "./App";\nimport reportWebVitals from "./reportWebVitals";\nReactDOM.render(\n<React.StrictMode>\n<App />\n</React.StrictMode>,\ndocument.getElementById("root")\n);\nreportWebVitals();`;
fs.promises
    .mkdir(path.dirname(i_), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            v + i_, dataIndexJs));
console.log("Creado:\t" + v + i_);
// //         console.log("Archivo creado");
// /* index.js I have a file: public/index.js contains React*/


// /* index.html 1.1 Writting a file: public/index.htmlcontains html5reacts*/
const ih = "/public/index.html";
const nodemachine = "H4NodeMachineH4";
const indexHtml = `
    <!DOCTYPE html>\n
    <html lang="en">\n
    <head>\n
        <meta charset="utf-8" />\n
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n
        <meta name="viewport" content="width=device-width, initial-scale=1" />\n
        <meta name="theme-color" content="#000000" />\n
        <meta name="description" content="Web site created using create-react-app"        />\n
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n
        <title>React App</title>\n
    </head>\n
    <body>\n
        <noscript>You need to enable JavaScript to run this app.</noscript>\n
        <div id="root"></div>\n
    </body>\n
    </html>`;

fs.promises
    .mkdir(path.dirname(ih), { recursive: true })
    .then((x) =>
        fs.promises.writeFile(
            v + ih,
            indexHtml));
console.log("Creado:\t" + v + ih);
// //         console.log("Archivo creado");
// /* index.html 1.1 I have a file: public/index.html contains Html5React*/
// /* index.js I have a file: public/index.js contains React*/


// /* index.css 1.2.Writting a file: src/index.css cssreacts*/
const ic = "/src/index.css";
const dataIndexCss =
    'body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\ncode { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace; } ';

fs.promises
    .mkdir(path.dirname(ic), { recursive: true })
    .then((x) => fs.promises.writeFile(v + ic, dataIndexCss));
console.log("Creado:\t" + v + ic);
// /* index.css 1.2 I have a file: src/index.css contains cssReact*/


//  █████╗ ██████╗ ██████╗
// ██╔══██╗██╔══██╗██╔══██╗
// ███████║██████╔╝██████╔╝
// ██╔══██║██╔═══╝ ██╔═══╝
// ██║  ██║██║     ██║
// ╚═╝  ╚═╝╚═╝     ╚═╝
// // /* App.js 2. Writting a file: src/index.css Jsx*/
const a_ = "/src/App.js";
const dataAppJs = 'import logo from "./logo.svg"; import "./App.css"; function App() { return ( <div className="App"> <header className="App-header"> <img src={logo} className="App-logo" alt="logo" /> <p> Edit <code>src/App.js</code> and save to reload.  </p> <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> </header> </div>); } export default App;';
fs.promises
    .mkdir(path.dirname(a_), { recursive: true })
    .then((x) => fs.promises.writeFile(v + a_, dataAppJs));
console.log("Creado:\t" + v + a_);
// /* App.js 2. I have a file: src/App.js contains Jsx*/

// // /* App.css 2 Writting a file: src/App.css CssJsx*/
const ac = "/src/App.css";
const dataAppCss =
    ".App { text-align: center; }\n ..App-logo { height: 40vmin; pointer-events: none; }\n .App-logo:hover { height: 10vmin; pointer-events: none; }\n @media (prefers-reduced-motion: no-preference) { App-logo { animation: App-logo-spin infinite 20s linear; } }\n @keyframes App-logo-spin { from { transform: rotate(0deg); }\n to { transform: rotate(360deg); } }\n .App-header { background-color: #400c60; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: calc(10px + 2vmin); color: white; }\n .App-link { color: #ff0999; }\n ";
fs.promises
    .mkdir(path.dirname(ac), { recursive: true })
    .then((x) => fs.promises.writeFile(v + ac, dataAppCss));
console.log("Creado:\t" + v + ac);
// /* App.js 2. I have a file: src/App.js contains Jsx*/
