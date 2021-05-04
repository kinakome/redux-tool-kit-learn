import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//storeをインポート
import { store } from "./app/store";
//providerをインポート
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* この配下でproviderに設定された値を使える */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
