import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';
import './TaskCalendar.css'
import { getApi, postApi } from "../../api/call.api";
import urlApi from "../../api/url.api";
import { toast } from "react-toastify";
import ConfirmationModal from '../confirmationModal/ConfirmationModal'

class TaskCalendar extends Component {
    constructor(p) {
        super(p);
        this.state = {
            showAddEventModal: false,
            showEditEventModal: false,
            showDeleteEventModal: false,
            eventData:[],
            eventData2: [
                {
                    "work_cal_id": 1016,
                    "agent_id": 60,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T00:00:00.000Z",
                    "end_time": "2023-05-04T09:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 540,
                    "created_date": "2023-05-04T15:23:37.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-04T15:23:37.000Z",
                    "modified_by": 61,
                    "name": "Arnab Roy",
                    "color_code": "#1bc9d5"
                },
                {
                    "work_cal_id": 1030,
                    "agent_id": 60,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T00:00:00.000Z",
                    "end_time": "2023-05-05T09:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 540,
                    "created_date": "2023-05-05T01:21:04.000Z",
                    "created_by": 60,
                    "modified_date": "2023-05-05T01:21:04.000Z",
                    "modified_by": 60,
                    "name": "Arnab Roy",
                    "color_code": "#1bc9d5"
                },
                {
                    "work_cal_id": 1032,
                    "agent_id": 60,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T22:00:00.000Z",
                    "end_time": "2023-05-05T23:59:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 119,
                    "created_date": "2023-05-05T01:22:05.000Z",
                    "created_by": 60,
                    "modified_date": "2023-05-05T01:22:05.000Z",
                    "modified_by": 60,
                    "name": "Arnab Roy",
                    "color_code": "#1bc9d5"
                },
                {
                    "work_cal_id": 1001,
                    "agent_id": 61,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T09:00:00.000Z",
                    "end_time": "2023-05-04T13:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-03T14:13:19.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-03T14:13:19.000Z",
                    "modified_by": 61,
                    "name": "Prince Kumar",
                    "color_code": "#129f35"
                },
                {
                    "work_cal_id": 1002,
                    "agent_id": 61,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T14:00:00.000Z",
                    "end_time": "2023-05-04T20:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 360,
                    "created_date": "2023-05-03T15:25:42.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-03T15:25:42.000Z",
                    "modified_by": 61,
                    "name": "Prince Kumar",
                    "color_code": "#129f35"
                },
                {
                    "work_cal_id": 1006,
                    "agent_id": 61,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T22:00:00.000Z",
                    "end_time": "2023-05-04T23:59:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 119,
                    "created_date": "2023-05-04T15:19:06.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-04T15:19:06.000Z",
                    "modified_by": 61,
                    "name": "Prince Kumar",
                    "color_code": "#129f35"
                },
                {
                    "work_cal_id": 1036,
                    "agent_id": 61,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T09:00:00.000Z",
                    "end_time": "2023-05-05T13:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-05T10:09:48.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-05T10:09:48.000Z",
                    "modified_by": 61,
                    "name": "Prince Kumar",
                    "color_code": "#129f35"
                },
                {
                    "work_cal_id": 1037,
                    "agent_id": 61,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T14:00:00.000Z",
                    "end_time": "2023-05-05T20:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 360,
                    "created_date": "2023-05-05T10:10:07.000Z",
                    "created_by": 61,
                    "modified_date": "2023-05-05T10:10:07.000Z",
                    "modified_by": 61,
                    "name": "Prince Kumar",
                    "color_code": "#129f35"
                },
                {
                    "work_cal_id": 1007,
                    "agent_id": 75,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T13:00:00.000Z",
                    "end_time": "2023-05-04T17:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-04T15:19:21.000Z",
                    "created_by": 75,
                    "modified_date": "2023-05-04T15:19:21.000Z",
                    "modified_by": 75,
                    "name": "Pritam Das",
                    "color_code": "#5c0000"
                },
                {
                    "work_cal_id": 1009,
                    "agent_id": 75,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-04T18:00:00.000Z",
                    "end_time": "2023-05-04T22:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-04T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-04T15:20:18.000Z",
                    "created_by": 75,
                    "modified_date": "2023-05-04T15:20:18.000Z",
                    "modified_by": 75,
                    "name": "Pritam Das",
                    "color_code": "#5c0000"
                },
                {
                    "work_cal_id": 1039,
                    "agent_id": 75,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T12:00:00.000Z",
                    "end_time": "2023-05-05T16:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-05T12:10:37.000Z",
                    "created_by": 75,
                    "modified_date": "2023-05-05T12:10:37.000Z",
                    "modified_by": 75,
                    "name": "Pritam Das",
                    "color_code": "#5c0000"
                },
                {
                    "work_cal_id": 1040,
                    "agent_id": 75,
                    "title": "support",
                    "type": 2,
                    "start_time": "2023-05-05T17:00:00.000Z",
                    "end_time": "2023-05-05T21:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-05T12:11:11.000Z",
                    "created_by": 75,
                    "modified_date": "2023-05-05T12:11:11.000Z",
                    "modified_by": 75,
                    "name": "Pritam Das",
                    "color_code": "#5c0000"
                },
                {
                    "work_cal_id": 1003,
                    "agent_id": 76,
                    "title": "Support",
                    "type": 2,
                    "start_time": "2023-05-05T13:00:00.000Z",
                    "end_time": "2023-05-05T17:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-03T22:04:57.000Z",
                    "created_by": 76,
                    "modified_date": "2023-05-03T22:04:57.000Z",
                    "modified_by": 76,
                    "name": "SOURAV BISWAS",
                    "color_code": "#003670"
                },
                {
                    "work_cal_id": 1042,
                    "agent_id": 76,
                    "title": "Support",
                    "type": 2,
                    "start_time": "2023-05-05T18:00:00.000Z",
                    "end_time": "2023-05-05T22:00:00.000Z",
                    "special_ot": 0,
                    "work_date": "2023-05-05T00:00:00.000Z",
                    "working_time": 240,
                    "created_date": "2023-05-05T15:03:50.000Z",
                    "created_by": 76,
                    "modified_date": "2023-05-05T15:03:50.000Z",
                    "modified_by": 76,
                    "name": "SOURAV BISWAS",
                    "color_code": "#003670"
                }
                
            ],
            timeLineDate: [],
            currentTab: "",
            allAgentList: []
        }
    }

