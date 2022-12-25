import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

class Dashboard extends Component {
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
                    <Navbar toggleFunction={() => this.handleToggle()} pageName='Dashboard'/>
                    <Sidebar />

                </body>
            </>
        );
    }
}

export default Dashboard;
