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




const Details = () => {
  const [mod, setMo] = useState(false);
  const [mod2, setMo2] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [others, setOther] = useState(false);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(null);
  const [info, setInfo] = useState("");

  const [WebhooksHHead, setWebhooksHead] = useState(null);
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
    {name: 'C', image: cc ,id:1,code:`
    var client = new HttpClient()
    var request = new HttpRequestMessage(HttpMethod.Get, "https://apidoc.transferrocket.co.uk/getcurrencytype");
    var response = await client.SendAsync(request)
    response.EnsureSuccessStatusCode()
    Console.WriteLine(await response.Content.ReadAsStringAsync())
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
    codethree:`
    var request = http.Request('GET', Uri.parse('https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0'));


    http.StreamedResponse response = await request.send();
    
    if (response.statusCode == 200) {
      print(await response.stream.bytesToString());
    }
    else {
      print(response.reasonPhrase);
    }
    
    `
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
    codetwo:``,
    codethree:`
    $response = Invoke-RestMethod 'https://apidoc.transferrocket.co.uk//getuserwalletfundrequest?userId=45586980&requestId=0' -Method 'GET' -Headers $headers
    $response | ConvertTo-Json
    `
  
   },

    {name: 'Python', image: python,id:10,code:`
    import requests

    url = "https://apidoc.transferrocket.co.uk/getcurrencytype"
    
    payload={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    
    `,
    codetwo:`
    import requests

    url = "https://apidoc.transferrocket.co.uk//walletfundingrequest"
    
    payload = "\n{\n    \"userId\": 45586980,\n    \"amountRequested\": 150000,\n    \"userWallet\": {\n        \"walletId\": 19680003\n    },\n    \"comment\": \"Hello\",\n    \"lastUpdatedBy\" : 0\n}"
    headers = {}
    
    response = requests.request("POST", url, headers=headers, data=payload)
    
    print(response.text)
    
    
    `,
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

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(createApp),
    redirect: 'follow'
  };
  
  const response = await fetch("https://apidoc.transferrocket.co.uk//createpayoutclientapp", requestOptions)
  const data = await response.json();

  if(data?.status){
    setLoading(false)
      setInfo(data?.message)
      setTimeout(() => {
     setInfo("")
     setMo2(!mod2)

   }, 1000);
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
                handleSubmit={submitCreateApp}
                cancleModal={() => setMo2(!mod2)}
              >
                {info && <p style={{color:"green"}}>{info}</p>}
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
      <Tab>Make payout request</Tab>
      <Tab>Get transactions status</Tab>
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
                    {/* <img src={WebhooksHHead?.image} /> */}
                    <div className="tddcontent">
                    <pre>{WebhooksHHead?.code}</pre>

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
                    {/* <img src={WebhooksHHead?.image} /> */}
                    <div className="tddcontent">
                    <pre>{WebhooksHHead?.codetwo}</pre>

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
                    {/* <img src={WebhooksHHead?.image} /> */}
                    <div className="tddcontent">
                    <pre>{WebhooksHHead?.codethree}</pre>

                    </div>
                  </div>
                )
              }
              </div>
            </div>
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
  .tddcontent{
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 0px 0px 1px rgba(152, 161, 178, 0.10);
    padding: 10px;
    border-radius: 20px;
    color: #5a6376;
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
