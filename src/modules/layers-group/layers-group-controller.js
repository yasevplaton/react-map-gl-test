import { connect } from "react-redux";
import { LayersGroup } from "./layers-group";

const mapStateToProps = (state) => {
  return {
    layers: state.layers,
  };
};

export const LayersGroupController = connect(
  mapStateToProps,
  null
)(LayersGroup);
