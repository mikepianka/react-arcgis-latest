import "./App.css";
import GIS from "./components/GIS";

function App() {
  return (
    <div className="App">
      <GIS center={[-73, 42]} zoom={10} />
    </div>
  );
}

export default App;
