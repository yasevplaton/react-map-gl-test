import { connect } from "react-redux";
import { FilterControlOption } from "./filter-control-option";
import { addFilter, removeFilter } from "../../../actions/filters";

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  addFilter,
  removeFilter,
};

export const FilterControlOptionController = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterControlOption);
