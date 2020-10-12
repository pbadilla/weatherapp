import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Helmet } from "react-helmet";

import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import store from "./redux/store";

import Routes from "./routes/routes";

const history = createBrowserHistory();

import Theme from "../styles/themes";
import GlobalStyle from "./index.styles";

render(
  <Provider store={store}>
    <Router history={history}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>City Weather App</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Theme>
        <GlobalStyle />
        <Routes />
      </Theme>
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
