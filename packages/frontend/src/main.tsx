import "react-loading-skeleton/dist/skeleton.css";
import { render } from "preact";
import { App } from "./app";
import "virtual:windi.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { tokenStore } from "./stores/tokenStore";

library.add(fas);

const root = document.getElementById("app");

if (root) render(<App tokens={tokenStore} />, root);
