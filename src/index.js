import { StrictMode } from "react";
import ReactDOM from "react-dom";  
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
