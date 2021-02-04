import React, { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "../constants";

export const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1
  });

  return (
    <React.Fragment>
      <MapGL
        style={{ width: '100vw', height: '100vh' }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        accessToken={MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onViewportChange={setViewport}
      >
        <Source id='countries' type='geojson' data={"/assets/countries.geojson"} />
        <Layer
          id='countries'
          type='fill'
          source='countries'
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.7,
            'fill-outline-color': "#fff",
          }}
          layout={{
            'visibility': 'visible'
          }}
        />
        <Source id='cities' type='geojson' data={"/assets/cities.geojson"} />
        <Layer
          id='cities'
          type='circle'
          source='cities'
          paint={{
            'circle-color': '#000',
            'circle-stroke-color': "#fff",
            'circle-stroke-width': .5
          }}
          layout={{
            'visibility': 'visible'
          }}
        />
      </MapGL>
    </React.Fragment>
  );
}

