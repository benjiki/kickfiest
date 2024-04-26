import React from "react";

function Input(props) {
  const { type, placeholder, value, onChange } = props;
  return (
    <input
      className="rounded-xl pl-3 py-4 placeholder:text-black  text-black"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
