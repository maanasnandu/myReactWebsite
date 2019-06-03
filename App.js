import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
/**
to add the ability to handle routing in the browser,
all the components must be wrapped inside <Route></Route> tabs
**/
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  /**
    <Router>
      <div style={{ height: "800px", position: "relative", display: "flex" }}>
        <Layout
          className="bgrndPic"
          style={{
            background: "url() center / cover"
          }}
        >
          <Header
            className="headerLink"
            transparent
            title="Maanas Sameer Nandan"
            style={{ font: "Georgia", color: "white" }}
          >
            <Navigation style={navbarColor}>
              <Link style={navColor} to="/">
                <li>Home</li>
              </Link>

              <Link style={navColor} to="/about">
                <li> About us</li>
              </Link>

              <Link style={navColor} to="/contact">
                <li>Contact</li>
              </Link>
            </Navigation>
          </Header>

          <Drawer title="Menu">
            <Navigation>
              <Link style={navColor} to="/">
                <li>Home</li>
              </Link>

              <Link style={navColor} to="/about">
                <li> About us</li>
              </Link>

              <Link style={navColor} to="/contact">
                <li>Contact</li>
              </Link>

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    </Router>
    **/
  render() {
    return (
      <div style={{ height: "400px", position: "relative" }}>
        <Layout
          style={{
            background: "url(https://i.imgur.com/UndoMfo.jpg) center / cover"
          }}
        >
          <Header
            transparent
            title="Maanas Sameer Nandan"
            style={{ color: "white" }}
          >
            <Navigation>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/">Home</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/">Home</Link>
            </Navigation>
          </Drawer>
          <Nav />
          <Content />
        </Layout>
      </div>
    );
  }
}
//Nav function call from Nav.js
//Switch cases to call differently, i.e. Home, about, contact seperately.
// '/' is the Home path. exact states that only exact / should be seen seperately

export default App;
