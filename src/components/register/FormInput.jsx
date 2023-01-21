import { React, useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, errorMessage, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="register_form_input">
      <input
        {...inputProps}
        onChange={onChange}
        className="register_form_input username"
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      {/* <i className="fa-solid fa-circle-check"></i> */}
      <i className="fa-solid fa-circle-exclamation"></i>
      <span
        style={{ position: "relative", left: "2rem" }}
        className="register_form_input_mess"
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
