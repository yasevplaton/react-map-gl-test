import React, { useState, useEffect } from "react";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_ACCESS_TOKEN, layersConfig } from "../../constants";

export const MapComponent = (props) => {
  const { fetchSourceData, sources, layers, addLayer } = props;
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
        filterFields: l.filterFields
      });
    });
  }, [fetchSourceData, addLayer]);

  const renderSource = (source) => (
    <Source key={source.id} id={source.id} type={source.type} data={source.data}></Source>
  );

  const renderLayer = (layer) => (
    <Layer
      key={layer.id}
      id={layer.id}
      source={layer.source}
      type={layer.type}
      paint={layer.paint}
      layout={layer.layout}
    ></Layer>
  );

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
      </MapGL>
    </React.Fragment>
  );
};
