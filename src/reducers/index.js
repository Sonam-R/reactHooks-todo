
import { combineReducers } from 'redux';

let initialValues = [
    { name: 'Sachin', employeeId: 2408, designation: 'SSE', reportingManager: 'Allie Grater', shift: 'Day Shift' },
    { name: 'Anshul', employeeId: 7868 },
    { name: 'Olive Yew', employeeId: 9876 },
    { name: 'Aida Bugg', employeeId: 2345 },
    { name: 'Maureen Biologis', employeeId: 9086 },
    { name: 'Allie Grater', employeeId: 7735 },
  ];

if (localStorage.getItem('store')) {
  initialValues = JSON.parse(localStorage.getItem('store'));
}

const addNewEmployee = (state, name) => {
  const newList = [...state,  name ];
  return newList;
}

const removeEmployee = (state, index) => {
  const list = [...state];
  list.splice(index, 1);
  return list;
}

const updateEmployee = (employeeDetail) => {
  return employeeDetail;
}

function employeeReducer(state = initialValues, { payload, type }) {
  switch (type) {
    case "ADD_EMPLOYEE":
      return addNewEmployee(state, payload);
    
    case "REMOVE_EMPLOYEE":
        return removeEmployee(state, payload);
    
    case "UPDATE_EMPLOYEE":
      return updateEmployee(payload);

    default:
      return state;
  }
}

export default combineReducers({
  employeeList: employeeReducer,
});
// now it passes to provider