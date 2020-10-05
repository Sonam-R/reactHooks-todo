import React, { Fragment } from "react";
import Context from "../context//context";


const Project = () => {
  return <ProjectDetail />;
};

const ProjectDetail = () => {
  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <p>
            <strong>Project Name: </strong>
            {context.data.projectName}
          </p>
          <p>
            <strong>Recipient Name: </strong>
            {context.data.managerName}
          </p>
          <p>
            <strong>Sprint: </strong>
            {context.data.sprint}
          </p>
          <p>
            <strong>Attendence: </strong>
            {context.data.attendence}
          </p>
          <button className='bottom-btn' onClick={context.updateAttendenceStatus}>
            Update Status
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  )
}
export default Project;