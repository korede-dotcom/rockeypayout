import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
// 
import Layout from '../../Layout/Layout';
import FlexWrapper from '../../Reuseable/FlexWrapper';
import Card from '../../Reuseable/Card';
import { TheadBody, TheadHeader, figure2 } from '../../Mapables';
import Box from '../../Reuseable/Box';
import Reusetable from '../../Reuseable/Reusetable';
import FlexItems from '../../Reuseable/FlexItems';
import { OhentpayHead, OhentpayBody } from "../../Mapables";
import contact from "../../assets/contact.png";
import successful from "../../assets/successful.png";
import pending from "../../assets/pending.png";
import cancelled from "../../assets/cancelled.png";
import down from "../../assets/down.svg";
import test from "../../assets/test.svg";
// 
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import Loader from '../../Reuseable/Loader';
import tablearrow from "../../assets/tablearrow.svg";
import ngn from "../../assets/ngn.svg";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import opt from "../../assets/opt.svg";


const Hopeps = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [getUser, setUser] = useState(null);
  const [trx, settrx] = useState(null);
  const sorted = getUser?.data?.payOutClientWalletPayOutProviders[0]?.walletTransactionVolume;
  const balance = getUser?.data?.payOutClientWalletPayOutProviders[0]?.wallet;
  console.log("🚀 ~ file: Hopeps.jsx:30 ~ Hopeps ~ getUser:", balance)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency:"NGN",
    // currency: balance?.country?.currencyCode,
  });



  const OhentpayHead = [
    {
      id: 0,
      name: "TRANSACTION REF",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 1,
      name: "DATE",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 2,
      name: "AMOUNT APPROVED",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 3,
      name: "AMOUN REQUESTED",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 4,
      name: "BALANCE BEFORE REQUEST",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 5,
      name: "CURRENCY",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 6,
      name: "BALANCE",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 7,
      name: "WALLET NAME",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 8,
      name: "TRANSACTION STATUS",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 9,
      name: "ACTIONS",
      // image: <img src={tablearrow} alt="" />,
    },
  ]

  const OhentpayBody = [
    {
      trans: "TX19784903",
      date: "23/09/23, 09:11:24",
      receiver: "AINAJOHNSON",
      bank: "Access Bank",
      accNo: "0012345678",
      flag: <img src={ngn} alt="" />,
      currency: "NGN",
      amount: "30.00",
      transferfee: 0.0,
      transactiontatus: "Deposited",
      actions: "view details"
    },
    {
      trans: "TX19784903",
      date: "23/09/23  09:11:24",
      receiver: "AINA JOHNSON",
      bank: "GT Bank",
      accNo: "0012345678",
      flag: <img src={ngn} alt="" />,
      currency: "NGN",
      amount: "30.00",
      transferfee: 0.0,
      transactiontatus: "cancelled",
      actions: "view details"
    },
  ]

  const cardbody2 = [
    {
      Image: contact,
      name: "Total Transaction Count",
      downImg: down,
      count:sorted?.total,
      day: "count",
    },
    {
      Image: successful,
      name: `Successful`,
      downImg: down,
      count:sorted?.successful,
      day: "count",
      border: "border",
      padding: "padding",
    },
    {
      Image: pending,
      name: "Pending",
      downImg: down,
      count:sorted?.pending,
      day: "count",
      border: "border",
      padding: "padding",
    },
    {
      Image: cancelled,
      name: "Cancelled",
      downImg: down,
      count:sorted?.cancelled,
      day: "count",
      border: "border",
      padding: "padding",
    },
  ];

  const figure2 = [
    { number: formatter?.format(sorted?.totalAmount) },
    { number: formatter?.format(sorted?.successfulAmount) },
    { number:formatter?.format(sorted?.pendingAmount) },
    { number: formatter?.format(sorted?.cancelledAmount) },
    // { number: 18 },
  ];


  useEffect(() => {

    setLoading(true)
    const userId = JSON.parse(localStorage.getItem("userDetails"))
    setUser(userId);

    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(`https://apidoc.transferrocket.co.uk///getuserwalletfundrequest?userId=${userId?.data?.userId}&requestId=0`, requestOptions);
        const result = await response.json();
        console.log("🚀 ~ file: Hopeps.jsx:39 ~ fetchData ~ result:", result)
        
        // Set the fetched data to state
        setData(result);
        setLoading(false)
        // settrx(result?.data?.payOutTransactions);
        console.log("Fetched data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    // Call the fetch function
    fetchData();
  }, []);


  return (
    <Layout>
      {loading && <Loader/>}
        <HopepsBox>
            <FlexWrapper name="Hope PS Bank" subname="[Payarena]" amount={balance?.balance} word="This overview provides a comprehensive snapshot of wallet transactions on your system" />
            <CardContainer>
                <Card cardbody={cardbody2} figure={figure2} padding="0 0 0 10px" width="max-content" />
            </CardContainer>
            <Box  width="100%" border="none" radius="15px" flexDirection="column" padding="30px 0 40px 0">
              <FlexItems text="Transactions" />
                {/* <Reusetable theads={TheadHeader} tbodies={TheadBody} /> */}
                <TableWraptwo>
            <table>
              <thead>
                <tr>
                  {OhentpayHead.map((m, i) => (
                    <th key={i}>
                      <span>
                        {m.name}
                        {m.image}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((mb, i) => {
                  return (
                    <tr key={i}>
                      <td>{mb.id}</td>
                      <td>{mb.dateCreated}</td>
                      <td>{mb.amountApproved}</td>
                      <td>{mb.balanceBeforeRequest}</td>
                      <td>{mb.amountRequested}</td>
                      <td className="currency">
                        {mb.flag}
                        <span> {mb?.userWallet?.country?.name}</span>
                      </td>
                      <td>{mb.userWallet.balance}</td>
                      {/* <td className="receiver">{mb.receiver}</td> */}
                      <td>{mb.userWallet.name}</td>
                      <td>
                      {mb.status ===  "Pending" ? (
                        <span className="depo">
                          <img src={gb} alt="" />{mb.status}
                          </span>
                      ) : (
                        <span className="cancel"><img src={rb} alt="" />{mb.status}</span>
                      )}
                      </td>
                      {/* <Dropdown
                      title={<img src={opt} height="20px" />}
                      >
                        <Dropdown.Item
                         
           
                        >
                          Activate User
                        </Dropdown.Item>

                        <Dropdown.Item
                         
                          
                        >
                          De-activate User
                        </Dropdown.Item>
                        <Dropdown.Item
                         
                        >
                          Re-activate User
                        </Dropdown.Item>
                      </Dropdown> */}
                      {/* <td>{mb.actions}</td>
                       {mb.status ===  "Pending" ? (
                          <span className="cancel" style={{background:"#FEF3F2",padding:"2px 10px",borderRadius:"10px",color:"red"}}>
                            <img src={rb} alt="" /><small>cancel</small>
                            </span>
                      ) : ""
                      } */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWraptwo>
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
    /* height: 300px; */
    border-collapse: collapse;
    width: 100%;
    padding: 20px;
    thead {
      border-top: 1px solid #e9edf5;
      border-bottom: 1px solid #e9edf5;
      background: #f9fafb;
      height: 34px;
      th {
        padding: 0 15px;
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
          padding: 15px 15px;
          width: max-content;
          text-align: start;
          color: #5a6376;
          font-family: Oxygen;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          /* line-height: 20px; 142.857% */

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