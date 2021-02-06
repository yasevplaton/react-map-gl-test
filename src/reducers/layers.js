const INITIAL_STATE = [];

const layers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_LAYER":
      return state.concat(action.payload);
    case "SWITCH_VISIBILITY":
      return state.map((l) => {
        if (l.id === action.payload.id) {
          return l.layout.visibility === "visible"
            ? { ...l, layout: { ...l.layout, visibility: "none" } }
            : { ...l, layout: { ...l.layout, visibility: "visible" } };
        } else {
          return l;
        }
      });
    default:
      return state;
  }
};

export default layers;
