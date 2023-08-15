import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card title="title" />
      <Card text="text text text" />
      <Card title="title" text="+ text" />
    </div>
  );
}

export default App;
