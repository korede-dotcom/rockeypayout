import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Password = ({ handlechangepass,name }) => {
  const [show, setShow] = useState(false);

  return (
    <PasswordBox>
      <input
        onChange={handlechangepass}
        type={show ? "text" : "password"}
        placeholder=''
        name={name}
      />
      <span
        onClick={() => setShow(prev => !prev)}
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          color: "#667085"
        }}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </span>
    </PasswordBox>
  );
};

export default Password;

const PasswordBox = styled.div`
  width: 350px;
  border-radius: 8px;
  border: 1px solid  #D0D5DD;
  background:  #F9FAFB;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 8px 10px;
  position: relative;
  input{
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: inherit;
      font-size: 12px;
      font-weight: 400;
      &::placeholder{
          color: #667085;
      }
`;