import React, { useEffect, useState } from "react";
import styled from "styled-components";
//
import ngn from "../assets/ngn.svg";
import gb from "../assets/gb.png";
import drop from "../assets/drop.svg";
import Modal from "./Modal";
import add from "../assets/add2.svg";
import cancel from "../assets/cancel.svg";
import Select from "./Inputs/Select";
import Textarea from "./Inputs/Textarea";
import TextInput from "./Inputs/TextInput";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { QueryParams } from "../reuseables/QueryParams";
import Selects from 'react-select';
import { useLocation } from "react-router-dom";
import { encode } from 'base64-js';
import Btn from "../reuseables/Btn";


const FlexWrapper = ({
  name,
  subname,
  amount,
  word,
  balance,
  currency
  // onClick,
  // show,
  // setShow,
  // payout,
  // setPayout,
}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [payout, setPayout] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBene, setshowBene] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [payoutParam, setpayoutParam] = useState(
    {
      "refrenceId": "",
      "appId": undefined,
      "sourceId": undefined,
      "currencyId": undefined,
      "amount": undefined,
      "naration": "",
      "senderName": "",
      "beneficiaryId" : undefined
  }
  );
  console.log("🚀 ~ file: FlexWrapper.jsx:50 ~ payoutParam:", payoutParam)

  const location = useLocation();

  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

 

  const handleSelectChange = selectedOption => {
    setSelectedOption(selectedOption);
    function generateRandomEightDigitNumber() {
      const min = 10000000; // Minimum eight-digit number
      const max = 99999999; // Maximum eight-digit number
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const randomEightDigitNumber = generateRandomEightDigitNumber();
    setpayoutParam(prevState => ({
      ...prevState,
      appId: selectedOption?.value,
      refrenceId:`${selectedOption?.label?.trim()?.substring(0,2).toUpperCase()}${randomEightDigitNumber}`
    }));
    // Do something with selected option if needed
  };
  const handleSelectChangebene = selectedOption2 => {
    setSelectedOption2(selectedOption2);

    setpayoutParam(prevState => ({
      ...prevState,
      beneficiaryId:selectedOption2.value

    }));
    // Do something with selected option if needed
  };
  const options = user?.data?.clientApps.map(option => ({
    label: option.appName,
    value: option.id
  }));
  const beneoptions = user?.data?.beneficiaries.map(option => ({
    label: option.beneficiaryName,
    value: option.id
  }));
  // const [info, setInfo] = useState("");
  const [payouttwo, setPayouttwo] = useState(false);
  const [fundingRequest, setFundingRequest] = useState({
    userId: null,
    amountRequested: '',
    userWallet: {
      walletId: null
    },
    comment: "",
    lastUpdatedBy: 0
  });

  useEffect(() => {
   

    const userId = JSON.parse(localStorage.getItem("userDetails"));
    const userWalletId = userId?.data?.walletFundindRequests[0]?.userWallet?.walletId;
    console.log("🚀 ~ file: FlexWrapper.jsx:35 ~ useEffect ~ userId:", userWalletId);
    setUser(userId);
    setFundingRequest(prevState => ({
      ...prevState,
      userId: userId?.data?.userId,
      userWallet: {
        walletId: userWalletId
      }
    }));
  }, []);

  const showModal = () => {
    setShow(!show);
    setPayout(false);
    setPayouttwo(false);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
      setFundingRequest(prevState => ({

        ...prevState,
      amountRequested: parseInt(prevState.amountRequested),
        [name]: value,
      }));
    // }
  };
  const handlechange2 = (e) => {
    const { name, value } = e.target;
    const currencyFromQuery = queryParams.get('currency');
    const id = queryParams.get('id');
    const cid = queryParams.get('cid');


    setpayoutParam(prevState => ({
    

        ...prevState,
        currencyId: parseInt(cid),
    sourceId: parseInt(id),
        [name]: value,
      }));
    // }
  };
  


  const CreateWalletFundingRequest = async () => {
    // setLoading(true)
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(fundingRequest),
      redirect: 'follow'
    };
    
   const response = await fetch("https://apidoc.transferrocket.co.uk//walletfundingrequest", requestOptions);
   const data = await response.json()
   console.log("🚀 ~ file: FlexWrapper.jsx:101 ~ CreateWalletFundingRequest ~ data:", data)
   if(data?.status){

     navigate("/overview")
    toast.success(data?.message)
    // console.log("🚀 ~ file: Documnets.jsx:174 ~ editAndDelete ~ result:", result)
    setLoading(false)
    setShow(!show)

   }else{
    toast.error(data?.message)
    setShow(!show)
    // setShow(!show)
   }
   console.log("🚀 ~ file: FlexWrapper.jsx:96 ~ CreateWalletFundingRequest ~ data:", data)
  }
  const createPayoutReq = async () => {
  
    setLoading(true);
    const getDetails = JSON.parse(localStorage.getItem("details"));


// Concatenate clientId and liveKey with a colon
const credentials = `${user?.data?.clientKeys?.clientId}:${user?.data?.clientKeys?.liveKey}`;

// Use btoa for Base64 encoding
const encodedCredentials = btoa(credentials);
console.log("🚀 ~ file: FlexWrapper.jsx:229 ~ createPayoutReq ~ encodedCredentials:", encodedCredentials)

const myHeaders = new Headers();
// myHeaders.set('Authorization', `Basic ${encodedCredentials}`);
myHeaders.append("clientId", user?.data?.clientKeys?.clientId);
myHeaders.set('Content-Type', 'application/json');

const raw = JSON.stringify(payoutParam);

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

try {
  const response = await fetch(
    'https://apidoc.transferrocket.co.uk//processwebpayoutclientrequest',
    requestOptions
  );
  console.log("🚀 ~ file: FlexWrapper.jsx:211 ~ createPayoutReq ~ response:", response)
  const data = await response.json();

  setLoading(false);

  if (data?.status) {
    toast.success(data?.message);
    setLoading(false);
    setShow(!show);
    // Reset the payoutParam state
    setpayoutParam({});
  } else {
    setpayoutParam({});
    toast.error(data?.message);
    setShow(!show);
  }
} catch (error) {
  setpayoutParam({});
  setShow(!show);
  console.error('Error in createPayoutReq:', error);
  setLoading(false);
  toast.error('An error occurred while processing the payout.');
}


  };
  

  return (
    <FlexWrapperBox>
      <div className="left">
        <div className="top">
          <div className="first">
            <h1>{name}</h1>
          </div>
          <div className="details">
            <img src={currency === "NGN" ? ngn : gb} alt="" />
            {/* <span>5,250,532.89 NGN</span> */}
            <span>{amount}  {/*<QueryParams/>*/}</span>
           
          </div>
        </div>
        <div className="right">
          <div
            className="action"
            onClick={showModal}
            show={show}
            setShow={setShow}
          >
            <span>Actions</span>
            <img src={drop} alt="" />
          </div>
          {show && (
            <div className="smallModal">
              <div
                className="bx"
                onClick={() => {
                  setPayout(true);
                }}
              >
                <img src={add} alt="" />
                <span>Payout to client</span>
              </div>

              {/*  */}

              {payout && (
                <Modal
                  // height="350px"
                  padding="1em"
                  width="30%"
                  setShow={setShow}
                  setPayout={setPayout}
                  modalName="Payout"
                  btn="Proceed"
                  cancleModal={() => {
                    setpayoutParam(
                      {
                        "refrenceId": "",
                        "appId": undefined,
                        "sourceId": undefined,
                        "currencyId": undefined,
                        "amount": undefined,
                        "naration": "",
                        "senderName": "",
                        "beneficiaryId" : undefined
                    }
                    )
                    setShow(!show)
                  }}
                  loading={loading}
                  handleSubmit={createPayoutReq}
                
                >
                  <ModalInner>
                    {/* <p className="quick">Quickly send money to your clients</p> */}
                    <TextInput label="senderName" placeholder="John Deo" name="senderName" change={handlechange2} />
                 
                    {/* <Select label="Bank" /> */}
                    <p>Select Your App</p>
                    <Selects
                        placeholder="Select App"
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
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={options}

                    />
                    <br/>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>Select Your Beneficairy </p>
                      <p style={{color:"green"}} onClick={() => setshowBene(!showBene)}>add beneficairy</p>
                      {
                        showBene &&
                              <Modal
                              // height="350px"
                              padding="1em"
                              width="20%"
                              setShow={showBene}
                              setPayout={setPayout}
                              modalName="Quick create Beneficiary"
                              btn="Proceed"
                              cancleModal={() => {
                               
                                setshowBene(!showBene)
                              }}
                              loading={loading}
                              handleSubmit={createPayoutReq}
                            
                            >
                             <TextInput  label="Beneficiary Phonenumber" />
                             <p>Select Bank</p>
                             <Selects
                        placeholder="Select Bank"
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
                        value={selectedOption2}
                        onChange={handleSelectChangebene}
                        options={beneoptions}

                    />
                              <TextInput label="Beneficiary Account Number" />
                            </Modal>
                      }
                    </div>
                    <Selects
                        placeholder="Select Beneficiary"
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
                        value={selectedOption2}
                        onChange={handleSelectChangebene}
                        options={beneoptions}

                    />
                   <TextInput label="Amount" placeholder="200" name="amount" change={(e) => setpayoutParam(prevState => ({
                                      ...prevState,
                                      amount:parseInt(e.target.value)
                                    }))
                  } />
                   
                    <Textarea
                      width="100%"
                      placeholder="Type a narration..."
                      background="#FFF"
                      margin="20px 0"
                      name="naration"
                      value={payoutParam?.naration}
                      change={handlechange2}
                    />

                  </ModalInner>
                </Modal>
              )}
              <div
                className="bx"
                onClick={() => {
                  setPayouttwo(true);
                }}
              >
                <img src={add} alt="" />
                <span>Fund Gateway</span>
              </div>
              {payouttwo && (
                <Modal
                 

                  setShow={setShow}
                  setPayout={setPayout}
                  modalName="Fund Gateway"
                  btn="Fund"
                  cancleModal={() => setShow(!show)}
                  loading={loading}
                  handleSubmit={CreateWalletFundingRequest}
                >
                  {/* {info && (<p style={{color:"green"}}>{info}</p>)} */}
                  <ModalInner>
                    <TextInput label="Amount" name="amountRequested" placeholder="input amount" change={handlechange}/>
                    <Textarea
                      width="100%"
                      placeholder="Type a narration..."
                      background="#FFF"
                      margin="20px 0"
                      name="comment"
                      loading={loading}
                      value={ fundingRequest?.comment}
                      change={handlechange}
                    />
                  </ModalInner>
                </Modal>
              )}
            </div>
          )}
        </div>
      </div>
      <p className="subname">{subname}</p>
      <div className="bottom">
        <p>
          {/* This overview provides a comprehensive snapshot of wallet
            transactions on your system */}
          {word}
        </p>
      </div>
    </FlexWrapperBox>
  );
};

