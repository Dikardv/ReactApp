import logo from "./logo.svg";
import "./App.css";
import GetTimer from "./Timer.jsx";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <h1 className="headerclass">Андрей + Екатерина</h1>
        <GetTimer className="timer" />
      </div>
      <video
        loop
        muted
        autoPlay
        poster="media/videoframe.png"
        className="fullscreenbg video"
      >
        <source src="bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
