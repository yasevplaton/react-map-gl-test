import React, { useMemo } from "react";
import { groupBy } from "lodash";
import { FilterControl } from "../filter-control/filter-control";

export const FilterLayerGroup = React.memo((props) => {
  const { layer, source } = props;
  const features = source.data.features;
  const filterFields = layer.filterFields;

  const filterFieldsValues = useMemo(() => {
    const obj = {}
    filterFields.forEach(ff => {
      obj[ff] = groupBy(features, (f) => f.properties[ff])
    });

    return obj;
  }, [filterFields, features]);

  const renderFilterControl = (fieldName, index) => {
    return (
      <li key={index}>
        <b>{fieldName}</b>
        <FilterControl options={Object.keys(filterFieldsValues[fieldName])} />
      </li>
    )
  }

  return filterFields.length ? <ul>{filterFields.map(renderFilterControl)}</ul> : <p>no filters</p>
})