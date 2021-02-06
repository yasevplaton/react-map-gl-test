import React, { useCallback } from "react";
import { Checkbox } from "antd";

export const LayerControl = React.memo((props) => {
  const { layer, switchVisibility } = props;

  const onChange = useCallback((e) => {
    switchVisibility(layer.id);
  }, [switchVisibility, layer.id]);

  return (
    <Checkbox
      checked={layer.layout.visibility === "visible"}
      onChange={onChange}
    >
      {layer.id}
    </Checkbox>
  );
});
