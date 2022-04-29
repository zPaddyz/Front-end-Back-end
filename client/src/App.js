import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from "./Register";
import Home from "./Home";
import CApp from "./commentApp";


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
  <Router>
    <div className="App">
      {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <p>Dette er skrevet i frontend</p>


           <p>{!data ? "Loading..." : data}</p>

            <p>{!data1 ? "Loading..." : data1}</p>

          </header>*/}
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route >
        <Route exact path="/comment">
          <CApp/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
