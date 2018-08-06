import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import reducers from "./reducer";
import "./config";

import Login from "./container/login/login";
import BossInfo from "./container/bossinfo/bossinfo";
import GeniusInfo from "./container/geniusinfo/geniusinfo";
import Register from "./container/register/register";
import AuthRoute from "./component/authroute/authroute";
import Dashboard from "./component/dashboard/dashboard";
import "./index.css";
import { Switch } from "../node_modules/antd-mobile";

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute />
                <Switch>
                    <Route path="/bossinfo" component={BossInfo} />
                    <Route path="/geniusinfo" component={GeniusInfo} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
