import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AuthProvider } from "./context/AuthProvider";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import "./theme/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
