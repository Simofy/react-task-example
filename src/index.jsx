import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./style/app.scss";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
