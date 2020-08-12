import React from "react";
import ReactDOM from "react-dom";
import Italy from "@svg-maps/italy";
import { SVGMap } from "react-svg-map";
import ReactTooltip from 'react-tooltip';
import "react-svg-map/lib/index.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = value => () => {
    window.top.location.href = `https://batuhancaksin.wixsite.com/website21/wine?Region=${value}`
  }

  render() {
    return(
      <div className='container centered'>
        <ReactTooltip />
        <svg className="svg-map" viewBox={Italy.viewBox}>
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="#F60" />
              <stop offset="95%" stop-color="#FF6" />
            </linearGradient>
          </defs>
          {
            Italy.locations.map(region => {
              region.id = region.id.charAt(0).toUpperCase() + region.id.slice(1);
              return(
                <path 
                className='svg-map__location'
                key={region.id} 
                id={region.id} 
                d={region.path}
                onClick={this.handleClick(region.id)}
                data-tip={region.id}
                ></path>
              )
            })
          }
        </svg>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));