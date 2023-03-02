import React, { Component } from 'react';
import { Badge, Button, Modal } from 'react-bootstrap';
import { USERID } from '../../api/data.api';
import urlApi, { allTodo } from '../../api/url.api';
import ConfirmationModal from '../../component/confirmationModal/ConfirmationModal';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { postApi } from '../../api/call.api';
import { BsArrowLeftRight } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import { TbSearch } from 'react-icons/tb';
import { dateTimeConverter } from '../../utils/dateTimeConverter';
import Pagination from 'react-js-pagination';
import { toast, ToastContainer } from 'react-toastify';
import DateRange from '../../component/dateRangePicker/DateRange';

class Todo extends Component {
    constructor(p) {
        super(p);
        this.state = {
            isOpen: false,
            tableData: [],
            showAddTodoModal: false,
            pagination: ({
                active_page: 0,
                per_page: 10,
                total_items: 0
            }),
            page: 1,
            count: 10,
        }
    }

    async resetTable() {
        await this.setState({ tableData: [] })
        await this.setState({
            pagination: ({
                active_page: 0,
                per_page: 10,
                total_items: 0
            })
        })
    }

    dateFilterVar = "";
    async getAllTodo({ dateFilter = this.dateFilterVar, fromDate = '', toDate = '' } = {}) {
        this.dateFilterVar = dateFilter;
        this.setState({ page: 1 });
        var postData = {
            'student_id': USERID(),
            "search_data": document.getElementById("search-field").value || '',
            "status": document.getElementById("status-dropdown").value || '',
            "date": dateFilter,
            "fromDate": fromDate || '',
            "toDate": toDate || ''
        }
        let resp = await postApi(postData, urlApi.allTodo + this.state.page);
        console.log(postData);
        if (resp.responsecode === "200") {
            this.setState({ tableData: resp.data.data });
            this.setState({ pagination: resp.data.pagination });
        }
        else {
            this.resetTable();
        }
    };

    async onSearch() {
        await this.setState({ page: 1 }, () => this.getAllTodo());
    }

    async handlePageChange(pageNumber) {
        await this.setState({ page: pageNumber });
        this.getAllTodo();
    }

    componentDidMount() {
        this.getAllTodo();
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
            'student_id': USERID()
        }
        let resp = await postApi(postData, urlApi.addTodo);
        if (resp.responsecode === '200') {
            this.getAllTodo();
            this.closeAddTodoModal();
            toast.success(resp.message);
        } else {
            toast.error(resp.message);
        }
    }

    handleToggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        var x = (this.state.pagination.active_page - 1) * this.state.pagination.per_page + 1;
        return (
            <>
                <body className={this.state.isOpen ? 'toggle-sidebar' : ''}>
                    <Navbar toggleFunction={() => this.handleToggle()} />
                    <Sidebar />
                    <main id="main" class="main">
                        <ToastContainer autoClose={1000} />
                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="col-md-2 col-5 mb-2">
                                <input type="date" className='form-control form-control-sm w-100' id='from-date-filter' />
                            </div>
                            <div className="col-md-1 mb-2 col text-center"> <BsArrowLeftRight /> </div>
                            <div className="col-md-2 col-5 mb-2">
                                <input type="date" className='form-control form-control-sm w-100' id='to-date-filter' />
                            </div>
                            <div className="col-md-1 col">
                                <button className='btn btn-sm rounded btn-success w-100' onClick={() => this.getAllTodo({ dateFilter: "CUSTOM" })}>Search</button>
                            </div>
                            <div className="col-md-2 col-2">
                                <button className='btn btn-sm btn-warning w-sm-100' onClick={() => this.resetFields()}><GrPowerReset size={20} /></button>
                            </div>
                        </div>
                        <div className="row">
                            <form onSubmit={(e) => { e.preventDefault(); this.onSearch() }}>
                                <div className="col-12 mb-2">
                                    <div className="row">
                                        <div className="col-md-3 col-6">
                                            <input className='form-control form-control-sm' id='search-field' placeholder='Search Todo...' onChange={(e) => {
                                                if (!e.target.value) {
                                                    this.getAllTodo();
                                                }
                                            }} />
                                        </div>
                                        <div className="col-md-3 col-4">
                                            <select className='form-control form-control-sm w-100' defaultValue={""} id='status-dropdown'>
                                                <option value="">--All Status--</option>
                                                <option value="1">Pending</option>
                                                <option value="2">Completed</option>
                                                <option value="3">Deleted</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-4">
                                            <select className='form-control form-control-sm w-100' defaultValue={""} id='date-dropdown' onChange={(e) => this.getAllTodo({ dateFilter: e.target.value })}>
                                                <option value="">--All Date--</option>
                                                <option value="DAILY">Pending</option>
                                                <option value="YESTERDAY">Completed</option>
                                                <option value="WEEKLY">Deleted</option>
                                                <option value="MONTHLY">Deleted</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2 col-2">
                                            <button className='btn btn-sm btn-warning w-sm-100' type='submit'> <TbSearch size={20} /></button>
                                        </div>
                                        <div className="col-md-4">
                                            <DateRange onApplyClick={(e, p) => { this.getAllTodo({ fromDate: p.startDate.toDate(), toDate: p.endDate.toDate() }) }} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div class="card">
                                <div class="card-body">
                                    <div className="header-section d-flex justify-content-between align-items-center">
                                        <h5 class="card-title">Todo</h5>
                                        <button className='btn btn-sm btn-primary rounded' onClick={() => this.addTodoModalShow()}>Todo <i className='bi bi-plus'    ></i> </button>
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
                                                            <th scope="row">{x++}</th>
                                                            <td>{data.title}</td>
                                                            <td><Badge bg={data.status === 1 ? 'info' : data.status === 2 ? 'success' : data.status === 3 ? 'danger' : ''} > {data.status === 1 ? 'Pending' : data.status === 2 ? 'Completed' : data.status === 3 ? 'Deleted' : ''}</Badge></td>
                                                            <td>{dateTimeConverter(data.create_date)}</td>
                                                            <td style={{ display: 'flex', justifyContent: 'center', gap: '1%' }}>
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

                                    <div className='' style={{ float: 'right', display: this.state.tableData.length > 0 ? 'unset' : 'none' }}>
                                        <Pagination
                                            activePage={parseInt(this.state.pagination.active_page)}
                                            itemsCountPerPage={this.state.pagination.per_page}
                                            totalItemsCount={this.state.pagination.total_items}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange.bind(this)}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </div>
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
                                <input type="text" id="todo-title" className='form-control form-control-sm' autoFocus onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        this.addTodo();
                                    }
                                }} />
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
