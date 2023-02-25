import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ConfirmationModal from '../../component/confirmationModal/ConfirmationModal';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';

class Todo extends Component {
    constructor(p) {
        super(p);
        this.state = {
            isOpen: false,
            tableData: [],
            showAddTodoModal: false,
        }
    }

    addTodoModalShow() {
        this.setState({ showAddTodoModal: true });
    }

    closeAddTodoModal() {
        this.setState({ showAddTodoModal: false });
    }

    async addTodo() {
        let postData = {
            'title': document.getElementById('todo-title').value,
            'status': 1,
            'created': '2022/22/01'
        }
        this.setState({ tableData: [...this.state.tableData, postData] });
        this.closeAddTodoModal();
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
                        <div className="row">

                        </div>
                        <div className="row">
                            <div class="card">
                                <div class="card-body">
                                    <div className="header-section d-flex justify-content-between align-items-center">
                                        <h5 class="card-title">Todo</h5>
                                        <button className='btn btn-sm btn-primary rounded' onClick={() => this.addTodoModalShow()}> <i className='bi bi-plus'    ></i> </button>
                                    </div>

                                    {this.state.tableData.length ? <table class="table table-striped">
                                        <thead>
                                            <tr className='text-center'>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Created</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.tableData?.map((data) => {
                                                    return (
                                                        <tr className='text-center'>
                                                            <th scope="row">1</th>
                                                            <td>{data.title}</td>
                                                            <td>{data.status === 1 ? 'Pending' : data.status === 2 ? 'Completed' : data.status === 3 ? 'Deleted' : ''}</td>
                                                            <td>{data.created}</td>
                                                            <td style={{ display: 'flex',justifyContent:'center', gap: '1%' }}>
                                                                <button className='btn btn-sm btn-dark' title='Edit'><i className='bi bi-pencil-square' ></i></button>
                                                                <ConfirmationModal buttonComponent={<button title='Delete' className='btn btn-sm btn-danger'> <i className='bi bi-trash3'></i> </button>} />
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table> :
                                        <p className='text-secondary text-center'>No Data Found !!!</p>
                                    }

                                </div>
                            </div>
                        </div>
                    </main>
                    <Modal show={this.state.showAddTodoModal} onHide={() => this.closeAddTodoModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Todo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="input-section">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="todo-title" className='form-control form-control-sm' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.closeAddTodoModal()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => this.addTodo()}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </body>
            </>
        );
    }
}

export default Todo;
