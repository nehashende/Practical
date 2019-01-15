import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AdvancedTopic from "./AdvancedTopic";
import Material_Ui from "./Material_Ui";
import ButtonAppBar from "./Menubar";
import NewAppBar from "./NewAppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={{ color: "red", backgroundColor: "cyan" }}> HELLO</p>
        <AdvancedTopic />
        <Material_Ui />
        <ButtonAppBar />
        <NewAppBar />
      </div>
    );
  }
}

export default App;
