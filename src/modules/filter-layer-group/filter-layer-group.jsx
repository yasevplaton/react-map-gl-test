import React, { useMemo } from "react";
import { groupBy } from "lodash";
import { Typography } from "antd";
import { FilterControl } from "../filter-control/filter-control";
import "./filter-layer-group.css"

export const FilterLayerGroup = React.memo((props) => {
  const { layer, source, clearFilters, filters } = props;
  const { Text } = Typography;
  const features = source.data.features;
  const filterFields = layer.filterFields;

  const filterFieldValues = useMemo(() => {
    const obj = {}
    filterFields.forEach(ff => {
      obj[ff] = groupBy(features, (f) => f.properties[ff])
    });

    return obj;
  }, [filterFields, features]);

  const renderFilterControl = (fieldName, index) => {
    const filterOptions = Object.keys(filterFieldValues[fieldName])
    return (
      <li key={index} className="filter-control">
        <b>{fieldName}</b>
        <FilterControl options={filterOptions} fieldName={fieldName} layer={layer} />
      </li>
    )
  }

  const onClearFilters = () => {
    clearFilters(layer.id)
  };

  return filterFields.length ? (
    <React.Fragment>
      {
        filters[layer.id].filters.length > 0 && <Text type="secondary" className="btn--clear-filters" onClick={onClearFilters}>clear all filters</Text>
      }
      <ul>{filterFields.map(renderFilterControl)}</ul>
    </React.Fragment>
  )
    :
    <p>no filters</p>
})