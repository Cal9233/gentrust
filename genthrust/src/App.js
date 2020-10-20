import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
