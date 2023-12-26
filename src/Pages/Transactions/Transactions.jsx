import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import Search from "../../Reuseable/Inputs/Search";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadBody, TheadHeader } from "../../Mapables";
import { OhentpayHead, OhentpayBody } from "../../Mapables";
import tablearrow from "../../assets/tablearrow.svg";
//
import Trnx from "../../reuseables/Tranx"
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import Loader from "../../Reuseable/Loader";

const Transactions = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [trx, settrx] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userDetails"))

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "NGN",
  });

  useEffect(() => {
    setLoading(true)
    settrx(userId?.data?.payOutTransactions);
    setLoading(false)
    const fetchData = async () => {
      setLoading(false)
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
        const result = await response.json();

        // Set the fetched data to state
        setData(result);
        setLoading(false)
        settrx(result?.data?.payOutTransactions);
        console.log("Fetched data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    // Call the fetch function
    // fetchData();
  }, []);

  const OverviewHeaders = [
    {
      id: 0,
      name: "id",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 1,
      name: "amount",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 2,
      name: "payoutclientid",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 3,
      name: "transferFee",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 4,
      name: "beneficiaryName",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 5,
      name: "beneficiaryPhoneNumber",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 6,
      name: "bankName",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 7,
      name: "payOutProvider",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 8,
      name: "status",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 8,
      name: "dateCreated",
      image: <img src={tablearrow} alt="" />,
    },
   
  ]
  return (
    <Layout>
      {loading && <Loader/>}
      <Trnx/>
   
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

const TableWraptwo = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto hidden;
  scroll-behavior: smooth;
  transition: all 1s;

  &::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(2, 0, 36);
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 1) 0%,
      rgba(57, 58, 59, 1) 0%,
      rgba(193, 193, 193, 1) 1%
    );
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }
  table {
    height: 300px;
    border-collapse: collapse;
    width: 100%;
    padding: 20px;
    thead {
      border-top: 1px solid #e9edf5;
      border-bottom: 1px solid #e9edf5;
      background: #f9fafb;
      height: 34px;
      th {
        padding: 0 20px;
        color: #687182;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0.36px;
        text-transform: uppercase;
        span {
          display: flex;
          align-items: center;
          img {
            width: 13px;
          }
        }
      }
      th:first-child {
        padding: 0 25px;
      }
      th:last-child {
        padding: 0 25px;
      }
    }
    tbody {
      // border: 2px solid red;
      tr {
        border-bottom: 1px solid #e9edf5;
        td {
          padding: 15px 20px;
          width: max-content;
          text-align: start;
          color: #5a6376;
          font-family: Oxygen;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */

          // 
          .depo{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #ECFDF3;
            padding: 5px 15px;
            width: max-content;
            color: #027A48;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          .cancel{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #FEF3F2;
            width: max-content;
            padding: 5px 15px;
            color: #B42318;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          // 
        }
        .gateway{
          display: flex;
          align-items: center;
          gap: 7px;
          img{
            width: 20px;
          }
        }
        .currency{
          display: flex;
          align-items: center;
          gap: 5px;
          img{
            width: 15px;
          }
        }

        td:first-child {
          padding: 0 25px;
        }
        td:last-child {
          padding: 0 25px;
          color: rgb(24, 24, 255);
        }
      }
    }
  }
`;