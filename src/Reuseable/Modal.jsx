import React from "react";
import styled from "styled-components";
import cancel from '../assets/cancel.svg'

const Modal = ({ width, height, children, setPayout, setShow, modalName, btn,handleSubmit ,cancleModal}) => {

  return (
    <ModalBox>
      <div
        className="modalcontent"
        style={{
          width: width ? width : "300px",
          height: height ? height : "max-content",
        }}
      >
        <div className="top">
        <p>{modalName}</p>
        {
        modalName === "API KEY" &&  <img onClick={() => {setPayout(false); setShow(false)}} src={cancel} alt="" />

        }
        </div>
        {modalName === "Payout"   && <p className="quick">Quickly send money to your clients</p>}
        {children}
        {modalName !== "API KEY" &&
        <div className="buttons">
          <div className="btnbx">
            <div className="cancel" onClick={cancleModal} >Cancel</div>
            <div className="proceed" onClick={handleSubmit}>{btn}</div>
          </div>
        </div>
        }
      </div>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  .modalcontent {
    display: flex;
    flex-direction: column;
    // overflow-y: auto;
    position: absolute;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
      0px 20px 24px -4px rgba(16, 24, 40, 0.08);
    //   padding: 0 10px;
    padding: 0 5px 0 10px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 20px;
    width: 100%;
    padding: 20px 10px 10px;
    p {
      color: #090814;
      font-size: 15px;
      font-weight: 500;
    }
    img {
      width: 20px;
    }
  }
  .quick{
    color: #909090;
    font-size: 11px;
    font-weight: 300;
    boredr: 2px solid red;
    padding: 1px 0 10px 10px;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    padding: 20px 10px;
    .btnbx {
      display: flex;
      align-items: center;
      gap: 10px;
      .cancel {
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: #344054;
        font-size: 13px;
        font-weight: 400;
        padding: 8px 17px;
      }
      .proceed {
        border-radius: 8px;
        border: 1px solid #00a85a;
        background: #00a85a;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        padding: 8px 17px;
      }
    }
  }
`;
