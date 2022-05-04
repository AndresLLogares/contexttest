import React from "react";
import ReactDOM from "react-dom/client";
import PokemonState from "./context/actions/index";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonState>
      <App />
    </PokemonState>
  </React.StrictMode>
);
