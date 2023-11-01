import React from 'react'
import styled from 'styled-components';

const OTextarea = ({label, placeholder, onChange,name, value, forhtml}) => {
  return (
    <OTextwrap>
            <label htmlFor={forhtml}>{label}</label>
            <textarea id={forhtml} cols="30" rows="10" placeholder={placeholder} onChange={onChange} name={name} value={value}>

            </textarea>
    </OTextwrap>
  )
}

export default OTextarea;

const OTextwrap = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
row-gap: 5px;
margin: 15px 0 5px;
label{
    color: #344054;
    font-size: 12px;
    font-weight: 400;
}
textarea{
    height: 100px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    /* border: 1px solid #D0D5DD; */
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    outline: none;
    color: black;
    text-transform: capitalize;
    resize: none;
    border-bottom: 1px solid #000;
    /* border: none; */
    &::placeholder{
        color: #A1A9B8;
        font-size: 12px;
        font-weight: 400;
    }
}   
`;
