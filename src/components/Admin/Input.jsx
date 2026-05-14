import React from 'react'

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  inputClass,
  labelClass,
  disabled = false,
}) => {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClass}
      />
    </div>
  );
};


export default Input