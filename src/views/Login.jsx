import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { postApi } from '../api/call.api';
import { USERID, USERNAME } from '../api/data.api';
import urlApi from '../api/url.api'

class Login extends Component {
    constructor(p) {
        super(p);
        this.state = {
        }
    }

    async onLogin() {
        let mobile = document.getElementById('mobile').value;
        let password = document.getElementById('password').value;
        let pattern = /[6-9]{1}[0-9]{9}/;

        if (!mobile) {
            toast.error('Mobile can not be Empty!');
        } else if (mobile.length !== 10) {
            toast.error('Mobile Must Be 10 Digits Only!')
        } else if (!pattern.test(mobile)) {
            toast.error('Invalid Mobile');
        } else if (!password) {
            toast.error('Password Cant not be Empty!')
        } else if (mobile && password) {
            let postData = {
                'username': mobile,
                'password': password
            }
            let resp = await postApi(postData, urlApi.login);
            localStorage.setItem("username", resp.data.username);
            localStorage.setItem("profile_pic", resp.data.profile_picture);
            localStorage.setItem("user_id", resp.data.student_id);
            localStorage.setItem("dept", resp.data.dept);
            if (resp.responsecode === '200') {
                toast.success('Login Success');
                if (USERNAME() && USERID()) {
                    this.props.history.push("/dashboard");
                }
            } else {
                toast.error('Invalid Mobile Or Password');
            }
        }
    };

    componentDidMount() {
        localStorage.setItem("username", '');
        localStorage.setItem("profile_pic", '');
        localStorage.setItem("user_id", '');
        localStorage.setItem("dept", '');
    }

    render() {
        return (
            <>
                <body className={this.state.isOpen ? 'toggle-sidebar' : ''}>

                    <main>
                        <div className="container">
                            <ToastContainer autoClose={1000} />
                            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                            <div className="d-flex justify-content-center py-4">
                                                <div className="logo d-flex align-items-center w-auto">
                                                    <img src="assets/img/logo.png" alt="" />
                                                    <span className="d-none d-lg-block">StudNizer</span>
                                                </div>
                                            </div>

                                            <div className="card mb-3">

                                                <div className="card-body">
                                                    <div className="pt-4 pb-2">
                                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                        <p className="text-center small">Enter your mobile & password to login</p>
                                                    </div>

                                                    <form className="row g-3 needs-validation">

                                                        <div className="col-12">
                                                            <label htmlFor="mobile" className="form-label">Mobile</label>
                                                            <div className="input-group has-validation">
                                                                <input type="tel" name="mobile" className="form-control" id="mobile" required />
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                                            <input type="password" name="password" className="form-control" id="password" required />
                                                        </div>

                                                        <div className="col-12">
                                                            <button className="btn btn-primary w-100" type="button" onClick={() => this.onLogin()}>Login</button>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="small mb-0">Don't have account? <Link to={'/register'}>Create an account</Link></p>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>
                    </main>
                </body>
            </>
        );
    }
}

export default Login;
