import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";

class App extends React.Component {
  todoList = [
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
  ];
  render() {
    return (
      <div className="App">
        <Todolist />
      </div>
    );
  }
}

export default App;
