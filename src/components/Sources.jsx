import React from "react";
import { Source } from '@urbica/react-map-gl';

export const Sources = (props) => {
  return (
    <React.Fragment>
      <Source id='countries' type='geojson' data={"/assets/countries.geojson"} />
      <Source id='cities' type='geojson' data={"/assets/cities.geojson"} />
    </React.Fragment>
  );
}