export const addLayerAction = (layer) => ({
  type: "ADD_LAYER",
  payload: {
    id: layer.id,
    source: layer.id,
    type: layer.type,
    paint: layer.paint,
    layout: layer.layout,
  },
});

export const addLayer = (layer) => {
  return (dispatch) => {
    dispatch(addLayerAction(layer));
  };
};

export const switchVisibilityAction = (layerId) => ({
  type: "SWITCH_VISIBILITY",
  payload: {
    id: layerId,
  },
});

export const switchVisibility = (layerId) => {
  return (dispatch) => {
    dispatch(switchVisibilityAction(layerId));
  };
};
