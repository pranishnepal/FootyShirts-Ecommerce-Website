import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon.component";
import CartIconDropDownMenu from "../CartIconDropDownMenu/CartIconDropDownMenu.component";
import { firebaseAuth } from "../Firebase/FirebaseUtils";
import Logo from "../Logo/Logo.component";
import "./NavBar.styles.scss";

const NavBar = ({ currUser, hideCartOnThisPage }) => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="page-links">
        <Link to="/products" className="page-link">
          Products
        </Link>
        {
          /* Dynamically render Sign In/Sign Out */
          currUser ? (
            <div
              className="page-link"
              onClick={() => {
                return firebaseAuth.signOut();
              }}
            >
              Sign Out
            </div>
          ) : (
            <Link to="/auth" className="page-link">
              Sign In
            </Link>
          )
        }

        {/* Cart */}
        <CartIcon />
        {hideCartOnThisPage ? null : <CartIconDropDownMenu />}
      </div>
    </div>
  );
};

const mapStateToProps = (currState) => {
  return {
    currUser: currState.user.currUser,
    hideCartOnThisPage: currState.cart.hideCartOnThisPage,
  };
};

export default connect(mapStateToProps)(NavBar);
