import "antd/dist/antd.css";
import { MapController as Map } from "../map/map-controller";
import { LayersGroupController as LayersGroup } from "../layers-group/layers-group-controller";
import { FiltersListController as FiltersList } from "../filters-list/filters-list-controller";

export const App = () => {
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
