import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [data1, setData1 ] = React.useState(null);

  React.useEffect(() => {
    // HENTER JSON FRA SERVERSIDE /api endpointet
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

      // HENTER JSON FRA SERVERSIDE /apis endpointet
      fetch("/apis")
      .then((res) => res.json())
      .then((data1) => setData1(data1.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dette er skrevet i frontend</p>
        
        
        <p>{!data ? "Loading..." : data}</p>

        <p>{!data1 ? "Loading..." : data1}</p>

      </header>
    </div>
  );
}

export default App;
