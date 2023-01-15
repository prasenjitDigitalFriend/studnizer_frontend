import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
    constructor(p) {
        super(p);
        this.state = {
        }
    }

    async onLogin() {
        let mobile = document.getElementById('mobile').value;
        let password = document.getElementById('password').value;

        if (!mobile) {
            document.getElementById('invalid-feedback-mobile').style.display = 'block';
        } else if (mobile.length !== 10) {
            document.getElementById('invalid-feedback-mobile').style.display = 'block';
        }
        if (!password) {
            document.getElementById('invalid-feedback-password').style.display = 'block';
        }
        if (mobile && password) {
            try {
                let response = await axios({
                    method: 'post',
                    url: 'http://localhost:7553/student/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        'username': mobile,
                        'password': password
                    }
                })
                if (response.status === 200) {
                    if (response.data.responscode === '200') {
                        this.props.history.push("/dashboard");
                    }
                } else {
                    return {
                        status: "error",
                        message: "Server Error",
                        responsecode: "500",
                        data: null,
                    };
                }
            } catch (e) {
                return {
                    status: "error",
                    message: e.message,
                    responsecode: "500",
                    data: null,
                };
            }
        }
    }

    render() {
        return (
            <>
                <body className={this.state.isOpen ? 'toggle-sidebar' : ''}>

                    <main>
                        <div className="container">

                            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                            <div className="d-flex justify-content-center py-4">
                                                <a href="index.html" className="logo d-flex align-items-center w-auto">
                                                    <img src="assets/img/logo.png" alt="" />
                                                    <span className="d-none d-lg-block">StudNizer</span>
                                                </a>
                                            </div>

                                            <div className="card mb-3">

                                                <div className="card-body">
                                                    <div className="pt-4 pb-2">
                                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                        <p className="text-center small">Enter your mobile & password to login</p>
                                                    </div>

                                                    <form className="row g-3 needs-validation">

                                                        <div className="col-12">
                                                            <label for="mobile" className="form-label">Mobile</label>
                                                            <div className="input-group has-validation">
                                                                <input type="tel" name="mobile" pattern="[6-9]{1}[0-9]{9}" className="form-control" id="mobile" required onChange={() => { document.getElementById("invalid-feedback-mobile").style.display = 'none' }} />
                                                                <div className="invalid-feedback" id="invalid-feedback-mobile">Please enter Valid Mobile.</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label for="yourPassword" className="form-label">Password</label>
                                                            <input type="password" name="password" className="form-control" id="password" required onChange={() => { document.getElementById("invalid-feedback-password").style.display = 'none' }} />
                                                            <div className="invalid-feedback" id="invalid-feedback-password">Please enter your password!</div>
                                                        </div>

                                                        <div className="col-12">
                                                            <button className="btn btn-primary w-100" type="button" onClick={() => this.onLogin()}>Login</button>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
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
