// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // pour Tailwind ou ton style global

// Récupère la div <div id="root"></div> dans index.html
const container = document.getElementById("root");

// Crée le “root” React moderne
const root = createRoot(container);

// Monte ton application React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
