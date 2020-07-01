import React from "react";
import Taiwan from "@svg-maps/taiwan";
import { SVGMap } from "react-svg-map";

export default function App() {
  // Create new map object
  const customTaiwan = {
    ...Taiwan,
    label: "Custom map label",
    locations: Taiwan.locations.map(location => {
      // Modify each location
    })
  };

  return (
    <SVGMap map={customTaiwan} />
  )
}