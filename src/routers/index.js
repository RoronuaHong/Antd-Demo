import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import NotFound from "../containers/ErrorPage/NotFound";
import App from "../containers/";
import Company from "../containers/Company";
import CompanyInfo from "../containers/Company/subPage/companyInfo";
import Org from "../containers/Company/subPage/Org";

export default function Routers() {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/company">
                        <Company>
                            <Switch>
                                <Route path="/company" exact component={CompanyInfo} />
                                <Route path="/company/companyinfo" component={CompanyInfo} />
                                <Route path="/company/org" component={Org} />
                                <Route component={NotFound} />
                            </Switch>
                        </Company>
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </App>
        </HashRouter>
    )
}
