import React, { Fragment, useState } from 'react';
import { useInput } from './useInput';

const EmployeeDetail = ({ employee, closeModal, editEmployees, index }) => {
  const keys = {name: false, id: false, designation: false, manager: false, shift: false };
  const [showInput, setInput] = useState(keys);

  const { value: updatedName, bind:bindFirstName } = useInput('');
  const { value: updatedId, bind:bindId } = useInput('');
  const { value: updatedDesignation, bind:bindDesignation } = useInput('');
  const { value: updatedManager, bind:bindManager } = useInput('');
  const { value: updatedShift, bind:bindShift } = useInput('');

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const newUpdatedEmployee = {
      name: updatedName || employee.name,
      employeeId: updatedId || employee.employeeId,
      designation: updatedDesignation || employee.designation,
      reportingManager: updatedManager || employee.reportingManager,
      shift: updatedShift || employee.shift,
      isAbsent: employee.isAbsent,
    }
    editEmployees(index, newUpdatedEmployee);
}

  return (
    <Fragment>
      <div className="modal-container-outer" onClick={() => closeModal()}></div>
      <div className="modal-container employee-detail-container">
        <small onClick={() => closeModal()}>x</small>
        <h3>{employee.name}'s Detail</h3>
        <div className="employee-detail">
          <form onSubmit={(e) => handleSubmit(e, index)}>
            <div className="employee-list">
              <p>
                <label>Employee Name</label>
                {!showInput.name ?
                  <span onClick={() => setInput({name: true})}>{updatedName || employee.name}</span> :
                  <input placeholder={updatedName || employee.name} type="text" {...bindFirstName} />
                }
              </p>
              <p>
                <label>Employee ID</label>
                {employee.employeeId && !showInput.id ?
                <span onClick={() => setInput({id: true})}>{updatedId || employee.employeeId}</span> :
                <input placeholder={updatedId || employee.employeeId} type="text" {...bindId} />}
              </p>
              <p>
                <label>Designation</label>
                {employee.designation && !showInput.designation ?
                <span onClick={() => setInput({designation: true})}>{updatedDesignation || employee.designation}</span> :
                <input placeholder={updatedDesignation || employee.designation} type="text" {...bindDesignation} />}
              </p>
              <p>
                <label>Reporting Manager</label>
                {employee.reportingManager && !showInput.manager ?
                <span onClick={() => setInput({manager: true})}>{updatedManager || employee.reportingManager}</span> :
                <input placeholder={updatedManager || employee.reportingManager} type="text" {...bindManager} />}
              </p>
              <p>
                <label>Working Shift</label>
                {employee.shift && !showInput.shift ?
                <span onClick={() => setInput({shift: true})}>{updatedShift || employee.shift}</span> :
                <input placeholder={updatedShift || employee.shift} type="text" {...bindShift} />}
              </p>
              <div className="save-btn">
                <button>Save</button>
              </div>
            </div>
            </form>
        </div>
      </div>
    </Fragment>
  );
}

export default EmployeeDetail;