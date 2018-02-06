import React, { PureComponent } from 'react';
import { withRouter } from "react-router";
import { Layout } from "antd";
import { isLogin } from "../../fetch/login";

class Company extends PureComponent {
    componentDidMount() {
        /*获取登录信息*/
        const result = isLogin();

        result.then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        const { Header, Sider, Content } = Layout;

        return (
            <React.Fragment>
                <Layout>
                    <Header style={{ background: '#fff', padding: "0 30px" }}>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>
                            { this.props.children }
                        </Content>
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

export default withRouter(Company);