import logo from "./logo.svg";
import "./App.css";
import GetTimer from "./Timer.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetTimer />
      </header>
    </div>
  );
}

export default App;
