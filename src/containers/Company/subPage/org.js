import React, { PureComponent } from 'react';
import { withRouter } from "react-router";

class Org extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>Org</div>
            </React.Fragment>
        )
    }
}

export default withRouter(Org);