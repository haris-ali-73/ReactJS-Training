import React from "react";
import ChangeColorButton from "../ccb";

class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  changeColor() {
    let newColor = this.state.color === "red" ? "blue" : "red";
    this.setState({
      color: newColor,
    });
  }
  render() {
    return (
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: this.state.color,
        }}
      >
        <ChangeColorButton clickHandler={this.changeColor}></ChangeColorButton>
      </div>
    );
  }
}

export default ColoredBlock;
