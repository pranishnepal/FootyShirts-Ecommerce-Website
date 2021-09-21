import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./jersey.png";
import "./Logo.styles.scss";

const tiltStyle = {
  height: "100%",
  width: "70px",
  padding: "10px",
};

const Logo = () => {
  return (
    <Tilt
      style={tiltStyle}
      tiltReverse={true}
      tiltMaxAngleX={90}
      tiltMaxAngleY={90}
    >
      <img src={logo} alt="Jersey logo" className="logo" />
    </Tilt>
  );
};

export default Logo;
