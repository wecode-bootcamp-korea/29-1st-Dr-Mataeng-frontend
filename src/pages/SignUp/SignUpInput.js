import React, { useState } from 'react';
import './SignUp.scss';

function SignUpInput({ id, name, className, type, placeholder, change }) {
  return (
    <div>
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={change}
      />
    </div>
  );
}

export default SignUpInput;
