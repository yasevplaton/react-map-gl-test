import { groupBy } from "lodash";

// action creators
export const addFilterAction = (
  layerId,
  filterId,
  fieldName,
  fieldValue,
  expressionType
) => ({
  type: "ADD_FILTER",
  payload: {
    layerId: layerId,
    id: filterId,
    fieldName: fieldName,
    fieldValue: fieldValue,
    expressionType: expressionType,
    expression: [expressionType, fieldName, fieldValue],
  },
});

export const removeFilterAction = (layerId, filterId) => ({
  type: "REMOVE_FILTER",
  payload: {
    layerId: layerId,
    id: filterId,
  },
});

export const clearFiltersAction = (layerId) => ({
  type: "CLEAR_FILTERS",
  payload: {
    layerId: layerId,
  },
});

export const changeResultFilterAction = (layerId, resultExpression) => ({
  type: "CHANGE_RESULT_FILTER",
  payload: {
    layerId: layerId,
    resultExpression: resultExpression,
  },
});

// dispatchers
export const addFilter = (
  layerId,
  filterId,
  fieldName,
  fieldValue,
  expressionType
) => {
  return (dispatch) => {
    dispatch(
      addFilterAction(layerId, filterId, fieldName, fieldValue, expressionType)
    );
    dispatch(changeResultFilter(layerId));
  };
};

export const removeFilter = (layerId, filterId) => {
  return (dispatch) => {
    dispatch(removeFilterAction(layerId, filterId));
    dispatch(changeResultFilter(layerId));
  };
};

export const clearFilters = (layerId) => {
  return (dispatch) => {
    dispatch(clearFiltersAction(layerId));
    dispatch(changeResultFilter(layerId));
  };
};

export const changeResultFilter = (layerId) => {
  return (dispatch, getState) => {
    let resultFilter = ["all"];
    const currentLayerFilters = getState().filters[layerId].filters;
    const filtersGroupedByFieldName = groupBy(
      currentLayerFilters,
      (f) => f.fieldName
    );
    for (let fieldName in filtersGroupedByFieldName) {
      if (filtersGroupedByFieldName.hasOwnProperty(fieldName)) {
        const filters = filtersGroupedByFieldName[fieldName];
        if (filters.length) {
          const expressionArr = filters.map((f) => f.expression);
          const resultFieldFilter = ["any", ...expressionArr];
          resultFilter.push(resultFieldFilter);
        }
      }
    }
    dispatch(changeResultFilterAction(layerId, resultFilter));
  };
};
