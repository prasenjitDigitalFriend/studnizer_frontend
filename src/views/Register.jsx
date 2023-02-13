import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postApi } from '../api/call.api';
import urlApi from '../api/url.api';
import { toast, ToastContainer } from 'react-toastify';

class Register extends Component {
    constructor(p) {
        super(p);
        this.state = {
            picUpload: '',
        }
    }

    fileOnChange = async (e) => {
        await this.setState({ picUpload: e.target.files[0] });
        document.getElementById("pic-preview").src = URL.createObjectURL(e.target.files[0]);
    }

    async signUp() {
        if (!document.getElementById('yourName').value) {
            toast.error('Name can not be Empty!');
        } else if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
            toast.error('Password & Confirm Password Are Not Same !!!')
        }
        else {
            if (this.state.picUpload) {
                const formData = new FormData();
                formData.append(
                    "file_data", this.state.picUpload,
                );
                let respPic = await postApi(formData, urlApi.profilePicUpload);
                if (respPic.responsecode === '200') {
                    let postData = {
                        "username": document.getElementById('yourName').value,
                        "password": document.getElementById('confirmPassword').value,
                        "mobile": document.getElementById('mobile').value,
                        "email": document.getElementById('email').value,
                        "dept": document.getElementById('dept').value,
                        "sem": document.getElementById('sem').value,
                        "year": document.getElementById('year').value,
                        "college": document.getElementById('college').value,
                        "university": document.getElementById('university').value,
                        "profile_picture": respPic.data
                    }
                    let resp = await postApi(postData, urlApi.signUp);
                    if (resp.responsecode === '200') {
                        toast.success(resp.message);
                        this.props.history.push("/");
                    } else {
                        toast.error(resp.message);
                    }
                } else {
                    toast.error(respPic.message);
                }
            }
        }
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

                                            <div className="d-flex justify-content-center py-2">
                                                <div className="logo d-flex align-items-center w-auto">
                                                    <img src="assets/img/logo.png" alt="" />
                                                    <span className="d-none d-lg-block">StudNizer</span>
                                                </div>
                                            </div>

                                            <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="pt-2 pb-2">
                                                        <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                        <p class="text-center small">Enter your personal details to create account</p>
                                                    </div>

                                                    <form class="row g-3 needs-validation" novalidate>
                                                        <div class="col-12">
                                                            <label for="yourName" class="form-label">Your Name</label>
                                                            <input type="text" name="name" class="form-control form-control-sm" id="yourName" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourEmail" class="form-label">Your Email</label>
                                                            <input type="email" name="email" class="form-control form-control-sm" id="email" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">Mobile</label>
                                                            <input type="tel" name="mobile" class="form-control form-control-sm" id="mobile" required />
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="">Profile Pic</label>
                                                            <div className="">
                                                                <input type="file" name="profile_picture" onChange={(e) => this.fileOnChange(e)} class="form-control form-control-sm" id="profile_pic" required />
                                                                <img src="" alt="" id='pic-preview' className='mt-2 me-auto ms-auto d-flex justify-content-center' style={{ maxHeight: 200, width: 200, borderRadius: 10 }} />
                                                            </div>
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">College</label>
                                                            <input type="text" name="college" class="form-control form-control-sm" id="college" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">Department</label>
                                                            <input type="text" name="text" class="form-control form-control-sm" id="dept" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">University</label>
                                                            <input type="text" name="university" class="form-control form-control-sm" id="university" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">Year</label>
                                                            <input type="number" name="year" class="form-control form-control-sm" id="year" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourUsername" class="form-label">Semester</label>
                                                            <input type="number" name="sem" class="form-control form-control-sm" id="sem" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourPassword" class="form-label">Password</label>
                                                            <input type="password" name="password" class="form-control form-control-sm" id="password" required />
                                                        </div>

                                                        <div class="col-12">
                                                            <label for="yourPassword" class="form-label">Confirm Password</label>
                                                            <input type="password" name="password" class="form-control form-control-sm" id="confirmPassword" required />
                                                        </div>

                                                        {/* <div class="col-12">
                                                            <div class="form-check">
                                                                <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                                <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                                <div class="invalid-feedback">You must agree before submitting.</div>
                                                            </div>
                                                        </div> */}
                                                        <div class="col-12">
                                                            <button class="btn btn-primary w-100" type="button" onClick={() => this.signUp()}>Create Account</button>
                                                        </div>
                                                        <div class="col-12">
                                                            <p class="small mb-0">Already have an account? <Link to={"/"}>Log in</Link></p>
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

export default Register;
