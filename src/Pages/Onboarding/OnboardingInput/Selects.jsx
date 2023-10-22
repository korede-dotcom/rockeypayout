import React, { useEffect } from "react";
import styled from "styled-components";

const Selects = ({ label, mapper, width, content, name, onSelectChange, id }) => {
  const handleSelectChange = (event) => {
    const { name, value} = event.target;
    // console.log('Value:', value);
    onSelectChange(name, value);
};

  return (
    <Selector>
      <p>{label}</p>
      <select
        style={{ width: width ? "100%" : "120px" }}
        name={name}
        onChange={handleSelectChange}
      >
        {mapper.map((m, i) => (
          <option key={i} /*value={m[content]}*/ value={id ? m.id : m[content]}>
            {m[content]}
          </option>
        ))}
      </select>
    </Selector>
  );
};

export default Selects;

const Selector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  margin: 10px 0 20px;
  p {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
  }
  select {
    width: 120px;
    padding: 0 10px;
    height: 35px;
    outline: none;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    option {
      width: 100px !important;
    }
  }
`;
