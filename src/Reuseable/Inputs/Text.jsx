import React from 'react'
import styled from 'styled-components';

const Text = ({placeholder,val}) => {
  return (
    <TextBox>
            <input type="text" value={val}  placeholder={placeholder}/>
    </TextBox>
  )
}

export default Text;

const TextBox = styled.div`
width: 350px;
border-radius: 8px;
border: 1px solid  #D0D5DD;
background:  #F9FAFB;
box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
padding: 8px 10px;
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
}
`;
