/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Input, Link, Space } from '@arco-design/web-react';
import Logo from '../../images/logo.svg'
import Left from '../../images/left.svg'
import { InputStyle } from "../../styles/Input";
import { CenterElement } from "../../styles/CenterEle";
import { Checkbox } from '@arco-design/web-react';
import Btn from '../../reuseables/Btn';
import { Switch, Timeline, Typography } from '@arco-design/web-react';
import { Select } from '@arco-design/web-react';
import { userLogin,checkEmail } from "../../services/Auth";
import { useMutation,useQuery} from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import { Spin, Modal } from '@arco-design/web-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Axios } from '../../utils/Axios';
import ReusableModal from '../../reuseables/ReusableModal';
import Msg from '../../reuseables/Msg';
import { BASE_URL } from '../../../config/config';
import Kyc from "../../reuseables/Kyc"
import visible from '../../assets/view.png'
import hide from '../../assets/hide.png'
import { countries } from '../../services/Auth';
import Success from '../../images/Success.svg'


// Inside your component


const baseurl = BASE_URL

const Option = Select.Option;
const TextArea = Input.TextArea;

const TimelineItem = Timeline.Item;




function LoginR() {


 

    const navigate = useNavigate();
    const [err, seterr] = useState(null)
    const [modal, setModal] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [isKyc, setIsKyc] = useState(false)
    const [type, setType] = useState(false)
    const [vis, setVis] = useState(false)

    const [loginDetails, setloginDetails] = useState({
        username: "",
        password: "",
        deviceId: "Tets",
        source: "Web"
    })

    const handleLogin = async () => {
        mutate(loginDetails)
    }
    console.log(loginDetails)


    const handleChange = (e, i) => {
        const { name,value } = e.target

        if(name === "password" && loginDetails.password.length){
            const requestData = {
                username: loginDetails.username,
              };
            //  moneybusiness.tm-dev.xyz/moneybusiness//auth
            //   axios
            //     // .get(`${baseurl}moneybusiness/checkUserExistByEmail`, requestData)
            //     .get(`${baseurl}/auth`, requestData)
            //     .then((response) => {
            //       console.log(response.data);
          
            //       setloginDetails((prev) => {
            //         return { ...prev, [name]: value };
            //       });
            //     })
            //     .catch((error) => {
            //         seterr(error?.message)
            //         setModal(true)
            //       console.error(error);
            //     });

           
        }

        setloginDetails((prev) => {
            return { ...prev, [name]: value }
        })

 

    }
    

    const { data:rates,isLoading:Ratesloading,refetch:RatesnameEnq} = useQuery({
        queryKey: [],
        queryFn: countries,
        onSuccess:(data) => {
        localStorage.setItem("countryList",JSON.stringify(data?.data))
        },
        onError: (err) => {
       
        console.log(err)
        },
      });

    const { mutate, isPending, isError } = useMutation({
        mutationFn: userLogin,
        onSuccess: (data) => {
            console.log(data);

            if (!data.status) {

                switch (data?.data) {
                    case "1":
                        seterr(data?.message)
                        toast.error(data?.message)
                        setModal(true)
                        
                        break;
                    case "2":
                        seterr(data?.message)
                        toast.error(data?.message)
                        setModal(true)
                        break;
                    case "3":

                        setRedirect(true)
                        seterr(data?.message)
                        setModal(true)
                        break;
                    case "4":
                        setRedirect(true)
                        seterr(data?.message)
                        setModal(true)
                        break;
                    case "5":
                        // setRedirect(true)
                        setIsKyc(true)
                        seterr(data?.message)
                        setModal(true)
                        break;
                
                    default:
                        seterr(data?.message)
                        toast.error(data?.message)
                        setModal(true)
                        break;
                }
              
                return
            }else{
                localStorage.setItem("userDetails",JSON.stringify(data))
                navigate("/overview")
                // if (!data.data.user.isKYCCompleted) {
                //     navigate("/upload")
                    
                // }else{
    
                // }

            }


          
        },
        onError: (data) => {
            setModal(true)
            // localStorage.setItem("userDetails",JSON.stringify(UserTestData))
            // console.log(data.response.data.message)
            setTimeout(() => {
                //  seterr("")
            }, 2000)
            return
        }
    });

    const togglePass = () => {
            setType(!type)
    }

    return (
        <LoginCotainer>
            
            <div className='flex'>
                <div className='side1'>

                </div>
                <div className='side2'>
                    <Center>
                        <img src={Logo} />
                        <div className='logintext'>
                            <h1>Log in to your account</h1>
                            <p>Welcome back! Please enter your details.</p>
                        </div>
                        <div className='inputform'>
                        {
                            modal && (
                                <ReusableModal isOpen={modal} onClose={() => setModal(false)} >
                                   <Msg >
                                     {/* {err} */}
                                     <p>{err}</p>
                                     <br/>
                                     {
                                        isKyc && (
                                            <Btn  clicking={() => navigate("/kyc")} size={30}>Continue with Kyc  </Btn>

                                        )
                                     }
                                   </Msg>
                                </ReusableModal>

                            )
                        }
                            <div>
                                <span>Email</span>
                                <InputStyle >
                                    {/* <Input autoComplete='false' onChange={handleChange} name='username' className="input" style={{ borderRadius: '8px;' }} placeholder='Enter your email' /> */}
                                </InputStyle>
                                <input name='username' onChange={handleChange}  type='email' className='emailinput'/>
                            </div>
                            <div>
                                <span>Password</span>
                                {/* <InputStyle > */}
                                {/* <Input.Password style={{ width: '100%' }} className="input" defaultValue='' onChange={handleChange} name='password' placeholder='Enter your password' /> */}
                                {/* </InputStyle > */}
                                <div className='passwordcont'>
                                <input name='password' onChange={handleChange}  type={type ? 'text' : 'password'} className='emailinput'/>
                                <div className='visibility'>
                                    <img src={type ? visible : hide} height="20px" onClick={togglePass}/>
                                </div>

                                </div>
                            </div>
                            <div className='flexjustify'>
                                {/* <Checkbox>Remember me</Checkbox> */}
                                <Link style={{ color: 'var(--primary-color)' }}>Forgot password</Link>
                            </div>
                            <div>
                                <Btn disabled={loginDetails?.username === "" && loginDetails?.password === "" ? true : false} clicking={handleLogin} styles={{ width: '100%', background: 'var(--primary-color)', color: '#fff', borderRadius: '8px', padding: '0.8em' }}>
                                    {isPending ? <Spin dot /> : "Sign In"}
                                </Btn>
                            </div>
                            <CenterElement>
                                <span>Don’t have an account?</span>
                                <Link onClick={() => navigate("/signup")} style={{ color: 'var(--primary-color)' }}>Sign up</Link>
                            </CenterElement>
                        </div>
                    </Center>


                </div>
            </div>
        </LoginCotainer>
    )
}


