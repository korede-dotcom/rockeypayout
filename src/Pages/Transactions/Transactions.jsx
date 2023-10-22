import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import Search from "../../Reuseable/Inputs/Search";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadBody, TheadHeader } from "../../Mapables";

const Transactions = () => {
  return (
    <Layout>
      <TransactionsBox>
        <div className="head">
          <h1>Transaction Log</h1>
          <p>
            This overview provides a comprehensive snapshot of wallet
            transactions on your system
          </p>
          <Box
            alignItems="flex-start"
            margin="20px 0"
            width="100%"
            border="none"
            radius="15px"
            padding="25px 0 20px 0"
            flexDirection="column"
          >
            <Search margin="10px 0 30px 20px" />
            <Reusetable theads={TheadHeader} tbodies={TheadBody} />
          </Box>
        </div>
      </TransactionsBox>
    </Layout>
  );
};

export default Transactions;

const TransactionsBox = styled.div`
  .head {
    h1 {
      color: #090814;
      font-size: 20px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;
