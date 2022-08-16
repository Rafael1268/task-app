import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Overview = ({tasks, deleteTask, editTask, closeEditTask}) => {
  let num = 1;
  return (
    <ul>
      {tasks.map((task) => {
        if (task.edit === true) {
          return (
            <div className="taskDiv" id={task.id} key={task.id}>
              <div className="task">
                <h1>{num++}</h1>
                <p>{task.text}</p>
                <div className="buttons" id={task.id}>
                  <h2><FontAwesomeIcon onClick={(Event) => {deleteTask(Event)}} icon={faCircleMinus} id="deleteBtn"/></h2>
                  <h2><FontAwesomeIcon onClick={(Event) => {editTask(Event)}} icon={faCircleCheck}/></h2>
                  <h2><FontAwesomeIcon onClick={(Event) => {closeEditTask(Event)}} icon={faCircleXmark} id="closeEditTaskBtn"/></h2>
                </div>
              </div>
              {/* <li id={task.id} key={task.id}>{num++} - {task.text} <FontAwesomeIcon onClick={(Event) => {deleteTask(Event)}} icon={faCircleMinus} id="deleteBtn"/></li> */}
              <input type="text" className="taskEdit" id={task.id}></input>
            </div>
          )
        } else {
          return (
            <div className="taskDiv" id={task.id} key={task.id}>
              <div className="task">
                <h1>{num++}</h1>
                <p>{task.text}</p>
                <div className="buttons" id={task.id}>
                  <h2><FontAwesomeIcon onClick={(Event) => {deleteTask(Event)}} icon={faCircleMinus} id="deleteBtn"/></h2>
                  <h2><FontAwesomeIcon onClick={(Event) => {editTask(Event)}} icon={faCirclePlus}/></h2>
                </div>
              </div>
              {/* <li id={task.id} key={task.id}>{num++} - {task.text} <FontAwesomeIcon onClick={(Event) => {deleteTask(Event)}} icon={faCircleMinus} id="deleteBtn"/></li> */}
            </div>
          )
        }
      })}
    </ul>
  );
};

export default Overview;