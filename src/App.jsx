import "antd/dist/antd.css";
import { MapComponent } from "./components/Map";
import { LayersGroup } from "./components/layer-controls/LayersGroup";
import { FiltersList } from "./components/filter-controls/FiltersList";

function App() {
  return (
    <div className="App">
      <MapComponent />
      <LayersGroup />
      <FiltersList />
    </div>
  );
}

export default App;
