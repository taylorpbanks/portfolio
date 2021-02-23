import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/index';
import SideNav from './shared/side-nav/index';

/*
color pallette
#6B9080
#A4C3B2
#CCE3DE
#EAF4F4
#F6FFF8
*/

export default function App() {
  return (
    <Router>
      <div className="App">
        {/*<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <SideNav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Skills() {
  return <h2>Skills</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}
