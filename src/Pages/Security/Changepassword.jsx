import React,{useState} from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Box from "../../Reuseable/Box";
import Password from "../../Reuseable/Inputs/Password";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';

const Changepassword = ({handlechangepass}) => {
  //  const [showCurrent, setShowCurrent] = useState(false);
   const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get userId from localStorage or context
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userId = userDetails?.data?.userId;


  const handlechangepassfunc = (e) => {
  const { name, value } = e.target;
  if (name === "currentPassword") setCurrentPassword(value);
  if (name === "newPassword") setNewPassword(value);
  if (name === "confirmPassword") setConfirmPassword(value);
};

    const handleSubmit = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password must match");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        userId,
        oldPassword: currentPassword,
        password: newPassword,
      };
      console.log("🚀 ~ handleSubmit ~ payload:", payload)
      const response = await fetch(
        "https://apidoc.transferrocket.co.uk/updateuserpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (data.status) {
        toast.success(data.message || "Password updated successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(data.message || "Failed to update password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    
    <Layout>
      <ChangePasswordBox>
        <div className="head">
          <h1>Change Password</h1>
          <p>Update your account password here</p>
          {/* <p>Update your account password here</p> */}
        </div>
        <Box
          width="100%"
          border="none"
          radius="15px"
          margin="20px 0 0 0"
          padding=" 30px 20px"
          flexDirection="column"
          alignItems="flex-start"
        >
          <InputWrapBox>
            <p>Current Password</p>
            <Password handlechangepass={handlechangepassfunc} name="currentPassword" />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <InputWrapBox>
            <p>New Password</p>
            <Password handlechangepass={handlechangepassfunc} name="newPassword" />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <InputWrapBox>
            <p>Confirm Password</p>
            <Password handlechangepass={handlechangepassfunc} name="confirmPassword" />
          </InputWrapBox>
          <hr
            style={{
              width: "100%",
              margin: "20px 0",
              border: ".7px solid #EAECF0",
            }}
          />
          <EndBtn>
            <div className="btns">
              <p className="cancel">Cancel</p>
              <button
                className="update"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  pointerEvents: loading ? "none" : "auto"
                }}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </EndBtn>
        </Box>
      </ChangePasswordBox>
    </Layout>
  );
};

export default Changepassword;

const ChangePasswordBox = styled.div`
  width: 100%;
  .head {
    h1 {
      color: #090814;
      font-size: 18px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-size: 10px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

const InputWrapBox = styled.div`
  // border: 2px solid red;
  width: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  p {
    color: #333b4a;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

const EndBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  .btns {
    display: flex;
    align-items: center;
    gap: 20px;
    .cancel {
      border-radius: 6px;
      background: #fff;
      box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      color: #464f60;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px; /* 125% */
      letter-spacing: 0.32px;
      padding: 7px 10px;
    }
    .update {
      border-radius: 6px;
      background: #00a85a;
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
      letter-spacing: 0.32px;
      padding: 7px 10px;
    }
  }
`;
