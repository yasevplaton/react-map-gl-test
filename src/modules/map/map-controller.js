import { connect } from "react-redux";
import { fetchSourceData } from "../../actions/sources";
import { addLayer, switchVisibility } from "../../actions/layers";
import { clearFilters } from "../../actions/filters";
import { MapComponent } from "./map";

const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    layers: state.layers,
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  fetchSourceData,
  addLayer,
  switchVisibility,
  clearFilters,
};

export const MapController = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
