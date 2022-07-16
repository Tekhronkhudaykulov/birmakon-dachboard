import React from "react";
import "../../assets/scss/input_factories.scss";

const InputBottom = ({ inputName, inputType, inputPlaceholder, onChange }) => {
  return (
    <div className="input-item">
      <p className="input-name-p">{inputName}</p>
      <input
        className="input-factories"
        type={inputType}
        placeholder={inputPlaceholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBottom;
