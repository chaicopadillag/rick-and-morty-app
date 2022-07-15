import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./css/index.css";
import { darkTheme } from "./themes";
import { store } from "./store";
import { apolloClient } from "./apollo-client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </NextUIProvider>
  </React.StrictMode>
);
