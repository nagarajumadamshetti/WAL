import React from 'react';
class AddToDo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <form>
        <h1>todos</h1>
        <p>click on edit to update and delete to delete and check if the job is done </p>
        <input
          type="text"
          name="todo"
          class='flow-control'
          required=""
          value="todo"/>
        <button
          type="submit"
        />
      </form>
    );
  }
}
class ToDoList extends React.Component{
  render()
  {
    return(
      <div>
        <input
        type="checkbox"
        />
      </div>
    );
  }
}
export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      toDoRow: ''
    };
  }
  render() {
    return (
      <div>
        <AddToDo
          todo={this.state.todo}
        />
        <ToDoList
          toDoRow={this.props.toDoRow}
        />
      </div>
    );
  }
}