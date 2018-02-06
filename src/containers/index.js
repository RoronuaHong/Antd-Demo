import React, { PureComponent } from "react";
import { withRouter } from "react-router";

import "../styles/index.less";
import "../styles/common/reset.css";
import "antd/dist/antd.less";

class App extends PureComponent {
    state = {
        initDone: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            });
        }, 500);
    }

    render() {        
        return (
            <React.Fragment>
                {
                    this.state.initDone ?
                        this.props.children
                        :
                        <div>Loading...</div>
                }
            </React.Fragment>
        )
    }
}

export default withRouter(App);