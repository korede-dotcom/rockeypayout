// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// //
// import Pag from "../../assets/pag.jsx";
// import calender from "../../assets/calendar.svg";
// import TextInput from "../../Reuseable/Inputs/TextInput";
// import OInput from "./OnboardingInput/OInput";
// import OTextarea from "./OnboardingInput/OTextarea";
// import Selects from "./OnboardingInput/Selects.jsx";
// //
// import greenback from "../../assets/gback.svg";
// import File from "./OnboardingInput/File.jsx";
// // import Select from "../../Reuseable/Inputs/Select.jsx";

// const Login = () => {
//   const [page, setPage] = useState(1);
//   const [back, setback] = useState(false);

//   //country Start
//   const [country, setCountry] = useState([]);
//   const [countryId, setCountryId] = useState("1");
//   const [countryValue, setCountryValue] = useState("Default Country");
//   //
//   console.log("countryId : " + countryId);
//   console.log("countryValue : " + countryId);
//   // country End

//   //  State
//   const [statee, setState] = useState([]);
//   const [stateId, setStateId] = useState("");
//   const [stateValue, setStateValue] = useState("Default State");

//   console.log("statee : " + statee);
//   console.log("stateValue : " + stateValue);

//   //  State End

//   // City Start
//   const [city, setCity] = useState([]);
//   const [cityId, setcityId] = useState("");
//   const [cityValue, setCityValue] = useState("Default City");
//   // cityId Start End

//   const [activeTab, setActiveTab] = useState(1);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   const handleContinueClick = () => {
//     if (activeTab < 4) {
//       setActiveTab(activeTab + 1);
//     }
//   };
//   const handleBackClick = () => {
//     if (activeTab > 1) {
//       setActiveTab(activeTab - 1);
//     }
//   };
//   const [formData, setFormData] = useState({
//     email: "",
//     phone: "",
//     bvn: "",
//     address: null,
//     country: countryId,
//     state: "",
//     city: "",
//     companyName: "",
//     companyRegistrationNumber: "",
//     dateRegistered: "",
//     sector: "",
//     companyCertificateURL: null,
//     formCo7URL: "",
//     formCo2URL: "",
//     articlesAndMemorandumOfAssociation: "",
//     utilityBill: "",
//     username: "",
//     password: "",
//     // city: "",
//   });

//   useEffect(() => {
//     console.log("companyName " + formData.companyName);
//   }, [formData]);

//   // Files Start
//   const handleFileInputChange = (event, fieldName) => {
//     const file = event.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       [fieldName]: file,
//     }));
//   };
//   // Files End

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSelectChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     // Fetch countries and set the first country as the default
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       "https://moneybusiness.tm-dev.xyz/moneybusiness/getcountries",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCountry(data.data);
//         if (data.data.length > 0) {
//           setCountryId(data.data[0].id);
//           setCountryValue(data.data[0].name);
//         }
//       })
//       .catch((error) => console.log("error", error));
//   }, []);

//   useEffect(() => {
//     // Fetch states whenever the country ID changes
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       `https://moneybusiness.tm-dev.xyz/moneybusiness/getstates?countryId=${countryId}&stateId=0`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setState(data.data);
//         if (data.data.length > 0) {
//           setStateId(data.data[0].id);
//           setStateValue(data.data[0].name);
//         }
//       })
//       .catch((error) => console.log("error", error));
//   }, [countryId]);

//   useEffect(() => {
//     // Fetch cities whenever the state ID changes
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       `https://moneybusiness.tm-dev.xyz/moneybusiness/getcities?countryId=${countryId}&stateId=${stateId}&citiId=0`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCity(data.data);
//         if (data.data.length > 0) {
//           setcityId(data.data[0].id);
//           setCityValue(data.data[0].name);
//         }
//       })
//       .catch((error) => console.log("error", error));
//   }, [stateId]);
//   useEffect(() => {

//   }, []);

