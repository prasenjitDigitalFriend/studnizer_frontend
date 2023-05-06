import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';

class Profile extends Component {
    constructor(p) {
        super(p);
        this.state = {
            isOpen: false,
        }
    }
    handleToggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <>
                <body className={this.state.isOpen ? 'toggle-sidebar' : ''}>
                    <Navbar toggleFunction={() => this.handleToggle()} />
                    <Sidebar />
                    <main id="main" class="main">
                        <ToastContainer autoClose={1000} />
                        <div className="row align-items-center shadow" style={{ borderRadius: 8 }}>
                            <div className="col-md-3 p-4 border-end">
                                <div className="img w-100 d-flex align-items-center justify-content-center">
                                    <img src="https://source.unsplash.com/random?user avatar" alt="" style={{ height: 120, width: 120, borderRadius: '50%' }} />
                                </div>
                                <div className="info text-center mt-2">
                                    <h4>Thamim Mollah</h4>
                                    <h6>CSE || 4<sup>th</sup> Year , 8<sup>th</sup> Sem</h6>
                                    <button className='btn btn-sm btn-info px-4' style={{borderRadius:15}}>Update</button>
                                </div>
                            </div>
                            <div className="col-md p-4 h-100 w-100 border-end">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <div className="details">
                                        <p>College : </p>
                                        <p>University : </p>
                                        <p>Contact : </p>
                                        <p>Email : </p>
                                    </div>
                                    <div className="details">
                                        <p>Om Dayal Group Of Institutes</p>
                                        <p>MAKAUT</p>
                                        <p>7076760881</p>
                                        <p>thamim.mollah@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md p-4 h-100 w-100">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <div className="details">
                                        <p>Due TODOs : </p>
                                        <p>Subjects : </p>
                                        <p>Routine : </p>
                                        <p>Status : </p>
                                    </div>
                                    <div className="details">
                                        <p>5</p>
                                        <p>4</p>
                                        <p>OK</p>
                                        <p>Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </>
        );
    }
}

export default Profile;
