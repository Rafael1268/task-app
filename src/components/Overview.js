import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Overview = ({tasks, deleteTask}) => {
  let num = 1;
  return (
    <ul>
      {tasks.map((task) => {
        return <li id={task.id} key={task.id}>{num++} - {task.text} <FontAwesomeIcon onClick={(Event) => {deleteTask(Event)}} icon={faTrash} id="deleteBtn"/></li>;
      })}
    </ul>
  );
};

export default Overview;