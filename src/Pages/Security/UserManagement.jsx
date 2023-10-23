import React, { useState } from "react";
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

const UserManagement = () => {
  const [sho, setShow] = useState(false);
  // const [mod, setMod] = useState(false);

  return (
    <Layout>
      <UserWrapper>
        <div className="usertitle">
          <div className="left">
            <h1>User Management</h1>
            <p>
              This overview provides a comprehensive snapshot of wallet
              transactions on your system
            </p>
          </div>
          <div className="rightside">
            <p onClick={() => setShow(true)}>
              <img src={add} alt="" />
              <span>New User</span>
            </p>
            {sho && (
              <Modal
                height="350px"
                width="350px"
                setShow={setShow}
                setPayout={setShow}
                modalName="New User"
                btn="Create"
              >
                <Usermodal>
                  <OInput label="Full Name" placeholder="Sun Earth" />
                  <Email>
                    <label htmlFor="email">Email</label>
                    <div className="inner">
                      <img src={mail} alt="" />
                      <input type="text" placeholder="sunearthweb@gmail.com" />
                    </div>
                  </Email>
                  <Role>
                    <label htmlFor="email">Role</label>
                    <div className="inner">
                      <input type="text" placeholder="Choose role" />
                      <img src={choose} alt="" />
                    </div>
                  </Role>
                </Usermodal>
              </Modal>
            )}
          </div>
        </div>{" "}
        <Box
          width="100%"
          height="350px"
          border="none"
          radius="15px"
          flexDirection="column"
          alignItems="flex-start"
          padding="20px 0"
          margin="20px 0"
        >
          <TableWrap>
            <table>
              <thead>
                <tr>
                  {ManagHead.map((m, i) => (
                    <th key={i}>
                      <span className="col">
                        <span>{m.name}</span>
                        {m.image}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ManagBody.map((m, i) => (
                  <tr key={i}>
                    <td>
                      <span>{m.image}</span>
                      <span className="par">
                        <span className="name">{m.name}</span>
                        <span className="email">{m.email}</span>
                      </span>
                    </td>
                    <td>{m.role}</td>
                    <td>{m.lastseen}</td>
                    <td>
                      {m.status === true ? (
                        <span className="sp_active">
                          <img src={gb} alt="" />
                          Active
                        </span>
                      ) : (
                        <span className="sp_inactive">
                          <img src={rb} alt="" />
                          Inactive
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>
        </Box>
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
      text-transform: capitalize;
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
    text-transform: capitalize;
    &::placeholder {
      color: #a1a9b8;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
`;