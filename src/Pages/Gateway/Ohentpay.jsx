import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import FlexWrapper from "../../Reuseable/FlexWrapper";
import Card from "../../Reuseable/Card";
import { TheadBody, TheadHeader, cardbody2, figure2 } from "../../Mapables";
import Box from "../../Reuseable/Box";
import FlexItems from "../../Reuseable/FlexItems";
import Reusetable from "../../Reuseable/Reusetable";
import { OhentpayHead, OhentpayBody } from "../../Mapables";
// 
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";

const Ohentpay = () => {
  const [show, setShow] = useState(false);
  const [payout, setPayout] = useState(false);
  const showModal = () => {
    setShow(!show);
    if (payout) {
      setShow(false);
    }
  };
  console.log(payout)
  return (
    <Layout>
      <OhentpayBox>
        <FlexWrapper
          name="Ohentpay"
          subname="[Providus]"
          amount="5,250,532.89 "
          // onClick={showModal}
          // show={show}
          // setShow={setShow}
          // payout={payout}
          word="This overview provides a comprehensive snapshot of wallet transactions on your system"
        />
        <CardContainer>
          <Card
            cardbody={cardbody2}
            figure={figure2}
            padding="0 0 0 15px"
            width="max-content"
          />
        </CardContainer>
        <Box
          width="100%"
          border="none"
          radius="15px"
          flexDirection="column"
          padding="20px 0 40px 0"
        >
          <FlexItems text="Transaction" />
          {/* <Reusetable theads={TheadHeader} tbodies={TheadBody} /> */}
          <TableWraptwo>
            <table>
              <thead>
                <tr>
                  {OhentpayHead.map((m, i) => (
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
                {OhentpayBody.map((mb, i) => {
                  return (
                    <tr key={i}>
                      <td>{mb.trans}</td>
                      <td>{mb.date}</td>
                      <td>{mb.receiver}</td>
                      <td>{mb.bank}</td>
                      <td>{mb.accNo}</td>
                      <td className="currency">
                        {mb.flag}
                        <span> {mb.currency}</span>
                      </td>
                      <td>{mb.amount}</td>
                      {/* <td className="receiver">{mb.receiver}</td> */}
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
          </TableWraptwo>
        </Box>
      </OhentpayBox>
    </Layout>
  );
};

export default Ohentpay;

const OhentpayBox = styled.div``;

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
  padding: 30px 20px;
`;

const TableWraptwo = styled.div`
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