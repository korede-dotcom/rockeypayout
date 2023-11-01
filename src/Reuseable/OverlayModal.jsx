import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { styled } from "styled-components";
function OverlayModal({ children, title, onClick }) {
  return (
    <Content>
      <div className="overlayy">
        <div className="white">
          <div className="header">
            <h2>{title}</h2>
            <AiOutlineClose onClick={onClick} size={25} />
          </div>
          <div className="top">{children}</div>
        </div>
      </div>
    </Content>
  );
}

export default OverlayModal;
const Content = styled.div`
  .overlayy {
    position: fixed;
    background-color: #00000098;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 999;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
  .white {
    background-color: white;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
