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
