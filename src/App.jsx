import "antd/dist/antd.css";
import "./styles/side-menu.css"
import { MapController as Map } from "./modules/map/map-controller";
import { LayersGroupController as LayersGroup } from "./modules/layers-group/layers-group-controller";
import { FiltersListController as FiltersList } from "./modules/filters-list/filters-list-controller";

export const App = (props) => {
  return (
    <div className="App">
      <Map />
      <aside className="side-menu">
        <LayersGroup />
        <FiltersList />
      </aside>
    </div>
  );
}
