import * as React from "react";
 import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/routes";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

// Ensure that the element exists before trying to render into it
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in the document.");
}

createRoot(rootElement).render(
  <React.StrictMode>
        <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
    <RouterProvider router={router} />
    </PersistGate>
   
    </Provider>
  </React.StrictMode>
);
