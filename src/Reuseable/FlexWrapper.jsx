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
import { BankTest,countries } from "../../config/Test";
import { Spin } from "@arco-design/web-react";


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
  const [banks, setBanks] = useState([]);
  const [payout, setPayout] = useState(false);
  const [show, setShow] = useState(false);
  const [Name, setName] = useState("");
  const [Err, setErr] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [showBene, setshowBene] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [beneficiaries, setbeneficiaries] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [beneArr, setBeneArr] = useState([]);
    const [country, setCountry] = useState([]);
  console.log("🚀 ~ file: FlexWrapper.jsx:52 ~ beneArr:", beneArr)

  const location = useLocation();


  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);
  const [payoutParam, setpayoutParam] = useState(
    {
      "refrenceId": "",
      "appId": undefined,
      "sourceId": undefined,
      "currencyId": undefined,
      "amount": undefined,
      "naration": "",
      "senderName": "",
      // "beneficiaryId" : undefined
  }
  );
  // const [createBene,setCreateBene] = useState(
  //   {
  //     "userId": undefined,
  //     "currency": {
  //           "code": "USD"
  //       },
  //     "userBeneficiary": {
  //         "beneficiaryCountry": {
  //             "id": undefined
  //         },
  //         "beneficiaryName": "",
  //         "beneficiaryPhoneNumber": "",
  //         "beneficiaryBank": {
  //             "accountNumber": "",
  //             "bankId": undefined
  //         }
  //     }
  // }
  // )



  const [createBene,setCreateBene] = useState( 
  {
    "userId": undefined,
    "userBeneficiary": {
        "beneficiaryCountry": {
            "id": undefined
        },
        "currency": {
        "code": "NGN"
        },
        "beneficiaryName": "",
        "beneficiaryPhoneNumber": "",
        "beneficiaryBank": {
            "accountNumber": "",
            "bankId": undefined
        }
    }
}
  )



  // const [createBene,setCreateBene] = useState(
  //   {
  //     "userId": 45586980,
  //     "userBeneficiary": {
  //         "beneficiaryCountry": {
  //             "id": 1
  //         },
  //         "beneficiaryName": "Advanced Technology",
  //         "beneficiaryPhoneNumber": "Park",
  //         "beneficiaryBank": {
  //             "accountNumber": "1017741913",
  //             "bankId": 17
  //         }
  //     }
  // }
  // )


  console.log("🚀 ~ file: FlexWrapper.jsx:75 ~ createBene:", createBene)
  console.log("🚀 ~ file: FlexWrapper.jsx:50 ~ payoutParam:", payoutParam)

  // const location = useLocation();


  // // Access the query parameters from the location object
  // const queryParams = new URLSearchParams(location.search);
  const userId = JSON.parse(localStorage.getItem("userDetails"));
  console.log("🚀 ~ userId:", userId)

  const fecther = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
    const result = await response.json();
    // location.setItem("test",JSON.stringify(result))
    
  }

  const fectherBeneficiary = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    // const response = await fetch(`https://apidoc.transferrocket.co.uk//getuserbeneficiaries?userId=CLIENT_ID&beneficiaryId=0`, requestOptions);
    const response = await fetch(`https://apidoc.transferrocket.co.uk//getuserbeneficiaries?userId=${userId?.data?.userId}&beneficiaryId=0`, requestOptions);
    const result = await response.json();
    setbeneficiaries(result)


    // location.setItem("test",JSON.stringify(result))
    
  console.log("🚀 ~ fectherBeneficiary ~ beneficiaries:", beneficiaries)
  }
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const requestOptions = {
        method: "GET",
        // redirect: "follow",
      };

    const response = await fetch("https://apidoc.transferrocket.co.uk/getcountries", requestOptions);
    const result = await response.json();
    console.log("🚀 ~ fetchCountries ~ result:", result.data)
    setCountry(result.data || countries?.data);
    // if (!result.data) {
      const filterNigeria = countries?.data?.filter(country => country.countryName === "Nigeria");
    //   // console.log("🚀 ~ fetchCountries ~ filterNigeria:", filterNigeria)
    //   // setSelectedOption4({
    //   //   label: filterNigeria[0].countryName,
    //   //   value: filterNigeria[0].id,
    //   //   currencyCode: filterNigeria[0].currencyCode
    //   // });
    //   const sanitizeCountry =  countries?.data?.map(country => ({
    //     label: country.countryName,
    //     value: country.id,
    //     currencyCode: country.currencyCode
    //   }));
    //   console.log("🚀 ~ fetchCountries ~ sanitizeCountry:", sanitizeCountry)
    //   setCountry(sanitizeCountry);
      
    //   return;
    // }else{

    //   const filterNigeria = result.data.filter(country => country.countryName === "Nigeria");
    //   setSelectedOption4({
    //     label: filterNigeria[0].countryName,
    //     value: filterNigeria[0].id,
    //     currencyCode: filterNigeria[0].currencyCode
    //   });
    //   const sanitizeCountry = result.data.map(country => ({
    //     label: country.countryName,
    //     value: country.id,
    //     currencyCode: country.currencyCode
    //   }));
    //   console.log("🚀 ~ fetchCountries ~ sanitizeCountry:", sanitizeCountry)
    //   setCountry(sanitizeCountry);
    // }
  };

    console.log("🚀 ~ country:", country)


  useEffect(() => {
    fecther();
    fectherBeneficiary();

  }, []);
  
  const beneoptions = beneficiaries?.data?.map(option => ({
    label: `${option.beneficiaryName}\n[${option?.beneficiaryBank?.accountNumber} - ${option?.beneficiaryBank?.bankName}]`,
    
    // label: option.beneficiaryName,
    value: option.id,
    
  }))

  console.log("🚀 ~ beneoptions ~ beneficiaries:", beneficiaries)
  useEffect(() => {
    const beneoptions = beneficiaries?.data?.map(option => ({
      label: `${option.beneficiaryName}\n[${option?.beneficiaryBank?.accountNumber} - ${option?.beneficiaryBank?.bankName}]`,
      value: option.id
    }))

    setBeneArr( beneoptions)
  },[])

  useEffect(() => {

   
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://apidoc.transferrocket.co.uk//getbanks", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("🚀 ~ file: FlexWrapper.jsx:92 ~ useEffect ~ result:", result)
        setBanks(result?.data || BankTest?.data)
      })
      .catch(error => {
        setBanks(BankTest?.data)
        console.log('error', error)
      });
  },[])



  const handleSelectChangebene = selectedOption2 => {
    const removeLines = selectedOption2?.label?.toString()?.replace("\n"," ")?.split("[")[0];
    const bankDetails = selectedOption2?.label?.toString()?.replace("\n"," ")?.split("[")[1];
    setpayoutParam(prev => ({
      beneficiaryId:selectedOption2.value,
      ...prev,
    }))
    setSelectedOption2(
      {label: removeLines, value: selectedOption2.value,bankDetails}
      );
      console.log("🚀 ~ file: FlexWrapper.jsx:133 ~ handleSelectChangebene ~ selectedOption2.value:", selectedOption2.value)
      setCreateBene(prevState => ({
        ...prevState,
        beneficiaryId:selectedOption2.value
  
      }));
    
    // Do something with selected option if needed
  };

  const handleSelectChangecountry = selectedOption4 => {
    console.log("🚀 ~ file: FlexWrapper.jsx:116 ~ hansdleSelectChangecountry ~ selectedOption4:", selectedOption4)
    setSelectedOption4(selectedOption4);

    setCreateBene(prevState => ({
      ...prevState,
      userBeneficiary: {
        beneficiaryCountry: {
          id: selectedOption4.id
        },
        currency: {
          code: selectedOption4.currencyCode
        },
        ...prevState.userBeneficiary,
        beneficiaryBank: {
          ...prevState.userBeneficiary.beneficiaryBank,
          bankId: selectedOption3.value,
        }
      }
    }));
    // Do something with selected option if needed
  };
  const handleSelectChangebank = selectedOption3 => {
    console.log("🚀 ~ file: FlexWrapper.jsx:116 ~ hansdleSelectChangebank ~ selectedOption3:", selectedOption3)
    setSelectedOption3(selectedOption3);
    

    setCreateBene(prevState => ({
      ...prevState,
      userBeneficiary:{
        ...prevState.userBeneficiary,
        beneficiaryBank:{
          ...prevState.userBeneficiary.beneficiaryBank,
          bankId:selectedOption3.value,
        
        }

      }

    }));
    // Do something with selected option if needed
  };

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
      refrenceId:`${user?.data?.companyName?.trim()?.substring(0,2).toUpperCase()}${randomEightDigitNumber}`
    }));
    // Do something with selected option if needed
  };
 
  const options = user?.data?.clientApps.map(option => ({
    label: option.appName,
    value: option.id
  }));



  const bankoptions = banks.map(option => ({
    label: option.bankName,
    value: option.bankId,
    code:option.bankCode
  }));

  //   const countryoptions = country.map(option => ({
  //   label: option.name,
  //   value: option.id,
  //   code:option.currencyCode
  // }));


  // useEffect(() => {
  //           const filterNigeria = country?.filter(country => country?.currencyCode === "NGN");
  //       console.log("🚀 ~ filterNigeria:", filterNigeria)
  // setSelectedOption4({
  //   label: filterNigeria[0].name,
  //   value: filterNigeria[0].id,
  //   currencyCode: filterNigeria[0].currencyCode
  // });
  // }, [country]);

  // ...existing code...
