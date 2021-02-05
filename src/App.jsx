import "antd/dist/antd.css";
import { MapController as Map } from "./modules/map/map-controller";
import { LayersGroupController as LayersGroup } from "./modules/layers-group/layers-group-controller";
import { FiltersList } from "./modules/filters-list/FiltersList";

export const App = (props) => {
  return (
    <div className="App">
      <Map />
      <LayersGroup />
      <FiltersList />
    </div>
  );
}
