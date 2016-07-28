import React, { PropTypes } from 'react';

const TextInput = ({name, value, label, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        onChange={onChange}
        value={value}/>
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
