import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import NotFound from "../containers/ErrorPage/NotFound"

export default function Routers() {
    return (
        <React.Fragment>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={ Login } />
                    <Route exact component={ NotFound } />
                </Switch>
            </HashRouter>
        </React.Fragment>
    )
}