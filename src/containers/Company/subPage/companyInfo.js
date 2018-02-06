import React, { PureComponent } from 'react';
import { withRouter } from "react-router";

class companyInfo extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>CompanyInfo</div>
            </React.Fragment>
        )
    }
}

export default withRouter(companyInfo);