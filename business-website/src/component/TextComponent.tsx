import React from "react";

const TextComponent = (props: any) => {
  const { label, className, placeholder = " ", ...inputProps } = props;

  return (
    <div className="form-floating mb-3">
      <input
        {...inputProps}
        className={`form-control ${className || ""}`}
        placeholder={placeholder} // required for floating label
      />
      {label && <label htmlFor={inputProps.id}>{label}</label>}
    </div>
  );
};

export default TextComponent;
