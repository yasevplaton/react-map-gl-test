import { connect } from "react-redux";
import { switchVisibility } from "../../actions/layers";
import { LayersGroup } from "./layers-group";

const mapStateToProps = (state) => {
  return {
    layers: state.layers,
  };
};

const mapDispatchToProps = {
  switchVisibility,
};

export const LayersGroupController = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayersGroup);