export default FlexWrapper;

const FlexWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 5px;
  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top {
      display: flex;
      align-items: center;
      gap: 20px;
      .first {
        display: flex;
        flex-direction: column;
        // row-gap: 3px;
        align-items: flex-start;
        h1 {
          color: #090814;
          font-size: 22px;
          font-weight: 500;
        }

      }
      .details {
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        padding: 10px 15px;
      }
    }
  .right {
    position: relative;

    .smallModal{
      // border: 2px solid red;
      padding: 5px;
      position: absolute;
      cursor: pointer;
      top: 40px;
      right: 0px;
      border-radius: 6px;
      background: #FFF;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 0px 0px 1px rgba(152, 161, 178, 0.10);
      width: 160px;
      height: max-content;
      .bx{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 5px;
        &:hover{
            // background: #868FA0;
            background: #e9edf5;
            border-radius: 4px;
        }
        img{
          width: 12px;
        }
        span{
          color: #464F60;
          font-size: 11px;
          font-weight: 400;
          line-height: 20px; /* 125% */
          letter-spacing: 0.32px;
        }
      }
    }
    .action {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      /* gap: 30px; */
      min-width:150px;
      padding: 10px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      span {
        color: #464f60;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.32px;
      }
      img {
        width: 15px;
      }
    }
  }
  }
  .subname{
      color: #a1a9b8;
      font-size: 18px;
      font-weight: 300;
      margin-top: -5px;
  }
    .bottom {
      margin-top 10px;
      p {
        color: #848d87;
        font-size: 12px;
        font-weight: 400;
        line-height: 30px;
      }
    }
`;

const ModalInner = styled.div`
  // padding: 0 0 0 10px;
  padding-right: 10px;
  // border: 2px solid red;
  width: 100%;
  height: 100%:
  height: max-content;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px !important;
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
  // margin-bottom: 10px;
  // border: 2px solid red;
  // .top {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-bottom: 20px;
  //   p {
  //     color: #090814;
  //     font-size: 14px;
  //     font-weight: 400;
  //   }
  //   img {
  //     width: 20px;
  //   }
  // }
  .quick{
    color: #909090;
    font-size: 12px;
    font-weight: 400;
    boredr: 2px solid red;
  }
`;
