const INITIAL_STATE = [];

const sources = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SOURCE":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default sources;
