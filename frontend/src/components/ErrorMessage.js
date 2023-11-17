import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: 'red' }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
