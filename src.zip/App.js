import React, { Component } from "react";
import logo from "./logo.svg";
import style from "./App.module.scss";
import LogIn from "./LogIn/LogIn";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import Hello from "./Components/Comp1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x: false };
  }
  render() {
    return (
      <BrowserRouter>
        <div className={style.app}>
          <nav>
            <NavLink to="/pop"> Pop</NavLink>
            <NavLink to="/"> Home</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Hello} />
            {/* <Route path="/pop" component={LogIn} /> */}
            <Route path="/pop" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
      // <LogIn />
    );
  }
}

export default App;
