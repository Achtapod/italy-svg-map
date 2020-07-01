import React from "react";
import ReactDOM from "react-dom";
import Italy from "@svg-maps/italy";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SVGMap map={Italy} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));