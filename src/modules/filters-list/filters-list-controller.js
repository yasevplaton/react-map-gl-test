import { connect } from "react-redux";
import { FiltersList } from "./filters-list";

const mapStateToProps = (state) => {
  return {
    layers: state.layers,
    sources: state.sources,
  };
};

export const FiltersListController = connect(
  mapStateToProps,
  null
)(FiltersList);
