import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, message, Checkbox } from "antd";

import PALogoImg from "../../images/login/PALogo.png";
import '../../styles/login.less';
import { loginInfo } from "../../fetch/login";

const FormItem = Form.Item;

class Login extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if(!err) {
                const result = loginInfo(values); 

                result.then(res => {
                    return res.json();
                }).then(data => {
                    console.log(data);

                    if (data.state == 200) {
                        data.data === "admin" ? 
                            this.props.history.push("/compony")
                            :
                            this.props.history.push("/set");
                    } else {
                        message.error(data.msg);
                    }
                }).catch(err => console.log(err));
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <React.Fragment>
                <div className="login-main">
                    <div className="login-content">
                        <div className="login-logo">
                            <img src={ PALogoImg } alt="" />
                        </div>
                        <Form
                            onSubmit={ this.handleSubmit }
                            className="login-form"
                            layout="vertical"
                            hideRequiredMark={ true }
                        >
                            <FormItem label="用户名:">
                                {
                                    getFieldDecorator("userName", {
                                        rules: [{
                                            required: true,
                                            message: "请输入用户名!"
                                        }]
                                    })(
                                        <Input type="user" placeholder="请输入用户名" />
                                    )
                                }
                            </FormItem>
                            <FormItem label="密码:">
                                {
                                    getFieldDecorator("password", {
                                        rules: [{
                                            required: true,
                                            message: "请输入密码!"
                                        }]
                                    })(
                                        <Input type="password" placeholder="请输入密码" />
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录 >
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;