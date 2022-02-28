import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
// import { divide } from 'lodash';
import { handleLoginApi } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPass: false,
            errMessage: '',
        }
    }
    onChangeUserName = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    onChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    onLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }
        } catch (e) {
            this.setState({
                errMessage: e.message
            })
        }
    }

    showHidePassword = () => {
        this.setState({
            isShowPass: !this.state.isShowPass,
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login' > Login
                        </div>
                        <div className='col-12 form-group' >
                            <label > UserName: </label>
                            <input type="text"
                                className="form-control login-input"
                                placeholder='Enter your username'
                                value={this.state.username} onChange={(event) => this.onChangeUserName(event)} />
                        </div>
                        <div div className='col-12 form-group login-input' >
                            <label > Password: </label>
                            <div className="custom-input-password" >
                                <input type={this.state.isShowPass ? 'text' : 'password'}
                                    className="form-control login-input"
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.onChangePassword(event)} />
                                <span onClick={() => { this.showHidePassword() }} >
                                    <i className={this.state.isShowPass ? 'fas fa-eye' : 'fas fa-eye-slash'} ></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12' >
                            <button className='btn-login' onClick={() => this.onLogin()} > Login </button>
                        </div>
                        <div className='col-12' >
                            <span className='forgot-password' > Forgot your password ? </span>
                        </div>
                        <div className='col-12 text-center mt-2' >
                            <span className='text-orther-login' > Or Login with : </span>
                        </div >
                        <div className='col-12 social-login text-center mt-3' >
                            <i className="fab fa-google-plus-g google" > </i>
                            <i className="fab fa-facebook-square facebook" > </i>
                        </div >
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);