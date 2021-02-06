import { connect } from "react-redux";
import { FilterLayerGroup } from "./filter-layer-group";
import { clearFilters } from "../../store/actions/filters";

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  clearFilters,
};

export const FilterLayerGroupController = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLayerGroup);
