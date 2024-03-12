import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import CustomTable from "../reuseables/CustomTable";
import { useQuery } from "@tanstack/react-query";
import { QueryParams } from '../reuseables/QueryParams';
import { useLocation } from "react-router-dom";
// import { getPayoutClientDashboard } from "../services/PayoutDashboard";
import { kFormatter4 } from "../utils/format";
import {  useRef } from 'react';
import { Table, Input, Button } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import Btn from "./Btn";
import Loader from "../Reuseable/Loader";
import { IconDownload } from "@arco-design/web-react/icon";
import Modal from "../Reuseable/Modal";
import ngFlag from "../assets/ngn.svg"
import Pdf from "../Reuseable/Pdf";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DatePicker, Space } from '@arco-design/web-react';
import { IconInfoCircle } from '@arco-design/web-react/icon';
import toast from "react-hot-toast";

function TransactionList({ type }) {
  const inputRef = useRef(null);
  const [sortdate, setSortDate] = useState(0);
  const [datar, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [trx, settrx] = useState(null);
  const [trxsort, settrxsort] = useState(null);
  const [trxsort2, settrxsort2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showDate, setshowDate] = useState(false);
  const [dateQuery, setdateQuery] = useState("");
  const [downloadPdf, setdownloadPdf] = useState(false);
  const [TransactionDetails, setTransactionDetails] = useState("");


  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("🚀 ~ file: Tranx.jsx:20 ~ TransactionList ~ userDetails:", userDetails)
  const location = useLocation();

  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  
  const formatter = new Intl.NumberFormat();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (event) => {
    console.log("🚀 ~ file: Tranx.jsx:38 ~ handleSearch ~ event.target.value:", event.target.value)
    setSearchQuery(event.target.value);
  };

 


  // const formattedValue = formatter.format(123456.78);
  // console.log(formattedValue);
  const fecther = async () => {
    const userId = JSON.parse(localStorage.getItem("userDetails"))
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
    const result = await response.json();
    location.setItem("test",JSON.stringify(result))
    
  }
  

  useEffect(() => {
    fecther()


    if (window.location.pathname === "/transaction") {
        const userId = JSON.parse(localStorage.getItem("userDetails"))
    
        const fetchData = async () => {
          try {
          
            // const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
            // const result = await response.json();
            
            // Set the fetched data to state
            setData(userId);
            // setLoading(false)
            settrx(userId?.data?.payOutTransactions);
            // localStorage.getItem("userDetails",JSON.stringify(result))
            // console.log("Fetched data:", result);
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors here
          }
        };
    
        // Call the fetch function
        fetchData();
        
    }else{

        const userId = JSON.parse(localStorage.getItem("userDetails"))
        console.log("🚀 ~ file: Tranx.jsx:87 ~ useEffect ~ userId:", userId)
        const currencyFromQuery = queryParams.get('currency');
        const id = parseInt(queryParams.get('id'));
        console.log("🚀 ~ file: Tranx.jsx:69 ~ useEffect ~ id:", id)
      let gatewaytrx;
        const fetchData = async () => {
          try {
            // const requestOptions = {
            //   method: 'GET',
            //   redirect: 'follow'
            // };
    
            // const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
            // const result = await response.json();
            // console.log("🚀 ~ file: Tranx.jsx:79 ~ fetchData ~ result:", result)
            
            // // Set the fetched data to state
            // setData(result);
            // setLoading(false)
            const filterTrnx = userId?.data?.payOutTransactions?.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).slice(0, 20) // Sort in descending order.slice(0, 20); // Get the first 20 transactions
           switch (type) {
            case "overview":
              settrxsort(filterTrnx);
              
              break;
            case `${queryParams.get('id')-queryParams.get('name')}`:
               gatewaytrx = userId?.data?.payOutTransactions?.filter(d => d?.payOutProvider?.id === parseInt(queryParams.get('id')) && d?.currency.id === parseInt(queryParams.get('cid')) && d?.currency.code.toString() === queryParams.get('currency').toString())
               console.log("🚀 ~ file: Tranx.jsx:116 ~ fetchData ~ gatewaytrx:", gatewaytrx)
              settrxsort2(gatewaytrx);
              
              break;
           
            default:
              break;
           }
            console.log("🚀 ~ file: Tranx.jsx:84 ~ fetchData ~ filterTrnx:", filterTrnx)
            // localStorage.getItem("userDetails",JSON.stringify(result))
            // console.log("Fetched data:", result);
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors here
          }
        };
    
        // Call the fetch function
        fetchData();

    }
    // setLoading(true)
  }, [queryParams.get('currency'),queryParams.get('id')]);




//   const {
//     data: clients,
//     isLoading,
//     isFetching,
//     isError,
//   } = useQuery({
//     queryKey: ["clients"],
//     queryFn: () => getPayoutClientDashboard(userDetails?.userId),
//   });

//   console.log(clients);

const columns = [
    {
      title: "TRANSACTION REF",
      dataIndex: "clientRef",
      fixed: "left",
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter transaction ref'
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
      onFilter: (value, row) => (value ? row?.clientRef?.toString().indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.clientRef > b.clientRef) {
          return 1;
        }
        if (a.clientRef < b.clientRef) {
          return -1;
        }
        return 0;
      },
      sortDirections: ["descend", "ascend"],
      // width: 160,
      
    },
    {
      title: "TRANSACTION STATUS",
      dataIndex: "statusNew",
      sorter: (a, b) => {
        if (a.statusNew > b.statusNew) {
          return 1;
        }
        if (a.statusNew < b.statusNew) {
          return -1;
        }
        return 0;
      },
      // width: 180,
    },
    {
      title: "DATE",
      dataIndex: "dateCreated", 
       filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter date'
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
      onFilter: (value, row) => (value ? row?.dateCreated?.indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.dateCreated > b.dateCreated) {
          return 1;
        }
        if (a.dateCreated < b.dateCreated) {
          return -1;
        }
        return 0;
      },
      width: 250,
    },
    // {
    //   title: "APP",
    //   dataIndex: "payoutClientApp['appName']",
    //   sorter: (a, b) => {
    //     if (a.payoutClientApp.appName > b.payoutClientApp.appName) {
    //       return 1;
    //     }
    //     if (a.payoutClientApp.appName < b.payoutClientApp.appName) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 190,
    // },
    // {
    //   title: "GATEWAY",
    //   dataIndex: "newGateWay",
    //   filterIcon: <IconSearch />,
    //   filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
    //     return (
    //       <div className='arco-table-custom-filter'>
    //         <Input.Search
    //           ref={inputRef}
    //           searchButton
    //           placeholder='Please enter gateway'
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
    //   onFilter: (value, row) => (value ? row?.newGateWay?.indexOf(value) !== -1 : true),
    //   onFilterDropdownVisibleChange: (visible) => {
    //     if (visible) {
    //       setTimeout(() => inputRef.current.focus(), 150);
    //     }
    //   },
    //   sorter: (a, b) => {
    //     if (a.newGateWay > b.newGateWay) {
    //       return 1;
    //     }
    //     if (a.newGateWay < b.newGateWay) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 230,

    //   //render: () => "Other",
    // },
    // {
    //   title: "RECEIVER",
    //   dataIndex: "beneficiary['beneficiaryName']",
    //   filterIcon: <IconSearch />,
    //   filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
    //     return (
    //       <div className='arco-table-custom-filter'>
    //         <Input.Search
    //           ref={inputRef}
    //           searchButton
    //           placeholder='Please enter name'
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
    //   onFilter: (value, row) => (value ? row?.beneficiary.beneficiaryName?.indexOf(value) !== -1 : true),
    //   onFilterDropdownVisibleChange: (visible) => {
    //     if (visible) {
    //       setTimeout(() => inputRef.current.focus(), 150);
    //     }
    //   },

    //   sorter: (a, b) => {
    //     if (a.beneficiary.beneficiaryName > b.beneficiary.beneficiaryName) {
    //       return 1;
    //     }
    //     if (a.beneficiary.beneficiaryName < b.beneficiary.beneficiaryName) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 220,
    // },
    // {
    //   title: "BANK",
    //   dataIndex: "beneficiary['beneficiaryBank']['bankName']",
    //   filterIcon: <IconSearch />,
    //   filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
    //     return (
    //       <div className='arco-table-custom-filter'>
    //         <Input.Search
    //           ref={inputRef}
    //           searchButton
    //           placeholder='Please enter gateway'
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
    //   onFilter: (value, row) => (value ? row?.beneficiary.beneficiaryBank.bankName?.indexOf(value) !== -1 : true),
    //   onFilterDropdownVisibleChange: (visible) => {
    //     if (visible) {
    //       setTimeout(() => inputRef.current.focus(), 150);
    //     }
    //   },
    //   sorter: (a, b) => {
    //     if (a.beneficiary.beneficiaryBank.bankName > b.beneficiary.beneficiaryBank.bankName) {
    //       return 1;
    //     }
    //     if (a.beneficiary.beneficiaryBank.bankName < b.beneficiary.beneficiaryBank.bankName) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 200,
    //   //render: () => "Other 2",
    // },
    // {
    //   title: "ACCOUNT NO",
    //   dataIndex: "beneficiary['beneficiaryBank']['accountNumber']",
    //   sorter: (a, b) => {
    //     if (a.beneficiary.beneficiaryBank.accountNumber > b.beneficiary.beneficiaryBank.accountNumber) {
    //       return 1;
    //     }
    //     if (a.beneficiary.beneficiaryBank.accountNumber < b.beneficiary.beneficiaryBank.accountNumber) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 140,
    // },
    {
      title: "RECEIVER",
      dataIndex: 'beneficiary',
      render: (text, record) => {
        // const { beneficiaryName, beneficiaryBank, beneficiaryAccountNumber } = record?.beneficiary;
        return `${record?.beneficiary?.beneficiaryName && record?.beneficiary?.beneficiaryName} [${record?.beneficiary?.beneficiaryBank?.bankName} - ${record?.beneficiary?.beneficiaryBank?.accountNumber}]`;
      },
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter name'
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
      onFilter: (value, row) => (value ? row?.beneficiary.beneficiaryName?.indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
      sorter: (a, b) => {
        if (a.beneficiary.beneficiaryName > b.beneficiary.beneficiaryName) {
          return 1;
        }
        if (a.beneficiary.beneficiaryName < b.beneficiary.beneficiaryName) {
          return -1;
        }
        return 0;
      },
      // width: 20,
    },
    // Other columns...
    
    // {
    //   title: "CURRENCY",
    //   dataIndex: "country['currencyCode']",
    //   sorter: (a, b) => {
    //     if (a.country.currencyCode > b.country.currencyCode) {
    //       return 1;
    //     }
    //     if (a.country.currencyCode < b.country.currencyCode) {
    //       return -1;
    //     }
    //     return 0;
    //   },
    //   width: 100,
    // },
    {
      title: "AMOUNT",
      dataIndex: "Amount",
      width: 120,
      sorter: (a, b) => {
        if (a.Amount > b.Amount) {
          return 1;
        }
        if (a.Amount < b.Amount) {
          return -1;
        }
        return 0;
      },
      filters: [
        {
          text: '> 20000',
          value: '20000',
        },
        {
          text: '> 30000',
          value: '30000',
        },
      ],
      defaultFilters: ['0'],
      onFilter: (value, row) => row.Amount > value,
      render: (item) => formatter.format(item) ,
    },
    {
      title: "TRANSFER FEE",
      dataIndex: "transferFee",
      sorter: (a, b) => {
        if (a.transferFee > b.transferFee) {
          return 1;
        }
        if (a.transferFee < b.transferFee) {
          return -1;
        }
        return 0;
      },
      width: 120,
    },
    {
      title: "WALLET BALANCE",
      dataIndex: "walletBalance",
      sorter: (a, b) => {
        if (a.transferFee > b.transferFee) {
          return 1;
        }
        if (a.transferFee < b.transferFee) {
          return -1;
        }
        return 0;
      },
      width: 120,
    },
    {
      title: "PAYOUT PROVIDER STATUS",
      dataIndex: "payoutProviderStatus",
      sorter: (a, b) => {
        if (a.payoutProviderStatus > b.payoutProviderStatus) {
          return 1;
        }
        if (a.payoutProviderStatus < b.payoutProviderStatus) {
          return -1;
        }
        return 0;
      },
      // width: 120,
    },
    {
      title: "PAYOUT PROVIDER MESSAGE",
      dataIndex: "payoutProviderMessage",
      // font size
      sorter: (a, b) => {
        if (a.payoutProviderMessage > b.payoutProviderMessage) {
          return 1;
        }
        if (a.payoutProviderMessage < b.payoutProviderMessage) {
          return -1;
        }
        return 0;
      },
      // width: 120,
    },
  ];



  const newData = trx?.filter((item) =>
  Object.values(item).some((value) =>
    typeof value === 'string' &&
    value.toLowerCase().includes(searchQuery.toLowerCase())
  ))?.map((item) => {
    return {
      ...item,
      newGateWay: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "1000px",
              marginRight: "10px",
              objectFit: "cover",
            }}
            src={item?.payOutProvider["logo"]}
            alt=""
          />
          {item?.payOutProvider["name"]}
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
                item?.status === "Successful"
                  ? "#63ff706c"
                  : item?.status === "Pending"
                  ? "#FEF0C7"
                  : "#ff63634b",
              color:
                item?.status === "Successful"
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

  const newData2 = trxsort?.filter((item) =>
  Object.values(item).some((value) =>
    typeof value === 'string' &&
    value.toLowerCase().includes(searchQuery.toLowerCase())
  ))?.map((item) => {
    return {
      ...item,
      newGateWay: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "1000px",
              marginRight: "10px",
              objectFit: "cover",
            }}
            src={item?.payOutProvider["logo"]}
            alt=""
          />
          {item?.payOutProvider["name"]}
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
                item?.status === "Successful"
                  ? "#63ff706c"
                  : item?.status === "Pending"
                  ? "#FEF0C7"
                  : "#ff63634b",
              color:
                item?.status === "Successful"
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

  const newData3 = trxsort2?.filter((item) =>
  Object.values(item).some((value) =>
    typeof value === 'string' &&
    value.toLowerCase().includes(searchQuery.toLowerCase())
  ))?.map((item) => {
    return {
      ...item,
      newGateWay: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "1000px",
              marginRight: "10px",
              objectFit: "cover",
            }}
            src={item?.payOutProvider["logo"]}
            alt=""
          />
          {item?.payOutProvider["name"]}
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
                item?.status === "Successful"
                  ? "#63ff706c"
                  : item?.status === "Pending"
                  ? "#FEF0C7"
                  : "#ff63634b",
              color:
                item?.status === "Successful"
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


//  const filteredData = newData?.filter((item) =>
//     Object.values(item).some((value) =>
//       typeof value === 'string' &&
//       value.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

  console.log(newData);
  const downloadCsv = () => {
    const head = ['transactionref', 'id', 'status', 'dateCreated', 'appName', 'gateWay', 'receiver', 'bank', 'account', 'currency', 'Amount', 'transferFee', 'payoutProviderMessage', 'payoutProviderStatus'];
    const headers = Object.values(head).toString();
  
    const myData = newData;
    const formattedData = [];
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    const fileName = `transactions_${currentDate}.csv`;
  
    for (let i = 0; i < myData.length; i++) {
      formattedData.push({
        transactionref: myData[i].clientRef,
        id: myData[i].id,
        status: myData[i].status,
        dateCreated: myData[i].dateCreated,
        appName: myData[i]?.payoutClientApp?.appName || null,
        gateWay: myData[i].payOutProvider.name || null,
        receiver: myData[i].beneficiary.beneficiaryName,
        bank: myData[i].beneficiary.beneficiaryBank.bankName,
        account: myData[i].beneficiary.beneficiaryBank.accountNumber,
        currency: myData[i].currency?.code || null,
        Amount: myData[i].Amount,
        transferFee: myData[i].transferFee,
        payoutProviderMessage: myData[i].payoutProviderMessage,
        payoutProviderStatus: myData[i].payoutProviderStatus,
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

  const downloadOneTrnx = () => {
    if (downloadPdf) {
      setdownloadPdf(false)
    }else{
      setdownloadPdf(true)

    }
    return
    
    const downloadCsv = () => {
      const head = ['transactionref','dateCreated','beneficiaryName','bankName','currency','amount','status','note','payoutProviderMessage',];
      const headers = Object.values(head).toString();
    
      const myData = [TransactionDetails];
      console.log("🚀 ~ downloadCsv ~ myData:", myData)
      const formattedData = [];
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    
      const fileName = `transactions_${currentDate}.csv`;
    
      for (let i = 0; i < myData.length; i++) {
        formattedData.push({
          transactionref: myData[i]?.clientRef,
          dateCreated: myData[i].dateCreated,
          beneficiaryName: myData[i]?.beneficiary?.beneficiaryName,
          bankName: myData[i]?.beneficiary?.beneficiaryBank?.bankName,
          currency: myData[i]?.currency?.name,
          amount: myData[i]?.TransactionDetails?.Amount,
          status: myData[i]?.TransactionDetails?.status,
          note: myData[i]?.TransactionDetails?.note,
          payoutProviderMessage: myData[i]?.TransactionDetails?.payoutProviderMessage,
          // id: myData[i].id,
          // status: myData[i].status,
          // appName: myData[i]?.payoutClientApp?.appName || null,
          // gateWay: myData[i].payOutProvider.name || null,
          // receiver: myData[i].beneficiary.beneficiaryName,
          // bank: myData[i].beneficiary.beneficiaryBank.bankName,
          // account: myData[i].beneficiary.beneficiaryBank.accountNumber,
          // currency: myData[i].currency?.code || null,
          // Amount: myData[i].Amount,
          // transferFee: myData[i].transferFee,
          // payoutProviderMessage: myData[i].payoutProviderMessage,
          // payoutProviderStatus: myData[i].payoutProviderStatus,
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
    downloadCsv();
  }
 
  const queryDate = (e) => {
    if (!dateQuery.length > 0) {
    return toast.error("please input date range") 
    }
    setLoading(true)
    const fecther = async () => {
      const userId = JSON.parse(localStorage.getItem("userDetails"))
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      // Filter Payout Transaction By Date…. getpayouttransactionbydate?startDate=2024-01-02&endDate=2024-01-02
  
      const response = await fetch(`https://apidoc.transferrocket.co.uk/getpayouttransactionbydate?startDate=${dateQuery && dateQuery[0]}&endDate=${dateQuery && dateQuery[1]}`, requestOptions);
      const result = await response.json();
      if (!result.status) {
        return toast.error(result.message)
      }
      console.log("🚀 ~ fecther ~ result:", result)
      settrx(result.data)
      setLoading(false)
      // location.setItem("test",JSON.stringify(result))
      
    }
    fecther()
  }




// useEffect(() => {
//   if (dateQuery.length > 0) {
//     setLoading(true)
//     const fecther = async () => {
//       const userId = JSON.parse(localStorage.getItem("userDetails"))
//       const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
  
//       // Filter Payout Transaction By Date…. getpayouttransactionbydate?startDate=2024-01-02&endDate=2024-01-02
  
//       const response = await fetch(`https://apidoc.transferrocket.co.uk/getpayouttransactionbydate?startDate=${dateQuery && dateQuery[0]}&endDate=${dateQuery && dateQuery[1]}`, requestOptions);
//       const result = await response.json();
//       if (!result.status) {
//         return toast.error(result.message)
//       }
//       console.log("🚀 ~ fecther ~ result:", result)
//       settrx(result.data)
//       setLoading(false)
//       // location.setItem("test",JSON.stringify(result))
      
//     }
//     fecther()
//   }

// },[dateQuery.length > 0])




  return (
    <Content>
      {loading && <Loader/>}
      <div className="tablecontent">
        <div className="content" style={{display:"flex",justifyContent:"space-between"}}>
          <div className="heading flex">
            <p>Payout Transactions List </p>
          <div >
          <div className="smallflex">
            <DatePicker.RangePicker onClear={() => {
              settrx(userDetails?.data?.payOutTransactions), setdateQuery("")
            }} onChange={(e) => setdateQuery(e)} placeholder="filter by date" style={{ width: 270,padding:"18px",borderRadius:"8px",borderColor:"green",background:"transparent" }} prefix={<IconInfoCircle/>}/>
            <Btn clicking={queryDate}>
              <small>Submit</small>
            </Btn>
          </div>
          </div>
          </div>
          <div className="heading" onClick={downloadCsv}>
            <Btn >
              <small> 
                
                <IconDownload/>
                transaction</small>
            </Btn>
          </div>
          
        </div>

      {
        show ? (
          <Modal width="350px" loading={loading} modalName="Transaction details" cancleModal={() => setShow(!show)} handleSubmit={() => {
            setLoading(true)
          const handleDownloadPDF = () => {
              const input = document.getElementById('content-to-pdf');
              const parentflex = document.querySelector(".parentflex")

              // Download the image from the URL to the machine
              fetch(userDetails?.data?.logo)
                .then((response) => response.blob())
                .then((blob) => {
                  const url = window.URL.createObjectURL(blob);
                  const img = new Image();
                  
                  
                  img.src = url;
                  img.style.height = "60px"
                  img.style.width = "80px";
                  img.style.display ="flex";
                  img.style.justifyContent ="center";
                  img.style.margin ="auto";


                  // img.classList.add("logosize");
                  
                  // Append the Image element to the input element
                  input.insertBefore(img, parentflex)
                  // input.appendChild(img);
                  // Use html2canvas to capture the content of the input element
                  parentflex.style.height = "600px"
                  html2canvas(input)
                    .then((canvas) => {
                      // Remove the appended Image element from the input
                      input.removeChild(img);
                      
          
                      const imgData = canvas.toDataURL('image/png');
                      const pdf = new jsPDF('p', 'mm', 'a4');
                      const imgWidth = 100; // Reduce image width
                      const imgHeight = (canvas.height * imgWidth) / canvas.width;
                      const x = (pdf.internal.pageSize.width - imgWidth) / 2; // Center horizontally
                      const y = (pdf.internal.pageSize.height - imgHeight) / 6;
          
                      // Add image to PDF
                      pdf.addImage(imgData, 'PNG',x, y, imgWidth, imgHeight); // Adjust position and size as needed
          
                      // Add additional text or content if needed
                      // pdf.text('Additional text goes here', 10, 70); // Adjust position as needed
          
                      // Save PDF
                      pdf.save('downloaded-pdf.pdf');
                      setLoading(false); // Set loading state to false
                    });
                })
                .catch((error) => {
                  console.error('Error downloading image:', error);
                  setLoading(false); // Set loading state to false
                });
            }
            handleDownloadPDF()

          }} showcancel={true} btn="download receipt">
            <Pdf download={downloadPdf} name="test" logo={userDetails?.data?.logo}>
            <div className="parentflex">
              <br/>
              <br/>
              <div className="innerflex">
                <p className="boldlight">Transaction Reference</p>
                <p className="bold">{TransactionDetails?.clientRef}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Transaction Date</p>
                <p className="bold">{TransactionDetails?.dateCreated}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Receiver</p>
                <p className="bold" style={{fontSize:"11px"}}>{TransactionDetails?.beneficiary?.beneficiaryName}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Bank</p>
                <p className="bold">{TransactionDetails?.beneficiary?.beneficiaryBank?.bankName}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Currency</p>
                <p className="bold">{TransactionDetails?.currency?.code === "NGN" ? (<img src={ngFlag} />) : TransactionDetails?.currency?.code}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Amount</p>
                <p className="bold">{formatter.format(TransactionDetails?.Amount)}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">status</p>
                <p className="bold">{TransactionDetails?.status}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Note</p>
                <p className="bold">{TransactionDetails?.note}</p>
              </div>
              <div className="innerflex">
                <p className="boldlight">Payout message</p>
                <p className="bold">{TransactionDetails?.payoutProviderMessage}</p>
              </div>
            </div>
            </Pdf>

          </Modal>
        ) : ""
      }


      {
        type === "overview" ? (
          <CustomTable
             
            noData={trxsort?.length}
          //   loading={isLoading || isFetching}
            Apidata={newData2}
            tableColumns={columns}
            showTheModal={(e) => {
              setShow(!show)
              setTransactionDetails(e?.trnx)
            }}
          
          />

        ) : (type === `${queryParams.get('currency')-queryParams.get('name')}` ) ? (
          <CustomTable
            
          noData={trxsort2?.length}
        //   loading={isLoading || isFetching}
          Apidata={newData3}
          tableColumns={columns}
          showTheModal={(e) => {
            setShow(!show)
            setTransactionDetails(e?.trnx)
          }}
        />
        ) : (
          <CustomTable
            
          noData={trx?.length}
           showTheModal={(e) => {
             setShow(!show)
             setTransactionDetails(e?.trnx)
           }}
          //  handleClose={handleClose}
          //  setShowTheModal={setShowTheModal}
          //  dataForModal={dataForModal}
          //  columnsForModal = {modalColumn}
        //   loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
        />
        )
      }

        {/* <div className="row">
          <span>Showing 1-5 of entries</span>
          <div className="pagins">
            <p>Rows per page:</p>
            <select>
              <option>5</option>
            </select>
            <div className="arrow">
              <button
                onClick={() => {
                  // setSortDate(sortdate - 1);
                  // setEnd((prev) => prev - end);
                }}
              >
                <AiOutlineLeft />
              </button>
              <button>{sortdate}</button>
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Content>
  );
}

export default TransactionList;
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
.smallflex{
  display: flex;
  gap: 10px;
  align-items: center;
}
.flex{
  display: flex;
  gap: 30px;
  align-items: center;
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
