import React from 'react'
import styled from 'styled-components';
// 
import Layout from '../../Layout/Layout';
import FlexWrapper from '../../Reuseable/FlexWrapper';
import Card from '../../Reuseable/Card';
import { TheadBody, TheadHeader, cardbody2, figure2 } from '../../Mapables';
import Box from '../../Reuseable/Box';
import Reusetable from '../../Reuseable/Reusetable';
import FlexItems from '../../Reuseable/FlexItems';

const Hopeps = () => {
  return (
    <Layout>
        <HopepsBox>
            <FlexWrapper name="Hope PS Bank" subname="[Payarena]" amount="600, 022.89" word="This overview provides a comprehensive snapshot of wallet transactions on your system" />
            <CardContainer>
                <Card cardbody={cardbody2} figure={figure2} padding="0 0 0 10px" width="max-content" />
            </CardContainer>
            <Box  width="100%" border="none" radius="15px" flexDirection="column" padding="30px 0 40px 0">
              <FlexItems text="Transactions" />
                <Reusetable theads={TheadHeader} tbodies={TheadBody} />
            </Box>
        </HopepsBox>
    </Layout>
  )
}

export default Hopeps;

const HopepsBox = styled.div`

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
  padding: 30px 20px;
`;