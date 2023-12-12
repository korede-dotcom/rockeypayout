import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
// import { SidebarData } from "../Mapables";
import Overview from "../assets/SidebarImg/overview";
import Ohentpay from "../assets/SidebarImg/ohentpay.svg";
import user from "../assets/SidebarImg/user.png";
import code from "../assets/SidebarImg/code.png";
import lock from "../assets/SidebarImg/lock.png";
import cprofile from "../assets/SidebarImg/cprofile.png";
import hope from "../assets/SidebarImg/hope.svg";
import axios from "axios";
//
import logo from "../assets/SidebarImg/logo.svg";

const Sidebar = ({ selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [getUser, setuserDetails] = useState(null);

  const Navigate = useNavigate();
  const [market, setMarket] = useState([]);
  const [dynamicGatewayItems, setDynamicGatewayItems] = useState([]);
  const [SidebarData, setSidebarData] = useState([]);
  const [gate, setGate] = useState();
  
  // useEffect(() => {
    //     const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    //     setuserDetails(userDetails);
    //     const payOutClientWalletPayOutProviders = userDetails?.data?.payOutClientWalletPayOutProviders;
    //     if (payOutClientWalletPayOutProviders) {
      // console.log("🚀 ~ file: Sidebar.jsx:26 ~ Sidebar ~ gate:", gate)
      //       const formattedGatewayItems = payOutClientWalletPayOutProviders?.map((d) => ({
        //         title: `${d?.providerName} [${d?.wallet?.country?.currencyCode}]`,
        //         path: d?.providerName?.includes("HopePSB") ? `/hopebank/?${d?.wallet?.country?.currencyCode}` : `/ohentpay/${d?.wallet?.country?.currencyCode}`,
        //         image: d?.providerName?.includes("HopePSB") ? (
//           <img src={hope} alt="" />
//         ) : (
//           <img src={Ohentpay} alt="" />
//         ),
//       }));
//       setDynamicGatewayItems(formattedGatewayItems);
//       setSidebarData([
//         {
//           pageName: "Gateway",
//           Name: "My GATEWAYS",
//           path: "/overview",
//           Gateway: [
//             {
//               title: "Overview",
//               path: "/overview",
//               image: <Overview />,
//             },
//             ...formattedGatewayItems,
//             // ...generateGatewayItems(),
//           ],
//         },
//         {
//           pageName: "Gateway",
//           Name: "ALL GATEWAYS",
//           path: "/marketplace",
//           Gateway: [
//             {
//               title: "Marketplace",
//               path: "/marketplace",
//               image: <img src={market} alt="" />,
//             },
//           ],
//         },
//         {
//           pageName: "Transactions",
//           Name: "Transactions",
//           path: "/transaction",
//           Gateway: [
//             {
//               title: "Transaction",
//               path: "/transaction",
//               image: <Overview />,
//             },
//           ],
//         },
//         {
//           pageName: "Security",
//           Name: "Security",
//           path: "/security/profile",
//           Gateway: [
//             {
//               title: "User Profile",
//               path: "/security",
//               image: <img src={user} alt="" />,
//             },
//             {
//               title: "Company Profile",
//               path: "/security/company",
//               image: <img src={cprofile} alt="" />,
//             },
//             {
//               title: "API",
//               path: "/security/API",
//               image: <img src={code} alt="" />,
//             },
//             {
//               title: "Change Password",
//               path: "/security/change-password",
//               image: <img src={lock} alt="" />,
//               // image: <Overview />
//             },
//             {
//               title: "Developers",
//               path: "/security/user-management",
//               image: <img src={code} alt="" />,
//             },
//           ],
//         },
//         {
//           pageName: "Beneficiary",
//           Name: "Beneficiary",
//           path: "/beneficairy",
//         },
//         {
//           pageName: "Logout",
//           Name: "Logout",
//           path: "/",
//         },
//         // ... other sections
//       ]);
//     }
//   }, [dynamicGatewayItems]);

// useEffect(() => {
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));

//   var config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userDetails.data.userId}`,
//     headers: {},
//   };

//   axios(config)
//     .then(function (response) {
//       console.log("🚀 ~ file: Sidebar.jsx:142 ~ response:", response);
//       setGate(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   setuserDetails(userDetails);

