import { h, render } from "preact";
import "preact/devtools";

import "./styles.css";

render(
  <main>
    <h1>Preact + Snowpack</h1>
  </main>,
  document.querySelector("#root") || document.body
);
