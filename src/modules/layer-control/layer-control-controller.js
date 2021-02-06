import { connect } from "react-redux";
import { switchVisibility } from "../../store/actions/layers";
import { LayerControl } from "./layer-control";

const mapDispatchToProps = {
  switchVisibility,
};

export const LayerControlController = connect(
  null,
  mapDispatchToProps
)(LayerControl);
