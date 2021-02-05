export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoieWFzZXZwbGF0b24iLCJhIjoiY2poaTJrc29jMDF0YzM2cDU1ZnM1c2xoMiJ9.FhmWdHG7ar14dQv1Aoqx4A";

const citiesStyle = {
  type: "circle",
  paint: {
    "circle-color": "#000",
    "circle-stroke-color": "#fff",
    "circle-stroke-width": 0.5,
  },
  layout: {
    visibility: "visible",
  },
};

const countriesStyle = {
  type: "fill",
  paint: {
    "fill-color": "#088",
    "fill-opacity": 0.7,
    "fill-outline-color": "#fff",
  },
  layout: {
    visibility: "visible",
  },
};

export const layersConfig = [
  {
    id: "countries",
    dataUrl: "/assets/countries.geojson",
    source: "countries",
    ...countriesStyle,
  },
  {
    id: "cities",
    dataUrl: "/assets/cities.geojson",
    source: "cities",
    ...citiesStyle,
  },
];
