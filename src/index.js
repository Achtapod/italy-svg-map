import React from "react";
import ReactDOM from "react-dom";
import Italy from "@svg-maps/italy";
import { SVGMap } from "react-svg-map";
import ReactTooltip from 'react-tooltip';
import regionsJSON from "../public/italy_regions.json";
import "react-svg-map/lib/index.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegionFiltering = (region) => () => {
    const query = region.id
    regionsJSON.map(item => {
      const {de, en} = item;
      if(query === de || query === en) {
        region.names = `${de}|${en}`
      }
    })
  }

  handleClick = value => () => {
    window.top.location.href = `https://glora-store.de?Region=${value.names}`
  }

  render() {
    return(
      <div className='container centered'>
        <ReactTooltip />
        <svg className="svg-map" viewBox={Italy.viewBox}>
          {
            Italy.locations.map(region => {
              region.id = region.id.charAt(0).toUpperCase() + region.id.slice(1);
              return(
                <path 
                className='svg-map__location'
                key={region.id} 
                id={region.id} 
                d={region.path}
                data-tip={region.id}
                onClick={this.handleClick(region)}
                onMouseEnter={this.handleRegionFiltering(region)}
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
