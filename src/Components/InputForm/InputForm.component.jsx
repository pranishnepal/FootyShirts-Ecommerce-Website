import "./InputForm.styles.scss";

const InputForm = ({ handleInputChange, label, ...inputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleInputChange}
        {...inputProps}
      />
      {label ? (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputForm;
