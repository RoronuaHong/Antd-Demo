import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import NotFound from "../containers/ErrorPage/NotFound";
import App from "../containers/";

export default function Routers() {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </App>
        </HashRouter>
    )
}