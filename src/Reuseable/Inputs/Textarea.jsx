import React from 'react'
import styled from 'styled-components';

const Textarea = ({width, placeholder, background, margin,value,name,change}) => {
  return (
    <TextareaBox style={{ margin: margin ? margin : ""}}>
        <label htmlFor="">Description</label>
      <TextInner style={{width: width ? width : "350px", background: background ? background : '#F9FAFB',}}>
          <textarea name={name} id="" cols="30" rows="10"  placeholder={ placeholder ? placeholder :'120 street Name, Street State, State Country'} onInput={change}  value={value}>
          </textarea>        
      </TextInner>
    </TextareaBox>
  )
}

export default Textarea;

const TextareaBox = styled.div`
display: flex;
flex-direction: column;
row-gap: 5px;
  label{
    color: #344054;
    font-size: 12.5px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

const TextInner = styled.div`
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    background: #F9FAFB;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    width: 350px;
    height: 100px;
    color: #667085;
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
    textarea{
        width: 100%;
        height: 100%;
        resize: none;
        outline: none;
        border: none;
        background: inherit;
        font-size: 12px;
        font-weight: 400;
        color: grey;
        &::placeholder{
            color: #667085;
            font-size: 12px;
            font-weight: 400;
        }
    }
`;
