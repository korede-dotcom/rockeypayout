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

function TransactionList({ data }) {
  const [sortdate, setSortDate] = useState(0);
  const [datar, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [trx, settrx] = useState(null);
  const [loading, setLoading] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("🚀 ~ file: Tranx.jsx:20 ~ TransactionList ~ userDetails:", userDetails)
  const location = useLocation();

  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {

    if (window.location.pathname === "/transaction") {
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
        
    }else{

        const userId = JSON.parse(localStorage.getItem("userDetails"))
        const currencyFromQuery = queryParams.get('currency');
        const id = parseInt(queryParams.get('id'));
        console.log("🚀 ~ file: Tranx.jsx:69 ~ useEffect ~ id:", id)
    
        const fetchData = async () => {
          try {
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
    
            const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
            const result = await response.json();
            console.log("🚀 ~ file: Tranx.jsx:79 ~ fetchData ~ result:", result)
            
            // Set the fetched data to state
            setData(result);
            setLoading(false)
            const filterTrnx = result?.data?.payOutTransactions?.filter(d => d?.payOutProvider?.id === id && d?.country?.currencyCode === currencyFromQuery)
            console.log("🚀 ~ file: Tranx.jsx:84 ~ fetchData ~ filterTrnx:", filterTrnx)
            settrx(filterTrnx);
            localStorage.getItem("userDetails",JSON.stringify(result))
            console.log("Fetched data:", result);
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors here
          }
        };
    
        // Call the fetch function
        fetchData();

    }
    // setLoading(true)
  }, [queryParams.get('currency')]);




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
      /*   sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 1,
      }, */
      width: 160,
    },
    {
      title: "ID",
      dataIndex: "id",
      /*   sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 1,
      }, */
      width: 160,
    },
    {
      title: "TRANSACTION STATUS",
      dataIndex: "statusNew",
      width: 180,
    },
    {
      title: "DATE",
      dataIndex: "dateCreated",
      width: 250,
    },
    {
      title: "CLIENT",
      dataIndex: "payoutClientApp['appName']",
      width: 190,
    },
    {
      title: "GATEWAY",
      dataIndex: "newGateWay",
      width: 230,

      //render: () => "Other",
    },
    {
      title: "RECEIVER",
      dataIndex: "beneficiary['beneficiaryName']",
      //render: () => "Other 1",
      width: 220,
    },
    {
      title: "BANK",
      dataIndex: "beneficiary['beneficiaryBank']['bankName']",
      width: 200,
      //render: () => "Other 2",
    },
    {
      title: "ACCOUNT NO",
      dataIndex: "beneficiary['beneficiaryBank']['accountNumber']",
      width: 140,
    },
    {
      title: "CURRENCY",
      dataIndex: "country['currencyCode']",
      width: 100,
    },
    {
      title: "AMOUNT",
      dataIndex: "Amount",
      width: 120,
      render: (item) => kFormatter4(item),
    },
    {
      title: "TRANSFER FEE",
      dataIndex: "transferFee",
      width: 120,
    },
  ];

  const newData = trx?.map((item) => {
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

  console.log(newData);

  return (
    <Content>
      <div className="tablecontent">
        <div className="content">
          <div className="heading">Payout Transactions List </div>
        </div>

        <CustomTable
          noData={trx?.length}
        //   loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
        />

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
