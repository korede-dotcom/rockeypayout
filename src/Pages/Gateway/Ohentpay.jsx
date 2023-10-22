import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import FlexWrapper from "../../Reuseable/FlexWrapper";
import Card from "../../Reuseable/Card";
import { TheadBody, TheadHeader, cardbody2, figure2 } from "../../Mapables";
import Box from "../../Reuseable/Box";
import FlexItems from "../../Reuseable/FlexItems";
import Reusetable from "../../Reuseable/Reusetable";

const Ohentpay = () => {
  const [show, setShow] = useState(false);
  const [payout, setPayout] = useState(false);
  const showModal = () => {
    setShow(!show);
    if (payout) {
      setShow(false);
    }
  };
  console.log(payout)
  return (
    <Layout>
      <OhentpayBox>
        <FlexWrapper
          name="Ohentpay"
          subname="[Providus]"
          amount="5,250,532.89 "
          // onClick={showModal}
          // show={show}
          // setShow={setShow}
          // payout={payout}
          word="This overview provides a comprehensive snapshot of wallet transactions on your system"
        />
        <CardContainer>
          <Card
            cardbody={cardbody2}
            figure={figure2}
            padding="0 0 0 15px"
            width="max-content"
          />
        </CardContainer>
        <Box
          width="100%"
          border="none"
          radius="15px"
          flexDirection="column"
          padding="20px 0 40px 0"
        >
          <FlexItems text="Transaction" />
          <Reusetable theads={TheadHeader} tbodies={TheadBody} />
        </Box>
      </OhentpayBox>
    </Layout>
  );
};

export default Ohentpay;

const OhentpayBox = styled.div``;

const CardContainer = styled.div`
  // border: 2px solid;
  // height: 300px;
  margin: 20px 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(156, 156, 156, 0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 20px;
`;
