import React, { Component } from "react";
import About from "./Components/About";
import Career from "./Components/Career";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <About />
        <Career />
        <TechStack />
        <Projects />
      </>
    );
  }
}

export default App;
