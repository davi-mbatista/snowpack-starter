
const code = "body {\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  display: grid;\n\n  place-items: center;\n\n  height: 100vh;\n  width: 100vw;\n\n  background-color: darkslategrey;\n  color: wheat;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);