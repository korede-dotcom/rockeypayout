import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../Layout/Layout";
import Box from "../../../Reuseable/Box";
import Details from "./Details";
import Documnets from "./Documnets";

const Company = () => {
  const [tab, setTab] = useState(0);
  const comtab = [
    {
      id: 0,
      name: "Basic Details",
    },
    {
      id: 1,
      name: "ID Documents",
    },
  ];
  const [getUser,setUser] = useState()
useEffect(() => {

 setUser(JSON.parse(localStorage.getItem("userDetails")))

},[])
  return (
    <Layout>
      <CompanyBox>
        <div className="head">
          <h1>Company Profile</h1>
          <p>
            This overview provides a comprehensive company profile on your
            system
          </p>
          {/* <p>This overview provides a comprehensive snapshot of wallet transactions on your system</p> */}
        </div>
        <Box
          width="100%"
          border="none"
          radius="15px"
          margin="20px 0"
          padding="25px 20px"
          flexDirection="column"
          alignItems="flex-start"
        >
          <ComTab>
            {comtab.map((m, i) => (
              <p
                onClick={() => setTab(m.id)}
                className={tab === i && "activetab"}
                key={i}
              >
                {m.name}
              </p>
            ))}
          </ComTab>
          {tab === 0 ? <Details /> : <Documnets />}
        </Box>
      </CompanyBox>
    </Layout>
  );
};

export default Company;

const CompanyBox = styled.div`
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

const ComTab = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-bottom: 1px solid #eaecf0;
  p {
    color: #667085;
    font-size: 13px;
    font-weight: 400;
    line-height: 30px;
    padding: 0 3px;
  }
  .activetab {
    color: #00a85a;
    border-bottom: 2.5px solid #00a85a;
    transition: ease-in 0.3s;
  }
`;
