import React from 'react';

const InputField = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter country name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default InputField;
