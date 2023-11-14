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
import { toast } from "react-hot-toast";
import CustomTable from "../../reuseables/CustomTable";
import Btn from "../../reuseables/Btn";
import Iframe from "../../reuseables/Iframe";



// const demos = {
//   soundcloud:
//     '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://hopesuperagent.tm30.net/"></iframe>',

//   plotly:
//     '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
// };

// //codesandbox.io/s/react-iframe-demo-g3vst codePen =
// function Iframe(props) {
//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
//     />
//   );
// }


const Details = () => {
  const [mod, setMo] = useState(false);
  const [mod2, setMo2] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [others, setOther] = useState(false);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(null);
  const [info, setInfo] = useState("");
  const [frame, showFrame] = useState(false);
  const [act1, setAct1] = useState(true);
  const [act2, setAct2] = useState(false);
  



const [WebhooksHHead, setWebhooksHead] = useState(
    {name: 'C', image: cc ,id:1,code:`
    var client = new HttpClient()
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk/getcurrencytype");
    var response = await client.SendAsync(request)
    response.EnsureSuccessStatusCode()
    Console.WriteLine(await response.Content.ReadAsStringAsync())
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }
    `,
     code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
     codefive:`
     var client = new HttpClient();
     var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk/creatpayoutbeneficiary");
     var content = new StringContent("{\n    \"userId\": 45586980,\n    \"userBeneficiary\": {\n        \"country\": {\n            \"id\": 161\n        },\n        \"beneficiaryName\": \"Albert\",\n        \"beneficiaryPhoneNumber\": \"Saheed\",\n        \"beneficiaryBank\": {\n            \"accountNumber\": \"0012176233\",\n            \"bankId\": 8\n        }\n    }\n}", null, "text/plain");
     request.Content = content;
     var response = await client.SendAsync(request);
     response.EnsureSuccessStatusCode();
     Console.WriteLine(await response.Content.ReadAsStringAsync());     
    `,
     code5res:`
     {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Beneficiary succesfully added",
      "data": 12346578
    }    
    `,
     codesix:`
     var client = new HttpClient();
     var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk/processpayout.io");
     request.Headers.Add("clientId", "45586980");
     var content = new StringContent("{\n    \"refrenceId\": \"AT1237923712\",\n    \"appId\": 582664,\n    \"sourceId\": 1,\n    \"currencyId\": 161,\n    \"amount\": 50,\n    \"naration\": \"Demo pay out.\",\n    \"senderName\": \"Korede\",\n    \"beneficiaryId\" : 12346578\n}", null, "text/plain");
     request.Content = content;
     var response = await client.SendAsync(request);
     response.EnsureSuccessStatusCode();
     Console.WriteLine(await response.Content.ReadAsStringAsync());
       
    `,
     code6res:`
     {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Transaction Succesful",
      "data": "00"
    }
       
    `,
     codeeight:`
      var client = new HttpClient();
      var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk/validatebeneficiarybankdetails");
      var content = new StringContent("{\n    \"beneficiaryBank\": {\n        \"accountNumber\": \"0714161345\",\n        \"bankId\": 1\n    }\n}", null, "text/plain");
      request.Content = content;
      var response = await client.SendAsync(request);
      response.EnsureSuccessStatusCode();
      Console.WriteLine(await response.Content.ReadAsStringAsync());
    `,
     codenine:`
     var client = new HttpClient();
     var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk/validatebeneficiarybankdetails");
     var content = new StringContent("{\n    \"beneficiaryBank\": {\n        \"accountNumber\": \"0714161345\",\n        \"bankId\": 1\n    }\n}", null, "text/plain");
     request.Content = content;
     var response = await client.SendAsync(request);
     response.EnsureSuccessStatusCode();
     Console.WriteLine(await response.Content.ReadAsStringAsync());     
    `,
     code9res:`
          
    `,
     code8res:`
     {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Account validated successfully",
      "data": {
        "id": 0,
        "beneficiaryBank": {
          "id": 0,
          "accountNumber": "0714161345",
          "accountName": "TOFUNMI SAMUEL BABATUNDE",
          "primaryBank": false,
          "bankId": 1,
          "bankName": "Access Bank Nigeria Plc\n"
        }
      }
    }
    `,
     codeseven:`
     var client = new HttpClient();
     var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk/getpayouttransaction.io?trxId=0");
     request.Headers.Add("clientId", "45586980");
     var response = await client.SendAsync(request);
     response.EnsureSuccessStatusCode();
     Console.WriteLine(await response.Content.ReadAsStringAsync());     
       
    `,
     code7res:`
     {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Log Pulled Succesfully",
      "data": [
        {
          "id": 35586981,
          "dateCreated": "2023-10-22 19:27:47.708275",
          "payoutClientId": 45586980,
          "payOutProvider": {
            "id": 1,
            "name": "HopePSB - PayArena",
            "description": "PayArena by HopePSB",
            "dateCreated": "2023-10-14 19:33:12.497614",
            "status": true,
            "logo": "https://hopepsbank.com/img/hope_bank_logo1.3b817185.svg",
            "payOutProviderSupportedCurrency": [
              {
                "regionId": 1,
                "subRegionId": 3,
                "telephoneCode": "234",
                "currencyCode": "NGN",
                "emoji": "??",
                "status": false,
                "id": 161,
                "name": "Nigeria",
                "longitude": "8",
                "latitude": "10"
              },
              {
                "regionId": 4,
                "subRegionId": 18,
                "telephoneCode": "44",
                "currencyCode": "GBP",
                "emoji": "??",
                "status": false,
                "id": 232,
                "name": "United Kingdom",
                "longitude": "-2",
                "latitude": "54"
              },
              {
                "regionId": 4,
                "subRegionId": 18,
                "telephoneCode": "44",
                "currencyCode": "GBP",
                "emoji": "??",
                "status": false,
                "id": 232,
                "name": "United Kingdom",
                "longitude": "-2",
                "latitude": "54"
              }
            ]
          },
          "beneficiary": {
            "id": 12346578,
            "beneficiaryName": "Albert Abiodun",
            "beneficiaryPhoneNumber": "08034678549",
            "dateCreated": "2023-10-22 19:21:06.756744",
            "lastUpdated": "2023-10-22 19:21:06.756744",
            "beneficiaryBank": {
              "id": 0,
              "accountNumber": "0012176233",
              "accountName": "ALBERTSAHEED ABIODUN",
              "primaryBank": false,
              "bankId": 8,
              "bankName": "Guaranty Trust Bank",
              "bankCode": "058"
            },
            "beneficiaryCountry": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "country": {
            "regionId": 1,
            "subRegionId": 3,
            "telephoneCode": "234",
            "currencyCode": "NGN",
            "emoji": "??",
            "status": false,
            "id": 161,
            "name": "Nigeria",
            "longitude": "8",
            "latitude": "10"
          },
          "Amount": 23500,
          "transferFee": 20,
          "status": "Cancelled",
          "lastUpdated": "2023-10-22 19:27:47.708275",
          "payoutClientApp": {
            "id": 582664,
            "clientId": 0,
            "appName": "ATP PayOut App",
            "dateCreated": "2023-10-12 13:04:56.021301",
            "lastUpdated": "2023-10-12 13:04:56.021301",
            "appDescription": "ATP PayOut App Description",
            "appWebHook": "ssamplelwebkoo.com",
            "approved": true
          }
        },
      ]
    }   
       
    `,
    
    codefour:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk/getbanks");
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());    
    `,
    code4res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Banks recieved",
      "data": [
        {
          "bankId": 1,
          "bankName": "Access Bank Nigeria Plc\n",
          "bankCode": "044"
        },
        {
          "bankId": 2,
          "bankName": "Diamond Bank Plc",
          "bankCode": "063"
        },
        {
          "bankId": 3,
          "bankName": "Ecobank Nigeria",
          "bankCode": "050"
        },
        {
          "bankId": 4,
          "bankName": "Enterprise Bank Plc",
          "bankCode": "084"
        },
        {
          "bankId": 5,
          "bankName": "Fidelity Bank Plc",
          "bankCode": "070"
        },
        {
          "bankId": 6,
          "bankName": "First Bank of Nigeria Plc",
          "bankCode": "011"
        },
        {
          "bankId": 8,
          "bankName": "Guaranty Trust Bank Plc",
          "bankCode": "058"
        },
        {
          "bankId": 9,
          "bankName": "Heritaage Banking Company Ltd",
          "bankCode": "030"
        },
        {
          "bankId": 11,
          "bankName": "Keystone Bank Ltd",
          "bankCode": "082"
        },
        {
          "bankId": 12,
          "bankName": "Mainstreet Bank Plc",
          "bankCode": "014"
        },
        {
          "bankId": 13,
          "bankName": "Skye Bank Plc",
          "bankCode": "076"
        },
        {
          "bankId": 14,
          "bankName": "Stanbic IBTC Plc",
          "bankCode": "039"
        },
        {
          "bankId": 16,
          "bankName": "Union Bank Nigeria Plc",
          "bankCode": "032"
        },
        {
          "bankId": 17,
          "bankName": "United Bank for Africa Plc",
          "bankCode": "033"
        },
        {
          "bankId": 19,
          "bankName": "WEMA Bank Plc",
          "bankCode": "035"
        },
        {
          "bankId": 20,
          "bankName": "Zenith Bank International",
          "bankCode": "057"
        },
        {
          "bankId": 7,
          "bankName": "First City Monument Bank",
          "bankCode": "214"
        },
        {
          "bankId": 10,
          "bankName": "Jaiz Bank",
          "bankCode": "301"
        },
        {
          "bankId": 15,
          "bankName": "Sterling Bank Plc",
          "bankCode": "232"
        },
        {
          "bankId": 18,
          "bankName": "Unity Bank Plc",
          "bankCode": "215"
        },
        {
          "bankId": 21,
          "bankName": "Providus Bank",
          "bankCode": "101"
        },
        {
          "bankId": 67,
          "bankName": "Kuda Bank",
          "bankCode": "50211"
        },
        {
          "bankId": 301,
          "bankName": "HopePSB",
          "bankCode": "120002"
        }
      ]
    }   
    `,
    codetwo:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk//walletfundingrequest");
    var content = new StringContent("\n{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"lastUpdatedBy\" : 0\n}", null, "text/plain");
    request.Content = content;
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());
    
    `,
    codethree:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0");
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());
    
    `
  
    }
  );

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
   if(getUser?.data?.role?.id === 8 ){
    setAct1(false)
    setAct2(true)
  
  }
  },[getUser])

  // useEffect(() => {
  //   if(getUser?.data?.role?.id === 8 ){
  //     setAct1(false)
  //     setAct2(true)
    
  //   }
  
  // },[])

  const [othermap,setOthermap] = useState([
    {name: 'C', image: cc ,id:1,code:`
    var client = new HttpClient()
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk/getcurrencytype");
    var response = await client.SendAsync(request)
    response.EnsureSuccessStatusCode()
    Console.WriteLine(await response.Content.ReadAsStringAsync())
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }
    `,
     code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    codetwo:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk//walletfundingrequest");
    var content = new StringContent("\n{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"lastUpdatedBy\" : 0\n}", null, "text/plain");
    request.Content = content;
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());
    
    `,
    codethree:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0");
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());
    
    `
  
    }
    ,
    // {name: 'C++', image: cplus,id:2},
    {name: 'Go', image: gosimg,id:2,
    code:`
    v url := "https://apidoc.transferrocket.co.uk/getcurrencytype"
    method := "GET"
  
    client := &http.Client {
    }
    req, err := http.NewRequest(method, url, nil)
  
    if err != nil {
      fmt.Println(err)
      return
    }
    res, err := client.Do(req)
    if err != nil {
      fmt.Println(err)
      return
    }
    defer res.Body.Close()
  
    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
      fmt.Println(err)
      return
    }
    fmt.Println(string(body))
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codetwo:`
    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Post, "https://apidoc.transferrocket.co.uk//walletfundingrequest");
    var content = new StringContent("{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"astUpdatedBy\" : 0\n}", null, "text/plain");
    request.Content = content;
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    Console.WriteLine(await response.Content.ReadAsStringAsync());
    
    `,
    codethree:`
    package main

    import (
      "fmt"
      "net/http"
      "io/ioutil"
    )
    
    func main() {
    
      url := "https://apidoc.transferrocket.co.uk//getuserlog/8230145"
      method := "GET"
    
      client := &http.Client {
      }
      req, err := http.NewRequest(method, url, nil)
    
      if err != nil {
        fmt.Println(err)
        return
      }
      res, err := client.Do(req)
      if err != nil {
        fmt.Println(err)
        return
      }
      defer res.Body.Close()
    
      body, err := ioutil.ReadAll(res.Body)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(string(body))
    }
    `
    },
    {name: 'HTTP', image: cc,id:3,
      code:`
      GET /getcurrencytype HTTP/1.1
      Host: https://apidoc.transferrocket.co.uk
      `,
      codetwo:`
      POST //walletfundingrequest HTTP/1.1
      Host: apidoc.transferrocket.co.uk
      Content-Length: 161
      
      {
          "userId": 45586980,
          "amountRequested": 150000,
          "userWallet": {
              "walletId": 19680003
          },
          "comment": "Hello",
          "astUpdatedBy" : 0
      }
      `,
      code3res:`
      {
        "transactionRef": "SUCCESS",
        "status": true,
        "message": "1 Wallet Funding Request recieved",
        "data": [
          {
            "id": 78053836,
            "dateCreated": "2023-10-27 10:51:58.889777",
            "userId": 0,
            "amountRequested": 150000,
            "status": "Pending",
            "userWallet": {
              "walletId": 19680003,
              "balance": 0,
              "name": "OhentPay by Providus",
              "note": "OhentPay by Providus Wallet",
              "country": {
                "regionId": 1,
                "subRegionId": 3,
                "telephoneCode": "234",
                "currencyCode": "NGN",
                "emoji": "??",
                "status": false,
                "id": 161,
                "name": "Nigeria",
                "longitude": "8",
                "latitude": "10"
              }
            },
            "lastUpdatedBy": 0,
            "lastUpdated": "2023-10-27 10:51:58.889777",
            "amountApproved": 150000,
            "comment": "Hello",
            "balanceBeforeRequest": 0
          }
        ]
      }
      `,
      code1res:`
      {
        "transactionRef": "Currency recieved",
        "status": true,
        "message": "SUCCESS",
        "data": [
          {
            "id": 1,
            "country": "Nigeria",
            "name": "Naira",
            "code": "NGN",
            "number": "566",
            "approved": false
          },
          {
            "id": 2,
            "country": "United Kindom",
            "name": "Pound Sterling",
            "code": "GBP",
            "number": "826",
            "approved": false
          }
        ]
      }`,
      code2res:`
      {
        "transactionRef": "SUCCESS",
        "status": true,
        "message": "Wallet funding request succesfully created.",
        "data": ""
      }
      `,
      codethree:`
      GET //getuserlog/8230145 HTTP/1.1
      Host: apidoc.transferrocket.co.uk
      `
    },
    {name: 'Javascript', image: jsimg,id:4,code:`
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://apidoc.transferrocket.co.uk/getcurrencytype", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    codetwo:`
    var raw = "{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"astUpdatedBy\" : 0\n}";

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://apidoc.transferrocket.co.uk//walletfundingrequest", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codethree:`
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `
  },
    
    {name: 'Kotlin', image: kotlin,id:5},
    {name: 'Dart', image: kotlin,id:6,code:`
    var request = http.Request('GET', Uri.parse('https://apidoc.transferrocket.co.uk/getcurrencytype'));


    http.StreamedResponse response = await request.send();
    
    if (response.statusCode == 200) {
      print(await response.stream.bytesToString());
    }
    else {
      print(response.reasonPhrase);
    }
    
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    codetwo:`
    var request = http.Request('POST', Uri.parse('https://apidoc.transferrocket.co.uk//walletfundingrequest'));
    request.body = '''{\n    "userId": 45586980,\n    "amountRequested": 150000,\n    "userWallet": {\n        "walletId": 19680003\n    },\n    "comment": "Hello",\n    "astUpdatedBy" : 0\n}''';
    
    http.StreamedResponse response = await request.send();
    
    if (response.statusCode == 200) {
      print(await response.stream.bytesToString());
    }
    else {
      print(response.reasonPhrase);
    }
    
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codethree:`
    var request = http.Request('GET', Uri.parse('https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0'));


    http.StreamedResponse response = await request.send();
    
    if (response.statusCode == 200) {
      print(await response.stream.bytesToString());
    }
    else {
      print(response.reasonPhrase);
    }
    
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
  },
  
    {name: 'Objective-C', image: objectc,id:7,code:`
    #import <Foundation/Foundation.h>

    dispatch_semaphore_t sema = dispatch_semaphore_create(0);
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://apidoc.transferrocket.co.uk/getcurrencytype"]
      cachePolicy:NSURLRequestUseProtocolCachePolicy
      timeoutInterval:10.0];
    
    [request setHTTPMethod:@"GET"];
    
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
    completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (error) {
        NSLog(@"%@", error);
        dispatch_semaphore_signal(sema);
      } else {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
        NSError *parseError = nil;
        NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
        NSLog(@"%@",responseDictionary);
        dispatch_semaphore_signal(sema);
      }
    }];
    [dataTask resume];
    dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codetwo:`
    #import <Foundation/Foundation.h>

    dispatch_semaphore_t sema = dispatch_semaphore_create(0);
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://apidoc.transferrocket.co.uk//walletfundingrequest"]
      cachePolicy:NSURLRequestUseProtocolCachePolicy
      timeoutInterval:10.0];
    NSData *postData = [[NSData alloc] initWithData:[@"{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"astUpdatedBy\" : 0\n}" dataUsingEncoding:NSUTF8StringEncoding]];
    [request setHTTPBody:postData];
    
    [request setHTTPMethod:@"POST"];
    
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
    completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (error) {
        NSLog(@"%@", error);
        dispatch_semaphore_signal(sema);
      } else {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
        NSError *parseError = nil;
        NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
        NSLog(@"%@",responseDictionary);
        dispatch_semaphore_signal(sema);
      }
    }];
    [dataTask resume];
    dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
    `,
    codethree:`
    #import <Foundation/Foundation.h>

    dispatch_semaphore_t sema = dispatch_semaphore_create(0);
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0"]
      cachePolicy:NSURLRequestUseProtocolCachePolicy
      timeoutInterval:10.0];
    
    [request setHTTPMethod:@"GET"];
    
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
    completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (error) {
        NSLog(@"%@", error);
        dispatch_semaphore_signal(sema);
      } else {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
        NSError *parseError = nil;
        NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
        NSLog(@"%@",responseDictionary);
        dispatch_semaphore_signal(sema);
      }
    }];
    [dataTask resume];
    dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
    `
  },
    {name: 'PowerShell', image: cc,id:8,code:`
    $response = Invoke-RestMethod 'https://apidoc.transferrocket.co.uk/getcurrencytype' -Method 'GET' -Headers $headers
    $response | ConvertTo-Json
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    codetwo:``,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    codethree:`
    $response = Invoke-RestMethod 'https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0' -Method 'GET' -Headers $headers
    $response | ConvertTo-Json
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
  
   },

    {name: 'Python', image: python,id:10,code:`
    import requests

    url = "https://apidoc.transferrocket.co.uk/getcurrencytype"
    
    payload={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
    codetwo:`
    import requests

    url = "https://apidoc.transferrocket.co.uk//walletfundingrequest"
    
    payload = "\n{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"lastUpdatedBy\" : 0\n}"
    headers = {}
    
    response = requests.request("POST", url, headers=headers, data=payload)
    
    print(response.text)
    
    
    `,
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codethree:`
    import requests

    url = "https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0"
    
    payload={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    
    `
  },
    {name: 'R', image: rlang,id:11},
    {name: 'Swift', image: swift,id:12,code:`
    var request = URLRequest(url: URL(string: "https://apidoc.transferrocket.co.uk/getcurrencytype")!,timeoutInterval: Double.infinity)
    request.httpMethod = "GET"
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in 
      guard let data = data else {
        print(String(describing: error))
        return
      }
      print(String(data: data, encoding: .utf8)!)
    }
    
    task.resume()
    
    `,
    code3res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "1 Wallet Funding Request recieved",
      "data": [
        {
          "id": 78053836,
          "dateCreated": "2023-10-27 10:51:58.889777",
          "userId": 0,
          "amountRequested": 150000,
          "status": "Pending",
          "userWallet": {
            "walletId": 19680003,
            "balance": 0,
            "name": "OhentPay by Providus",
            "note": "OhentPay by Providus Wallet",
            "country": {
              "regionId": 1,
              "subRegionId": 3,
              "telephoneCode": "234",
              "currencyCode": "NGN",
              "emoji": "??",
              "status": false,
              "id": 161,
              "name": "Nigeria",
              "longitude": "8",
              "latitude": "10"
            }
          },
          "lastUpdatedBy": 0,
          "lastUpdated": "2023-10-27 10:51:58.889777",
          "amountApproved": 150000,
          "comment": "Hello",
          "balanceBeforeRequest": 0
        }
      ]
    }
    `,
    code2res:`
    {
      "transactionRef": "SUCCESS",
      "status": true,
      "message": "Wallet funding request succesfully created.",
      "data": ""
    }
    `,
  
    code1res:`
    {
      "transactionRef": "Currency recieved",
      "status": true,
      "message": "SUCCESS",
      "data": [
        {
          "id": 1,
          "country": "Nigeria",
          "name": "Naira",
          "code": "NGN",
          "number": "566",
          "approved": false
        },
        {
          "id": 2,
          "country": "United Kindom",
          "name": "Pound Sterling",
          "code": "GBP",
          "number": "826",
          "approved": false
        }
      ]
    }`,
    codetwo:`
    let parameters = "\n{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"lastUpdatedBy\" : 0\n}"
    let postData = parameters.data(using: .utf8)
    
    var request = URLRequest(url: URL(string: "https://apidoc.transferrocket.co.uk//walletfundingrequest")!,timeoutInterval: Double.infinity)
    request.httpMethod = "POST"
    request.httpBody = postData
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in 
      guard let data = data else {
        print(String(describing: error))
        return
      }
      print(String(data: data, encoding: .utf8)!)
    }
    
    task.resume()
    
    
    `,
    codethree:`
    var request = URLRequest(url: URL(string: "https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0")!,timeoutInterval: Double.infinity)
    request.httpMethod = "GET"
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in 
      guard let data = data else {
        print(String(describing: error))
        return
      }
      print(String(data: data, encoding: .utf8)!)
    }
    
    task.resume()
     
    `
  }
  ])

 

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

  const handleCopyClick = async (element) => {

    let copyGfGText = document.getElementById(element);

    copyGfGText.select();

    document.execCommand("copy");
    navigator.clipboard.writeText(copyGfGText.value)
    toast.success("copied")
 
  
}

const submitCreateApp = async ()  => {
  setLoading(true)
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(createApp),
    redirect: 'follow'
  };
  try {
    
    const response = await fetch("https://apidoc.transferrocket.co.uk//createpayoutclientapp", requestOptions)
    const data = await response.json();
  
    if (data) {
      const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${getUser?.data?.userId}`);
      const result = await response.json();
      localStorage.setItem("userDetails",JSON.stringify(result))
      setUser(result)
    }
  
  
    if(data?.status){
      setLoading(false)
      toast.success(data?.message)
      // setInfo(data?.message)
      //     setTimeout(() => {
        //    setInfo("")
        window.location.reload()
        setMo2(!mod2)
        
       //  }, 1000);
      }else{
        
        setLoading(false)
        toast.error(data?.message)
        setMo2(!mod2)
    }
  } catch (error) {
    setLoading(false)
    toast.error(error?.message)
    setMo2(!mod2)
  }
  


  console.log("🚀 ~ file: Details.jsx:97 ~ submitCreateApp ~ data:", data)

}


