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
        <li>{this.props.title}</li>
      </div>
    );
  }
}

export default Todolist;
