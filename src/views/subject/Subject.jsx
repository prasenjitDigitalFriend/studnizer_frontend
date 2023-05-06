import randomColor from 'randomcolor';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';

class Subject extends Component {
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
                        <div className="row">
                            <div className="col-md-3">
                                <div className="shadow p-2 w-100 h-100" style={{ position: 'relative', borderRadius: '10px', backgroundColor: randomColor() }}>
                                    <div className="image" style={{ position: 'relative' }}>
                                        <img src="https://source.unsplash.com/random?cyber security" style={{ height: 100, width: '100%', objectFit: 'cover', borderRadius: '8px 8px 2px 2px' }} alt="" />
                                        <div className="user" style={{ position: 'absolute', bottom: -35, right: 10 }}>
                                            <img src="https://source.unsplash.com/random?profile picture avatar" style={{ height: 70, width: 70, borderRadius: '50%', objectFit: 'cover', border: '4px solid #A0C3FF' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h6 className="mb-0">
                                            CSE-4th Year
                                        </h6>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h4 className="mb-0">
                                            Cyber Ethics & Law 2023
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2 w-100 h-100" style={{ position: 'relative', borderRadius: '10px', backgroundColor: randomColor() }}>
                                    <div className="image" style={{ position: 'relative' }}>
                                        <img src="https://source.unsplash.com/random?web internet" style={{ height: 100, width: '100%', objectFit: 'cover', borderRadius: '8px 8px 2px 2px' }} alt="" />
                                        <div className="user" style={{ position: 'absolute', bottom: -35, right: 10 }}>
                                            <img src="https://source.unsplash.com/random?profile avatar" style={{ height: 70, width: 70, borderRadius: '50%', objectFit: 'cover', border: '4px solid #A0C3FF' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h6 className="mb-0">
                                            CSE-4th Year
                                        </h6>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h4 className="mb-0">
                                            Web & Internet Technology( CSE 8th Sem 2023)
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2 w-100 h-100" style={{ position: 'relative', borderRadius: '10px', backgroundColor: randomColor() }}>
                                    <div className="image" style={{ position: 'relative' }}>
                                        <img src="https://source.unsplash.com/random?business" style={{ height: 100, width: '100%', objectFit: 'cover', borderRadius: '8px 8px 2px 2px' }} alt="" />
                                        <div className="user" style={{ position: 'absolute', bottom: -35, right: 10 }}>
                                            <img src="https://source.unsplash.com/random?student profile avatar" style={{ height: 70, width: 70, borderRadius: '50%', objectFit: 'cover', border: '4px solid #A0C3FF' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h6 className="mb-0">
                                            CSE-4th Year
                                        </h6>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h4 className="mb-0">
                                            E-Commerce & ERP
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2 w-100 h-100" style={{ position: 'relative', borderRadius: '10px', backgroundColor: randomColor() }}>
                                    <div className="image" style={{ position: 'relative' }}>
                                        <img src="https://source.unsplash.com/random?education" style={{ height: 100, width: '100%', objectFit: 'cover', borderRadius: '8px 8px 2px 2px' }} alt="" />
                                        <div className="user" style={{ position: 'absolute', bottom: -35, right: 10 }}>
                                            <img src="https://source.unsplash.com/random?user avatar" style={{ height: 70, width: 70, borderRadius: '50%', objectFit: 'cover', border: '4px solid #A0C3FF' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h6 className="mb-0">
                                            CSE-4th Year
                                        </h6>
                                    </div>
                                    <div className="subject-name py-2">
                                        <h4 className="mb-0">
                                            Internet Of Things (IoT)
                                        </h4>
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

export default Subject;
