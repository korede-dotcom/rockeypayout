import React from 'react'
import styled from 'styled-components';

const OInput = ({label, type, placeholder, onChange,name, value, forhtml}) => {
  return (
    <OnInput>   
            <label >{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} />
    </OnInput>
  )
}

export default OInput;

const OnInput = styled.div`
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
        input{
            height: 35px;
            width: 100%;
            padding: 0 10px;
            /* border-radius: 8px; */
            /* border: 1px solid #D0D5DD; */
            background: #FFF;
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
            border: none;
            border-bottom: 1px solid #000;
            background-color: transparent;
            
            outline: none;
            color: black;
            text-transform: capitalize;
            &::placeholder{
                color: #A1A9B8;
                font-size: 12px;
                font-weight: 400;
            }
        }   
`;
