import React from "react";
import styled from "styled-components";

const Reusetable = ({ theads, tbodies }) => {
  return (
    <Retable>
      <table>
        <thead>
          <tr>
            {theads.map((thead, i) => (
              <th key={i}>
                <span>
                  {thead.name}
                  {thead.image}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          
          {tbodies.map((tbody, index) => (
            <tr key={index}>
              {theads.map((thead) => (
                <td key={thead.id}>{tbody[thead.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Retable>
  );
};

export default Reusetable;

const Retable = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto hidden;
  scroll-behavior: smooth;
  transition: all 1s;


&::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

&::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

&::-webkit-scrollbar-thumb {
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(57,58,59,1) 0%, rgba(193,193,193,1) 1%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}
  table {
    // border: 2px solid red;
    height: 300px;
    border-collapse: collapse;
    width: max-content;
    padding: 20px;
    thead {
      border-top: 1px solid #e9edf5;
      border-bottom: 1px solid #e9edf5;
      background: #F9FAFB;
      height: 34px;
      th {
        padding: 0 15px;
        color: #687182;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0.36px;
        text-transform: uppercase;
        span {
          display: flex;
          align-items: center; 
           img {
            width: 13px;
          }
        }
      }
      th:first-child {
        padding: 0 25px;
      }
      th:last-child {
        padding: 0 25px;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #e9edf5;
        td {
          padding: 15px 15px;
          width: max-content;
          text-align: start;
          color: #5a6376;
          font-family: Oxygen;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
        td:first-child {
          padding: 0 25px;
        }
        td:last-child {
          padding: 0 25px;
          color: #7bb83d;
        }
      }
    }
  }
`;