    handleShow() {
        // this.getAllAgentList();\
        this.setState({ showAddEventModal: true });
    };

    handleClose() {
        this.setState({ showAddEventModal: false })
    };

    async getAllAgentList() {
        let resp = await getApi(urlApi.allAgentListDropdown);
        if (resp.responseCode === 200) {
            this.setState({ allAgentList: resp.data }, () => {
                this.setState({ showAddEventModal: true });
            });
        } else {
            this.setState({ allAgentList: [] });
        }
    }

    handleShowEdit(data) {
        this.setState({ showEditEventModal: true }, () => {
            document.getElementById("work_cal_id_edit").value = data.publicId;
            document.getElementById("agent_name").innerHTML = data.extendedProps.name;
            document.getElementById("title_edit").value = data.title;
            document.getElementById("agent_id_edit").value = data.extendedProps.agent_id;
            document.getElementById("type_edit").value = data.extendedProps.type;
            document.getElementById("work_date_edit").value = (data.extendedProps.work_date).split("T")[0];
            document.getElementById("start-time_edit").value = ((data.extendedProps.start_time), "yyyy-mm-dd HH:MM").split(" ")[1];
            document.getElementById("end-time_edit").value = ((data.extendedProps.end_time), "yyyy-mm-dd HH:MM").split(" ")[1];
        });
    };

    handleCloseEdit() {
        this.setState({ showEditEventModal: false })
    };

    async addEvent() {
        let postData = {
            "agentId": document.getElementById("agent_id").value,
            "title": document.getElementById("title").value,
            "type": document.getElementById("type").value,
            "startTime": (document.getElementById("date").value, "yyyy-mm-dd") + " " + document.getElementById("start-time").value,
            "endTime": (document.getElementById("date").value, "yyyy-mm-dd") + " " + document.getElementById("end-time").value
        }
        let resp = await postApi(postData, urlApi.allAgentWorkAdd);
        if (resp.responseCode === 200) {
            toast.success(resp.message);
            this.handleClose();
            this.fetchAllEventData(this.state.currentTab);
        } else {
            toast.error(resp.message);
        }
    }

    async fetchAllEventData(type) {
        let postData = {
            "startDate": (this.state.timeLineDate.start, "yyyy-mm-dd"),
            "endDate": (this.state.timeLineDate.end, "yyyy-mm-dd")
        }
        let resp = await postApi(postData, type === "Game" ? urlApi.workCalendarGame : urlApi.workCalendarSupport);
        if (resp.responseCode === 200) {
            let newList = [];
            for (const data of resp.data) {
                let newWorkList = {
                    "id": data.work_cal_id,
                    "title": data.title,
                    "type": data.type,
                    "name": data.name,
                    "color": data.color_code,
                    "start_time": data.start_time,
                    "end_time": data.end_time,
                    "work_date": data.work_date,
                    "agent_id": data.agent_id,
                    "start": new Date((data.start_time)),
                    "end": new Date((data.end_time)),
                }
                newList.push(newWorkList);
            }
            this.setState({ eventData: newList }, () => {
                this.forceUpdate();
            });
        } else {
            this.setState({ eventData: [] });
        }
    }

    async editEvent() {
        let postData = {
            "workCalId": document.getElementById("work_cal_id_edit").value,
            "title": document.getElementById("title_edit").value,
            "agentId": document.getElementById("agent_id_edit").value,
            "type": document.getElementById("type_edit").value,
            "startTime": document.getElementById("work_date_edit").value + " " + document.getElementById("start-time_edit").value,
            "endTime": document.getElementById("work_date_edit").value + " " + document.getElementById("end-time_edit").value
        }
        let resp = await postApi(postData, urlApi.workCalendarEditAll);
        if (resp.responseCode === 200) {
            toast.success(resp.message);
            this.fetchAllEventData(this.state.currentTab);
            this.handleCloseEdit();
        } else {
            toast.error(resp.message);
        }
    }

