import React from "react";
import { Checkbox } from "antd";

export const LayersGroup = (props) => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className="layer-group">
      <Checkbox onChange={onChange}>Checkbox</Checkbox>;
    </div>
  );
}