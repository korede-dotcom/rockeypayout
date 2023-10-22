import React from 'react'
import styled from 'styled-components';

const Select = ({label}) => {
  return (
    <SelectBox>
        <label htmlFor="">{label}</label>
        <div className="selectdiv">
            <select name="" id="">
                <option value="select Bank" selected>Select Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Uba">Uba</option>
                <option value="Gtbank">Gtbank</option>
            </select>            
        </div>

    </SelectBox>
  )
}

export default Select;

const SelectBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // row-gap: 5px;
    margin: 10px 0;
    label{
        color: #344054;
        font-size: 12px;
        font-weight: 400 !important;
        line-height: 20px; 
        position: relative;
    }
    .selectdiv{
        border: 2px solid red;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        padding: 7px 10px;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        width: 100%;
        select{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
                option{
                position: absolute;
                top: 60px !important;
                color: #101828;
                font-size: 12px;
                font-weight: 400;
            }
        }        
    }

`;
