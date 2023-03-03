import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/2routing/pathQueryParameter/App';
import { BrowserRouter } from "react-router-dom";

// import style

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
