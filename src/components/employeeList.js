import React from 'react';
import EmployeeDetail from './employeeDetail';

function EmployeeList({ employee, index, attendence,removeEmployee, editEmployee, closeModal, editEmployees }) {
  return (
    <div
      className={`employee-list ${employee.isAbsent ? 'absent' : 'present' }`}
    >
      <div className="employee-name">
        {employee.name}
      </div>
      <div className="employee-action">
        <span className="absent-btn" onClick={() => attendence(index)}>Absent</span>
        <span className="edit-btn" onClick={() => editEmployee(index)}><i className="pencil alternate icon"></i></span>
        <span className="delete-btn" onClick={() => removeEmployee(index)}><i className="trash alternate icon"></i></span>
      </div>
      {employee.showDetail && <EmployeeDetail employee={employee} closeModal={() => closeModal(index)} editEmployees={editEmployees} index={index} />}
    </div>
  );
};

export default EmployeeList;