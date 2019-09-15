import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class HelloMessage extends React.Component {
  render() {
    return <App />;
  }
}

let mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage />, mountNode);
