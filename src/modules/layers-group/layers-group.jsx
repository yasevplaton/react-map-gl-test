import React from "react";
import "./layers-group.css";
import { LayerControlController as LayerControl } from "../layer-control/layer-control-controller";

export const LayersGroup = (props) => {
  const { layers } = props;

  const renderLayerControl = (layer) => {
    return <LayerControl key={layer.id} layer={layer} />;
  };

  return (
    <div className="layers-group">
      <h3 style={{ "textAlign": "center" }}>Слои</h3>
      {layers.length && layers.map(renderLayerControl)}
    </div>
  );
};
