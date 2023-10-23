import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from '../../assets/SidebarImg/logo.svg'
import OInput from "./OnboardingInput/OInput";
import {useNavigate} from "react-router-dom"

const LoginR = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [deviceId, setDeviceId] = useState("Tets");
    const [source, setSource] = useState("Web");

    const navigate = useNavigate();

    const gotoSignUp = () => {
        navigate("/signup")
    }

    // useEffect(() => {
        const SubmitHandler = () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
            "username": username,
            "password": password,
            "deviceId": deviceId,
            "source": source
            });
            
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
            
            fetch("https://moneybusiness.tm-dev.xyz/moneybusiness//auth", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));            
        }

    // }, [])
  return (
    <LoginWrapper>
      <div className="left"></div>
      <LoginBox>
        <div className="container">
        <div className="head">
            <img src={logo} alt="" />
            <h1>Log in to your account</h1>
            <p>Welcome back! Please enter your details.</p>
        </div>
        <div className="inputbox">
            <OInput label="Email Address/Username" type="text" placeholder="Enter your email/userame" onChange={e => setUsername(e.target.value)} value={username} forhtml="username" name="username" />
        </div>
        <OInput label="Password" type="password" placeholder="••••••••••••"  onChange={e => setPassword(e.target.value)} />
        <div className="remember">
            <div className="leftinput">
                <input type="checkbox" name="" id="" />
                <span>Remember for 30 days</span>
            </div>
            <div className="right">Forget Password</div>
        </div>
            <div className="btn">
                <button onClick={SubmitHandler}>Sign In</button>
            </div>
            <div className="dont">
                <div className="dontBx">
                    <p>Don’t have an account?</p>
                    <span onClick={gotoSignUp}>Sign Up</span>
                </div>
            </div>
        </div>
      </LoginBox>
    </LoginWrapper>
  );
};

export default LoginR;

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  .left {
    width: 50%;
    background: #00a85a;
  }
`;

const LoginBox = styled.div`
background: #fcfcfc;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
  .container{
    height: 100%;
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    width: 400px;
    .head{
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 5px;
        img{
            width: 120px;
        }
        h1{
            color: #101828;
            font-size: 20px;
            font-weight: 500;
        }
        p{
            color: #667085;
            font-size: 14px;
            // line-height: 30px;
            font-weight: 400;
        }
    }
    .remember{
        margin: 20px 0;
        width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
                .leftinput{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    input{
                        accent-color: #00A85A;
                    }
                    span{   
                        color: #344054;
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
                .right{
                    color: #344054;
                    font-size: 12px;
                    font-weight: 400;
                    color: #00A85A;
                    font-size: 14px;
                    font-weight: 500;
                }
    }
    .btn{
        width: 100%;
        height: 40px;

        button{
            border-radius: 8px;
            border: 1px solid #00A85A;
            background: #00A85A;
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
            width: 100%;
            height: 100%;
            color: #FFF;
            font-size: 14px;
            font-weight: 400;
        }
    }
    .dont{
        display: flex;
        align-items: center;
        justify-content: center;
        // border: 2px solid;
        .dontBx{
            display: flex;
            align-items: center;
            gap: 10px;
            p{
                color: #667085;
                font-size: 14px;
                font-weight: 400;
            }
            span{
                color: #00A85A;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
  } 
`;
