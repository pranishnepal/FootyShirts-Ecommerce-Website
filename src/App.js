import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { firebaseAuth } from "./Components/Firebase/FirebaseUtils";
import NavBar from "./Components/NavBar/NavBar.component";
import { setCurrUser } from "./Redux/UserState/User.action";
import AuthPage from "./Pages/AuthPage/AuthPage.component";
import CheckoutPage from "./Pages/CheckoutPage/Checkout.component";
import HomePage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import Particles from 'react-particles-js';

/* Particles configuration */
const particlesConfig = {
  "particles": {
    "number": {
      "value": 600,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "speed": 4,
        "size_min": 0.3
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "random": true,
      "speed": 1,
      "direction": "top",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "size": 0,
        "opacity": 0
      },
      "repulse": {
        "distance": 400,
        "duration": 4
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.unsubscribeAuthInfo = null;
  }

  componentDidMount() {
    const { updateUserState } = this.props;
    this.unsubscribeAuthInfo = firebaseAuth.onAuthStateChanged((user) => {
      updateUserState(user);
    });
  }

  /* Clean up auth info */
  componentWillUnmount() {
    this.unsubscribeAuthInfo();
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles"/>
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/products" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            path="/auth"
            render={() => {
              return this.props.currAuthenticatedUser ? (
                <Redirect to="/" />
              ) : (
                <AuthPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (currStoreState) => {
  return {
    currAuthenticatedUser: currStoreState.user.currUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateUserState: (user) => dispatch(setCurrUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
