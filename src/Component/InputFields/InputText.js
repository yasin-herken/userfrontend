import React from 'react';
import "./Input.css";

const InputText = ({name, id, label, register, type, error, defaultValue}) => {
  return (<div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      defaultValue={defaultValue}
      name={name}
      {...register(name)}
      className={`form-control ${error ? 'is-invalid' : ''}`}
      type={type ? type : 'text'}
      id={id}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>);
};
export default InputText;