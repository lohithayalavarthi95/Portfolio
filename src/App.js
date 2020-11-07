import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Settingtheme from "./views/Settingtheme";
import MainComponent from "./components/MainComponent";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import ExperienceDetails from "./components/ExperienceDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import contactUS from "./components/contactUS";
import "antd/dist/antd.css";
import MyCV from "./components/MyCV";

function App() {
  return (
    <Settingtheme>
      <Router>
        <MainComponent path="/" Component={Home} />
        <MainComponent
          path="/experiencedetails/"
          Component={ExperienceDetails}
        />
        <MainComponent path="/Projects/" Component={Projects} />
        <MainComponent path="/Skills/" Component={Skills} />
        <MainComponent path="/contactme/" Component={contactUS} />
        <MainComponent path="/MyCV/" Component={MyCV} />
      </Router>
    </Settingtheme>
  );
}

export default App;
