import React, { Component } from "react";
import Button from "@material-ui/core/Button";

function designFunction() {
  return (
    <Button variant="contained" color="secondary">
      Hello World
    </Button>
  );
}

class Material_Ui extends Component {
  render() {
    return designFunction();
  }
}

export default Material_Ui;
