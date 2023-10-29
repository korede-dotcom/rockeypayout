import React, { useState,useEffect } from "react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
//
import key from "../../assets/key.svg";
import Box from "../../Reuseable/Box";
import copy from "../../assets/copy.svg";
import Reusetable from "../../Reuseable/Reusetable";
import { ApiHeader, ApiBody } from "../../Mapables";
import {  WebhooksBody } from "../../Mapables";
// import { WebhooksHHead, WebhooksBody } from "../../Mapables";
import Modal from "../../Reuseable/Modal";
//
import gb from "../../assets/gb.svg";
import rb from "../../assets/rb.svg";
import cc from '../../assets/languagesImg/c.svg'
import cplus from '../../assets/languagesImg/cplus.svg'
import gosimg from '../../assets/languagesImg/go.svg'
import json from '../../assets/languagesImg/json.svg'
import jsimg from '../../assets/languagesImg/js.svg'
import kotlin from '../../assets/languagesImg/kotlin.svg'
import objectc from '../../assets/languagesImg/objectc.svg'
import python from '../../assets/languagesImg/python.svg'
import rlang from '../../assets/languagesImg/rlang.svg'
import swift from '../../assets/languagesImg/swift.svg'
import copys from 'clipboard-copy';
import { Button } from "@arco-design/web-react";
import OInput from "../Onboarding/OnboardingInput/OInput";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import csharp from "../../assets/Webhooks/csharp.svg";
import curl from "../../assets/Webhooks/curl.svg";
import java from "../../assets/Webhooks/java.svg";
import php from "../../assets/Webhooks/php.svg";
import node from "../../assets/Webhooks/node.png";
import alb from "../../assets/alb.png";
import ngn from '../../assets/ngn.svg'




