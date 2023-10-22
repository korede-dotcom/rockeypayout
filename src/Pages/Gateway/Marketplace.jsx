import React from 'react'
import styled from 'styled-components';
// 
import Layout from '../../Layout/Layout';
import Box from '../../Reuseable/Box';
import FlexWrapper from '../../Reuseable/FlexWrapper';
import FlexItems from '../../Reuseable/FlexItems';
import Marketbox from '../../Reuseable/marketbox';
import {marketplaces} from '../../Mapables'

const Marketplace = () => {
  return (
    <Layout>
        <MarketplaceBox>
            <div className="head">
                <h1>Marketplace</h1>
                <p>Subscribe to various gateways providers on the platform</p>
            </div>
            <Box width="100%" border="none" margin="20px 0" radius="15px" flexDirection="column" padding="0 20px 20px 20px">
                <FlexItems text="All Gateways" />
                <hr style={{width: '100%', border: '.5px solid #EAECF0'}} />
                <BoxWrapper>
                    {marketplaces.map(({logo, name, company, word, subscribe, subscribeStatus},i) => {
                            return(
                                <Marketbox key={i}  logo={logo} name={name} subname={company} word={word} subStatus={subscribeStatus} subscribe={subscribe}  />                        
                            )
                    }

                    )}
                </BoxWrapper>
            </Box>
        </MarketplaceBox>
    </Layout>
  )
}

export default Marketplace;


const MarketplaceBox = styled.div`
    .head{
        h1{
            color: #090814;
            font-size: 22px;
            font-weight: 500;
        }
        p{
            color: #848D87;
            font-size: 13px;
            font-weight: 300;
            line-height: 20px;
        }
    }
`;

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 10px;
    margin-top: 20px;
`;