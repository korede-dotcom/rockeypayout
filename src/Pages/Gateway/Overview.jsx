import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
//
import logo2 from "../../assets/SidebarImg/logo2.svg";
import ngn from "../../assets/ngn.svg";
import drop from "../../assets/drop.svg";
import Card from "../../Reuseable/Card";
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import tablearrow from "../../assets/tablearrow.svg";
import contact from "../../assets/contact.png";
import successful from "../../assets/successful.png";
import pending from "../../assets/pending.png";
import cancelled from "../../assets/cancelled.png";
import down from "../../assets/down.svg";
import test from "../../assets/test.svg";
import opt from "../../assets/opt.svg";
//
import Box from "../../Reuseable/Box";
import FlexItems from "../../Reuseable/FlexItems";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadHeader, TheadBody, cardbody, figure } from "../../Mapables";
import { useNavigate } from "react-router-dom";
import { OhentpayHead, OhentpayBody } from "../../Mapables";
//
import { OverviewHeader, OverviewBody } from "../../Mapables";
import Loader from "../../Reuseable/Loader";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Overview = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [trx, settrx] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "NGN",
  });
  const sorted = data?.data?.transactionVolume[0]
  console.log("🚀 ~ file: Overview.jsx:39 ~ Overview ~ sorted:", sorted)

   const cardbodys = [
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
      count:sorted?.failed,
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

   const figures = [
    { number: formatter.format(sorted?.totalAmount) },
    { number: formatter.format(sorted?.successfulAmount) },
    { number: formatter.format(sorted?.pendingAmount)},
    { number: formatter.format(sorted?.cancelledAmount) },
  ];

  useEffect(() => {

    setLoading(true)
    const userId = JSON.parse(localStorage.getItem("userDetails"))

    const fetchData = async () => {
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
        localStorage.getItem("userDetails",JSON.stringify(result))
        console.log("Fetched data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  useEffect(() => {

    setLoading(true)
    const userId = JSON.parse(localStorage.getItem("userDetails"))
    // setUser(userId);

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
        setData2(result);
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

  const TheadBodys = trx?.map((d) => {
    return {
      ID: d.id, // Assuming d.id is the corresponding ID in your data
      Amount: d?.Amount,
    
    };
  });
  console.log("🚀 ~ file: Overview.jsx:161 ~ TheadBodys ~ TheadBodys:", TheadBodys)
  

  return (
    <Layout>
      <OverviewContainer>
      {loading && <Loader/>}

        <PageWord>
          <div className="left">
            <h3>Overview</h3>
            <p>
              This overview provides a comprehensive snapshot of wallet
              transactions on your system
            </p>
          </div>
          <div className="right">
            <div className="countrybx">
              <div className="countries">
                <img src={ngn} alt="" />
                <span>NGN</span>
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="sub" onClick={() => navigate("/marketplace")}>
              <p>Subscribe to Gateway</p>
            </div>
          </div>
        </PageWord>
        <CardContainer>
          <Card  cardbody={cardbodys} figure={figures} padding="0 0 0 70px" />
        </CardContainer>
        <Box
          width="100%"
          border="none"
          radius="15px"
          flexDirection="column"
          padding="20px 0 40px 0"
        >
          <FlexItems text="Payout Request" />
          <TableWrap>
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
                {data2?.data?.map((mb, i) => {
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
                      {/* <td>{mb.actions}</td> */}
                       {/* {mb.status ===  "Pending" ? (
                          <span className="cancel" style={{background:"#FEF3F2",padding:"2px 10px",borderRadius:"10px",color:"red"}}>
                            <img src={rb} alt="" /><small>cancel</small>
                            </span>
                      ) : ""
                      } */}
                                            <td >
                      <Dropdown
                      title={<img src={opt} height="20px" />}
                      >
                        <Dropdown.Item
                         
                        style={{color:"red",background:"#fff"}}
                        >
                          Cancel
                        </Dropdown.Item>

                     
                      </Dropdown>
                    </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWrap>
          {/* <Reusetable  theads={TheadHeader} tbodies={TheadBody} /> */}
        </Box>
        <Box
          width="100%"
          border="none"
          radius="15px"
          flexDirection="column"
          padding="20px 0 40px 0"
        >
          <FlexItems text="Transactions" />
          <TableWrap>
            <table>
              <thead>
                <tr>
                  {OverviewHeaders.map((m, i) => (
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
                {trx?.map((mb, i) => {
                  return (
                    <tr key={i}>
                      <td>{mb?.id}</td>
                      <td>{mb?.Amount}</td>
                      <td>{mb?.payoutclientid}</td>
                      <td>{mb?.transferFee}</td>
                      <td>{mb?.beneficiary?.beneficiaryName}</td>
                      <td>{mb?.beneficiary?.beneficiaryPhoneNumber}</td>
                      <td>{mb?.beneficiary?.beneficiaryBank?.bankName}</td>
                      <td>{mb?.payOutProvider?.name}</td>
                      <td>{mb?.status}</td>
                      <td>{mb?.dateCreated}</td>
                      {/* <td>{mb.date}</td>
                      <td className="gateway">
                        {mb.img}
                        <span>{mb.gateway}</span>
                      </td>
                      <td>Ola Kunle Ojo</td>
                      <td className="receiver">{mb.receiver}</td>
                      <td>{mb.bank}</td>
                      <td>{mb.accNo}</td>
                      <td className="currency">
                        {mb.flag}
                        <span> {mb.currency}</span>
                      </td>
                      <td>{mb.amount}</td>
                      <td>{mb.transferfee}</td> */}
                      {/* <td>
                      {mb.transactiontatus ===  "Deposited" ? (
                        <span className="depo">
                          <img src={mb?.logo} alt="" />{}
                          </span>
                      ) : (
                        <span className="cancel"><img src={rb} alt="" />{mb.transactiontatus}</span>
                      )}
                      </td> */}
                      {/* <td>{mb.actions}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWrap>
          {/* <Reusetable  theads={TheadHeader} tbodies={TheadBody} /> */}
        </Box>
      </OverviewContainer>
    </Layout>
  );
};

export default Overview;

const OverviewContainer = styled.div``;

const PageWord = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    h3 {
      color: #090814;
      font-family: Inter;
      font-size: 22px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-family: Inter;
      font-size: 12px;
      font-weight: 300;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 15px;

    .countrybx {
      .countries {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
          0px 1px 1px 0px rgba(0, 0, 0, 0.1);
        padding: 10px;
        span {
          color: #667085;
          font-size: 12px;
          font-weight: 400;
        }
        img {
          width: 15px;
        }
        img:last-child {
          width: 13px;
        }
      }
    }
    .sub {
      border-radius: 6px;
      background: #00a85a;
      box-shadow: 0px 0px 0px 1px #00a85a, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 10px 12px;
      p {
        color: #fff;
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
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(156, 156, 156, 0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 25px;
`;
const TableWrap = styled.div`
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
    width: 100%;
    border-collapse: collapse;
    /* width: max-content; */
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