//   const namer = [{ name: "ones 1" }, { name: "ones 2" }, { name: "ones 3" }];
//   const namesector = [
//     { name: "Science" },
//     { name: "FinTech" },
//     { name: "Innovation" },
//   ];
//   //
//   return (
//     <LoginWrapper>
//       <div className="left"></div>
//       <RightLogin>
//         <RightContent>
//           <div className={` head ${activeTab > 1 && "backing"}`}>
//             {/* <div> */}
//               {activeTab > 1 && (
//                 // <div className="back" onClick={() => setActiveTab(activeTab - 1)}>
//                 <div className="back" onClick={handleBackClick}>
//                     <img src={greenback} alt="" />
//                   Back
//                 </div>
//               )}
//               {/* {activeTab < 4 && (
//                 <button onClick={() => setActiveTab(activeTab + 1)}>
//                   Continue
//                 </button>
//               )} */}
//             {/* </div> */}
//             {/* {page > 1 ? (
//               <div onClick={() => setPage(page - 1)} className="back">
//                 {page}
//                 <img src={greenback} alt="" />
//                 Back
//               </div>
//             ) : undefined } */}
//             {/* {back && (
//               <div className="back" onClick={handleGoBack}>
//                 {page}
//                 <img src={greenback} alt="" />
//                 Back
//               </div>
//             )} */}

//             <div className="content">
//               <p>Already have an account?</p>
//               <span>Sign in</span>
//             </div>
//           </div>
//           <div className="progress">
//             {/* <img src={progress} alt="" /> */}
//             <Pag />
//           </div>
//           <div className="per_deta">
//             {/* {activeTab === 1 && <> */}
//             <h1>Personal Details</h1>
//             <p>Please enter your details</p>
//             {/* </>} */}
//           </div>
//           <InputWrapper>
//             {activeTab === 1 && (
//             <>
//               <OInput
//                 type="text"
//                 label="Email"
//                 placeholder="Enter your email"
//                 onChange={handleInputChange}
//                 value={formData.email}
//                 name="email"
//                 forhtml="email"
//               />
//               <OInput
//                 type="tel"
//                 label="Phone Number"
//                 placeholder="+447 000-000-0000"
//                 onChange={handleInputChange}
//                 value={formData.phone}
//                 name="phone"
//                 forhtml="phone"
//               />
//               <OInput
//                 type="tel"
//                 label="BVN"
//                 placeholder="Enter your 11-digit BVN"
//                 onChange={handleInputChange}
//                 value={formData.bvn}
//                 name="bvn"
//                 forhtml="bvn"
//               />
//               <OTextarea
//                 label="Address"
//                 placeholder="Enter your Address"
//                 onChange={handleInputChange}
//                 name="address"
//                 forhtml="address"
//                 value={formData.address}
//               />
//               <Wrap>
//                 <Selector>
//                   <p>Country</p>
//                   <select
//                     onChange={(e) => {
//                       setCountryValue(e.target.value);
//                       setCountryId(e.target.value);
//                     }}
//                     value={countryId}
//                   >
//                     {country.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector>
//                 <Selector>
//                   <p>State</p>
//                   <select
//                     onChange={(e) => {
//                       setStateValue(e.target.value);
//                       setStateId(e.target.value);
//                     }}
//                     value={stateId}
//                   >
//                     {statee.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector>

//                 <Selector>
//                   <p>City</p>
//                   <select
//                     onChange={(e) => {
//                       setCityValue(e.target.value);
//                       setcityId(e.target.value);
//                     }}
//                     value={cityId}
//                   >
//                     {city.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector>
//                 {/* <Selector>
//                   <p>Country</p>
//                   <select
//                     onChange={(e) => {
//                       setCountryValue(e.target.value);
//                       setCountryId(e.target.value);
//                     }}
//                   >
//                     {country.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector>

//                 <Selector>
//                   <p>State</p>
//                   <select
//                     onChange={(e) => {
//                       setStateValue(e.target.value);
//                       setStateId(e.target.value);
//                     }}
//                   >
//                     {statee.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector>

