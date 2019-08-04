import React from "react";

class Todolist extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     console.log(props);
  //     this.state = {
  //         name:this.props.title
  //     }
  //   }
  render() {
    return (
      <div>
        <li
          className={this.props.todo.isDone ? "striked" : ""}
          onClick={() => this.props.handleClick(this.props.todo)}
        >
          {this.props.title}
        </li>
        <button
          className="ml-2 mt-2"
          style={{ borderRadius: "2vh" }}
          onClick={() => {
            this.props.handleDelete(this.props.todo);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todolist;
