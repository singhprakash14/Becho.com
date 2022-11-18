import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";
import AppContextProvider from "./AuthContext/AppContextProvider";
import ContextModalProvider from "./AuthContext/ContexModal";

const rootDOM = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOM);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ContextModalProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </ContextModalProvider>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
