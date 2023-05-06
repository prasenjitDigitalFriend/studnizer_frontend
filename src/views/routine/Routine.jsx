import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import TaskCalendar from '../../component/taskCalendar/TaskCalendar';

class Routine extends Component {
    constructor(p){
        super(p);
        this.state={
            isOpen:false,
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
                            <TaskCalendar/>
                        </div>
                    </main>
                </body>
            </>
        );
    }
}

export default Routine;