const LoginCotainer = styled.div`
   
    height: 100vh;
    overflow: hidden;

    .arco-spin-dot-list > div{
       background-color: #FFFFFF !important;
    }

    .input{
        padding: 0.7em;
        border-radius: 8px;
        outline: none;
        border: 0.1px solid var(--gray-300, #D0D5DD);
        background: #FFFFFF;

       }

       .emailinput{
        width: 100%;
        /* background: none; */
        padding: 10px;
        /* border: none; */
        /* background: #fff !important; */
        background-color: inherit;
        line-height: 1;
        border: 1px solid #D0D5DD;
        /* border-radius: 5px; */
        color: #000;
        font-weight: 300;
        border: none;
        border-bottom: 1px solid #000;
       }
       .passwordcont{
        position: relative;
       }
       .visibility{
        position: absolute;
        right: 30px;
        bottom: 5px;
       }
    .inputdate{
        padding: 1.3rem;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--gray-300, #D0D5DD);
        background: #FFFFFF;

       }

    .flexjustify{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
   
    .flex{
        display: flex;
        overflow: hidden;
        height: 100%;
       

        @media screen and (max-width: 40em) {

            .side1 {
                display: none;
            }
            .side2{
            background: #FCFCFC;
            width: 100%;
            flex: 1;
        }

        }

        .side1{
            width: 50%;
            height: 100%;
            background: var(--Primary-Colour, #00A85A);
        }
        .side2{
            background: #FCFCFC;
            width: 50%;
            overflow-y: scroll;
        }
    }

`

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width:100%;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: hidden;

    > input{
        font-size: 16px;
    }

    .logintext{
        display: flex;

        flex-direction: column;
        h1 {
            margin-block:0 ;
        }
        p{
            color: var( --small-color-font);
        }
    }

    .inputform{
       display: flex;
       flex-direction: column;
       gap: 20px;
       width: 60%;

       color: #000;

       .arco-select-view{
        background: transparent;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid var(--gray-300, #D0D5DD);
       }

       
    }

   /*  */
    .arco-input-password{
        width: 95%;
    }
    .arco-input-group{
        background-color: #FFFFFF;
        z-index: 1;
    }

    .signupheadtext{

       width:60%;

       p{
        margin: 0 0;
        
       }

    }
    .signup{
        width: 60%;


        .signupcontent{
            display: flex;
            justify-content: space-between;

            width: 100%;

            .navigation{
                flex: 1;
            }
        }

        .signuptext{
            width: 100%;
            display: inline-flex;
            justify-content: flex-end;
            flex: 1;
            font-size: 12px;
            align-items: center;
        }

     

        .timeline{
            /* border: 1px solid red; */

            width: 147%;
            .arco-timeline .arco-timeline-left{
                width: 100%;
            }
            .lines{
                width: 100%;
                /* width: 500px; */
            }
        }
    
       
    }

`

export default LoginR