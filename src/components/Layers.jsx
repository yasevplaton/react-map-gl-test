import React from "react";
import { Layer } from '@urbica/react-map-gl';
import { citiesStyle, countriesStyle } from "../config/layers-styles";

export const Layers = (props) => {
  return (
    <React.Fragment>
      <Layer
        id='countries'
        source='countries'
        {...countriesStyle}
      />
      <Layer
        id='cities'
        source='cities'
        {...citiesStyle}
      />
    </React.Fragment>
  );
}