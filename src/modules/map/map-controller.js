import { connect } from "react-redux";
import { fetchSourceData } from "../../store/actions/sources";
import { addLayer } from "../../store/actions/layers";
import { clearFilters } from "../../store/actions/filters";
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
  clearFilters,
};

export const MapController = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
