import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/city/:cityName" exact component={City} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
