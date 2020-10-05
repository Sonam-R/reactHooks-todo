import React, { useState } from 'react';
import PackageContext from './context';

const Provider = props => {
  const [state, setState] = useState({
    projectName: "Rhinogram",
    managerName: 'Aida Bugg',
    sprint: "Sprint 20",
    attendence: "Pending" 
  });

  return (
    <PackageContext.Provider
       value={{
         data: state,
         updateAttendenceStatus: () => {
           setState({ ...state, attendence: 'Done...' });
         }
       }}
     >
       {props.children}
     </PackageContext.Provider>
   );
}

export default Provider;