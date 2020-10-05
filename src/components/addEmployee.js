import React from 'react';

function EmployeeForm({ addEmployee }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addEmployee(value);
    setValue("");
  };

  // function debounce(func, wait, immediate) {
  //   var timeout;
  
  //   return function executedFunction() {
  //     var context = this;
  //     var args = arguments;
        
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  
  //     var callNow = immediate && !timeout;
    
  //     clearTimeout(timeout);
  
  //     timeout = setTimeout(later, wait);
    
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // const myFunction = debounce(addEmployee, 3000);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          // onKeyUp={debounce(handleSubmit, 2000)}
          // onKeyUp={myFunction}
        />
      </form>
    </div>
  );
}
export default EmployeeForm;