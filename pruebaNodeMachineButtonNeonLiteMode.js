try {
// ?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ?$$$$██████╗ ██████╗ ██╗   ██╗███████╗██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗ ███████╗███╗   ███╗ █████╗  ██████╗██╗  ██╗██╗███╗   ██╗███████╗$$$$$
// ?$$$$██╔══██╗██╔══██╗██║   ██║██╔════╝██╔══██╗██╔══██╗████╗  ██║██╔═══██╗██╔══██╗██╔════╝████╗ ████║██╔══██╗██╔════╝██║  ██║██║████╗  ██║██╔════╝$$$$$
// ?$$$$██████╔╝██████╔╝██║   ██║█████╗  ██████╔╝███████║██╔██╗ ██║██║   ██║██║  ██║█████╗  ██╔████╔██║███████║██║     ███████║██║██╔██╗ ██║█████╗  $$$$$
// ?$$$$██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██║   ██║██║  ██║██╔══╝  ██║╚██╔╝██║██╔══██║██║     ██╔══██║██║██║╚██╗██║██╔══╝  $$$$$
// ?$$$$██║     ██║  ██║╚██████╔╝███████╗██████╔╝██║  ██║██║ ╚████║╚██████╔╝██████╔╝███████╗██║ ╚═╝ ██║██║  ██║╚██████╗██║  ██║██║██║ ╚████║███████╗$$$$$
// ?$$$$╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝$$$$$
// ?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// * *██╗███╗   ██╗██████╗ ███████╗██╗  ██╗t  ██████╗  ██████╗ ████████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗ ██████╗ ███╗   ██╗  
// * *██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝i  ██╔══██╗██╔═══██╗╚══██╔══╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔═══██╗████╗  ██║
// * *██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝ t  ██████╔╝██║   ██║   ██║   ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║   ██║██╔██╗ ██║
// * *██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗ l  ██╔══██╗██║   ██║   ██║   ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║   ██║██║╚██╗██║
// * *██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗e  ██████╔╝╚██████╔╝   ██║   ╚██████╔╝██║ ╚████║██║ ╚████║███████╗╚██████╔╝██║ ╚████║
// * *╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝  ╚═════╝  ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
// /*
const fs = require("fs");
var path = require("path");
const title = "ButtonNeon"; /* NameComponent */  /* $ */
const v = `./botonneon`;
const a_ = `/src/${title}.js`;


// /* $title.js 1.  botonneon/src/$title.js jsx */
const dataAppJs = `import React from "react";\n import "./${title}.css";\n export default function ${title} (props) {\n \t	const onClickButton = (msg) => {\n \t\t alert(msg);\n\t };\n\t return (\n\t\t <React.Fragment>\n\t\t\t <div className="${title}Div">\n\t\t\t\t <header className="Button-header">\n\t\t\t\t\t <button\n\t\t\t\t\t\t className="${title}"\n\t\t\t\t\t\t onClick={() => onClickButton("def")}\n\t\t\t\t\t >\n\t\t\t\t\t\t\t this it's a button\n\t\t\t\t\t </button>\n\t\t\t\t </header>\n\t\t\t </div>\n\t\t </React.Fragment>\n\t);\n } `; fs.promises .mkdir(path.dirname(a_), { recursive: true }) .then((x) => fs.promises.writeFile(v + a_, dataAppJs)); console.log("[+] Creado:\t" + v + a_, "\t ",title); // //         console.log("Archivo creado");
// /* $title.js 1.  botonneon/src/$title.js jsx */



// /* $title.css 1.2.Writting a file: src/index.css cssreacts*/
const ac = `/src/${title}.css`;         // todo  $$ $$ $$ $$ $$ $$ $$ $$ $$ 
                                        // todo  ██████╗███████╗███████╗ $$
                                        // todo ██╔════╝██╔════╝██╔════╝ $$
                                        // todo ██║     ███████╗███████╗ $$
                                        // todo ██║     ╚════██║╚════██║ $$
                                        // todo ╚██████╗███████║███████║ $$
                                        // todo  ╚═════╝╚══════╝╚══════╝ $$
const dataAppCss = `:root {\n --clr-neon: hsl(317 100% 54%);\n\t --clr-bg: hsl(323 21% 16%);\n\t --clr-p: #400c60;\n }\n *,\n *::before,\n *::after {\n\t box-sizing: border-box;\n }\n\t /* transform: scale(.6);  */\n\t .App-logo {\n height: 40vmin;\n pointer-events: none;\n }\n .App-logo:hover {\n height: 10vmin;\n pointer-events: none;\n }\n .Button-header {\n background-color: #400c60; /* bg transparent*/\n min-height: 100vh;\n display: grid;\n flex-direction: column;\n align-items: center;\n justify-content: center;\n font-size: calc(10px + 2vmin);\n }\n .${title} {\n cursor: pointer;\n font-size: 4rem;\n text-decoration: none;        \n display: inline-block;\n position: relative;\n padding: 0.25em 1em;\n box-shadow: 2px 2px 22px #ffff;\n border: 0.125em solid var(--clr-neon);\n border-radius: 9rem; \n text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.9), 0 0 0.45em currentColor;\n box-shadow: inset 0 0 2rem 0 var(--clr-neon),0 0 4rem 0 var(--clr-neon);\n
	background-color: transparent;/* color bg */\n
	transition: background-color 100ms linear;\n
	color: var(--clr-neon);\n
}\n .ButtonNeon::after {\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 0;\n right: 0;\n box-shadow: 0 0 2em 0.5rem var(--clr-neon);\n opacity: 0;\n transition: opacity 100ms linear;\n border-radius: 9rem;\n }\n .ButtonNeon::before {\n content: "";\n position: absolute;\n background: var(--clr-neon);\n top: 120%;\n right: 0;\n bottom: 0;\n width: 100%;\n height: 100%;\n transform: perspective(0.99em) rotateX(40deg) scale(1, 0.35);\n filter: blur(1em);\n opacity: 0.7;\n border-radius: 9rem;\n }\n .${title}:hover ,\n .ButtonNeon:focus {\n color: var(--clr-bg);\n background: var(--clr-neon);\n text-shadow: none;\n border-radius: 9rem;\n }\n .ButtonNeon:hover::after {\n opacity: 1;\n border-radius: 9rem;\n }`;  fs.promises .mkdir(path.dirname(ac), { recursive: true }) .then((x) => fs.promises.writeFile( v + ac, dataAppCss)); console.log("[+] Creado:\t" + v + ac, "\t ",title);
// /* $title.css 1.2. I have a file: src/$title.css */


// /* $title.css 1.3.Writting a file btneonblackbg: src/index.css cssreacts*/
const ac = `/src/${title}.css`;         // !  $$ $$ $$ $$ $$ $$ $$ $$ $$ 
                                        // !  ██████╗███████╗███████╗ $$ ██████╗
                                        // ! ██╔════╝██╔════╝██╔════╝ $$ ╚════██╗
                                        // ! ██║     ███████╗███████╗ $$  █████╔╝
                                        // ! ██║     ╚════██║╚════██║ $$  ██╔═══╝
                                        // ! ╚██████╗███████║███████║ $$  ███████╗
                                        // !  ╚═════╝╚══════╝╚══════╝ $$  ╚══════╝
const dataAppCss = `:root {\n --clr-neon: hsl(317 100% 54%);\n\t --clr-bg: hsl(323 21% 16%);\n\t --clr-p: #400c60;\n }\n *,\n *::before,\n *::after {\n\t box-sizing: border-box;\n }\n\t /* transform: scale(.6);  */\n\t .App-logo {\n height: 40vmin;\n pointer-events: none;\n }\n .App-logo:hover {\n height: 10vmin;\n pointer-events: none;\n }\n .Button-header {\n background-color: #400c60; /* bg transparent*/\n min-height: 100vh;\n display: grid;\n flex-direction: column;\n align-items: center;\n justify-content: center;\n font-size: calc(10px + 2vmin);\n }\n .${title} {\n cursor: pointer;\n font-size: 4rem;\n text-decoration: none;        \n display: inline-block;\n position: relative;\n padding: 0.25em 1em;\n box-shadow: 2px 2px 22px #ffff;\n border: 0.125em solid var(--clr-neon);\n border-radius: 9rem; \n text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.9), 0 0 0.45em currentColor;\n box-shadow: inset 0 0 2rem 0 var(--clr-neon),0 0 4rem 0 var(--clr-neon);\n
	background-color: transparent;/* color bg */\n
	transition: background-color 100ms linear;\n
	color: var(--clr-neon);\n
}\n .ButtonNeon::after {\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 0;\n right: 0;\n box-shadow: 0 0 2em 0.5rem var(--clr-neon);\n opacity: 0;\n transition: opacity 100ms linear;\n border-radius: 9rem;\n }\n .ButtonNeon::before {\n content: "";\n position: absolute;\n background: var(--clr-neon);\n top: 120%;\n right: 0;\n bottom: 0;\n width: 100%;\n height: 100%;\n transform: perspective(0.99em) rotateX(40deg) scale(1, 0.35);\n filter: blur(1em);\n opacity: 0.7;\n border-radius: 9rem;\n }\n .${title}:hover ,\n .ButtonNeon:focus {\n color: var(--clr-bg);\n background: var(--clr-neon);\n text-shadow: none;\n border-radius: 9rem;\n }\n .ButtonNeon:hover::after {\n opacity: 1;\n border-radius: 9rem;\n }`;  fs.promises .mkdir(path.dirname(ac), { recursive: true }) .then((x) => fs.promises.writeFile( v + ac, dataAppCss)); console.log("[+] Creado:\t" + v + ac, "\t ",title);
// /* $title.css 1.2. I have a file btneonblackbg: src/$title.css */


/* 
const dataAppJs = `import React from "react";\nimport ReactDOM from 'react-dom';\nimport "./index.css";\ import ${title} from "./${title}";\nimport reportWebVitals from "./reportWebVitals";\nReactDOM.render(\n<React.StrictMode>\n<${title} />\n</React.StrictMode>,\ndocument.getElementById("root")\n);\nreportWebVitals();`;

const a_ = `/src/${title}.js`;
const dataAppJs = 'import logo from "./logo.svg"; import "./App.css"; function App() { return ( <div className="App"> <header className="App-header"> <img src={logo} className="App-logo" alt="logo" /> <p> Edit <code>src/App.js</code> and save to reload.  </p> <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> </header> </div>); } export default App;';
 */


// // /* index.html 1.1 Writting a file: public/index.htmlcontains html5reacts*/
// const ih = "/public/index.html";        // ?██╗  ██╗████████╗███╗   ███╗██╗
// const nodemachine = "H4NodeMachineH4";  // ?██║  ██║╚══██╔══╝████╗ ████║██║     
// const indexHtml = `                     // ?███████║   ██║   ██╔████╔██║██║               
//     <!DOCTYPE html>\n                   // ?██╔══██║   ██║   ██║╚██╔╝██║██║ 
//     <html lang="en">\n                  // ?██║  ██║   ██║   ██║ ╚═╝ ██║███████╗         
//     <head>\n                            // ?╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝                  
//         <meta charset="utf-8" />\n
//         <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n
//         <meta name="viewport" content="width=device-width, initial-scale=1" />\n
//         <meta name="theme-color" content="#000000" />\n
//         <meta name="description" content="Web site created using create-react-app"        />\n
//         <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n
//         <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n
//         <title>React App</title>\n
//     </head>\n
//     <body>\n
//         <noscript>You need to enable JavaScript to run this app.</noscript>\n
//         <div id="root"></div>\n
//     </body>\n
//     </html>`;

// fs.promises
//     .mkdir(path.dirname(ih), { recursive: true })
//     .then((x) =>
//         fs.promises.writeFile(
//             v + ih,
//             indexHtml));
// console.log("Creado:\t" + v + ih);
// // //         console.log("Archivo creado");
// // /* index.html 1.1 I have a file: public/index.html contains Html5React*/
// // /* index.js I have a file: public/index.js contains React*/


// // /* index.css 1.2.Writting a file: src/index.css cssreacts*/
// const ic = `/src/${title}.css`;         // todo  $$ $$ $$ $$ $$ $$ $$ $$ $$ 
//                                         // todo  ██████╗███████╗███████╗ $$
//                                         // todo ██╔════╝██╔════╝██╔════╝ $$
//                                         // todo ██║     ███████╗███████╗ $$
//                                         // todo ██║     ╚════██║╚════██║ $$
//                                         // todo ╚██████╗███████║███████║ $$
//                                         // todo  ╚═════╝╚══════╝╚══════╝ $$
// const dataIndexCss =
//     'body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\ncode { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace; } ';

// fs.promises
//     .mkdir(path.dirname(ic), { recursive: true })
//     .then((x) => fs.promises.writeFile(v + ic, dataIndexCss));
// console.log("[+] Creado:\t" + v + ic, "\t ",ic)
// // /* index.css 1.2 I have a file: src/index.css contains cssReact*/


// // /* App.js 2. I have a file: src/App.js contains Jsx*/
// // !  █████╗ ██████╗ ██████╗
// // ! ██╔══██╗██╔══██╗██╔══██╗
// // ! ███████║██████╔╝██████╔╝
// // ! ██╔══██║██╔═══╝ ██╔═══╝
// // ! ██║  ██║██║     ██║
// // ! ╚═╝  ╚═╝╚═╝     ╚═╝
// // // /* App.js 2. Writting a file: src/index.css Jsx*/
// const a_ = `/src/${title}.js`;
// const dataAppJs = 'import logo from "./logo.svg"; import "./App.css"; function App() { return ( <div className="App"> <header className="App-header"> <img src={logo} className="App-logo" alt="logo" /> <p> Edit <code>src/App.js</code> and save to reload.  </p> <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> </header> </div>); } export default App;';
// fs.promises
//     .mkdir(path.dirname(a_), { recursive: true })
//     .then((x) => fs.promises.writeFile(v + a_, dataAppJs));
// console.log("Creado:\t" + v + a_);
// // /* App.js 2. I have a file: src/App.js contains Jsx*/

 // /* App.css 2 Writting a file: src/App.css CssJsx*/
// const ac = "/src/App.css";
// const dataAppCss =
//     ".App { text-align: center; }\n ..App-logo { height: 40vmin; pointer-events: none; }\n .App-logo:hover { height: 10vmin; pointer-events: none; }\n @media (prefers-reduced-motion: no-preference) { App-logo { animation: App-logo-spin infinite 20s linear; } }\n @keyframes App-logo-spin { from { transform: rotate(0deg); }\n to { transform: rotate(360deg); } }\n .App-header { background-color: #400c60; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: calc(10px + 2vmin); color: white; }\n .App-link { color: #ff0999; }\n ";
// fs.promises
//     .mkdir(path.dirname(ac), { recursive: true })
//     .then((x) => fs.promises.writeFile(v + ac, dataAppCss));
// console.log("Creado:\t" + v + ac);
// // /* App.js 2. I have a file: src/App.js contains Jsx*/

} catch(err) {
    console.error("[-] ",err,err.name,err.stack,"[-] "+err.message)
}
