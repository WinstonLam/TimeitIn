import React from "react";
import ReactDOM from "react-dom/client";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";

import App from "./components/App";

// include devtools to keep track of redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
