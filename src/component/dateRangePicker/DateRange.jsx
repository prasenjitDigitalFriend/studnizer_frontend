import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

function DateRange({ onApplyClick, startDate = new Date(), endDate = new Date() }) {

    return (
        <>
            <div className="datepicker-section">
                {/* <img src={''} className="datepicker-img" alt="datepicker" width={16} height={16} /> */}
                <DateRangePicker initialSettings={{ startDate: startDate, endDate: endDate }} onApply={(e, p) => onApplyClick(e,p)} >
                    <input type="text" className="form-control form-control-sm" />
                </DateRangePicker>
            </div>
        </>
    );
}

export default DateRange;