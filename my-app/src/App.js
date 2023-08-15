import logo from "./logo.svg";
import "./App.css";
import Definitions from "./components/Definitions";

function App() {
  const definitions = [
    { dt: "one", dd: "two", id: 1 },
    { dt: "another term", dd: "another description", id: 2 },
  ];

  return (
    <div className="App">
      <h1>Definitions List</h1>
      <Definitions data={definitions} />
    </div>
  );
}

export default App;
