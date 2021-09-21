import "./ReusableButton.styles.scss";

const ReuseableButton = ({
  children,
  isGoogle,
  invertedProp,
  ...buttonProps
}) => {
  const googleButton = (
    <button
      className="reusable-button"
      {...buttonProps}
      style={{ backgroundColor: "#4285f4" }}
    >
      {children}
    </button>
  );

  const regularButton = (
    <button
      className={`${invertedProp ? "inverted" : ""} reusable-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );

  return isGoogle ? googleButton : regularButton;
};

export default ReuseableButton;