//                 <Selector>
//                   <p>City</p>
//                   <select
//                     onChange={(e) => {
//                       setCityValue(e.target.value);
//                       setcityId(e.target.value);
//                     }}
//                   >
//                     {city.map((m, i) => (
//                       <option key={i} value={m.id}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                 </Selector> */}
//               </Wrap>{" "}
//             </>
//             )} 
//             {activeTab === 2 && (
//             <>
//               <OInput
//                 text="text"
//                 label="Company Name"
//                 placeholder="Enter Company name"
//                 onChange={handleInputChange}
//                 name="companyName"
//                 value={formData.companyName}
//                 forhtml="companyName"
//               />
//               <OInput
//                 text="text"
//                 label="Company Registration Number"
//                 placeholder="Enter reg. number"
//                 onChange={handleInputChange}
//                 name="companyRegistrationNumber"
//                 value={formData.companyRegistrationNumber}
//                 forhtml="companyRegistrationNumber"
//               />
//               <Date>
//                 <p>Date Registered</p>
//                 <div className="date">
//                   <input
//                     type="date"
//                     name="dateRegistered"
//                     value={formData.dateRegistered}
//                     id="dateInput"
//                     placeholder="numueber"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </Date>
//               <Selects
//                 width="100%"
//                 label="Sector"
//                 content="name"
//                 name="sector"
//                 mapper={statee}
//                 onSelectChange={handleSelectChange}
//               />
//             </>
//             )} 
//             {activeTab == 3 && (
//             <>
//               <File
//                 label="Company Certificate"
//                 onChange={(event) =>
//                   handleFileInputChange(event, "companyCertificateURL")
//                 }
//               />
//               <File
//                 label="Form Co7"
//                 onChange={(event) => handleFileInputChange(event, "formCo7URL")}
//               />
//               <File
//                 label="Form Co2"
//                 onChange={(event) => handleFileInputChange(event, "formCo2URL")}
//               />
//               <File
//                 label="Article of Association"
//                 onChange={(event) =>
//                   handleFileInputChange(
//                     event,
//                     "articlesAndMemorandumOfAssociation"
//                   )
//                 }
//               />
//               {/* <File label="Memorandum of Association" /> */}
//               <File
//                 label="Utility Bill"
//                 onChange={(event) =>
//                   handleFileInputChange(event, "utilityBill")
//                 }
//               />
//             </>
//             )}
//             {activeTab === 4 && (
//             <>
//               <OInput
//                 type="text"
//                 label="Username"
//                 placeholder="Enter a unique username"
//                 onChange={handleInputChange}
//                 value={formData.username}
//                 name="username"
//                 forhtml="username"
//               />
//               <OInput
//                 type="text"
//                 label="Password"
//                 placeholder="••••••••••••••"
//                 onChange={handleInputChange}
//                 value={formData.username}
//                 name="username"
//                 forhtml="username"
//               />
//               <OInput
//                 type="text"
//                 label="Confirm Password"
//                 placeholder="••••••••••••••"
//                 onChange={handleInputChange}
//                 value={formData.username}
//                 name="username"
//                 forhtml="username"
//               />
//             </>
//             )}
//           </InputWrapper>
//           {/* <div className="next" onClick={() => setPage(page + 1)}> */}
//           {/* <div className="next" onClick={handleGoNext}> */}
//           {/* <div className="next" onClick={() => setActiveTab(activeTab + 1)}> */}
//           <div className="next" onClick={handleContinueClick}>
//             <button>Continue</button>
//           </div>
//         </RightContent>
//       </RightLogin>
//     </LoginWrapper>
//   );
// };

// export default Login;

// const LoginWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   overflow: hidden;
//   .left {
//     width: 50%;
//     background: #00a85a;
//   }
// `;
// const RightLogin = styled.div`
//   background: #fcfcfc;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50%;
//   height: 100%;

//   .next {
//     width: 100%;
//     height: 35px;
//     button {
//       border-radius: 8px;
//       width: 100%;
//       height: 100%;
//       border: 1px solid #00a85a;
//       background: #00a85a;
//       box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
//       color: #fff;
//       font-size: 14px;
//       font-weight: 400;
//     }
//   }
// `;
// const RightContent = styled.div`
//   height: 80%;
//   // border: 2px solid red;
//   width: 400px;
//   .head {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     .content {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       p {
//         color: #212121;
//         font-size: 14px;
//         font-weight: 500;
//       }
//       span {
//         color: #00a85a;
//         font-size: 14px;
//         font-weight: 500;
//       }
//     }
//   }
//   .backing {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     .back {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       color: #00a85a;
//       font-size: 14px;
//       font-weight: 500;
//     }
//   }
//   .progress {
//     width: 100%;
//     margin: 10px 0;
//     & > * {
//       width: 100%;
//     }
//   }
//   .per_deta {
//     display: flex;
//     flex-direction: column;
//     margin: 10px 0;
//     h1 {
//       color: #101828;
//       font-size: 16px;
//       font-weight: 500;
//     }
//     p {
//       color: #667085;
//       font-size: 12px;
//       font-weight: 400;
//     }
//   }
// `;

