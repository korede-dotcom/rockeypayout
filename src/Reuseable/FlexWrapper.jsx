import React, { useState } from "react";
import styled from "styled-components";
//
import ngn from "../assets/ngn.svg";
import drop from "../assets/drop.svg";
import Modal from "./Modal";
import add from "../assets/add2.svg";
import cancel from "../assets/cancel.svg";
import Select from "./Inputs/Select";
import Textarea from "./Inputs/Textarea";
import TextInput from "./Inputs/TextInput";

const FlexWrapper = ({
  name,
  subname,
  amount,
  word,
  // onClick,
  // show,
  // setShow,
  // payout,
  // setPayout,
}) => {
  const [show, setShow] = useState(false);
  const [payout, setPayout] = useState(false);
  // const showModal = () => {
  //   setShow(!show);
  //   if (payout) {
  //     setShow(false);
  //   }
  // };
  const [payouttwo, setPayouttwo] = useState(false);
  const showModal = () => {
    setShow(!show);
    // Ensure that payout and payouttwo are set to false when opening the smallModal
    setPayout(false);
    setPayouttwo(false);
  };

  return (
    <FlexWrapperBox>
      <div className="left">
        <div className="top">
          <div className="first">
            <h1>{name}</h1>
          </div>
          <div className="details">
            <img src={ngn} alt="" />
            {/* <span>5,250,532.89 NGN</span> */}
            <span>{amount} NGN</span>
          </div>
        </div>
        <div className="right">
          <div
            className="action"
            onClick={showModal}
            show={show}
            setShow={setShow}
          >
            <span>Actions</span>
            <img src={drop} alt="" />
          </div>
          {show && (
            <div className="smallModal">
              <div
                className="bx"
                onClick={() => {
                  setPayout(true);
                }}
              >
                <img src={add} alt="" />
                <span>Payout to client</span>
              </div>

              {/*  */}

              {payout && (
                <Modal
                  height="350px"
                  width="350px"
                  setShow={setShow}
                  setPayout={setPayout}
                  modalName="Payout"
                  btn="Proceed"
                >
                  <ModalInner>
                    {/* <p className="quick">Quickly send money to your clients</p> */}
                    <Select label="Bank" />
                    <TextInput
                      label="Bank Account Number"
                      placeholder="0123894758"
                    />
                    <TextInput label="Amount" placeholder="200" />
                    <Textarea
                      width="100%"
                      placeholder="Type a narration..."
                      background="#FFF"
                      margin="20px 0"
                    />
                  </ModalInner>
                </Modal>
              )}
              <div
                className="bx"
                onClick={() => {
                  setPayouttwo(true);
                }}
              >
                <img src={add} alt="" />
                <span>Fund Gateway</span>
              </div>
              {payouttwo && (
                <Modal
                  height="350px"
                  width="350px"
                  setShow={setShow}
                  setPayout={setPayout}
                  modalName="Fund Gateway"
                  btn="Fund"
                >
                  <ModalInner>
                    <TextInput label="Amount" placeholder="200" />
                    <Textarea
                      width="100%"
                      placeholder="Type a narration..."
                      background="#FFF"
                      margin="20px 0"
                    />
                  </ModalInner>
                </Modal>
              )}
            </div>
          )}
        </div>
      </div>
      <p className="subname">{subname}</p>
      <div className="bottom">
        <p>
          {/* This overview provides a comprehensive snapshot of wallet
            transactions on your system */}
          {word}
        </p>
      </div>
    </FlexWrapperBox>
  );
};

export default FlexWrapper;

const FlexWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 5px;
  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top {
      display: flex;
      align-items: center;
      gap: 20px;
      .first {
        display: flex;
        flex-direction: column;
        // row-gap: 3px;
        align-items: flex-start;
        h1 {
          color: #090814;
          font-size: 22px;
          font-weight: 500;
        }

      }
      .details {
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        padding: 10px 15px;
      }
    }
  .right {
    position: relative;

    .smallModal{
      // border: 2px solid red;
      padding: 5px;
      position: absolute;
      cursor: pointer;
      top: 40px;
      right: 0px;
      border-radius: 6px;
      background: #FFF;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 0px 0px 1px rgba(152, 161, 178, 0.10);
      width: 160px;
      height: max-content;
      .bx{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 5px;
        &:hover{
            // background: #868FA0;
            background: #e9edf5;
            border-radius: 4px;
        }
        img{
          width: 12px;
        }
        span{
          color: #464F60;
          font-size: 11px;
          font-weight: 400;
          line-height: 20px; /* 125% */
          letter-spacing: 0.32px;
        }
      }
    }
    .action {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      span {
        color: #464f60;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.32px;
      }
      img {
        width: 15px;
      }
    }
  }
  }
  .subname{
      color: #a1a9b8;
      font-size: 18px;
      font-weight: 300;
      margin-top: -5px;
  }
    .bottom {
      margin-top 10px;
      p {
        color: #848d87;
        font-size: 12px;
        font-weight: 400;
        line-height: 30px;
      }
    }
`;

const ModalInner = styled.div`
  // padding: 0 0 0 10px;
  padding-right: 10px;
  // border: 2px solid red;
  width: 100%;
  height: 100%:
  height: max-content;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px !important;
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
  // margin-bottom: 10px;
  // border: 2px solid red;
  // .top {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-bottom: 20px;
  //   p {
  //     color: #090814;
  //     font-size: 14px;
  //     font-weight: 400;
  //   }
  //   img {
  //     width: 20px;
  //   }
  // }
  .quick{
    color: #909090;
    font-size: 12px;
    font-weight: 400;
    boredr: 2px solid red;
  }
`;
