import React from "react";
import { Checkbox } from "antd";

export const FilterControlOption = React.memo((props) => {
  const { option, layer, fieldName, addFilter, removeFilter, filters } = props;
  const expressionType = "==";
  const filterId = `filter-${layer.id}-${fieldName}${expressionType}${option}`;
  const layerFilters = filters[layer.id].filters;
  const currentFilter = layerFilters.find((f) => f.id === filterId);
  const currentFilterIndex = currentFilter
    ? layerFilters.indexOf(currentFilter)
    : -1;
  const isChecked = currentFilterIndex > -1;

  const onCheckboxChange = (e) => {
    isChecked
      ? removeFilter(layer.id, filterId)
      : addFilter(layer.id, filterId, fieldName, option, expressionType);
  };

  return (
    <Checkbox
      defaultChecked={false}
      checked={isChecked}
      onChange={onCheckboxChange}
    >
      {option}
    </Checkbox>
  );
});