const countryoptions = country.map(option => ({
  label: option.name,
  value: option.id,
  code: option.currencyCode
}));

// ...existing code...
useEffect(() => {
  if (!selectedOption4 && country.length > 0) {
    const nigeria = country.find(c => c.currencyCode === "NGN");
    if (nigeria) {
      setSelectedOption4({
        label: nigeria.name,
        value: nigeria.id,
        currencyCode: nigeria.currencyCode
      });
    }
  }
}, [country, selectedOption4]);
// ...existing code...

// Handler for when the user selects a different country
const handleCountryChange = (selected) => {
  setSelectedOption4({
    label: selected.label,
    value: selected.value,
    currencyCode: selected.code
  });
};

// Example usage with a Select component (e.g., react-select)

// ...existing code...

  
  // const [info, setInfo] = useState("");
  const [payouttwo, setPayouttwo] = useState(false);
  const [fundingRequest, setFundingRequest] = useState({
    userId: null,
    amountRequested: '',
    comment: "",
    lastUpdatedBy: 0
  });
  console.log("🚀 ~ file: FlexWrapper.jsx:178 ~ fundingRequest:", fundingRequest)

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
    const id = queryParams.get('id');
    const cid = queryParams.get('cid');
    const currency = queryParams.get('currency');

    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    // Log user details
    // console.log("🚀 ~ file: FlexWrapper.jsx:208 ~ handlechange ~ userDetails:", userDetails?.data?.payOutClientWalletPayOutProviders);
    
    // Find a wallet based on provider ID and currency code
    const findWallet = userDetails?.data?.payOutClientWalletPayOutProviders.find((wallet) => {
      return wallet?.providerId === parseInt(id) &&  wallet?.wallet?.currency?.id === parseInt(cid);
    });
    console.log("🚀 ~ file: FlexWrapper.jsx:216 ~ findWal ~ findWallet:", findWallet)

      setFundingRequest(prevState => ({

        ...prevState,
        userWallet: {
          walletId: findWallet?.wallet?.walletId
        },
      amountRequested: parseInt(prevState.amountRequested),
        [name]: value,
      }));
    // }
  };
  const handleCreateBene = (e) => {
    const { name, value } = e.target;
      setFundingRequest(prevState => ({

        ...prevState,
      amountRequested: parseInt(prevState.amountRequested),
        [name]: value,
      }));
    // }
  };

  const handleBankchange = (e) => {
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

    //  navigate("/overview")
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
  
      console.log("🚀 ~ file: FlexWrapper.jsx:335 ~ createPayoutReq ~ selectedOption2.value:", selectedOption2.value)

  



// Concatenate clientId and liveKey with a colon
const credentials = `${user?.data?.clientKeys?.clientId}:${user?.data?.clientKeys?.liveKey}`;

// Use btoa for Base64 encoding
const encodedCredentials = btoa(credentials);
console.log("🚀 ~ file: FlexWrapper.jsx:229 ~ createPayoutReq ~ encodedCredentials:", encodedCredentials)

const myHeaders = new Headers();
// myHeaders.set('Authorization', `Basic ${encodedCredentials}`);
myHeaders.append("clientId", user?.data?.clientKeys?.clientId);
myHeaders.set('Content-Type', 'application/json');


try {
  const raw = JSON.stringify(payoutParam);
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    maxBodyLength: Infinity,
  };
  const response = await fetch(
    // 'https://apidoc.transferrocket.co.uk/processwebpayoutclientrequest',
    'https://payoutnodemiddleware.transferrocket.co.uk/request',
    requestOptions
  );
  console.log("🚀 ~ file: FlexWrapper.jsx:211 ~ createPayoutReq ~ response:", response)
  const data = await response.json();
  console.log("🚀 ~ file: FlexWrapper.jsx:314 ~ createPayoutReq ~ data:", data)

  setLoading(false);

  if (data?.data?.status) {
    toast.success(data?.message);
    setLoading(false);
    setShow(!show);
    // Reset the payoutParam state
    setpayoutParam({});
    setSelectedOption("")
    setSelectedOption2("")
  } else {
    setpayoutParam({});
    setSelectedOption("")
    setSelectedOption2("")
    toast.error(data?.message);
    setShow(!show);
  }
} catch (error) {
  setpayoutParam({});
  setSelectedOption("")
  setSelectedOption2("")
  setShow(!show);
  console.error('Error in createPayoutReq:', error);
  setLoading(false);
  toast.error('An error occurred while processing the payout.');
}


};

  const createNewBene = async () => {
    setLoading(true);
    const getDetails = JSON.parse(localStorage.getItem("details"));
    console.log("🚀 ~ createNewBene ~ getDetails:", getDetails)
    try {
      const credentials = `${user?.data?.clientKeys?.clientId}:${user?.data?.clientKeys?.liveKey}`;

// Use btoa for Base64 encoding
      const encodedCredentials = btoa(credentials);
      console.log("🚀 ~ file: FlexWrapper.jsx:229 ~ createPayoutReq ~ encodedCredentials:", encodedCredentials)

      const myHeaders = new Headers();
      // myHeaders.set('Authorization', `Basic ${encodedCredentials}`);
      // myHeaders.append("clientId", user?.data?.clientKeys?.clientId);
      myHeaders.set('Content-Type', 'application/json');

      console.log("🚀 ~ createNewBene ~ raw:", createBene)

      const updatedBene = {
  ...createBene,
  countryId: selectedOption4?.value, // or use the appropriate key expected by your API
  countryName: selectedOption4?.label,
  currencyCode: selectedOption4?.currencyCode
};
      console.log("🚀 ~ createNewBene ~ updatedBene:", updatedBene)

    var raw = JSON.stringify(updatedBene);

    var requestOptions = {
      method: 'POST',
      maxBodyLength: Infinity,
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // return;
    const response = await fetch("https://apidoc.transferrocket.co.uk/adduserbeneficiary", requestOptions);
    // const response = await fetch("https://apidoc.transferrocket.co.uk//creatpayoutbeneficiary.io", requestOptions);
    // 188.212.124.39
    // const response = await fetch(`http://188.212.124.39:3007/createbeneficiary/?auth=${encodedCredentials}`, requestOptions);
    const data = await response.json();
    console.log("🚀 ~ file: FlexWrapper.jsx:378 ~ createNewBene ~ data:", data)
    if (data.status) {
      // setShow(!show)
      setName(" ")
      toast.success(data.message)
      setshowBene(!showBene);
      setLoading(false);
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      // const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userDetails.data.userId}`);
      const response = await fetch(`https://apidoc.transferrocket.co.uk//getuserbeneficiaries?userId=${userDetails.data.userId}&beneficiaryId=0`);
      const gateData = await response.json();
      console.log("🚀 ~ createNewBene ~ response:", response)
      // localStorage.setItem("userDetails",JSON.stringify(gateData))
      console.log("🚀 ~ file: FlexWrapper.jsx:404 ~ createNewBene ~ gateData:", gateData)
      const beneoptions = gateData?.data?.beneficiaries.map(option => ({
        label: `${option.beneficiaryName}\n[${option?.beneficiaryBank?.accountNumber} - ${option?.beneficiaryBank?.bankName}]`,
        value: option.id
      }))
  
      setBeneArr(beneoptions)
      // setBeneArr(prev => [newBeneOption, ...prev]);
  
      // console.log("🚀 ~ file: FlexWrapper.jsx:403 ~ createNewBene ~ gateData:", gateData)
      
    }else{
      // setShow(!show)
      setName(" ")
      toast.error(data.message)
      setshowBene(!showBene);
      setLoading(false);
    }

    } catch (error) {
      // setShow(!show);
      // console.error('Error in creating beneficiary:', error);
      setLoading(false);
      // toast.error('An error occurred while creating beneficiary.');
    }
  }

const lookup = async (e) => {

    const getDetails = JSON.parse(localStorage.getItem("userDetails"));
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    setCreateBene(prevState => ({
      ...prevState,
      userId:getDetails?.data?.userId,
      userBeneficiary:{
        ...prevState.userBeneficiary,
        beneficiaryCountry:{
          // ...prevState.userBeneficiary.beneficiaryCountry,
            id:parseInt(queryParams.get('cid'))
        },
    
        beneficiaryBank:{
          ...prevState.userBeneficiary.beneficiaryBank,
          accountNumber:e.target.value
        }
      }
 
    }))
    if (e.target.value.length >= 10) {
      setLoading2(true);
    try {
      const response = await fetch(`https://apidoc.transferrocket.co.uk/BankDetailsLookUp?bankCode=${selectedOption3.code}&accountNumber=${e.target.value}`, requestOptions)
       const data = await response.json();
       if (!data.status) {
         setName(data.message || "error getting account name")
         setErr(true)    
         setTimeout(() =>{
          setName("")
        },2500)
        }
        setErr(false)    
        setCreateBene(prevState => ({
          ...prevState,
          userId:getDetails?.data?.userId,
          userBeneficiary:{
            ...prevState.userBeneficiary,
            beneficiaryCountry:{
              // ...prevState.userBeneficiary.beneficiaryCountry,
                id:parseInt(queryParams.get('cid'))
            },
            beneficiaryName:data?.data?.account_name,
            beneficiaryBank:{
              ...prevState.userBeneficiary.beneficiaryBank,
              accountNumber:e.target.value
            }
          }
     
        }))
        setName(data?.data?.account_name)
        
      } catch (error) {    
        setErr(true)    
        setName(error.message || "error getting account name")
        setTimeout(() =>{
          setName("")
        },2000)
    }

  }


}
  

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
                    setSelectedOption2(null)
                    setSelectedOption(null)

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
                              disabled={Err === true ? true : false}
                              cancleModal={() => {
                               
                                setshowBene(!showBene)
                              }}
                              loading={loading}
                              handleSubmit={createNewBene}
                            
                            >
                             {/* <TextInput change={(e) => {
                              setCreateBene(prevState => ({
                                ...prevState,
                                userBeneficiary:{
                                  ...prevState.userBeneficiary,
                                  beneficiaryPhoneNumber:e.target.value
                                }
                          
                              }))
                             }}  label="Beneficiary Phonenumber" /> */}
                             <p>Select Country</p>
                             <Selects
                              placeholder="Select Country"
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
                              options={countryoptions}
  value={countryoptions.find(opt => opt.value === selectedOption4?.value)}
  onChange={handleCountryChange}

                              />
                              <br />
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
                              value={selectedOption3}
                              onChange={handleSelectChangebank}
                              options={bankoptions}

                              />
                              <br />
                              <TextInput change={(e) => lookup(e)} label="Beneficiary Account Number" />
                              <br/>
                              {
                                loading2 ? <p>{Name}</p> : " " 
                              }
                           
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
                        options={beneArr || beneoptions}
                        getOptionLabel={option => option?.label}
                       
                    />
                    <p style={{marginTop:"5px"}}>{selectedOption2 ? `[${selectedOption2?.bankDetails}` : ""}</p>
           
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
