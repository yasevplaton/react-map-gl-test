const INITIAL_STATE = {};

const filters = (state = INITIAL_STATE, action) => {
  let layerId;
  switch (action.type) {
    case "ADD_FILTER":
      layerId = action.payload.layerId;
      const filterToAdd = {
        id: action.payload.id,
        expressionType: action.payload.expressionType,
        fieldName: action.payload.fieldName,
        fieldValue: action.payload.fieldValue,
        expression: action.payload.expression,
      };
      return {
        ...state,
        [layerId]: {
          ...state[layerId],
          filters: [...state[layerId].filters, filterToAdd],
        },
      };

    case "REMOVE_FILTER":
      layerId = action.payload.layerId;
      return {
        ...state,
        [layerId]: {
          ...state[layerId],
          filters: state[layerId].filters.filter(
            (f) => f.id !== action.payload.id
          ),
        },
      };

    case "CHANGE_RESULT_FILTER":
      layerId = action.payload.layerId;
      return {
        ...state,
        [layerId]: {
          ...state[layerId],
          resultExpression: action.payload.resultExpression,
        },
      };

    case "CLEAR_FILTERS":
      layerId = action.payload.layerId;
      return {
        ...state,
        [layerId]: {
          ...state[layerId],
          filters: [],
        },
      };

    default:
      return state;
  }
};

export default filters;
