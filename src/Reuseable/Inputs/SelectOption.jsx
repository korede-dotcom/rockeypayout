import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { styled } from "styled-components";

function SelectOption({ optionLabel, title }) {
  const options = optionLabel.map((o) => {
    return o;
  });
  return (
    <Content>
      <div className="top">
        <span>{title}</span>
        <div className="section">
          <select>
            <option>{options}</option>
          </select>
          <AiOutlineCaretDown size={20} style={{ color: "gray" }} />
        </div>
      </div>
    </Content>
  );
}

export default SelectOption;
const Content = styled.div`
  .section {
    display: flex;
    width: 100%;
    border: 1px solid #d0d5dd;
    padding: 7px;
    border-radius: 5px;
  }
  .section select {
    width: 100%;
    background-color: transparent;
    border: none;
    appearance: none;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .top span {
    color: #344054;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;
