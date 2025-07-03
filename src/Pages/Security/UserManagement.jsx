import React, { useState,useEffect } from "react";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import {
  ManagBody,
  ManagHead,
  WebhooksBody,
  WebhooksHHead,
} from "../../Mapables";
import Modal from "../../Reuseable/Modal";
// import Modal from '../../Reuseable/Modal'
import styled from "styled-components";
//
import add from "../../assets/add.svg";
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import OInput from "../Onboarding/OnboardingInput/OInput";
import mail from "../../assets/mail.svg";
import choose from "../../assets/choose.svg";
import CustomTable from "../../reuseables/CustomTable";
import toast from "react-hot-toast";
import Selects from 'react-select';
import { roles } from "../../../config/Test";

const UserManagement = () => {
  const [sho, setShow] = useState(false);
  const [getUser, setUser] = useState(false);
  const [getDev, setDev] = useState(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [info2, setInfo2] = useState(null);
   const [roles, setRoles] = useState([]);

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem("userDetails")))
    },[])
  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem("userDetails")))
    },[sho])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userDetails")))
    },[getUser])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
  
          const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
          const result = await response.json();
          

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
      fetchRoles()
    },[])

      const fetchRoles = async () => {
        const requestOptions = {
            method: "GET",
            // redirect: "follow",
          };
    
        const response = await fetch("https://apidoc.transferrocket.co.uk//getroles", requestOptions);
        const result = await response.json();
        console.log("🚀 ~ fetchRoles ~ result:", result.data)
        setRoles(result.data || roles?.data);
        

      };
    


  const [createUser,setCreateUser] = useState({
    developerName : "",
    username : "",
    password : "",
    "staffRole" : {
        "id" : undefined,
    }
})
  console.log("🚀 ~ file: UserManagement.jsx:28 ~ UserManagement ~ createUser:", createUser)

const handleOnChange = (e) => {
  const {name,value} = e.target;
  setCreateUser(prev => {
    return{...prev,[name]:value.toLowerCase()}
  })
  
}

const submitUser = async () => {
  setLoading(true)
var requestOptions = {
  method: 'POST',
  body: JSON.stringify(createUser),
  redirect: 'follow'
};


// const response = await fetch(`https://apidoc.transferrocket.co.uk//addpayoutclientdeveloper/${getUser?.data?.userId}`, requestOptions)
const response = await fetch(`https://apidoc.transferrocket.co.uk//addpayoutsupportstaff/${getUser?.data?.userId}`, requestOptions)
const data = await response?.json();

if (data?.status) {
setUser(data)
const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${getUser?.data?.userId}`);
const result = await response.json();
console.log("🚀 ~ file: UserManagement.jsx:100 ~ submitUser ~ result:", result)

setUser(result)
localStorage.setItem("userDetails",JSON.stringify(result))
  toast.success(data?.message)
  setLoading(false)
  setTimeout(() => {
    setInfo(null)
    setShow(!sho)
  },1000)
  window.location.reload()
}else{
  // setShow(!sho)
  // setInfo2(data?.message)
  const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${getUser?.data?.userId}`);
const result = await response.json();
console.log("🚀 ~ file: UserManagement.jsx:100 ~ submitUser ~ result:", result)

setUser(result)
  setLoading(false)
  toast.error(data?.message)
  setTimeout(() => {
    setInfo2(null)
    setShow(!sho)
  },1500)

}
}

const handleCancel =() => {
  setLoading(false)
  setInfo(null)
  setInfo2(null)
  setShow(!sho)
}

const roleOptions = [
  ...roles
    .filter(role => ["PC Developer", "PC Support"].includes(role.name))
    .map(role => ({ value: role.id, label: role.name }))
];

const [selectedRole, setSelectedRole] = useState(null);
const handleRoleChange = (selectedOption) => {
  setSelectedRole(selectedOption);
  setCreateUser(prev => ({
    ...prev,
    staffRole: {
      id: selectedOption.value
    }
  }));
};


const columns = [
  // {
  //   title: "ACTIONS",
  //   dataIndex: "action",
  //   fixed: "left",
  //   /*   sorter: {
  //     compare: (a, b) => a.name - b.name,
  //     multiple: 1,
  //   }, */
  //   width: 130,
  // },
  {
    title: "NAME",
    dataIndex: "developerName",
    width: 140,
  },
  {
      title: "EMAIL",
      dataIndex: "username",
      width: 160,
  },
  {
      title: "ROLE",
      dataIndex: "role",
      width: 160,
  },
  {
    title: "USERID",
    dataIndex: "userId",
    width: 190,
  },
  {
    title: "DATE CCREATED",
    dataIndex: "dateCreated",
    width: 160,
  },
  // {
  //   title: "NAME",
  //   dataIndex: "clientName",
  //   width: 190,

  //   //render: () => "Other",
  // },
  // {
  //   title: "COMMENT",
  //   dataIndex: "comment",
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
    width: 220,
  },
];