const handleSelect = (name) => {
  console.log("🚀 ~ file: Details.jsx:109 ~ handleSelect ~ name:", name)
  let selectedLanguage = othermap.find((language) => language.name.toLowerCase() === name.toLowerCase());
  setWebhooksHead(selectedLanguage)
 setOther(!others)
  // setOthermap([selectedLanguage])
  console.log("🚀 ~ file: Details.jsx:110 ~ handleSelect ~ selectedLanguage:", selectedLanguage)
  // setOther(!others)
}

const [active, setActive] = useState();

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
    title: "CLIENT ID",
    dataIndex: "id",
    width: 140,
  },
  {
      title: "APP NAME",
      dataIndex: "appName",
      width: 160,
  },
  {
    title: "APP DESCRIPTION",
    dataIndex: "appDescription",
    width: 190,
  },
  {
    title: "APP WEBHOOK",
    dataIndex: "appWebHook",
    width: 160,
  },
  {
    title: "DATE CREATED",
    dataIndex: "dateCreated",
    width: 190,

    //render: () => "Other",
  },
];
const columns2 = [
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
    title: "PROVIDER ID",
    dataIndex: "providerId",
    width: 1,
  },
  {
      title: "PROVIDER NAME",
      dataIndex: "providerName",
      width: 1,
  },
  {
    title: "STATUS",
    dataIndex: "statusNew",
    width: 1,

    //render: () => "Other",
  },
];


