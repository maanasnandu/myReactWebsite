import React from "react";
/**
importing Link works the same as anchor tags in HTML

**/

import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

const Nav = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Nav;