    componentDidMount() {
        this.fetchAllEventData("SUPPORT");
    }

    async deleteEventFunction(taskId) {
        let resp = await getApi(urlApi.workCalendarDeleteAll + taskId);
        if (resp.responseCode === 200) {
            this.fetchAllEventData(this.state.currentTab);
            toast.success(resp.message);
        } else {
            toast.error(resp.message);
        }
    }

    render() {
        return (
            <>
                <div className="task-calendar-container">
                    <button className="btn btn-sm btn-primary mb-2" onClick={(e) => this.handleShow()} >Add Task</button>
                    <div className="calendar-container">
                        {<FullCalendar
                            schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                            plugins={[listPlugin, resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, momentPlugin, interactionPlugin]}
                            initialView="timelineDay"
                            headerToolbar={{
                                start: 'dayGridMonth,timelineWeek,timelineDay',
                                center: 'title',
                                end: 'today prev,next',
                            }}
                            // eventClick={(e) => console.log(e)}
                            themeSystem='bootstrap5'
                            height="440px"
                            // datesSet={(e) => { this.setState({ timeLineDate: e }, () => this.fetchAllEventData(this.state.currentTab)) }}
                            events={this.state.eventData2}
                            editable={false}
                            // eventResize={(e) => console.log(e)}
                            eventContent={(e) => {
                                // console.log(e)
                                return (<>
                                    <span className="me-10">{e.event._def.extendedProps.name + " : " + e.event._def.title}</span>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-sm btn-success" onClick={() => this.handleShowEdit(e.event._def)} ><i class="bi bi-pencil-square"></i></button>
                                        &nbsp;&nbsp;
                                        {<ConfirmationModal heading={"Delete Task?"} contentText="Are You Sure Want To Delete This Task?" okBtnText={"Delete"} buttonComponent={<button className="btn btn-sm btn-success" ><i class="bi bi-trash"></i></button>} okFunction={() => this.deleteEventFunction(e.event._def.publicId)} />}</div>
                                </>)
                            }
                            }
                        />}
                    </div>
                </div>
                <Modal show={this.state.showAddEventModal} onHide={() => this.handleClose()} className=''>
                    <Modal.Header closeButton>
                        <h2 className='fs-20 fw-600'>Add detail</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="task-form-container">
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="title-label" htmlFor="label_color">Title</label>
                                </div>
                                <div className="control-section">
                                    <input type="text" name="" id="title" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="start_time">Date</label>
                                </div>
                                <div className="control-section">
                                    <input type="date" name="start_time" id="date" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="start_time">Start Time</label>
                                </div>
                                <div className="control-section">
                                    <input type="time" name="start_time" id="start-time" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="end_time">End Time</label>
                                </div>
                                <div className="control-section">
                                    <input type="time" name="end_time" id="end-time" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="type">Type</label>
                                </div>
                                <div className="control-section">
                                    <select className="form-control form-control-sm" id="type" name="type" defaultValue={""}>
                                        <option value="">--- Choose Type ---</option>
                                        <option value="1">Game Check</option>
                                        <option value="2">Support</option>
                                        <option value="3">Both</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-between'>
                        <button className="btn btn-sm btn-danger" onClick={() => this.handleClose()} >Cancel</button>
                        <button className="btn btn-sm btn-success" onClick={() => this.addEvent()} >Add</button>
                    </Modal.Footer>
                </Modal>
                {/* add/edit task modal end */}
                <Modal show={this.state.showEditEventModal} onHide={() => this.handleCloseEdit()} className=''>
                    <Modal.Header closeButton>
                        <h2 className='fs-20 fw-600'>Update detail</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 id="agent_name" className="text-center">-</h4>
                        <hr />
                        <div className="task-form-container">
                            <input type="text" id="work_cal_id_edit" name="id" className="form-control form-control-sm d-none" />
                            <input type="date" id="work_date_edit" className="form-control form-control-sm d-none" />
                            <input type="text" id="agent_id_edit" className="form-control form-control-sm d-none" />
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="title-label" htmlFor="label_color">Title</label>
                                </div>
                                <div className="control-section">
                                    <input type="text" name="" id="title_edit" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="start_time">Start Time</label>
                                </div>
                                <div className="control-section">
                                    <input type="time" name="start_time" id="start-time_edit" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="end_time">End Time</label>
                                </div>
                                <div className="control-section">
                                    <input type="time" name="end_time" id="end-time_edit" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="task-form-item">
                                <div className="label-section">
                                    <label className="task-label" htmlFor="type">Type</label>
                                </div>
                                <div className="control-section">
                                    <select className="form-control form-control-sm" id="type_edit" defaultValue={""}>
                                        <option value="">--- Choose Type ---</option>
                                        <option value={1}>Game Check</option>
                                        <option value={2}>Support</option>
                                        <option value={3}>Both</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-between'>
                        <button className="btn btn-sm btn-danger" onClick={() => this.handleCloseEdit()} >Cancel</button>
                        <button className="btn btn-sm btn-success" onClick={() => this.editEvent()} >Add</button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default TaskCalendar;