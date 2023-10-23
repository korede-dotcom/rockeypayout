import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import Password from "../../Reuseable/Inputs/Password";

const Changepassword = () => {
  return (
    <Layout>
      <ChangePasswordBox>
        <div className="head">
          <h1>Change Password</h1>
          <p>Update your account password here</p>
          {/* <p>Update your account password here</p> */}
        </div>
        <Box
          width="100%"
          border="none"
          radius="15px"
          margin="20px 0 0 0"
          padding=" 30px 20px"
          flexDirection="column"
          alignItems="flex-start"
        >
          <InputWrapBox>
            <p>Current Password</p>
            <Password />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <InputWrapBox>
            <p>Current Password</p>
            <Password />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <InputWrapBox>
            <p>Current Password</p>
            <Password />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <EndBtn>
            <div className="btns">
              <p className="cancel">Cancel</p>
              <div className="update">Update Profile</div>
            </div>
          </EndBtn>
        </Box>
      </ChangePasswordBox>
    </Layout>
  );
};

export default Changepassword;

const ChangePasswordBox = styled.div`
  width: 100%;
  .head {
    h1 {
      color: #090814;
      font-size: 18px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-size: 10px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

const InputWrapBox = styled.div`
  // border: 2px solid red;
  width: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  p {
    color: #333b4a;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

const EndBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  .btns {
    display: flex;
    align-items: center;
    gap: 20px;
    .cancel {
      border-radius: 6px;
      background: #fff;
      box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      color: #464f60;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px; /* 125% */
      letter-spacing: 0.32px;
      padding: 7px 10px;
    }
    .update {
      border-radius: 6px;
      background: #00a85a;
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
      letter-spacing: 0.32px;
      padding: 7px 10px;
    }
  }
`;
