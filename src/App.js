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
          name: "item1"
        },
        {
          id: 1,
          name: "item2"
        },
        {
          id: 2,
          name: "item3"
        },
        {
          id: 3,
          name: "item4"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
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
          />
        </div>
        {this.state.todoList.map(item => (
          <Todolist title={item.name} />
        ))}
      </div>
    );
  }
}

export default App;
