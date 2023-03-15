import React from 'react';

const InputSelect = ({id, register, name, label, options, error, defaultValue}) => {
  return (<div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      defaultValue={defaultValue}
      {...register(name)}
      className={`form-control custom-select ${error ? 'is-invalid' : ''}`}
      id={id}
    >
      {options.map((item, index) => {
        return <option key={index}>{item.name}</option>;
      })}
      <option>Choose {name}</option>
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>);
};

export default InputSelect;