//   const payOutClientWalletPayOutProviders = gate?.data?.payOutClientWalletPayOutProviders || [];
//   const formattedGatewayItems = payOutClientWalletPayOutProviders.map((d) => ({
//     title: `${d?.providerName} [${d?.wallet?.country?.currencyCode}]`,
//     path: d?.providerName?.includes("HopePSB")
//       ? `/hopebank/?currency=${d?.wallet?.country?.currencyCode}&id=${d?.providerId}&cid=${d?.wallet?.country?.id}`
//       : `/ohentpay/?currency${d?.wallet?.country?.currencyCode}&id=${d?.providerId}&cid=${d?.wallet?.country?.id}`,
//     image: d?.providerName?.includes("HopePSB") ? <img src={hope} alt="" /> : <img src={Ohentpay} alt="" />,
//   }));

//   setDynamicGatewayItems(formattedGatewayItems);

//   let sidebarData;

//   sidebarData = [
//     {
//       pageName: "Gateway",
//       Name: "My GATEWAYS",
//       path: "/overview",
//       Gateway: [
//         {
//           title: "Overview",
//           path: "/overview",
//           image: <Overview />,
//         },
//         ...formattedGatewayItems,
//       ],
//     },
//     {
//       pageName: "Gateway",
//       Name: "ALL GATEWAYS",
//       path: "/marketplace",
//       Gateway: [
//         {
//           title: "Marketplace",
//           path: "/marketplace",
//           image: <img src={market} alt="" />,
//         },
//       ],
//     },
//     {
//       pageName: "Transactions",
//       Name: "Transactions",
//       path: "/transaction",
//       Gateway: [
//         {
//           title: "Transaction",
//           path: "/transaction",
//           image: <Overview />,
//         },
//       ],
//     },
//     {
//       pageName: "Security",
//       Name: "Security",
//       path: "/security/profile",
//       Gateway: [
//         {
//           title: "User Profile",
//           path: "/security",
//           image: <img src={user} alt="" />,
//         },
//         {
//           title: "Company Profile",
//           path: "/security/company",
//           image: <img src={cprofile} alt="" />,
//         },
//         {
//           title: "API",
//           path: "/security/API",
//           image: <img src={code} alt="" />,
//         },
//         {
//           title: "Change Password",
//           path: "/security/change-password",
//           image: <img src={lock} alt="" />,
//         },
//         {
//           title: "Developers",
//           path: "/security/user-management",
//           image: <img src={code} alt="" />,
//         },
//       ],
//     },
//     {
//       pageName: "Beneficiary",
//       Name: "Beneficiary",
//       path: "/beneficairy",
//     },
//     {
//       pageName: "Logout",
//       Name: "Logout",
//       path: "/",
//     },
//   ];

//   if (userDetails?.data?.role?.id === 8) {
//     sidebarData = [
//       {
//         pageName: "Security",
//         Name: "Security",
//         path: "/security/profile",
//         Gateway: [
//           {
//             title: "API",
//             path: "/security/API",
//             image: <img src={code} alt="" />,
//           },
//         ],
//       },
//       {
//         pageName: "Logout",
//         Name: "Logout",
//         path: "/",
//       },
//     ];
//   }

//   setSidebarData(sidebarData);
// }, []);

useEffect(() => {

},[])

useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const response = await axios.get(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userDetails.data.userId}`);
      const gateData = response.data;

      const response2 = await fetch('https://apidoc.transferrocket.co.uk//getpayoutprovider');
      const data2 = await response2.json();
      console.log("🚀 ~ file: Sidebar.jsx:285 ~ fetchUserDetails ~ data2:", data2)
      setuserDetails(userDetails);
      
    const payOutClientWalletPayOutProviders = gateData?.data?.payOutClientWalletPayOutProviders || [];
setGate(gateData);

const formattedGatewayItems = payOutClientWalletPayOutProviders?.map((d) => {
  const logoUrl = data2?.data?.find((item) => item.id === d.providerId)?.logo || "defaultLogoUrl";

  return {
    title: `${d?.providerName} [${d?.wallet?.currency?.code}]`,
    path: d?.providerName?.includes("HopePSB")
      ? `/gateways/?name=${d?.providerName.trim()}&currency=${d?.wallet?.currency?.code}&id=${d?.providerId}&cid=${d?.wallet?.currency?.id}`
      : `/gateways/?name=${d?.providerName.trim()}&currency=${d?.wallet?.currency?.code}&id=${d?.providerId}&cid=${d?.wallet?.currency?.id}`,
    image: <img src={logoUrl} alt="" />,
  };
});

console.log(formattedGatewayItems);


      setDynamicGatewayItems(formattedGatewayItems);

      const sidebarData = [
        {
          pageName: "Gateway",
          Name: "My GATEWAYS",
          path: "/overview",
          Gateway: [
            { title: "Overview", path: "/overview", image: <Overview /> },
            ...formattedGatewayItems,
          ],
        },
        {
          pageName: "Gateway",
          Name: "ALL GATEWAYS",
          path: "/marketplace",
          Gateway: formattedGatewayItems.length > 0
            ? [
                { title: "Marketplace", path: "/marketplace", image: <img src={market} alt="" /> },
              ]
            : [{ title: "Marketplace", path: "/marketplace", image: <img src={market} alt="" /> }],
        },
        {
          pageName: "Transactions",
          Name: "Transactions",
          path: "/transaction",
          Gateway: [{ title: "Transaction", path: "/transaction", image: <Overview /> }],
        },
        {
          pageName: "Security",
          Name: "Security",
          path: "/security/profile",
          Gateway: [
            { title: "User Profile", path: "/security", image: <img src={user} alt="" /> },
            { title: "Company Profile", path: "/security/company", image: <img src={cprofile} alt="" /> },
            { title: "API", path: "/security/API", image: <img src={code} alt="" /> },
            { title: "Change Password", path: "/security/change-password", image: <img src={lock} alt="" /> },
            { title: "Developers", path: "/security/user-management", image: <img src={code} alt="" /> },
          ],
        },
        { pageName: "Beneficiary", Name: "Beneficiary", path: "/beneficiary" },
        { pageName: "Logout", Name: "Logout", path: "/" },
      ];

      if (userDetails?.data?.role?.id === 8) {
        setSidebarData([
          {
            pageName: "Security",
            Name: "Security",
            path: "/security/profile",
            Gateway: [{ title: "API", path: "/security/API", image: <img src={code} alt="" /> }],
          },
          { pageName: "Logout", Name: "Logout", path: "/" },
        ]);
      } else {
        setSidebarData(sidebarData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserDetails();
}, []);


  


  async function generateGatewayItems() {
    const market = MarketData(); // Fetch market data
    return market?.map((d) => ({
      title: d?.providerName,
      path: d?.providerName?.includes("HopePSB") ? "/hopebank" : "/ohentpay",
      image: d?.providerName?.includes("HopePSB") ? (
        <img src={hope} alt="" />
      ) : (
        <img src={Ohentpay} alt="" />
      ),
    }));
  }



  function MarketData() {
    useEffect(() => {
      const fetchMarketData = async () => {
        try {
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          const response = await fetch(
            `https://apidoc.transferrocket.co.uk//getpayoutprovider`,
            // `https://apidoc.transferrocket.co.uk//getpayoutprovider/${getUser?.data?.userId}`,
         
            requestOptions
          );

          const data = await response.json();
          setMarket(getUser?.data?.payOutClientWalletPayOutProviders);
          console.log(
            "🚀 ~ file: Marketplace.jsx:22 ~ makeRequest ~ data:",
            data
          );
        } catch (error) {
          console.error("Error fetching market data: ", error);
        }
      };

      fetchMarketData();
    }, []);

    return market;
  }

  useEffect(() => {
    const updateIsOpen = () => {
      if (window.innerWidth < 500) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    updateIsOpen();
    const handleResize = () => {
      updateIsOpen();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedCategory]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const matchingCategories = SidebarData.filter(
    (item) => item.pageName === selectedCategory
  );
  const locate = window.location.pathname;

  return (
    <SidebarContainer isOpen={isOpen}>
      <div
        className="logo"
        style={{
          padding: isOpen ? "0 0 0 20px" : "0 1px",
        }}
      >
        <img
          // src={logo}
          src={logo}
          alt=""
          style={{
            width: isOpen ? "110px" : "63px",
            padding: isOpen ? "0 0 0 0" : "0",
          }}
        />
      </div>
      <div className="navbox">
        {matchingCategories.map((selectedCategoryData, index) => (
          <nav key={index}>
            <p
              className="title"
              style={{
                fontSize: isOpen ? "10px" : "9px",
                margin: isOpen ? "0 0 5px 0" : "0 0 10px 0",
              }}
            >
              {selectedCategoryData?.Name}
            </p>
            <div className="navcContainer">
              {selectedCategoryData?.Gateway?.map((m, i) => {
                // setNav(m.path);
                return (
                  <div
                    key={i}
                    className={` navbx ${locate === m?.path && "active"}`}
                  >
                    <div className="navImg">{m?.image}</div>
                    <span
                      onClick={() => {
                        Navigate(m?.path);
                      }}
                      style={{ display: isOpen ? "" : "none" }}
                    >
                      {m.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </nav>
        ))}
      </div>
      <div style={{display:"flex",paddingInline:"40px",paddingBlock:"20px",cursor:"pointer"}}>
      <div
        onClick={() => {
          localStorage.clear();
          window.location = "/";
        }}
        style={{display:"flex",gap:"10px",alignItems:"center"}}
      >
        <svg
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 0.287598C5.82969 0.287598 0 6.11729 0 13.2876C0 20.4579 5.82969 26.2876 13 26.2876C20.1703 26.2876 26 20.4579 26 13.2876C26 6.11729 20.1703 0.287598 13 0.287598Z"
            fill="#F34235"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5859 14.2271C18.5859 17.3095 16.0773 19.813 13 19.813C9.91758 19.813 7.41406 17.3044 7.41406 14.2271C7.41406 12.3278 8.36367 10.5759 9.9582 9.54502C10.334 9.30127 10.8367 9.40791 11.0805 9.78369C11.3242 10.1595 11.2176 10.6622 10.8418 10.906C9.70938 11.6372 9.03906 12.8813 9.03906 14.2271C9.03906 16.4106 10.8164 18.188 13 18.188C15.1836 18.188 16.9609 16.4106 16.9609 14.2271C16.9609 12.8813 16.2855 11.6372 15.1582 10.906C14.7824 10.6622 14.6758 10.1595 14.9195 9.78369C15.1633 9.40791 15.666 9.30127 16.0418 9.54502C17.6363 10.5759 18.5859 12.3278 18.5859 14.2271ZM12.1875 11.3274V7.57471C12.1875 7.12783 12.5531 6.76221 13 6.76221C13.4469 6.76221 13.8125 7.12783 13.8125 7.57471V11.3274C13.8125 11.7743 13.4469 12.1399 13 12.1399C12.5531 12.1399 12.1875 11.7743 12.1875 11.3274Z"
            fill="white"
          />
        </svg>

        <p>Logout</p>
      </div>

      </div>
      {/* <button onClick={toggle}>click</button> */}
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  height: 100%;
  // width: 200px;
  width: ${(props) => (props.isOpen ? "200px" : "65px")};
  // border-right: 1px solid #EAECF0;
  background: #fff;
  .logo {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 85px;
    border-bottom: 1px solid #eaecf0;
    img {
      width: 110px;
    }
  }
  .navbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    nav {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
      padding: 0 5%;
      .title {
        color: #848d87;
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .navcContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;
        width: 100%;

        .blockbox {
          width: 100%;
        }
        .navbx {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          // padding: 5px 10px 5px 10px;
          height: 40px;
          padding: 0 5px 0 15px;
          border-radius: 0 6px 6px 0;

          span {
            color: #464f60;
            font-size: 12px;
            font-weight: 400;
          }

          .navImg > * {
            width: 18px;
          }
        }
        .active {
          background: #ecfeff;
          border-left: 4px solid #00a85a;
          // padding: 5px 5px 5px 13px;
          span {
            color: #00a85a;
          }
        }
      }
    }
  }
`;
