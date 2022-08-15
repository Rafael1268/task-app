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
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask = (e) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      },
    });
  };

  formValidation = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 100) {
      alert('Task is too long!');
    } else {
      this.onSubmitTask(e);
    }
  }

  deleteTask = (e) => {
    console.log(e.target.parentElement.parentElement.id);
    console.log(e.target.parentElement.parentElement.textContent); 
    console.log(this.state.tasks);
    const deleteNum = this.state.tasks.findIndex(t => t.id === e.target.parentElement.parentElement.id);
    console.log(deleteNum);
    const tasksCopy = [...this.state.tasks]
    tasksCopy.splice(deleteNum, 1)
    this.setState({ tasks: tasksCopy });
    this.render();
  }

  render() {
    const { task, tasks } = this.state;
    const { deleteTask } = this;
    return (
      <div id="container">
        <form onSubmit={this.formValidation}>
          <label htmlFor="taskInput">Enter Task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={deleteTask}/>
      </div>
    );
  }
}

export default App;