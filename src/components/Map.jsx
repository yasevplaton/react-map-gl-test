import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from "../constants";
import { Sources } from "./Sources";
import { Layers } from "./Layers";


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
        <Sources />
        <Layers />
      </MapGL>
    </React.Fragment>
  );
}

