import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Import pages
import Home from "./pages/Home";



function App() {
  return (
    <div className="font-general tracking-wider text-gray-800">
    <Route>
      <Switch>

        <Route exact path="/" component={Home} />
    
      </Switch>
    </Route>
    </div>
  );
}

export default App;
