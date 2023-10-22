import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
// 
import logo2 from '../../assets/SidebarImg/logo2.svg';
import ngn from '../../assets/ngn.svg';
import drop from '../../assets/drop.svg';
import Card from "../../Reuseable/Card";
// 
import Box from "../../Reuseable/Box";
import FlexItems from "../../Reuseable/FlexItems";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadHeader, TheadBody, cardbody, figure } from "../../Mapables";

const Overview = () => {

  return (
    <Layout>
      <OverviewContainer>
        <PageWord>
          <div className="left">
            <h3>Overview</h3>
            <p>This overview provides a comprehensive snapshot of wallet transactions on your system</p>
          </div>
          <div className="right">
            <div className="countrybx">
              <div className="countries">
                <img src={ngn} alt="" />
                <span>NGN</span>
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="sub" onClick={() => navigate}>
              <p>Subscribe to Gateway</p>
            </div>
          </div>
        </PageWord>
        <CardContainer>
          <Card cardbody={cardbody} figure={figure} padding="0 0 0 70px"   />
        </CardContainer>
        <Box width="100%" border="none" radius="15px" flexDirection="column" padding="20px 0 40px 0" >
          <FlexItems text="Transactions" />
          <Reusetable  theads={TheadHeader} tbodies={TheadBody} />
        </Box>
      </OverviewContainer>
    </Layout>
  );
};

export default Overview;

const OverviewContainer = styled.div`


`;

const PageWord = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  .left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    h3{
      color: #090814;
      font-family: Inter;
      font-size: 22px;
      font-weight: 500;
    }
    p{
      color: #848D87;
      font-family: Inter;
      font-size: 12px;
      font-weight: 300;
    }
  }
  .right{
    display: flex;
    align-items: center;
    gap: 15px;

    .countrybx{
      .countries{
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        background: #FFF;
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        padding: 10px;  
        span{
          color: #667085;
          font-size: 12px;
          font-weight: 400;
        }      
        img{
          width: 15px;
        }
        img:last-child{
          width: 13px;
        }
      }

    }
    .sub{
      border-radius: 6px;
      background: #00A85A;
      box-shadow: 0px 0px 0px 1px #00A85A, 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
      padding: 10px 12px;
      p{
        color: #FFF;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.32px;
      }
    }
  }
`;
const CardContainer = styled.div`
  // border: 2px solid;
  // height: 300px;
  margin: 20px 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 36px 0px rgba(156, 156, 156, 0.10);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 25px;
`;