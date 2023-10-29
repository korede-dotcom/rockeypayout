import React from "react";
import styled from "styled-components";

const TextInput = ({ label, placeholder,change,name }) => {
  return (
    <TextInputWrapper>
      <label htmlFor="">{label}</label>
      <input type="tel" placeholder={placeholder} onChange={change} name={name} />
    </TextInputWrapper>
  );
};

export default TextInput;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  width: 100%;
  margin: 7.5px 0;
  label {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  input {
    outline: none;
    width: 100%;
    padding: 10px 5px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    padding: 7px 10px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    &:placeholder{
        color: var(--gray-500, #667085);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
  }
`;