const Details = () => {
  const [mod, setMo] = useState(false);
  const [mod2, setMo2] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [others, setOther] = useState(false);
  const [copied, setCopied] = useState(false);
  const [WebhooksHHead, setWebhooksHead] = useState([
    {
      name: "curl",
      image: <img src={curl} alt="" />,
    },
    {
      name: "c",
      image: <img src={cc} alt="" />,
    },
    {
      name: "Java",
      image: <img src={java} alt="" />,
    },
    {
      name: "C#",
      image: <img src={csharp} alt="" />,
    },
    {
      name: "PHP",
      image: <img src={php} alt="" />,
    },
    {
      name: "NODE JS",
      image: <img style={{ width: "40px" }} src={node} alt="" />,
    },
  ]);
  const [createApp, setcreateApp] = useState(
    {
      "clientId": "",
      "appName": "",
      "appDescription": "",
      "appWebHook": ""
  });
  console.log("🚀 ~ file: Details.jsx:47 ~ Details ~ createApp:", createApp)

  const [getUser,setUser] = useState()
  console.log("🚀 ~ file: Details.jsx:32 ~ Details ~ getUser:", getUser)
  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("userDetails")))
  },[])

  const [othermap,setOthermap] = useState([
    {name: 'C', image: cc},
    {name: 'C++', image: cplus},
    {name: 'Go', image: gosimg},
    {name: 'HTTP', image: cc},
    {name: 'Javascript', image: jsimg},
    {name: 'JSON', image: cc},
    {name: 'Kotlin', image: kotlin},
    {name: 'Objective-C', image: objectc},
    {name: 'PowerShell', image: cc},
    {name: 'Python', image: python},
    {name: 'R', image: rlang},
    {name: 'Swift', image: swift}
  ])

  const handleCopyClick = async () => {
    try {
      await copys(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  const handlecreateuser = (e) => {
    const {name,value} = e?.target;

    setcreateApp(prev => {
      return {
        ...prev,
        [name]:value,
        ["clientId"]:getUser?.data?.clientKeys?.clientId
      }
    })

  }

const submitCreateApp = async ()  => {

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(createApp),
    redirect: 'follow'
  };
  
  const response = await fetch("https://apidoc.transferrocket.co.uk//createpayoutclientapp", requestOptions)
  const data = await response.json()
  console.log("🚀 ~ file: Details.jsx:97 ~ submitCreateApp ~ data:", data)

}


const handleSelect = (name) => {
  console.log("🚀 ~ file: Details.jsx:109 ~ handleSelect ~ name:", name)
  let selectedLanguage = WebhooksHHead.find((language) => language.name.toLowerCase() === name.toLowerCase());
  setWebhooksHead([selectedLanguage])
  // setOthermap([selectedLanguage])
  console.log("🚀 ~ file: Details.jsx:110 ~ handleSelect ~ selectedLanguage:", selectedLanguage)
  // setOther(!others)
}



  return (
    <Layout>
      <ApiBox>
        <div className="apihead">
          <div className="left">
            <h1>API</h1>
            <p>
              This overview provides a comprehensive snapshot of wallet
              transactions on your system
            </p>
          </div>
          <div className="rightside">
            <p onClick={() => setMo(true)}>
              <img src={key} alt="" />
              <span>View API Keys</span>
            </p>
            {mod && (
              <Modal
                width="430px"
                height="350px"
                modalName="API KEY"
                setPayout={setMo}
                setShow=""
                style={{ padding: "0 10px" }}
              >
                <APiModalWrapper>
                  <p>
                    This is your API key. You can use this key to integrate with
                    other platforms enabling your application or service to
                    effortlessly collaborate with other systems
                  </p>
                  <div className="textes">
                    <label htmlFor="">Test Keys</label>
                    <div className="con">
                      <input
                        type={reveal ? "text" : "password"}
                        value={getUser?.data?.clientKeys?.testKey}
                        readOnly
                      />
                      <img src={copy} alt="" onClick={handleCopyClick} />
                    </div>
                  </div>
                  <div className="textes">
                    <label htmlFor="">Live Keys</label>
                    <div className="con">
                      <input
                        type={reveal ? "text" : "password"}
                        value={getUser?.data?.clientKeys?.liveKey}
                        readOnly
                      />
                      <img src={copy} alt="" />
                    </div>
                  </div>
                  <div className="re" onClick={() => setReveal(!reveal)}>
                    Reveal Key
                  </div>
                </APiModalWrapper>
              </Modal>
            )}
            {mod2 && (
              <Modal
                width="430px"
                // height="350px"
                modalName="Create a new App"
                setPayout={setMo}
                setShow=""
                style={{ padding: "0 10px" }}
                btn="create"
                handleSubmit={submitCreateApp}
                cancleModal={() => setMo2(!mod2)}
              >
                <div style={{paddingInline:"20px"}}>
                <OInput label="appName" name="appName" onChange={handlecreateuser}/>
                <OInput label="appDescription" name="appDescription" onChange={handlecreateuser} />
                <OInput label="appWebHook" name="appWebHook" onChange={handlecreateuser} />

                </div>
                
                
              </Modal>
            )}
          </div>
        </div>
        <Box
          border="none"
          width="100%"
          margin="20px 0"
          radius="15px"
          flexDirection="column"
          alignItems="flex-start"
          padding="20px 0"
        >
          <Apiwrap>
            <div className="top">
              <div style={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
              <h3>Application Tokens</h3>
              <div className="btn" onClick={() => setMo2(!mod2)}>
                <Button>Create App</Button>

              </div>

              </div>
              <p>
                <span>
                  You can use the Transferrocket API to access your
                  Transferrocket Account from your own applications. To do this,
                  you need to assign a particular set of permissions to an
                  Application Token and then embed these tokens in your
                  applications.
                </span>
                <span>
                  It is important to keep these tokens safe - anyone who has
                  them can use them to access your account. Only give each token
                  the minimum perissions required. If you suspect that they have
                  been compromised (if you accidentally commit them to Github
                  for example), delete them from the table below immediately.
                  You can then create another Application Token for the same
                  application to replace them.
                </span>
              </p>
            </div>
          </Apiwrap>
          <hr
            style={{
              width: "calc(100% - 40px)",
              margin: "10px 20px",
              border: ".5px solid #EAECF0",
            }}
          />
          {/* <Reusetable /> */}
          <Retable>
            <table>
              <thead>
                <tr>
                  {ApiHeader.map((thead, i) => (
                    <th key={i}>
                      <span>
                        {thead.name}
                        {thead.image}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getUser?.data?.clientApps?.map((tbody, index) => (
                  <tr key={index}>
                    {/* {theads.map((thead) => (
                <td key={thead.id}>{tbody[thead.name]}</td>
              ))} */}
                    <td>{tbody?.id}</td>
                     <td>{tbody?.appName}</td>
                    <td>{tbody?.appDescription}</td>
                    <td>
                      {tbody?.appWebHook}
                      <span className="special">
                        {tbody.image}
                        <span>{tbody.Test}</span>
                      </span>
                    </td>
                    <td>{tbody?.dateCreated}</td>
                    <td>{tbody?.lastUpdated}</td> 
                    <td className={tbody?.approved === true ? "green" : "red"}>
                      <span
                        className={
                          tbody.approved === true
                            ? "greenbullet"
                            : "redbullet"
                        }
                      ></span>
                      <span
                        className={
                          tbody.approved === true
                            ? "activeLast"
                            : "inactiveLast"
                        }
                      >
                        {tbody.approved}
                      </span>
                      </td>
                    {/* <td>
                      {tbody.approved === true ? (
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
                    </td> */}
                    {/* src/assets/languagesImg/go */}
                  </tr>
                ))}
              </tbody>
            </table>
          </Retable>
          <div className="webhook">
            <div className="con">
              <h2>Webhooks</h2>
              <p>A description about sample codes goes here</p>
            </div>
            <div className="other">
              <p className="sh" onClick={() => setOther(!others)}>
                Other Languages
              </p>

              {others && <div className="showothers"  >
                      {othermap.map((m,i) => (
                        <div className="oth" onClick={() => handleSelect(m.name)}>
                          <img  src={m.image} alt="" />
                          <span>{m.name}</span>
                        </div>
                      ))}
                </div>}
            </div>
          </div>

          <hr
            style={{
              display: "flex",
              alignItems: "center",
              width: "calc(100% - 40px)",
              margin: "5px  15px 30px",
              border: ".5px solid #EAECF0",
            }}
          />
          <Retabletwo>

          <Tabs>
    <TabList>
      <Tab>Step 1</Tab>
      <Tab>Step 2</Tab>
      <Tab>Step 3</Tab>
    </TabList>

    <TabPanel>
            <div className="table">
              <div className="thead">
                {WebhooksHHead.map((m, i) => (
                  <div key={i} className="tdd">
                    {m?.image}
                    <span>{m?.name}</span>
                  </div>
                ))}
              </div>
              <div className="tbod">
                {WebhooksBody.map((m, i) => (
                  <div className="bod">{m?.text}</div>
                ))}
              </div>
            </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            
          </Retabletwo>
        </Box>
      </ApiBox>
    </Layout>
  );
};

export default Details;

const ApiBox = styled.div`
  .apihead {
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
        gap: 10px !important;
        img {
          width: 17px;
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
  .webhook {
    margin: 20px 0 0;
    padding: 10px 20px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .con {
      display: flex;
      flex-direction: column;
      h2 {
        color: #090814;
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 400;
        line-height: 28px;
      }
      p {
        color: #667085;
        font-size: 12px;
        font-weight: 300;
      }
    }
    .other {
      position: relative;
      cursor: pointer;
      .sh {
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: #667085;
        font-size: 12px;
        padding: 10px;
        font-weight: 400;
      }
      .showothers {
        position: absolute;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        top: 38px;
        width: 150px;
        height: 230px;
        overflow-y: auto;
        right: 0;
        border-radius: 6px;
        background: #FFF;
        padding: 10px;
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 0px 0px 1px rgba(152, 161, 178, 0.10);
        .oth{
          display: flex;
          align-items: center;
          gap: 10px;
          span{
            color: #464F60;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.32px;
          }
        }
      }
    }
  }
`;
const Apiwrap = styled.div`
  width: 100%;
  .top {
    padding: 0 20px 0;
    .btn{
      button{
        background: #00a85a;
        border: none;
        padding: 10px 40px;
        border-radius: 7px;

      }
    }
    h3 {
      color: #090814;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 20px;
    }
    p {
      color: #667085;
      font-size: 11px;
      font-weight: 400;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 15px;
    }
  }
`;
// const Retable = styled.div``;
const Retable = styled.div`
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
  table {
    // border: 2px solid red;
    // width: 100% !important;
    height: 300px;
    border-collapse: collapse;
    width: max-content;
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
        font-weight: 500;
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
      // Webhook Head
      .webhookhead {
        width: 100px !important;
        border: 2px solid red;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #e9edf5;
        // Webhook tbody
        .webhookbody {
          width: 50px !important;
          border: 2px solid red;
        }
        td {
          padding: 15px 15px;
          width: max-content;
          text-align: start;
          color: #5a6376;
          font-size: 11px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
        td:first-child {
          padding: 0 25px;
        }
        td:nth-child(4) {
          display: flex;
          align-items: center;
          gap: 25px;

          // padding: 0 25px;
          .special {
            display: flex;
            align-items: center;
            gap: 7px;
            img {
              width: 15px;
            }
            span {
              color: #417cd4;
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
        td:last-child {
          padding-right: 20px;

          .sp_active {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #ecfdf3;
            padding: 5px 15px;
            color: #027a48;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
            img {
              width: 7px;
            }
          }
          .sp_inactive {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 16px;
            background: #fef3f2;
            padding: 5px 15px;
            color: #b42318;
            text-align: center;
            font-size: 11px;
            font-weight: 400;
            img {
              width: 7px;
            }
          }
          //   margin: 0 0 0 15px;
          //   padding: 3px 10px;
          //   border-radius: 20px;
          //   display: flex;
          //   align-items: center;
          //   gap: 7px;
          //   .greenbullet {
          //     height: 5px;
          //     width: 5px;
          //     padding: 1px 2.5px;
          //     border-radius: 50%;
          //     background: #00a85a;
          //   }
          //   .activeLast {
          //     color: #fff;
          //     // border: 2px solid red;
          //   }
          //   // false
          //   .redbullet {
          //     height: 5px;
          //     width: 5px;
          //     padding: 1px 2.5px;
          //     border-radius: 50%;
          //     background: red;
          //   }
          //   .inactiveLast {
          //     color: red;
          //   }
        }
        // .green {
        //   background: #7bb83d;
        // }
        // .red {
        //   background: orange;
        // }
      }
    }
  }
`;
const Retabletwo = styled.div`
  width: 100%;
  overflow: auto hidden;
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
  .table {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: max-content;
    margin-bottom: 10px;
  }
  .thead {
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 1px solid #e9edf5;
    border-bottom: 1px solid #e9edf5;
    background: #f9fafb;
    gap: 15px;
    padding: 5px 20px;
  }

  .tdd {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    gap: 5px;
    width: 230px;
    /* gap: 10px; */
  }
  .tdd img {
    width: 30px;
    height: 20px;
  }
  .tdd span {
    color: #687182;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }

  .tbod {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px 20px;
  }

  .bod {
    width: 230px;
    height: max-content;
    word-wrap: break-word;
    color: #333b4a;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; /* 85.714% */
  }
  // table{
  //   // width: 800px;
  //   width: 100%;
  //   table-layout: fixed;
  //     thead{
  //       tr{
  //         th{
  //           width: 300px
  //           border: 2px solid green;
  //           height: max-content;
  //           display: flex;
  //           align-items: center;

  //         }
  //       }
  //     }
  //     tbody{
  //         tr{
  //           td{
  //             width: 300px;
  //             border: 2px solid red;
  //             white-space: normal;
  //             word-wrap: break-word;
  //             height: max-content;
  //           }
  //         }
  //     }
  // }
`;
const APiModalWrapper = styled.div`
  border-radius: 10px;
  background: #f3f3f3;
  // height: 200px;
  width: 96%;
  margin: 5px auto 0;
  padding: 20px 15px;
  // border: 2px solid red;
  p {
    color: #667085;
    font-size: 11px;
    font-weight: 400;
    line-height: 15px; /* 142.857% */
  }
  .textes {
    display: flex;
    flex-direction: column;
    align-itesm: flex-start;
    width: 100%;
    margin: 10px 0;
    label {
      color: #344054;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
    .con {
      display: flex;
      align-itesm: center;
      width: 100%;
      // border: 2px solid red;
      gap: 10px;
      input {
        width: 87%;
        border: none;
        outline: none;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        padding: 8px 10px;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: #667085;
        font-size: 12px;
        font-weight: 400;
        &::placeholder {
          color: #667085;
          font-size: 12px;
          font-weight: 400;
        }
      }
      img {
        width: 18px;
      }
    }
  }
  .re {
    border-radius: 8px;
    border: 1px solid var(--Primary-Colour, #00a85a);
    background: var(--Primary-Colour, #00a85a);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 10px 0;
    margin-top: 25px;
  }
`;
const APiModalWrapper2 = styled.div`
  border-radius: 10px;
  background: #f3f3f3;
  // height: 200px;
  width: 96%;
  margin: 5px auto 0;
  padding: 20px 15px;
  // border: 2px solid red;
  p {
    color: #667085;
    font-size: 11px;
    font-weight: 400;
    line-height: 15px; /* 142.857% */
  }
  .textes {
    display: flex;
    flex-direction: column;
    align-itesm: flex-start;
    width: 100%;
    margin: 10px 0;
    label {
      color: #344054;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
    .con {
      display: flex;
      align-itesm: center;
      width: 100%;
      // border: 2px solid red;
      gap: 10px;
      input {
        width: 87%;
        border: none;
        outline: none;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        background: #fff;
        padding: 8px 10px;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: #667085;
        font-size: 12px;
        font-weight: 400;
        &::placeholder {
          color: #667085;
          font-size: 12px;
          font-weight: 400;
        }
      }
      img {
        width: 18px;
      }
    }
  }
  .re {
    border-radius: 8px;
    border: 1px solid var(--Primary-Colour, #00a85a);
    background: var(--Primary-Colour, #00a85a);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 10px 0;
    margin-top: 25px;
  }
`;
