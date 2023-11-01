import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import Axios from "axios";
import Search from "../../Reuseable/Inputs/Search";
import Reusetable from "../../Reuseable/Reusetable";
import { TheadBody, TheadHeader } from "../../Mapables";
import { OhentpayHead, OhentpayBody } from "../../Mapables";
import tablearrow from "../../assets/tablearrow.svg";
//
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import Btn from "../../Reuseable/Btn";
import OverlayModal from "../../Reuseable/OverlayModal";
import TextInput from "../../Reuseable/Inputs/TextInput";
import SelectOption from "../../Reuseable/Inputs/SelectOption";
const Beneficiary = () => {
  // const navigate = useNavigate();
  // post
  const [userId, setUserID] = useState();
  const [countryID, setCountryID] = useState();
  const [beneficiaryName, setBeneficiaryName] = useState();
  const [beneficiaryPhoneNumber, setBeneficiaryNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [bankId, setBankid] = useState();
  const [data, setData] = useState(null);
  const [beneficiaryDetails, setBeneficiaryDetail] = useState();
  const [userDetailsData, setUserDetailsData] = useState();
  const [trx, settrx] = useState(null);
  const [newBeneficiary, setNewBeneficiary] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    setBeneficiaryDetail(userDetails?.data?.beneficiaries);
    setUserDetailsData(userDetails?.data);
  }, []);
  console.log(userDetailsData);

  const samples = [
    {
      name: "rashedd",
    },
    {
      name: "rashedd",
    },
    {
      name: "rashedd",
    },
  ];

  const details = samples.map((s) => {
    return s?.name;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          "https://apidoc.transferrocket.co.uk/getbanks",
          requestOptions
        );
        const result = await response.json();

        console.log("Fetched data:", JSON.stringify(result));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestOptions = {
  //         method: "GET",
  //         redirect: "follow",
  //       };

  //       const response = await fetch(
  //         "https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/45586980",
  //         requestOptions
  //       );
  //       const result = await response.json();

  //       // Set the fetched data to state
  //       setData(result);
  //       settrx(result?.data?.payOutTransactions);
  //       console.log("Fetched data:", result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors here
  //     }
  //   };

  //   // Call the fetch function
  //   fetchData();
  // }, []);

  const OverviewHeaders = [
    {
      id: 0,
      name: "id",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 1,
      name: "DATE CREATED",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 2,
      name: "BENEFICIARY NAME",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 3,
      name: "beneficiaryPhoneNumber",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 4,
      name: "ACCOUNT NAME",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 5,
      name: "ACCOUNT NUMBER",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 6,
      name: "BANK NAME",
      image: <img src={tablearrow} alt="" />,
    },
    {
      id: 7,
      name: "COUNTRY",
      image: <img src={tablearrow} alt="" />,
    },
    // {
    //   id: 8,
    //   name: "STATUS",
    //   image: <img src={tablearrow} alt="" />,
    // },
  ];

  return (
    <>
      {newBeneficiary && (
        <OverlayModal
          title="Add New Beneficiary"
          onClick={() => setNewBeneficiary(false)}
        >
          <TextInput label="Beneficiary Name" />
          <TextInput label="Beneficiary Phonenumber" />
          <TextInput label="Beneficiary Account Number" />
          {/* <SelectOption title="Bank Details" optionLabel={details} /> */}
          <Btn children="ADD BENEFICIARY" />
        </OverlayModal>
      )}
      <Layout>
        <TransactionsBox>
          <div className="head">
            <div className="logs">
              <div>
                <h1>Transaction Log</h1>
                <p>
                  This overview provides a comprehensive snapshot of wallet
                  transactions on your system
                </p>
              </div>
              <div>
                <Btn
                  children="Add Beneficiary"
                  clicking={() => setNewBeneficiary(true)}
                />
              </div>
            </div>
            <Box
              alignItems="flex-end"
              margin="20px 0"
              width="100%"
              border="none"
              radius="15px"
              padding="25px 0 20px 0"
              flexDirection="column"
            >
              <Search margin="10px 0 30px 20px" />
              <TableWraptwo>
                <table>
                  <thead>
                    <tr>
                      {OverviewHeaders.map((m, i) => (
                        <th>{m.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {beneficiaryDetails?.map((mb, i) => {
                      return (
                        <tr>
                          <td>{mb?.id}</td>
                          <td>{mb?.dateCreated}</td>
                          <td>{mb?.beneficiaryName}</td>
                          <td>{mb?.beneficiaryPhoneNumber}</td>
                          <td>{mb?.beneficiaryBank?.accountName}</td>
                          <td>{mb?.beneficiaryBank?.accountNumber}</td>
                          <td>{mb?.beneficiaryBank?.bankName}</td>
                          <td>{mb?.beneficiaryCountry?.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TableWraptwo>
            </Box>
          </div>
        </TransactionsBox>
      </Layout>
    </>
  );
};

export default Beneficiary;

const TransactionsBox = styled.div`
  .logs {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
    /* height: 300px; */
    border-collapse: collapse;
    width: max-content;
    padding: 20px;
    width: 100%;
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
          .depo {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #ecfdf3;
            padding: 5px 15px;
            width: max-content;
            color: #027a48;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          .cancel {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #fef3f2;
            width: max-content;
            padding: 5px 15px;
            color: #b42318;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
          }
          //
        }
        .gateway {
          display: flex;
          align-items: center;
          gap: 7px;
          img {
            width: 20px;
          }
        }
        .currency {
          display: flex;
          align-items: center;
          gap: 5px;
          img {
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
