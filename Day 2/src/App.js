import logo from "./logo.svg";
import "./App.css";
import ColoredBlock from "./cb";
import Clock from "./clock";
import Welcome from "./test";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <div>
      <Welcome name={"Haris Ali"} />
      <Clock />
      {/* <ColoredBlock /> */}
    </div>

    /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
    //     </a> */
    //   </header>
    // </div>
  );
}

export default App;