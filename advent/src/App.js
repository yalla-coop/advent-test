import slide1 from "./assets/slide-1.jpg";
import slide2 from "./assets/slide-2.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Panel-1">
          <a
            id="Door-1"
            className="Door"
            href="https://www.thegingerbreadcity.com/1"
          >
            <p>1</p>
          </a>
          <a
            id="Door-16"
            className="Door"
            href="https://www.thegingerbreadcity.com/16"
          >
            <p>16</p>
          </a>
        </div>
        <div className="Panel-2">
          <a
            id="Door-7"
            className="Door"
            href="https://www.thegingerbreadcity.com/16"
          >
            <p>7</p>
          </a>
        </div>
        <div className="Panel-3" />
      </header>
    </div>
  );
}

export default App;
