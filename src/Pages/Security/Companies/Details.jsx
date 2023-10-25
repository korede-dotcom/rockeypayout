import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Textarea from "../../../Reuseable/Inputs/Textarea";
import Text from "../../../Reuseable/Inputs/Text";

const Details = () => {
  const [getUser,setUser] = useState()
useEffect(() => {

 setUser(JSON.parse(localStorage.getItem("userDetails")))

},[])




  return (
    <DetailsBox>
      <div className="name">
        <h1>Company Details</h1>
        <p>View your company profile here</p>
      </div>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Company Name</p>
        <Text placeholder="Kostom Kitchen" val={getUser?.data?.companyName} />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Business ID</p>
        <Text placeholder="Transfer" val={getUser?.data?.companyRegistrationNumber} />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Address</p>
        <Textarea val={getUser?.data?.address} />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Company Type</p>
        <Text placeholder="Limited Company" val={getUser?.data?.sector} />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Regulated Entry</p>
        <Text placeholder="Rockroke" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <EndBtn>
        <div className="btns">
          <p className="cancel">Cancel</p>
          <div className="update">Update Profile</div>
        </div>
      </EndBtn>
    </DetailsBox>
  );
};

export default Details;

const DetailsBox = styled.div`
  margin: 20px 0;
  width: 100%;
  .name {
    h1 {
      color: #090814;
      font-size: 14px;
      font-weight: 400;
    }
    p {
      color: #848d87;
      font-size: 11px;
      font-weight: 300;
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