const newData = getUser?.data?.payOutClientDevelopers?.reverse()?.map((item, index) => {
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
  // const [mod, setMod] = useState(false);

  return (
    <Layout>
      <UserWrapper>
        <div className="usertitle">
          <div className="left">
            <h1>Account Management</h1>
            <p>
             List of Users
            </p>
          </div>
          <div className="rightside">
            <p onClick={() => setShow(true)}>
              <img src={add} alt="" />
              <span>New User</span>
            </p>
            {sho && (
              <Modal
                height="490px"
                width="350px"
                setShow={setShow}
                setPayout={setShow}
                modalName="New User"
                btn="Create"
                handleSubmit={submitUser}
                cancleModal={handleCancel}
                loading={loading}
              >
                <Usermodal>
                  <p style={{color:`${info && "green" || info2 && "red"}`}}>{info || info2}</p>
                  <OInput label="Full Name" name="developerName" placeholder="Sun Earth" onChange={handleOnChange} />
                  <Email>
                    <p>Email</p>
                    <div className="inner">
                      <img src={mail} alt="" />
                      <input type="email" placeholder="sunearthweb@gmail.com" name="username" onChange={handleOnChange}  />
                    </div>
                  </Email>
                  <br />
                  <Selects
                    placeholder="Select Role"
                    styles={{
                      control: styles => ({
                        ...styles,
                        backgroundColor: 'white',
                        padding:"5px",
                        // width: 554,
                        borderRadius:"8px",
                        border: "1px solid #d0d5dd",
                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                        // border: 'none', // Remove the border
                        // boxShadow: 'none', // Remove the box shadow
                      }),
                      singleValue: styles => ({
                        ...styles,
                        color: '#000'
                      }),
                      option: (styles, { isFocused }) => ({
                        ...styles,
                        backgroundColor: isFocused ? 'rgb(0, 168, 90)' : '#ededed',
                        color: isFocused ? 'white' : 'black'
                      })
                  
                      // Custom styles if needed
                    }}
                    value={selectedRole}
                    onChange={handleRoleChange}
                    options={roleOptions}
                    name="staffRole"
                  />
                 
                  <OInput label="Password" type="password" placeholder="Password" name="password" onChange={handleOnChange}/>
                  {/* <Role>
                    <label htmlFor="email">Role</label>
                    <div className="inner">
                      <input type="password" placeholder="Choose role"  name="password"/>
                      <img src={choose} alt="" />
                    </div>
                  </Role> */}
                </Usermodal>
              </Modal>
            )}
          </div>
        </div>{" "}
        <CustomTable
          noData={getUser?.data?.payOutClientDevelopers?.length}
          // loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
        />
       
      </UserWrapper>
    </Layout>
  );
};

export default UserManagement;

const UserWrapper = styled.div`
  .usertitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 5px;
      h1 {
        color: #090814;
        font-size: 22px;
        font-weight: 500;
      }
      p {
        color: #848d87;
        font-size: 12px;
        font-weight: 400;
      }
    }
    .rightside {
      border-radius: 6px;
      background: #00a85a;
      box-shadow: 0px 0px 0px 1px #00a85a, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 10px;
      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        img {
          width: 15px;
        }
        span {
          color: #fff;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.32px;
        }
      }
    }
  }
`;

const TableWrap = styled.div`
  width: 100%;
  table {
    margin-top: 40px;
    width: 100%;
    thead {
      tr {
        border-top: 1px solid #e9edf5;
        border-bottom: 1px solid #e9edf5;
        background: #f9fafb;
        th {
          padding: 10px;
          text-align: start;
          color: #687182;
          border-collapse: collapse;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          img {
            width: 13px;
          }
          .col {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }
        th:nth-child(1) {
          width: 45%;
          padding-left: 20px;
        }
        th:nth-child(2) {
          width: 30%;
        }
        th:nth-child(3) {
          width: 15%;
        }
        th:nth-child(4) {
          width: 10%;
          padding-right: 20px;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #e9edf5;
        td {
          color: #5a6376;
          font-size: 11px;
          font-weight: 400;
          // line-height: 20px;
          padding: 10px;
          text-align: start;
        }
        td:nth-child(1) {
          width: 45%;
          // border: 2px solid red;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
          img {
            width: 30px;
          }
          .par {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .name {
              color: #101828;
              font-size: 12px;
              font-weight: 500;
            }
            .email {
              color: #5a6376;
              font-size: 11px;
              font-weight: 400;
            }
          }
        }
        td:nth-child(2) {
          width: 30%;
        }
        td:nth-child(3) {
          width: 15%;
        }
        td:last-child {
          width: 10%;
          padding-right: 20px;

          .sp_active {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #ecfdf3;
            padding: 8px 15px;
            color: #027a48;
            text-align: center;
            font-size: 12px;
            font-weight: 500;
          }
          .sp_inactive {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #fef3f2;
            padding: 8px 15px;
            color: #b42318;
            text-align: center;
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

const Usermodal = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  margin: 15px 0 5px;
  width: 100%;
  label {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
  }
  .inner {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 35px;
    width: 100%;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    input {
      outline: none;
      width: 100%;
      border: none;
      color: black;
      font-weight: 300;
      /* text-transform: capitalize; */
      &::placeholder {
        color: #a1a9b8;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;

const Role = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
row-gap: 5px;
margin: 15px 0 5px;
width: 100%;
label {
  color: #344054;
  font-size: 12px;
  font-weight: 400;
}
.inner {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 35px;
  width: 100%;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  input {
    outline: none;
    width: 100%;
    border: none;
    color: black;
    font-weight: 300;
    /* text-transform: capitalize; */
    &::placeholder {
      color: #a1a9b8;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
`;