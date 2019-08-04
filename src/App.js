import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          name: "item1",
          isDone: false
        },
        {
          id: 1,
          name: "item2",
          isDone: false
        },
        {
          id: 2,
          name: "item3",
          isDone: false
        },
        {
          id: 3,
          name: "item4",
          isDone: false
        }
      ],
      inputValue: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleOnClick = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: this.state.todoList.length + 1,
          name: this.state.inputValue,
          isDone: false
        }
      ]
    });
  };

  handleToggle = todo => {
    let todoList = this.state.todoList.map(item => {
      if (item.id === todo.id) {
        console.log("in");
        return {
          id: item.id,
          name: item.name,
          isDone: !item.isDone
        };
      } else {
        console.log("out");
        return item;
      }
    });
    this.setState({
      todoList
    });
  };

  handleDelete = todo => {
    let todoList = this.state.todoList.filter(item => todo.id != item.id);

    this.setState({
      todoList
    });
  };

  render() {
    return (
      <div className="App">
        <div className="add-todo-header">Todo List</div>
        <div
          className="input-group-prepend mt-4"
          style={{ justifyContent: "center" }}
        >
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            style={{ width: "60%" }}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleOnClick}>Add Todo</button>
        </div>
        {this.state.todoList.map(item => (
          <Todolist
            title={item.name}
            handleClick={this.handleToggle}
            todo={item}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default App;
