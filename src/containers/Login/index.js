import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, message, Checkbox } from "antd";

import PALogoImg from "../../images/login/PALogo.png";
import '../../styles/login.less';
import { loginInfo } from "../../fetch/login";
import { InputComponent } from "../../components/FormComponent/inputCop";

const FormItem = Form.Item;

class Login extends PureComponent {
    /*初始化用户名和密码*/
    state = {
        userName: "",
        password: ""
    }

    /*登录提交功能*/
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if(!err) {
                const result = loginInfo(values);

                result.then(res => {
                    return res.json();
                }).then(data => {
                    if (data.state == 200) {
                        data.data === "admin" ?
                            this.props.history.push("/company")
                            :
                            this.props.history.push("/set");
                    } else {
                        message.error(data.msg);
                        // 清空表单form
                        // this.props.form.resetFields();
                    }
                }).catch(err => console.log(err));
            }
        });
    }

    /*绑定用户名的Input*/
    userInput = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    /*绑定用户名的Input*/
    pwdInput = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    /*清空Input*/
    emitEmpty = (clearInput, name) => {
        clearInput({
            [name]: ""
        });

        this.setState({
            [name]: ""
        });
    }

    render() {
        const { getFieldDecorator, setFieldsValue } = this.props.form,
            { userName, password } = this.state,
            userNameSuffix = userName ? <Icon type="close-circle" onClick={() => { this.emitEmpty(setFieldsValue, "userName") }} /> : "",
            pwdSuffix = password ? <Icon type="close-circle" onClick={() => { this.emitEmpty(setFieldsValue, "password") }} /> : "";

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
                            <InputComponent
                                form={ this.props.form }
                                FormItem={ Form.Item }
                                Input={ Input }
                                labels="用户名"
                                idName="userName"
                                rules={[{
                                    required: true,
                                    message: "请输入用户名！"
                                }]}
                                suffix={ userNameSuffix }
                                type="user"
                                onChange={ this.userInput }
                                placeholder="请输入用户名"
                            />
                            <InputComponent
                                form={this.props.form}
                                FormItem={Form.Item}
                                Input={Input}
                                labels="密码"
                                idName="password"
                                rules={[{
                                    required: true,
                                    message: "请输入密码！"
                                }]}
                                suffix={pwdSuffix}
                                type="password"
                                onChange={this.pwdInput}
                                placeholder="请输入密码"
                            />
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