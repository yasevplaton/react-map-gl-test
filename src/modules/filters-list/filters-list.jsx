import React from "react";
import { Collapse } from 'antd';
import "./filters-list.css";
import { FilterLayerGroupController as FilterLayerGroup } from "./filter-layer-group/filter-layer-group-controller";

export const FiltersList = React.memo((props) => {
  const { layers, sources } = props;
  const { Panel } = Collapse;

  const renderFilterLayerGroup = layer => {
    const source = sources.filter(source => source.id === layer.source)[0];
    return (
      <Panel header={layer.id} key={layer.id}>
        <FilterLayerGroup layer={layer} source={source} />
      </Panel>
    )
  };

  return (
    <React.Fragment>
      <div className="filters-list">
        <h3 className="text-align-center">FILTERS</h3>
        <Collapse>
          {
            layers.length && layers.map(renderFilterLayerGroup)
          }
        </Collapse>
      </div>
    </React.Fragment>
  );
})