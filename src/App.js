import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import "./app.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        edit: false,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        edit: false,
      }
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        edit: false,
      },
    });
  };

  formValidation = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 750) {
      alert('Task is too long!');
    } else if (e.target[0].value.length < 1) {
      alert('Task is too short!');
    } else {
      this.onSubmitTask(e);
    }
  };

  deleteTask = (id) => {
    const deleteNum = this.state.tasks.findIndex(t => t.id === id);
    const tasksCopy = [...this.state.tasks]
    tasksCopy.splice(deleteNum, 1)
    this.setState({ tasks: tasksCopy });
    this.render();
  };

  editTask = (id) => {
    const editNum = this.state.tasks.findIndex(t => t.id === id)
    const tasksCopy = [...this.state.tasks]
    if (tasksCopy[editNum].edit === false) {
      tasksCopy[editNum].edit = true;
    } else {
      const inputSelector = document.querySelector(`input#${id}`)
      if (inputSelector.value > 750) {
        return alert('Task is too long!');;
      } else if (inputSelector.value < 1) {
        return alert('Task is too short!');;
      } else {
        tasksCopy[editNum].text = inputSelector.value
        tasksCopy[editNum].edit = false;
      }
    };
    this.setState({ tasks: tasksCopy });
  };

  closeEditTask = (id) => {
    const editNum = this.state.tasks.findIndex(t => t.id === id)
    const tasksCopy = [...this.state.tasks]
    tasksCopy[editNum].edit = false;
    this.setState({ tasks: tasksCopy });
  };

  render() {
    const { task, tasks } = this.state;
    const { deleteTask, editTask, closeEditTask } = this;
    return (
      <div id="container">
        <form onSubmit={this.formValidation}>
          <label htmlFor="taskInput">Enter Task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={deleteTask} editTask={editTask} closeEditTask={closeEditTask}/>
      </div>
    );
  };
};

export default App;