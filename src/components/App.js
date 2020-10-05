import React, { useState, useEffect } from 'react';
import EmployeeForm from './addEmployee';
import EmployeeList from './employeeList';
import Project from './project';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Provider from '../context/provider';
import '../css/styles.css';

function App() {
  const employeeList = useSelector(state => state.employeeList);
  const [employees, setEmployees] = useState(employeeList);
  const dispatch = useDispatch();

  // store locally
  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(employeeList));
    localStorage.getItem('store');// use persisted data
  }, [employeeList]);

  // add employee dynamically
  const addEmployee = name => {
    const employee = {name: name, isAbsent: false};
    dispatch({ type: 'ADD_EMPLOYEE', payload: employee });
  };

  // marking Absent of not present
  const attendence = index => {
    const newEmployee = [...employeeList];
    newEmployee[index].isAbsent = true;
    setEmployees(newEmployee);
    dispatch({ type: 'UPDATE_EMPLOYEE', payload: newEmployee });
  };

  // Remove Employee from List
  const removeEmployee = index => {
    dispatch({ type: 'REMOVE_EMPLOYEE', payload: index });
  };

  // Edit Employee from List
  const editEmployee = index => {
    const newEmployee = [...employeeList];
    newEmployee[index].showDetail = true;
    console.log(employees);
    setEmployees(newEmployee);
  };

  // close detail modal
  const closeModal = index => {
    const newEmployee = [...employeeList];
    newEmployee[index].showDetail = false;
    setEmployees(newEmployee);
  }

  // edit existing employee
  const editEmployees = (index, updatedEmployee) => {
    const newEmployee = [...employeeList];
    newEmployee[index] = updatedEmployee;
    setEmployees(newEmployee);
    dispatch({ type: 'UPDATE_EMPLOYEE', payload: newEmployee });
  }


  return (
    <div className="app">
      <div className="ui middle aligned center aligned grid">
        <div class="column">
          <h1>Attendence</h1>
          <div className="container">
            <div className="top-view">
              <Provider>
                <Project />
              </Provider>
            </div>
            <div className="container-inr">
              {employeeList.map((employee, index) => (
                <EmployeeList
                  key={index}
                  index={index}
                  employee={employee}
                  attendence={attendence}
                  removeEmployee={removeEmployee}
                  editEmployee={editEmployee}
                  closeModal={closeModal}
                  editEmployees={editEmployees}
                />
              ))}
              <EmployeeForm addEmployee={addEmployee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;