import React, { useCallback } from "react";
import { Checkbox } from "antd";

export const LayerControl = (props) => {
  const { layer, switchVisibility } = props;
  // const checkboxVisibilityMap = useMemo(() => {
  //   const map = new Map();
  //   map.set(true, "visible");
  //   map.set(false, "none");
  //   return map;
  // }, []);

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