// const InputWrapper = styled.div`
//   height: 410px;
//   margin: 10px 0;
//   // border: 2px solid red;
//   overflow-y: auto;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// const Wrap = styled.div`
//   margin: 20px 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .box {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     row-gap: 5px;
//     p {
//       color: #344054;
//       font-size: 14px;
//       font-weight: 500;
//     }
//     select {
//       width: 120px;
//       padding: 0 10px;
//       height: 40px;
//       outline: none;
//       border-radius: 8px;
//       border: 1px solid #d0d5dd;
//       background: #fff;
//       box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
//       option {
//         width: 100px !important;
//       }
//     }
//   }
// `;

// const Date = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   row-gap: 5px;
//   margin: 15px 0 5px;
//   p {
//     color: #344054;
//     font-size: 12px;
//     font-weight: 400;
//   }
//   .date {
//     height: 35px;
//     width: 100%;
//     padding: 0 10px;
//     border-radius: 8px;
//     border: 1px solid #d0d5dd;
//     background: #fff;
//     box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
//     input {
//       width: 100%;
//       border: none;
//       color: #344054 !important;
//       outline: none;
//     }
//   }
// `;

// const Selector = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   row-gap: 5px;
//   margin: 5px 0;
//   p {
//     color: #344054;
//     font-size: 12px;
//     font-weight: 400;
//   }
//   select {
//     width: 120px;
//     padding: 0 10px;
//     height: 35px;
//     outline: none;
//     border-radius: 8px;
//     border: 1px solid #d0d5dd;
//     background: #fff;
//     box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
//     option {
//       width: 100px !important;
//     }
//   }
// `;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//
import Pag from "../../assets/pag.jsx";
import calender from "../../assets/calendar.svg";
import TextInput from "../../Reuseable/Inputs/TextInput";
import OInput from "./OnboardingInput/OInput";
import OTextarea from "./OnboardingInput/OTextarea";
import Selects from "./OnboardingInput/Selects.jsx";
import FormData from 'form-data';
import axios from "axios";
//
import greenback from "../../assets/gback.svg";
import File from "./OnboardingInput/File.jsx";
import { useNavigate } from 'react-router-dom';
// import Select from "../../Reuseable/Inputs/Select.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [back, setback] = useState(false);

  //country Start
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState("1");
  const [countryValue, setCountryValue] = useState("Default Country");


  //  State
  const [statee, setState] = useState([]);
  const [stateId, setStateId] = useState("");
  const [stateValue, setStateValue] = useState("Default State");



  //  State End

  // City Start
  const [city, setCity] = useState([]);
  const [cityId, setcityId] = useState("");
  const [getIdTypes, setIdTypes] = useState([]);
  const [cityValue, setCityValue] = useState("Default City");
  // cityId Start End

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleContinueClick = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }else{}
  };
  const handleBackClick = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };
  const [formData, setFormData] = useState(
    {
      "companyName": "",
      "address": "",
      "city": {
          "id": ""
      },
      "state": {
          "id": ""
      },
      "country": {
          "id": ""
      },
      "phone": "",
      "email": "",
      "password" : "",
      "bvn": "",
      "idType": {
          "id" : 1
      },
      "idnumber": "",
      "idURL": "",
      "companyRegistrationNumber": "",
      "companyCertificateURL": "",
      "dateRegistered": "",
      "formCo7URL": "",
      "formCo2URL": "",
      "articlesAndMemorandumOfAssociation": "",
      "utilityBill": "",
      "sector": ""
  }

  );
  // const [formData, setFormData] = useState({
  //   email: "",
  //   phone: "",
  //   bvn: "",
  //   address: null,
  //   country: countryId,
  //   state: "",
  //   city: "",
  //   companyName: "",
  //   companyRegistrationNumber: "",
  //   dateRegistered: "",
  //   sector: "",
  //   companyCertificateURL: null,
  //   formCo7URL: "",
  //   formCo2URL: "",
  //   articlesAndMemorandumOfAssociation: "",
  //   utilityBill: "",
  //   username: "",
  //   password: "",
  //   // city: "",
  // });
  console.log("🚀 ~ file: Login.jsx:78 ~ Login ~ formData:", formData)

  useEffect(() => {
    console.log("companyName " + formData.companyName);
  }, [formData]);

  const handleSignup = async () =>{
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(formData),
      redirect: 'follow'
    };
    
   const response = await  fetch("https://moneybusiness.tm-dev.xyz/moneybusiness//payoutclientsignup", requestOptions)
  const reponseDate  = await response.json()
  console.log("🚀 ~ file: Login.jsx:126 ~ handleSignup ~ reponseDate:", reponseDate)
  }

  // Files Start
  const handleFileInputChange = async (event, fieldName) => {
    const file = event.target.files[0];

    var formdata = new FormData();
    formdata.append("file", file, );
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
   const response = await fetch("https://moneybusiness.tm-dev.xyz/moneybusiness//FileUploadAPI", requestOptions)
    const responseData = await response.json()
    console.log("🚀 ~ file: Login.jsx:98 ~ handleFileInputChange ~ responseData:", responseData)



    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: responseData?.secure_url,
    }));
  };
  // Files End

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Fetch countries and set the first country as the default
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://moneybusiness.tm-dev.xyz/moneybusiness/getcountries",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.data);
        if (data.data.length > 0) {
          setCountryId(data.data[0].id);
          setCountryValue(data.data[0].name);
        }
      })
      .catch((error) => console.log("error", error));
    fetch(
      "https://moneybusiness.tm-dev.xyz/moneybusiness//getidtypes",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setIdTypes(data.data);
        if (data.data.length > 0) {
          setCountryId(data.data[0].id);
          setCountryValue(data.data[0].name);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    // Fetch states whenever the country ID changes
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://moneybusiness.tm-dev.xyz/moneybusiness/getstates?countryId=${countryId}&stateId=0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data.data);
       
      })
      .catch((error) => console.log("error", error));
  }, [countryId]);

  useEffect(() => {
    // Fetch cities whenever the state ID changes
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://moneybusiness.tm-dev.xyz/moneybusiness/getcities?countryId=${countryId}&stateId=${stateId}&citiId=0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data.data);
        if (data.data.length > 0) {
          setcityId(data.data[0].id);
          setCityValue(data.data[0].name);
        }
      })
      .catch((error) => console.log("error", error));
  }, [stateId]);
  useEffect(() => {

  }, []);

  const namer = [{ name: "ones 1" }, { name: "ones 2" }, { name: "ones 3" }];
  const namesector = [
    { name: "Science" },
    { name: "FinTech" },
    { name: "Innovation" },
  ];
  //
  return (
    <LoginWrapper>
      <div className="left"></div>
      <RightLogin>
        <RightContent>
          <div className={` head ${activeTab > 1 && "backing"}`}>
            {/* <div> */}
              {activeTab > 1 && (
                // <div className="back" onClick={() => setActiveTab(activeTab - 1)}>
                <div className="back" onClick={handleBackClick}>
                    <img src={greenback} alt="" />
                  Back
                </div>
              )}
              {/* {activeTab < 4 && (
                <button onClick={() => setActiveTab(activeTab + 1)}>
                  Continue
                </button>
              )} */}
            {/* </div> */}
            {/* {page > 1 ? (
              <div onClick={() => setPage(page - 1)} className="back">
                {page}
                <img src={greenback} alt="" />
                Back
              </div>
            ) : undefined } */}
            {/* {back && (
              <div className="back" onClick={handleGoBack}>
                {page}
                <img src={greenback} alt="" />
                Back
              </div>
            )} */}

            <div className="content">
              <p>Already have an account?</p>
              <span onClick={() => navigate("/")}>Sign in</span>
            </div>
          </div>
          <div className="progress">
            {/* <img src={progress} alt="" /> */}
            <Pag />
          </div>
          <div className="per_deta">
            {/* {activeTab === 1 && <> */}
            <h1>Personal Details</h1>
            <p>Please enter your details</p>
            {/* </>} */}
          </div>
          <InputWrapper>
            {activeTab === 1 && (
            <>
              <OInput
                type="text"
                label="Email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={formData.email}
                name="email"
                forhtml="email"
              />
              <OInput
                type="tel"
                label="Phone Number"
                placeholder="+447 000-000-0000"
                onChange={handleInputChange}
                value={formData.phone}
                name="phone"
                forhtml="phone"
              />
              <OInput
                type="tel"
                label="BVN"
                placeholder="Enter your 11-digit BVN"
                onChange={handleInputChange}
                value={formData.bvn}
                name="bvn"
                forhtml="bvn"
              />
              <OTextarea
                label="Address"
                placeholder="Enter your Address"
                onChange={handleInputChange}
                name="address"
                forhtml="address"
                value={formData.address}
              />
                <SelectorLong>
                  <p>ID</p>
                  <select
                    onChange={(e) => {
                      console.log("🚀 ~ file: Login.jsx:348 ~ Login ~ e:", e.target.value)
                      // setCountryValue(e.target.value);
                      // setCountryId(e.target.value);
                      setFormData(prev => {
                        return { ...prev, idType: {id:parseInt(e.target.value)} }
                      })
                    }}
                    value={countryId}
                  >
                    {getIdTypes.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </SelectorLong>
                {/* <Wrap> */}
                <OInput
                type="text"
                label="Identification Number"
                placeholder="Enter your Id number"
                onChange={handleInputChange}
                value={formData.idnumber}
                name="idnumber"
                forhtml="idnumber"
              />
                <OInput
                type="text"
                label="Identification Url"
                placeholder="Id Url"
                onChange={handleInputChange}
                value={formData.idURL}
                name="idURL"
                forhtml="bvn"
              />
                {/* </Wrap> */}
              <Wrap>
                <Selector>
                  <p>Country</p>
                  <select
                    onChange={(e) => {
                      setCountryValue(e.target.value);
                      setCountryId(e.target.value);
                      setFormData(prev => {
                        return { ...prev, country: {id:parseInt(e.target.value)} }
                      })
                    }}
                    value={countryId}
                  >
                    {country.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector>
                <Selector>
                  <p>State</p>
                  <select
                    onChange={(e) => {
                      setStateValue(e.target.value);
                      setStateId(e.target.value);
                      setFormData(prev => {
                        return { ...prev, state: {id:parseInt(e.target.value)} }
                      })
                    }}
                    value={stateId}
                  >
                    {statee.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector>

                <Selector>
                  <p>City</p>
                  <select
                    onChange={(e) => {
                      setCityValue(e.target.value);
                      setcityId(e.target.value);
                      setFormData(prev => {
                        return { ...prev, city: {id:parseInt(e.target.value)} }
                      })
                    }}
                    value={cityId}
                  >
                    {city.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector>
                {/* <Selector>
                  <p>Country</p>
                  <select
                    onChange={(e) => {
                      setCountryValue(e.target.value);
                      setCountryId(e.target.value);
                    }}
                  >
                    {country.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector>

                <Selector>
                  <p>State</p>
                  <select
                    onChange={(e) => {
                      setStateValue(e.target.value);
                      setStateId(e.target.value);
                    }}
                  >
                    {statee.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector>

                <Selector>
                  <p>City</p>
                  <select
                    onChange={(e) => {
                      setCityValue(e.target.value);
                      setcityId(e.target.value);
                    }}
                  >
                    {city.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </Selector> */}
              </Wrap>{" "}
            </>
            )} 
            {activeTab === 2 && (
            <>
              <OInput
                text="text"
                label="Company Name"
                placeholder="Enter Company name"
                onChange={handleInputChange}
                name="companyName"
                value={formData.companyName}
                forhtml="companyName"
              />
              <OInput
                text="text"
                label="Company Registration Number"
                placeholder="Enter reg. number"
                onChange={handleInputChange}
                name="companyRegistrationNumber"
                value={formData.companyRegistrationNumber}
                forhtml="companyRegistrationNumber"
              />
              <Date>
                <p>Date Registered</p>
                <div className="date">
                  <input
                    type="date"
                    name="dateRegistered"
                    value={formData.dateRegistered}
                    id="dateInput"
                    placeholder="numueber"
                    onChange={handleInputChange}
                  />
                </div>
              </Date>
              <Selects
                width="100%"
                label="Sector"
                content="name"
                name="sector"
                mapper={statee}
                onSelectChange={handleSelectChange}
              />
            </>
            )} 
            {activeTab == 3 && (
            <>
              <File
                label={formData?.companyCertificateURL?.length > 0 ? `${'Company Certificate uploaded'}`: "Company Certificate"}
                onChange={(event) =>
                  handleFileInputChange(event, "companyCertificateURL")
                }
              />
              <File
                label="Form Co7"
                onChange={(event) => handleFileInputChange(event, "formCo7URL")}
              />
              <File
                label="Form Co2"
                onChange={(event) => handleFileInputChange(event, "formCo2URL")}
              />
              <File
                label="Article of Association"
                onChange={(event) =>
                  handleFileInputChange(
                    event,
                    "articlesAndMemorandumOfAssociation"
                  )
                }
              />
              {/* <File label="Memorandum of Association" /> */}
              <File
                label="Utility Bill"
                onChange={(event) =>
                  handleFileInputChange(event, "utilityBill")
                }
              />
            </>
            )}
            {activeTab === 4 && (
            <>
              <OInput
                type="text"
                label="Username"
                placeholder="Enter a unique username"
                onChange={handleInputChange}
                value={formData.username}
                name="username"
                forhtml="username"
              />
              <OInput
                type="text"
                label="Password"
                placeholder="••••••••••••••"
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                forhtml="password"
              />
              <OInput
                type="text"
                label="Confirm Password"
                placeholder="••••••••••••••"
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                forhtml="password"
              />
            </>
            )}
          </InputWrapper>
          {/* <div className="next" onClick={() => setPage(page + 1)}> */}
          {/* <div className="next" onClick={handleGoNext}> */}
          {/* <div className="next" onClick={() => setActiveTab(activeTab + 1)}> */}
          {
            activeTab >= 4 ? (
          <div className="next" onClick={handleSignup}>
            <button>Submit</button>
          </div>

            ) : (
          <div className="next" onClick={handleContinueClick}>
            <button>continue</button>
          </div>

            )
          }
        </RightContent>
      </RightLogin>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  .left {
    width: 50%;
    background: #00a85a;
    @media screen and (max-width: 40em) {
      display: none;
    }
  }
`;
const RightLogin = styled.div`
  background: #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 40em) {
    width: 100%;
    }

  .next {
    width: 100%;
    height: 35px;
    button {
      padding: 10px 0px;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      border: 1px solid #00a85a;
      background: #00a85a;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      outline: none;
    }
  }
`;
const RightContent = styled.div`
// border: 2px solid red;
height: 80%; 
  width: 400px; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  // border: 2px solid red;

  .head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    .content {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        color: #212121;
        font-size: 14px;
        font-weight: 500;
      }
      span {
        color: #00a85a;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .backing {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #00a85a;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .progress {
    width: 100%;
    margin: 10px 0;
    & > * {
      width: 100%;
    }
  }
  .per_deta {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    h1 {
      color: #101828;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      color: #667085;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const InputWrapper = styled.div`
  /* height: 410px; */
  margin: 10px 0;
  // border: 2px solid red;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 5px;
    p {
      color: #344054;
      font-size: 14px;
      font-weight: 500;
    }
    select {
      width: 120px;
      padding: 0 10px;
      height: 40px;
      outline: none;
      border-radius: 8px;
      border: 1px solid #d0d5dd;
      background: #fff;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      option {
        width: 100px !important;
      }
    }
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  margin: 15px 0 5px;
  p {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
  }
  .date {
    height: 35px;
    width: 100%;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    input {
      width: 100%;
      border: none;
      color: #344054 !important;
      outline: none;
    }
  }
`;

const Selector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  margin: 5px 0;
  p {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
  }
  select {
    width: 120px;
    padding: 0 10px;
    height: 35px;
    outline: none;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    option {
      width: 100px !important;
    }
  }
`;
const SelectorLong = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
  margin: 5px 0;
  p {
    color: #344054;
    font-size: 12px;
    font-weight: 400;
  }
  select {
    width: 100%;
    padding: 0 10px;
    height: 35px;
    outline: none;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    option {
      width: 100px !important;
    }
  }
`;
