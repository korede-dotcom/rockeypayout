import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import Box from '../../Reuseable/Box';
import FlexWrapper from '../../Reuseable/FlexWrapper';
import FlexItems from '../../Reuseable/FlexItems';
import Marketbox from '../../Reuseable/Marketbox';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Marketplace = () => {
  const navigate = useNavigate();
  const [market, setMarket] = useState([]);
  const [getUser, setUser] = useState();
  const [getSub, setSub] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);
  
  const makeRequest = useCallback(async () => {
      var requestOptions = {
          method: 'GET',
      redirect: 'follow',
    };

    const response = await fetch('https://apidoc.transferrocket.co.uk//getpayoutprovider', requestOptions);
    const data = await response.json();
    return data?.data || [];
  }, []);

  const fetchData = useCallback(async () => {
      const userDetails = JSON.parse(localStorage?.getItem('userDetails'));
    setUser(userDetails);
    const payoutProviders = userDetails?.data?.payOutClientWalletPayOutProviders || [];

    setSub(payoutProviders);

    const marketData = await makeRequest();
    setMarket(marketData);
  }, [makeRequest]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubscribed = async (id) => {
      console.log("🚀 ~ file: Marketplace.jsx:16 ~ Marketplace ~ loading:", loading)
      console.log("🚀 ~ file: Marketplace.jsx:16 ~ Marketplace ~ clickedItemId:", clickedItemId)
      // if (loading) {
          //   console.log('Request in progress...');
          //   return; // Prevent double click
    // }

    setLoading(true);
    setClickedItemId(id);

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        "payoutProviderId": parseInt(id),
      }),
      redirect: 'follow',
    };
    try {
        const response = await fetch(`https://apidoc.transferrocket.co.uk/createpayoutclientwalletgatewayprovider`, requestOptions);
        const data = await response.json();
    
        if (data?.status) {
          navigate('/overview');
        }
        
        console.log('🚀 ~ file: Marketplace.jsx:49 ~ handleSubcribe ~ data:', data);
    } catch (error) {
        toast.error(error.message)
        setLoading(false);
        setClickedItemId(null);
        navigate('/overview');
        
    }

    setLoading(false);
    setClickedItemId(null);
  };

  return (
    <Layout>
      <MarketplaceBox>
        <div className="head">
          <h1>Marketplace</h1>
          <p>Subscribe to various gateways providers on the platform</p>
        </div>
        <Box width="100%" border="none" margin="20px 0" radius="15px" flexDirection="column" padding="0 20px 20px 20px">
          <FlexItems text="All Gateways" />
          <hr style={{ width: '100%', border: '.5px solid #EAECF0' }} />
          <BoxWrapper>
            {market.map(({ logo, name, company, word, subscribe, subscribeStatus, status, id, description }, i) => {
              const matchingProvider = getSub.find((provider) => provider?.providerName === name);
              const subscriptionStatus = matchingProvider ? matchingProvider?.status === 'true' : false;

              return (
                <Marketbox
                  handleSubscribe={() => handleSubscribed(id)}
                  key={i}
                  logo={logo}
                  name={name}
                  subname={name?.toString().split('-')[1]}
                  word={word}
                  subStatus={subscriptionStatus}
                  load={loading && clickedItemId === id}
                />
              );
            })}
          </BoxWrapper>
        </Box>
      </MarketplaceBox>
    </Layout>
  );
};

export default Marketplace;

const MarketplaceBox = styled.div`
  .head {
    h1 {
      color: #090814;
      font-size: 22px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
    }
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 10px;
  margin-top: 20px;
  width: 100%;
`;
