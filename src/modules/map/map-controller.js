import { connect } from "react-redux";
import { fetchSourceData } from "../../actions/sources";
import { addLayer, switchVisibility } from "../../actions/layers";
import { MapComponent } from "./map";

const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    layers: state.layers,
  };
};

const mapDispatchToProps = {
  fetchSourceData,
  addLayer,
  switchVisibility,
};

export const MapController = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
