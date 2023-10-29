import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
// 
import Layout from '../../Layout/Layout';
import Box from '../../Reuseable/Box';
import FlexWrapper from '../../Reuseable/FlexWrapper';
import FlexItems from '../../Reuseable/FlexItems';
import Marketbox from '../../Reuseable/Marketbox';
import {marketplaces} from '../../Mapables'
import hope from "../../assets/SidebarImg/hope.svg";

const Marketplace = () => {

    const [market,setMarket] = useState([])
    const [getUser,setUser] = useState()

    useEffect(() => {
        const makeRequest = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const response = await fetch("https://apidoc.transferrocket.co.uk//getpayoutprovider", requestOptions)
            const data = await response.json()
            setMarket(data?.data)
            console.log("🚀 ~ file: Marketplace.jsx:22 ~ makeRequest ~ data:", data)

        }
        makeRequest()
        setUser(JSON.parse(localStorage?.getItem("userDetails")))

    },[])

    const handleSubcribe = async (id) => {
    console.log("🚀 ~ file: Marketplace.jsx:36 ~ handleSubcribe ~ id:", id)

            var requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "payoutProvider": {
                    "id": parseInt(id)
                }
            }),
            redirect: 'follow'
            };

         const response = await fetch(`https://apidoc.transferrocket.co.uk//createpayoutclientwalletgatewayprovider/${getUser?.data?.userId}`, requestOptions)
         const data = await response.json()
         console.log("🚀 ~ file: Marketplace.jsx:49 ~ handleSubcribe ~ data:", data)
    }

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
                    {market.map(({logo, name, company, word, subscribe, subscribeStatus,status,id},i) => {
                            return(
                                <Marketbox handleSubcribe={() => handleSubcribe(id)}  key={i}  logo={name?.includes("HopePSB") && hope} name={name} subname={name?.toString().split("-")[1]} word={word} subStatus={status} subscribe={status}  />                        
                            )
                    }
// 
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