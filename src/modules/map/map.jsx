import React, { useState, useEffect } from "react";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_ACCESS_TOKEN, layersConfig } from "../../constants";

export const MapComponent = (props) => {
  const { fetchSourceData, sources, layers, addLayer, filters, clearFilters } = props;
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  useEffect(() => {
    layersConfig.forEach((l) => {
      fetchSourceData(l.dataUrl, l.id);
      addLayer({
        id: l.id,
        source: l.id,
        type: l.type,
        paint: l.paint,
        layout: l.layout,
        filterFields: l.filterFields,
      });
      clearFilters(l.id);
    });
  }, [fetchSourceData, addLayer, clearFilters]);

  const renderSource = ({ id, type, data }) => (
    <Source key={id} id={id} type={type} data={data} />
  );

  const renderLayer = ({ id, source, type, paint, layout }) => (
    <Layer
      key={id}
      id={id}
      source={source}
      type={type}
      paint={paint}
      layout={layout}
      filter={filters[id].resultExpression}
    />
  );

  // const renderFilter = (layer) => (
  //   <Filter
  //     key={layer.id}
  //     layerId={layer.id}
  //     filter={filters[layer.id].resultExpression}
  //   />
  // );

  return (
    <React.Fragment>
      <MapGL
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onViewportChange={setViewport}
      >
        {sources.length && sources.map(renderSource)}
        {layers.length && layers.map(renderLayer)}
        {/* {layers.length && layers.map(renderFilter)} */}
      </MapGL>
    </React.Fragment>
  );
};