const newData =getUser?.data?.clientApps?.map((item, index) => {
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
              onClick={() => {
                // mutate({
                //   updatedBy: userDetails?.userId,
                //   objectId: item?.id,
                //   action: 1,
                // });
              }}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
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
                <g clip-path="url(#clip0_2568_14904)">
                  <path
                    d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99211 1.34776 7.55761C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674M14.6667 2.66674L7.99998 9.34007L5.99998 7.34007"
                    stroke="#101828"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2568_14904">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Approve
            </div>
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
              Decline
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

const newData2 = getUser?.data?.payOutClientWalletPayOutProviders?.map((item, index) => {
  return {
    ...item,
    action: (
      <div
        style={{
          position: "relative",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (item?.status === "true") {
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

        {/* {active === item?.id && (
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
              onClick={() => {
                // mutate({
                //   updatedBy: userDetails?.userId,
                //   objectId: item?.id,
                //   action: 1,
                // });
              }}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
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
                <g clip-path="url(#clip0_2568_14904)">
                  <path
                    d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99211 1.34776 7.55761C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674M14.6667 2.66674L7.99998 9.34007L5.99998 7.34007"
                    stroke="#101828"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2568_14904">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Approve
            </div>
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
              Decline
            </div>
          </div>
        )} */}
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
              item?.status === "true"
                ? "#63ff706c"
                : item?.status === "Pending"
                ? "#FEF0C7"
                : "#ff63634b",
            color:
              item?.status === "true"
                ? "green"
                : item?.status === "Pending"
                ? "#DC6803"
                : "red",
            width: "fit-content",
            fontWeight: "700",
          }}
        >
          {item?.status === "true" ? "Active" : "Not-Active"}
        </div>
      </>
    ),
  };
});

const handleIframe = () => {
  showFrame(!frame)
}

const handleset1 = () => {
  setAct1(!act1)
  setAct2(false)
}



const handleset2 = () => {
  if(getUser?.data?.role?.id === 8 ){
    return
  
  }
  setAct2(!act2)
  setAct1(false)
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
            <br/>
            <div style={{display:"flex",gap:"20px",cursor:"pointer"}}>
              {
                getUser?.data?.role?.id !== 8 && (

            <div className={act1 ? "btn" : 'btnactive'} onClick={handleset1}>
                  <p style={{fontSize:"15px",backgroundColor:"#00a85a",padding:"9px 30px",color:"#fff",borderRadius:"8px"}}>Gateways</p>
            </div>
                )
              }
            <div className={act2 ? "btn" : 'btnactive'} onClick={handleset2}>
                  <p className="" style={{fontSize:"15px",backgroundColor:"#00a85a",padding:"9px 30px",color:"#fff",borderRadius:"8px"}}>Applications</p>
            </div>
           
            </div>
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
                        id="testKey"
                      />
                      <img src={copy} alt="" onClick={() => handleCopyClick("testKey")} />
                    </div>
                  </div>
                  <div className="textes">
                    <label htmlFor="">Live Keys</label>
                    <div className="con">
                      <input
                        type={reveal ? "text" : "password"}
                        value={getUser?.data?.clientKeys?.liveKey}
                        readOnly
                        id="liveKey"
                      />
                      <img src={copy} alt="" onClick={() => handleCopyClick("testKey")} />
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
                handleSubmit={ submitCreateApp}
                cancleModal={() => setMo2(!mod2)}
                loading={loading}
                disabled={Object.values(createApp).some(value => value === "")}

              >
                {/* {info && <p style={{color:"green"}}>{info}</p>} */}
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
           {
              act1 && getUser?.data?.role?.id !== 8 && (
               <>
                   {/* <hr
            style={{
              width: "calc(100% - 40px)",
              margin: "10px 20px",
              border: ".5px solid #EAECF0",
            }}
          /> */}
          <p style={{padding:"10px"}}>Gateways</p>
          {/* <Reusetable /> */}
          <Content>
          <CustomTable
          noData={getUser?.data?.clientApps.length}
          // loading={isLoading || isFetching}
          Apidata={newData2}
          tableColumns={columns2}
        />
          </Content>
               </>
              )
            }
           {
              act2 &&  (
             <>
          <Apiwrap>
            <div className="top">
              <div style={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
              <h3>Application Tokens</h3>
              <div className="btn" onClick={() => setMo2(!mod2)}>
                  <p style={{fontSize:"15px",backgroundColor:"#00a85a",padding:"9px 30px",color:"#fff",borderRadius:"8px"}}>Create App</p>

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
          <Content>
          <CustomTable
          noData={getUser?.data?.clientApps.length}
          // loading={isLoading || isFetching}
          Apidata={newData}
          tableColumns={columns}
        />
          </Content>
        </>
              )
            }

          <div className="webhook">
            <div className="con">
              <h2>Webhooks</h2>
              <p>A description about sample codes goes here</p>
            </div>
            <div className="other">
            {/* <Btn clicking={handleIframe}>
              <p>Load Documentations</p>
            </Btn> */}
        



              <p className="sh" onClick={() => setOther(!others)}> 
          {
                WebhooksHHead ? (
                  <span style={{display:"flex",gap:"10px"}} >
                     <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </span>
                ) : "Other Languages"
               }  
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
      <Tab>Get currency</Tab>
      <Tab>Get Banks</Tab>
      <Tab>Create PayOut Beneficiary</Tab>
      <Tab>Validate Beneficiary Bank Details</Tab>
      <Tab>Make payout request</Tab>
      <Tab>Get transactions status</Tab>
      <Tab>Get Gateway</Tab>
    </TabList>

    <TabPanel>
            <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
                  <div  className="tdd">
                    <div className="tddcontentParent">
                    <div className="tddcontent tddcontent1" >
                    <code>request</code>
                    <hr/>
                      <pre className="pre1">{WebhooksHHead?.code}</pre>
                    </div>
                    <div className="tddcontent">
                      <code>response</code>
                    <hr/>
                    <pre>{WebhooksHHead?.code1res}</pre>
                    </div>
                    </div>
                  </div>
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codefour}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code4res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codefive}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code5res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codeeight}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code8res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codesix}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code6res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codeseven}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code7res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
         
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codenine}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code9res}</pre>
                  </div>
                  </div>
                </div>

                  
                )
              }
              </div>
            </div>
    </TabPanel>
    {/* <TabPanel>
    <div className="table">
              <div className="thead">
                {WebhooksHHead && (
                  <div  className="tdd">
                    <img src={WebhooksHHead?.image} />
                    <span>{WebhooksHHead?.name}</span>
                  </div>
                )
                }
              </div>
              <div className="tbod">
              {WebhooksHHead && (
           
                  <div  className="tdd">
                  <div className="tddcontentParent">
                  <div className="tddcontent tddcontent1" >
                  <code>request</code>
                  <hr/>
                    <pre className="pre1">{WebhooksHHead?.codethree}</pre>
                  </div>
                  <div className="tddcontent">
                    <code>response</code>
                  <hr/>
                  <pre>{WebhooksHHead?.code3res}</pre>
                  </div>
                  </div>
                </div>
                )
              }
              </div>
            </div>
    </TabPanel> */}
  </Tabs> 
            
          </Retabletwo>
        </Box>
      </ApiBox>
    </Layout>
  );
};

export default Details;


const Content = styled.div`
width: 100%;
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
      .btn{
        &hover{
          
        }
      }
      .btnactive{
      border: #00a85a 1px solid ;
      background-color: #fff;
      border-radius: 7px;
     p{
        background-color: #fff !important;
        color: #00a85a !important;
      }
    }
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
    width: 100%;
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
    width: max-content;

    /* gap: 10px; */
  }
  code{
    text-align: center;
  }
  .tddcontentParent{
    display: flex;
    gap: 10px;
    /* width: max-content; */
  }
  .tddcontent1{
    width: 60%;
  }
  .pre1{
    word-wrap: break-word;
  }
  .tddcontent{
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 0px 0px 1px rgba(152, 161, 178, 0.10);
    padding: 10px;
    border-radius: 20px;
    /* width: 30%; */
    color: #5a6376;
    pre:nth-last-of-type(0){
      border: 1px solid red;
    }
    &:hover{
      cursor: pointer;
    }
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
