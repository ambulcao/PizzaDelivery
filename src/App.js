import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customize from "./components/Customize";

function App() {
  const [ingredients, setIngredients] = useState({
    onions: false,
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize ingredients={ingredients} setIngredients={setIngredients} />
          </Route>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
