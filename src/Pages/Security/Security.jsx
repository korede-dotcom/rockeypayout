import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import Box from "../../Reuseable/Box";
import Text from "../../Reuseable/Inputs/Text";
import { useEffect } from "react";

const Security = () => {
const [getUser,setUser] = useState()
useEffect(() => {

 setUser(JSON.parse(localStorage.getItem("userDetails")))

},[])

  return (
    
    <Layout>
      <UserProfileBox>
        <div className="head">
          <h1>User Profile</h1>
          {/* <p>This overview provides a comprehensive snapshot of wallet transactions on your system</p> */}
          <p>This overview provides user profile</p>
        </div>
        <Box
          width="100%"
          border="none"
          radius="15px"
          margin="20px 0 0 0"
          padding="30px 25px 80px 25px"
          flexDirection="column"
          alignItems="flex-start"
        >
          <div className="innerhead">
            <h2>User Information</h2>
            <p>Update Your profile here</p>
          </div>
          <InputWrap>
            <hr
              style={{
                width: "100%",
                margin: "20px 0",
                border: ".7px solid #EAECF0",
              }}
            />
            <InputWrapBox>
              <p>Full Name</p>
              <Text val={getUser?.data?.username} />
            </InputWrapBox>
            <hr
              style={{
                width: "100%",
                margin: "17px 0",
                border: ".7px solid #EAECF0",
              }}
            />
            <InputWrapBox>
              <p>Email Address</p>
              <Text val={getUser?.data?.email} />
            </InputWrapBox>
            <hr
              style={{
                width: "100%",
                margin: "17px 0",
                border: ".7px solid #EAECF0",
              }}
            />
            <InputWrapBox>
              <p>Phone Number</p>
              <Text val={getUser?.data?.phone}  />
            </InputWrapBox>
            <hr
              style={{
                width: "100%",
                margin: "15px 0",
                border: ".7px solid #EAECF0",
              }}
            />
          </InputWrap>
          <EndBtn>
            <div className="btns">
                <p className="cancel">Cancel</p>
                <div className="update">Update Profile</div>
            </div>
          </EndBtn>
        </Box>
      </UserProfileBox>
    </Layout>
  );
};

export default Security;

const UserProfileBox = styled.div`
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
  .innerhead {
    h2 {
      color: #090814;
      font-size: 14px;
      font-weight: 400;
    }
    p {
      color: #848d87;
      font-size: 11px;
      font-weight: 300;
      line-height: 25px;
      word-spacing: 1px;
    }
  }
`;

const InputWrap = styled.div`
  width: 100%;
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
    font-size: 11px;
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
  .btns{
    display: flex;
    align-items: center;
    gap: 20px;
    .cancel{
        border-radius: 6px;
        background: #FFF;
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        color: #464F60;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.32px;
        padding: 7px 10px;
    }
    .update{
        border-radius: 6px;
        background: #00A85A;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.32px;
        padding: 7px 10px;
    }
  }
`;