import React, { useCallback } from "react";
import { Checkbox } from "antd";

export const LayerControl = (props) => {
  const { layer, switchVisibility } = props;

  const onChange = useCallback((e) => {
    switchVisibility(layer.id);
  }, [switchVisibility, layer.id]);

  return (
    <Checkbox
      checked={layer.layout.visibility === "visible" ? true : false}
      onChange={onChange}
    >
      {layer.id}
    </Checkbox>
  );
};
