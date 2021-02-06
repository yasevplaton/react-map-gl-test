export const addSource = (source) => ({
  type: "ADD_SOURCE",
  payload: {
    id: source.id,
    type: source.type,
    data: source.data,
  },
});

export const fetchSourceData = (url, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const source = {
        id,
        type: "geojson",
        data,
      };

      dispatch(addSource(source));
    } catch (err) {
      console.error(err);
    }
  };
};
