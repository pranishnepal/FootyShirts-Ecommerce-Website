import React from "react";
import { signInWithGoogle } from "../Firebase/FirebaseUtils";
import InputForm from "../InputForm/InputForm.component";
import ReuseableButton from "../ReusableButton/ResuableButton.component";
import "./SignIn.styles.scss";
import googleLogo from "./googleLogo.png";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    console.log(this.state.password);
    console.log(this.state.email);
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Sign in to order your shirt!</h1>
        <form onSubmit={this.handleSubmit}>
          <ReuseableButton
            type="submit"
            onClick={signInWithGoogle}
            isGoogle={true}
          >
            <img src={googleLogo} className="googleIcon" alt="googleIcon" />
            Log in With Google
          </ReuseableButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
