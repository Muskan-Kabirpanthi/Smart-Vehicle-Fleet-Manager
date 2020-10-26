import React from "react";
import "./App.css";
// import { BounceLoader } from "react-spinners";
import Dashboard from "./component/dashboard/Dashboard";
import firebase from "firebase";
import Home from "./component/Login/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    // this.state = {
    //   loading: false,
    // };
    this.authListner = this.authListner.bind(this);
  }

  // speed state
  state = {
    speeds: null,
  };

  // Mount the firestore
  componentDidMount() {
    this.authListner();
  }

  authListner() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // this.setState({ loading: true });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">{this.state.user ? <Dashboard /> : <Home />}</div>
    );
  }
}

export default App;
