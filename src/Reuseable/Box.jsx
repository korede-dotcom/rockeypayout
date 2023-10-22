import React from "react";
import styled from "styled-components";

const Box = ({ children, height, width, border, flexDirection, padding, background, radius, gap, justifyContent, margin, alignItems }) => {
  return (
    <BoxWrapper
      style={{
        minHeight: height || "255px",
        width: width || "280px",
        flexDirection: flexDirection || "",
        justifyContent: "justifyContent",
        padding: padding || "0",
        gap: gap || "0",
        border: border || "1px solid #e2e2e2",
        background: background || "#fff",
        borderRadius: radius || "5px",
        margin: margin || "0 0 20px 0",
        alignItems: alignItems && alignItems
      }}
    >
      {children}
    </BoxWrapper>
  );
};

export default Box;

const BoxWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  display: flex;
// box-shadow: 0px 4px 36px 0px rgba(156, 156, 156, 0.10);
box-shadow: 0px 4px 36px 0px rgba(99, 98, 98, 0.10);
  background: #fff;
  // width: ${({ width }) => width || "280px"};
  // height: ${({ height }) => height || "255px"};
  align-items: center;
  // flex-direction: ${({ flexDirection }) => flexDirection || "center"};
  // padding: ${({ padding }) => padding || "0px"};
`;
