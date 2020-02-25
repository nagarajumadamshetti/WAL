import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import SignUp from './signUp.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.login=this.login.bind(this);
    // this.signup-this.signup.bind(this);
  }
  //  login() {
  //   return <h2>Login page</h2>;
  // }

  //  signUp() {
  //   return <h2>SignUp page</h2>;
  // }
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <table>
                <td>
                  <Link to="/Login">
                    <button>login</button>
                  </Link>
                </td>
                <td>
                  <Link to="/signUp">
                    <button>signUp</button>
                  </Link>
                </td>
              </table>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
