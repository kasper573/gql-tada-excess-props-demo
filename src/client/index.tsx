import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "urql";
import { createClient } from "./client";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider value={createClient()}>
        <App />
      </Provider>
    </StrictMode>
  );
}
