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
import CustomTable from "../../reuseables/CustomTable";
import Tranx  from "../../reuseables/Tranx";
import {  useRef } from 'react';
import { Table, Input, Button } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { IconDownload } from "@arco-design/web-react/icon";
import Btn from "../../reuseables/Btn";
import Modal from "../../Reuseable/Modal";
import Pdf from "../../Reuseable/Pdf";
import ngFlag from "../../assets/ngn.svg"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Overview = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [trx, settrx] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userDetails, setuserDetails] = useState(null);
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [downloadPdf, setdownloadPdf] = useState(false);
  const [TransactionDetails, setTransactionDetails] = useState("");

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "NGN",
  });
  const formatters = new Intl.NumberFormat();
  
  const sorted = data?.data?.transactionVolume[0]
  console.log("🚀 ~ file: Overview.jsx:39 ~ Overview ~ sorted:", data2)

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
      name: "failed",
      downImg: down,
      count:sorted?.failed,
      day: "count",
      border: "border",
      padding: "padding",
    },
  ];

   const figures = [
    { number: formatter.format(sorted?.totalAmount || 0) || 0 },
    { number: formatter.format(sorted?.successfulAmount || 0) || 0},
    { number: formatter.format(sorted?.pendingAmount || 0) || 0},
    { number: formatter.format(sorted?.failedAmount || 0) || 0},
  ];
  useEffect(() => {
    setuserDetails(JSON.parse(localStorage.getItem("userDetails")))
    setData(JSON.parse(localStorage.getItem("userDetails")));
  },[])
  useEffect(() => {

    setLoading(true)
    const userId = JSON.parse(localStorage.getItem("userDetails"))
    settrx(userId?.data?.payOutTransactions);
    setLoading(false)

    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        // const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
        // const result = await response.json();
        
        // Set the fetched data to state
        setData(userId);
        // setData(result);
        setLoading(false)
        settrx(userId?.data?.payOutTransactions);
        // localStorage.setItem("userDetails",JSON.stringify(result))
        localStorage.setItem("userDetails",JSON.stringify(result))
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
  const columns = [
    {
      title: "ACTIONS",
      dataIndex: "action",
      fixed: "left",
      /*   sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 1,
      }, */
      width: 130,
    },
    {
      title: "CLIENT ID",
      dataIndex: "id",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter id'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.id?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 140,
    },
    {
        title: "REQUEST STATUS",
        dataIndex: "statusNew",
        width: 160,
    },
    {
      title: "AMOUNT REQUESTED",
      dataIndex: "amountRequested",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter amount'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.amountRequested?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 190,
      render: (item) => formatters.format(item) ,
    },
    {
      title: "AMOUNT APPROVED",
      dataIndex: "amountApproved",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter amount'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.amountRequested?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 190,
      render: (item) => formatters.format(item) ,
    },
    {
      title: "CHARGES",
      dataIndex: "charges",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter amount'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.amountRequested?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 190,
      render: (item) => formatters.format(item) ,
    },
    {
      title: "BALANCE",
      dataIndex: "userWallet.balance",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter amount'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.amountRequested?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 190,
      render: (item) => formatters.format(item) ,
    },
    {
      title: "BALANCE BEFORE REQUEST",
      dataIndex: "balanceBeforeRequest",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter amount'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.amountRequested?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 190,
      render: (item) => formatters.format(item) ,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      width: 160,
    },
    {
      title: "NAME",
      dataIndex: "clientName",
      width: 190,

      //render: () => "Other",
    },
    // {
    //   title: "COMMENT",
    //   dataIndex: "comment",
    //   filterIcon: <IconSearch />,
    //   filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
    //     return (
    //       <div className='arco-table-custom-filter'>
    //         <Input.Search
    //           ref={inputRef}
    //           searchButton
    //           placeholder='Please enter comment'
    //           value={filterKeys[0] || ''}
    //           onChange={(value) => {
    //             setFilterKeys(value ? [value] : []);
    //           }}
    //           onSearch={() => {
    //             confirm();
    //           }}
    //         />
    //       </div>
    //     );
    //   },
    //   onFilter: (value, row) => (value ? row?.comment?.toString().indexOf(value) !== -1 : true),
    //   onFilterDropdownVisibleChange: (visible) => {
    //     if (visible) {
    //       setTimeout(() => inputRef.current.focus(), 150);
    //     }
    //   },
    //   sorter: (a, b) => {
    //     if (a.id > b.id) {
    //       return 1;
    //     }
    //     if (a.id < b.id) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   //render: () => "Other 1",
    //   width: 220,
    // },
    // {
    //   title: "EMAIL",
    //   dataIndex: "email",
    //   width: 220,
    //   //render: () => "Other 2",
    // },
    // {
    //   title: "MOBILE NO",
    //   dataIndex: "phone",
    //   width: 150,
    // },
    {
      title: "DATE ADDED",
      dataIndex: "dateCreated",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter dateCreated'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row?.dateCreated?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      },
      width: 220,
    },
  ];
  const [active, setActive] = useState();

    const newData = data2?.data?.map((item, index) => {
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
              {/* <div
                onClick={() => {
                  // mutate({
                  //   updatedBy: userDetails?.userId,
                  //   objectId: item?.id,
                  //   action: 1,
                  // });
                  handlePayoutUpdate(1,item?.id,userDetails?.userId)
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
              </div> */}
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
                  handlePayoutUpdate(0,item?.id,userDetails?.userId)
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
                Cancel
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
    };
  });

  const handlePayoutUpdate = async (action,id,user) => {
    // var raw = "{\n    \"updatedBy\" : 0,\n    \"objectId\" :78053836,\n    \"action\" :1\n}";

var requestOptions = {
  method: 'POST',
  body: JSON.stringify({
    updatedBy:parseInt(user),
    objectId:parseInt(id),
    action:parseInt(action)
  }),
  redirect: 'follow'
};

const response = await fetch("https://apidoc.transferrocket.co.uk//processwalletfundingrequest", requestOptions)
const data = await response.json()
  console.log("🚀 ~ file: Overview.jsx:458 ~ handlePayoutUpdate ~ data:", data)
  
  if (data?.status) {
    window.location.reload()
  }


  }

  const downloadCsv = () => {
    const head = ['id', 'requeststatus', 'amount','amountApproved','charges','balance','balanceBeforeRequest','walletid' ,'status', 'name', 'comment','currency','date'];
    const headers = Object.values(head).toString();
  
    const myData = newData;
    const formattedData = [];
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    const fileName = `requestlogs_${currentDate}.csv`;
  
    for (let i = 0; i < myData.length; i++) {
      formattedData.push({
        // transactionref: myData[i].clientRef,
        sn: i + 1,
        status: myData[i].status,
        id: myData[i].id,
        requeststatus: myData[i]?.status || null,
        amount: myData[i]?.amountRequested || null,
        amountApproved: myData[i]?.amountApproved || null,
        charges: myData[i]?.charges || null,
        balance: myData[i]?.userWallet?.balance || null,
        balanceBeforeRequest: myData[i]?.balanceBeforeRequest || null,
        walletid: myData[i]?.userWallet?.walletId || null,
        clientName: myData[i].clientName || null,
        comment: myData[i].comment || null,
        currency: myData[i].userWallet.currency?.code || null,
        dateCreated: myData[i].dateCreated,
     
      });
    }
  
    console.log(formattedData);
  
    const objValues = formattedData.map(item => Object.values(item).toString());
    const csv = [headers, ...objValues].join('\n');
  
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.download = fileName;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(blob);
  };

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
        <Content>
        <div className="tablecontent">
        <div className="content" style={{display:"flex",justifyContent:"space-between"}}>
          <div className="heading">Client Fund Request Log </div>
          <div className="heading" onClick={downloadCsv}>
           <Btn>
              <small> 
                
                <IconDownload/>
                request log</small>

           </Btn>
        
          </div>
        </div>

        {
        show ? (
          <Modal loading={loading} modalName="Client Fund Request Details" cancleModal={() => setShow(!show)} handleSubmit={() => {
            setLoading(true)
            const handleDownloadPDF = () => {
              const input = document.getElementById('content-to-pdf');
        
              html2canvas(input)
                .then((canvas) => {
                  const imgData = canvas.toDataURL('image/png');
                  const pdf = new jsPDF('p', 'mm', 'a4');
                  const imgWidth = 100; // Reduce image width
                  const imgHeight = (canvas.height * imgWidth) / canvas.width;
                  const x = (pdf.internal.pageSize.width - imgWidth) / 2; // Center horizontally
                  const y = (pdf.internal.pageSize.height - imgHeight) / 6; // Center vertically
        
                  pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight); // Add image at centered position
                  pdf.save('downloaded-pdf.pdf');
                  setLoading(false)
                  setShow(false)
                });
            }
            handleDownloadPDF()

          }} showcancel={true} btn="download receipt">
            <Pdf download={downloadPdf} name="test">
            <div className="parentflex">
              <br/>
              <br/>
            <div className="innerflex">
                <p className="boldlight">Client Name</p>
                <p className="bold" style={{fontSize:"11px"}}>{TransactionDetails?.clientName}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Amount Approved</p>
                <p className="bold">{formatters.format(TransactionDetails?.amountApproved)}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Amount Requested</p>
                <p className="bold">{formatters.format(TransactionDetails?.amountRequested)}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Transaction Date</p>
                <p className="bold">{TransactionDetails?.dateCreated}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Wallet</p>
                <p className="bold">{TransactionDetails?.userWallet?.name}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Balance BeforeRequest</p>
                <p className="bold">{formatters.format(TransactionDetails?.amountRequested)}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Comment</p>
                <p className="bold" style={{fontSize:"11px"}}>{TransactionDetails?.comment}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Id</p>
                <p className="bold">{TransactionDetails?.id}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Currency</p>
                <p className="bold">{TransactionDetails?.userWallet?.currency?.code === "NGN" ? (<img src={ngFlag} />) : TransactionDetails?.currency?.code}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">status</p>
                <p className="bold">{TransactionDetails?.status}</p>
              </div>
              {/* <div className="innerflex">
                <p className="boldlight">Note</p>
                <p className="bold">{TransactionDetails?.note}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Payout message</p>
                <p className="bold">{TransactionDetails?.payoutProviderMessage}</p>
              </div> */}
            </div>
            </Pdf>

          </Modal>
        ) : ""
      }

        <CustomTable
          noData={data2?.data?.length}
          // loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
          showTheModal={(e) => {
            setShow(!show)
            setTransactionDetails(e?.trnx)
          }}
        />
        </div>

        </Content>
       <Tranx type="overview"/>
      
      
      </OverviewContainer>
    </Layout>
  );
};

export default Overview;


const Content = styled.div`

.parentflex{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 10px;
  justify-content: center;
  max-height: 413px;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    color: #e2dfdf;
  }

  .innerflex{
    display: flex;
    padding-inline: 10px;
   align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e2dfdf;
    gap: 10px;
    .boldlight{
      text-transform: capitalize;
      color: #687182;
    }
    .bold{
      font-size: 12px;
      font-weight: light;
    }
  }
}

small {
    font-size: 60%;
}
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
  /* table {
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
    } */
  /* } */
`;
