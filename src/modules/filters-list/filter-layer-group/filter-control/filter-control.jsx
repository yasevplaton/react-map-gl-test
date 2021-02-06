import React from "react";
import { FilterControlOptionController as FilterControlOption } from "./filter-control-option/filter-control-option-controller";

export const FilterControl = React.memo((props) => {
  const { options, layer, fieldName } = props;

  const sortedOptions = options.length && options.sort();

  const renderFilterControlOption = (option, index) => {
    return (
      <li key={index}>
        <FilterControlOption option={option} layer={layer} fieldName={fieldName} />
      </li>
    );
  };

  return (
    <ul>{options.length && sortedOptions.map(renderFilterControlOption)}</ul>
  );
});
