import React from "react";
import "./layers-group.css";
import { LayerControlController as LayerControl } from "./layer-control/layer-control-controller";

export const LayersGroup = React.memo((props) => {
  const { layers } = props;

  const renderLayerControl = (layer) => {
    return (
      <li key={layer.id}>
        <LayerControl layer={layer} />
      </li>
    );
  };

  return (
    <div className="layers-group">
      <h3 className="text-align-center">LAYERS</h3>
      <ul>
        {layers.length && layers.map(renderLayerControl)}
      </ul>
    </div>
  );
});
