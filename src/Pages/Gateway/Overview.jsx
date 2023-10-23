import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
//
import logo2 from "../../assets/SidebarImg/logo2.svg";
import ngn from "../../assets/ngn.svg";
import drop from "../../assets/drop.svg";
import Card from "../../Reuseable/Card";
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
//
import Box from "../../Reuseable/Box";
import FlexItems from "../../Reuseable/FlexItems";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadHeader, TheadBody, cardbody, figure } from "../../Mapables";
import { useNavigate } from "react-router-dom";
//
import { OverviewHeader, OverviewBody } from "../../Mapables";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <OverviewContainer>
        <PageWord>
          <div className="left">
            <h3>Overview</h3>
            <p>
              This overview provides a comprehensive snapshot of wallet
              transactions on your system
            </p>
          </div>
          <div className="right">
            <div className="countrybx">
              <div className="countries">
                <img src={ngn} alt="" />
                <span>NGN</span>
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="sub" onClick={() => navigate("/marketplace")}>
              <p>Subscribe to Gateway</p>
            </div>
          </div>
        </PageWord>
        <CardContainer>
          <Card cardbody={cardbody} figure={figure} padding="0 0 0 70px" />
        </CardContainer>
        <Box
          width="100%"
          border="none"
          radius="15px"
          flexDirection="column"
          padding="20px 0 40px 0"
        >
          <FlexItems text="Transactions" />
          <TableWrap>
            <table>
              <thead>
                <tr>
                  {OverviewHeader.map((m, i) => (
                    <th key={i}>
                      <span>
                        {m.name}
                        {m.image}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {OverviewBody.map((mb, i) => {
                  return (
                    <tr key={i}>
                      <td>{mb.trans}</td>
                      <td>{mb.date}</td>
                      <td className="gateway">
                        {mb.img}
                        <span>{mb.gateway}</span>
                      </td>
                      <td>Ola Kunle Ojo</td>
                      <td className="receiver">{mb.receiver}</td>
                      <td>{mb.bank}</td>
                      <td>{mb.accNo}</td>
                      <td className="currency">
                        {mb.flag}
                        <span> {mb.currency}</span>
                      </td>
                      <td>{mb.amount}</td>
                      <td>{mb.transferfee}</td>
                      <td>
                      {mb.transactiontatus ===  "Deposited" ? (
                        <span className="depo">
                          <img src={gb} alt="" />{mb.transactiontatus}
                          </span>
                      ) : (
                        <span className="cancel"><img src={rb} alt="" />{mb.transactiontatus}</span>
                      )}
                      </td>
                      <td>{mb.actions}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWrap>
          {/* <Reusetable  theads={TheadHeader} tbodies={TheadBody} /> */}
        </Box>
      </OverviewContainer>
    </Layout>
  );
};

export default Overview;

const OverviewContainer = styled.div``;

const PageWord = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    h3 {
      color: #090814;
      font-family: Inter;
      font-size: 22px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-family: Inter;
      font-size: 12px;
      font-weight: 300;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 15px;

    .countrybx {
      .countries {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
          0px 1px 1px 0px rgba(0, 0, 0, 0.1);
        padding: 10px;
        span {
          color: #667085;
          font-size: 12px;
          font-weight: 400;
        }
        img {
          width: 15px;
        }
        img:last-child {
          width: 13px;
        }
      }
    }
    .sub {
      border-radius: 6px;
      background: #00a85a;
      box-shadow: 0px 0px 0px 1px #00a85a, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 10px 12px;
      p {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.32px;
      }
    }
  }
`;
const CardContainer = styled.div`
  // border: 2px solid;
  // height: 300px;
  margin: 20px 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(156, 156, 156, 0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 25px;
`;
const TableWrap = styled.div`
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
    background: rgb(2, 0, 36);
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 1) 0%,
      rgba(57, 58, 59, 1) 0%,
      rgba(193, 193, 193, 1) 1%
    );
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }
  table {
    height: 300px;
    border-collapse: collapse;
    width: max-content;
    padding: 20px;
    thead {
      border-top: 1px solid #e9edf5;
      border-bottom: 1px solid #e9edf5;
      background: #f9fafb;
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
      // border: 2px solid red;
      tr {
        border-bottom: 1px solid #e9edf5;
        td {
          padding: 15px 15px;
          width: max-content;
          text-align: start;
          color: #5a6376;
          font-family: Oxygen;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */

          // 
          .depo{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #ECFDF3;
            padding: 5px 15px;
            width: max-content;
            color: #027A48;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          .cancel{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #FEF3F2;
            width: max-content;
            padding: 5px 15px;
            color: #B42318;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          // 
        }
        .gateway{
          display: flex;
          align-items: center;
          gap: 7px;
          img{
            width: 20px;
          }
        }
        .currency{
          display: flex;
          align-items: center;
          gap: 5px;
          img{
            width: 15px;
          }
        }

        td:first-child {
          padding: 0 25px;
        }
        td:last-child {
          padding: 0 25px;
          color: rgb(24, 24, 255);
        }
      }
    }
  }
`;
