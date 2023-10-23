import React from "react";
import styled from "styled-components";
import File from "../../../Reuseable/Inputs/File";

const Documnets = () => {
  return (
    <DocumentsBox>
      
      <div className="head">
        <h1>ID Document</h1>
        <p>View, edit, and update your company ID documents here</p>
      </div>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Form Co2</p>
        <File name="Form Co2" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Form Co7</p>
        <File name="Form Co7" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Company Certification</p>
        <File name="Company Certification" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Memorandum of Association</p>
        <File name="Memorandum of Association" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Article of Association</p>
        <File name="Article of Association" />
      </InputWrapBox>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      <InputWrapBox>
        <p>Utility Bill</p>
        <File name="Utility Bill" />
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
    </DocumentsBox>
  );
};

export default Documnets;

const DocumentsBox = styled.div`
  margin: 20px 0;
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
    font-size: 11px;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

const EndBtn = styled.div`
  margin-top: 40px;
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