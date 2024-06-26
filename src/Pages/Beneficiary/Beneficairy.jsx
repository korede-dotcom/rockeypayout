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
import CustomTable from "../../reuseables/CustomTable";
import SelectComponent from "@arco-design/web-react/es/Select/select";
// import { Select, Space } from '@arco-design/web-react';
// const Option = Select.Option;
import Select from 'react-select';
import Loader from "../../Reuseable/Loader";
const Beneficiary = () => {

  const [selectedOption, setSelectedOption] = useState(null);

 

  const handleSelectChange = selectedOption => {
    setSelectedOption(selectedOption);
    // Do something with selected option if needed
  };

  // const navigate = useNavigate();
  // post
  const [userId, setUserID] = useState();
  const [countryID, setCountryID] = useState();
  const [beneficiaryName, setBeneficiaryName] = useState();
  const [beneficiaryPhoneNumber, setBeneficiaryNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [bankId, setBankid] = useState();
  const [data, setData] = useState(null);
  const [country, setCountry] = useState([]);
  const [beneficiaryDetails, setBeneficiaryDetail] = useState();
  const [userDetailsData, setUserDetailsData] = useState();
  const [trx, settrx] = useState(null);
  const [newBeneficiary, setNewBeneficiary] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const options = country.map(option => ({
    label: option.name,
    value: option.name
  }));

  


  useEffect(() => {
    // Fetch countries and set the first country as the default
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://apidoc.transferrocket.co.uk/getcountries",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ file: Beneficairy.jsx:51 ~ .then ~ data:", data)
        setCountry(data.data);
        // if (data.data.length > 0) {
        //   setCountryId(data.data[0].id);
        //   setCountryValue(data.data[0].name);
        // }
      })
      .catch((error) => console.log("error", error));
    // fetch(
    //   "https://apidoc.transferrocket.co.uk//getbanks",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("🚀 ~ file: Beneficairy.jsx:64 ~ .then ~ data:", data)
    //     // setIdTypes(data.data);
    //     // if (data.data.length > 0) {
    //     //   setCountryId(data.data[0].id);
    //     //   setCountryValue(data.data[0].name);
    //     // }
    //   })
    //   .catch((error) => console.log("error", error));
  }, []);
  const fectherBeneficiary = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    setLoading(true)

    // const response = await fetch(`https://apidoc.transferrocket.co.uk//getuserbeneficiaries?userId=CLIENT_ID&beneficiaryId=0`, requestOptions);
    const response = await fetch(`https://apidoc.transferrocket.co.uk//getuserbeneficiaries?userId=${userDetails?.data?.userId}&beneficiaryId=0`, requestOptions);
    const result = await response.json();
    setBeneficiaryDetail(result?.data);
    setLoading(false)


    // location.setItem("test",JSON.stringify(result))
    
  // console.log("🚀 ~ fectherBeneficiary ~ beneficiaries:", beneficiaries)
  }
  

  useEffect(() => {
    // setBeneficiaryDetail(userDetails?.data?.beneficiaries);
    fectherBeneficiary()
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestOptions = {
  //         method: "GET",
  //         redirect: "follow",
  //       };

  //       const response = await fetch(
  //         "https://apidoc.transferrocket.co.uk/getbanks",
  //         requestOptions
  //       );
  //       const result = await response.json();

  //       console.log("banks", JSON.stringify(result));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors here
  //     }
  //   };

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

  const columns = [
    {
      title: "BENEFICIARYID",
      dataIndex: "id",
      fixed: "left",
      /*   sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 1,
      }, */
      width: 130,
    },
    {
      title: "NAME",
      dataIndex: "beneficiaryName",
      width: 140,
    },
    {
        title: "PHONENUMBER",
        dataIndex: "beneficiaryPhoneNumber",
        width: 160,
    },
    {
      title: "ACCOUNTNAME",
      dataIndex: "accountName",
      width: 190,
    },
    {
      title: "ACCOUNTNUMBER",
      dataIndex: "accountNumber",
      width: 190,
    },
    {
      title: "BANKNAME",
      dataIndex: "bankName",
      width: 190,
      
      //render: () => "Other",
    },
    {
      title: "COUNTRY",
      dataIndex: "countryName",
      width: 160,
    },
    {
      title: "DATE ADDED",
      dataIndex: "dateCreated",
      width: 220,
    },
  ];

  const [active, setActive] = useState();
  const [show, setshow] = useState(false);

  const flattenedArray = beneficiaryDetails?.map(item => {
    return {
        id: item.id,
        beneficiaryName: item.beneficiaryName,
        beneficiaryPhoneNumber: item.beneficiaryPhoneNumber,
        accountNumber: item.beneficiaryBank?.accountNumber || '',
        accountName: item.beneficiaryBank?.accountName || '',
        bankName: item.beneficiaryBank?.bankName || '',
        countryName: item.beneficiaryCountry?.name || '',
        dateCreated: item.dateCreated || '',
        // ... other properties
    };
});

    const newData =  flattenedArray?.map((item, index) => {
    return {
      ...item,
      action: (
        <div
          style={{
            position: "relative",
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (item?.status === "Pending") {
              if (active === item?.id) {
                setActive("");
              } else {
                setActive(item?.id);
              }
            }
          }}
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 5 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              cursor: item?.status === "Pending" ? "pointer" : "not-allowed",
            }}
          >
            <path
              d="M2.5 4C3.6 4 4.5 3.1 4.5 2C4.5 0.9 3.6 0 2.5 0C1.4 0 0.5 0.9 0.5 2C0.5 3.1 1.4 4 2.5 4ZM2.5 6C1.4 6 0.5 6.9 0.5 8C0.5 9.1 1.4 10 2.5 10C3.6 10 4.5 9.1 4.5 8C4.5 6.9 3.6 6 2.5 6ZM2.5 12C1.4 12 0.5 12.9 0.5 14C0.5 15.1 1.4 16 2.5 16C3.6 16 4.5 15.1 4.5 14C4.5 12.9 3.6 12 2.5 12Z"
              fill="#667085"
            />
          </svg>

          {active === item?.id && (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                position: "absolute",
                border: "1px solid #d1d1d1",
                borderRadius: "10px",
                textAlign: "left",
                left: "20px",
                bottom: index !== 0 && "0",
                top: index === 0 && "0",
                background: "#fff",
                zIndex: "10000",
                width: "160px",
              }}
              className="absolute border border-gray-200 rounded-lg text-left left-0 top-[160%] bg-white z-10"
            >
              <div
                onClick={() => {
                  // mutate({
                  //   updatedBy: userDetails?.userId,
                  //   objectId: item?.id,
                  //   action: 1,
                  // });
                }}
                style={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  <g clip-path="url(#clip0_2568_14904)">
                    <path
                      d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99211 1.34776 7.55761C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674M14.6667 2.66674L7.99998 9.34007L5.99998 7.34007"
                      stroke="#101828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2568_14904">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Approve
              </div>
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#F04438",
                }}
                onClick={() => {
                  // mutate({
                  //   updatedBy: userDetails?.userId,
                  //   objectId: item?.id,
                  //   action: 0,
                  // });
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M7.99998 1.3335C11.6666 1.3335 14.6666 4.3335 14.6666 8.00016C14.6666 11.6668 11.6666 14.6668 7.99998 14.6668C4.33331 14.6668 1.33331 11.6668 1.33331 8.00016C1.33331 4.3335 4.33331 1.3335 7.99998 1.3335ZM7.99998 2.66683C6.73331 2.66683 5.59998 3.06683 4.73331 3.80016L12.2 11.2668C12.8666 10.3335 13.3333 9.20016 13.3333 8.00016C13.3333 5.06683 10.9333 2.66683 7.99998 2.66683ZM11.2666 12.2002L3.79998 4.7335C3.06665 5.60016 2.66665 6.7335 2.66665 8.00016C2.66665 10.9335 5.06665 13.3335 7.99998 13.3335C9.26665 13.3335 10.4 12.9335 11.2666 12.2002Z"
                    fill="#F04438"
                  />
                </svg>
                Decline
              </div>
            </div>
          )}
        </div>
      ),
      statusNew: (
        <>
          {" "}
          <div
            style={{
              padding: "8px 16px",
              borderRadius: "10000px",
              background:
                item?.status === "Approved"
                  ? "#63ff706c"
                  : item?.status === "Pending"
                  ? "#FEF0C7"
                  : "#ff63634b",
              color:
                item?.status === "Approved"
                  ? "green"
                  : item?.status === "Pending"
                  ? "#DC6803"
                  : "red",
              width: "fit-content",
              fontWeight: "700",
            }}
          >
            {item?.status}
          </div>
        </>
      ),
      beneficiaryBank:(
        <div>ffff</div>
      )
    };
  });

  return (
    <>
    
    {loading && <Loader/>}
      {show && (
        <OverlayModal 
          title="Add New Beneficiary"
          onClick={() => setshow(!show)}
        >
     <Select
      placeholder="Select Country"
      styles={{
        control: styles => ({
          ...styles,
          backgroundColor: 'white',
          width: 554,
          // border:"1px solid #000"
          // border: 'none', // Remove the border
          // boxShadow: 'none', // Remove the box shadow
        }),
        singleValue: styles => ({
          ...styles,
          color: '#000'
        }),
        option: (styles, { isFocused }) => ({
          ...styles,
          backgroundColor: isFocused ? 'rgb(0, 168, 90)' : 'white',
          color: isFocused ? 'white' : 'black'
        })
    
        // Custom styles if needed
      }}
      value={selectedOption}
      onChange={handleSelectChange}
      options={options}
    />
          <TextInput label="Beneficiary Name" />
        
          <TextInput label="Beneficiary Phonenumber" />
          <TextInput label="Beneficiary Account Number" />
          {/* <SelectOption title="Bank Details" optionLabel={details} /> */}
          <Btn children="ADD BENEFICIARY"  />
        </OverlayModal>
      )}
      <Layout>
      <Content>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
        <Btn children="add Beneficiary" clicking={() => setshow(!show)} />
          
        </div>
        <div className="tablecontent">
        <div className="content">
          <div className="heading">Beneficairy Lists </div>
        </div>

  

        <CustomTable
          noData={newData?.length}
          // loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
        />
        </div>

        </Content>

      </Layout>
    </>
  );
};

export default Beneficiary;


const Content = styled.div`
  border-radius: 30px;
  .top {
    padding: 10px 30px 30px 20px;
  }

  .tablecontent {
    background-color: white;
    margin-bottom: 30px;
    border-radius: 10px;
  }
  .content {
    padding: 15px 20px 0px 20px;
  }
  .content .heading {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .content .sub {
    font-size: 14px;
    color: #848d87;
  }
  .content button {
    background-color: transparent;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 7rem;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 13px;
    padding: 18px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 22px;
    font-weight: 500;
    font-size: 14px;
    border-top: 1px solid gainsboro;
  }
  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 15px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    width: 48px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    width: 28.8px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
`;

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
