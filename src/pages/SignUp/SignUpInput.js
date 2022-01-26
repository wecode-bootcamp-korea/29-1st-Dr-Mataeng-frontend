import React from 'react';
import './SignUp.scss';

function SignUpInput({ id, name, type, placeholder }) {
  return (
    <div>
      <input className={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default SignUpInput;
