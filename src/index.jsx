import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const rootNode = document.querySelector("#root");

if (rootNode) {
  createRoot(rootNode).render(<App />);
}
