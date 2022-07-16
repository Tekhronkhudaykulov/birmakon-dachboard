import React from "react";
import "../../assets/scss/input_factories.scss";
const Input = ({
  inputName,
  inputType,
  inputPlaceholder,
  props,
  counter,
  onChange,
}) => {
  return (
    <div className="input-item">
      <p className="input-name-p">{inputName}</p>
      <input
        className="input-factories"
        type={inputType}
        placeholder={inputPlaceholder}
        {...props}
        onChange={onChange}
        value={counter}
      />
    </div>
  );
};

export default Input;
