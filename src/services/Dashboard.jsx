/* eslint-disable no-unused-vars */

import { Axios } from '../utils/Axios';
import { BASE_URL } from '../../config/config';

const baseurl = BASE_URL



export const beneficiaries = async (userId,bid) => {
    const { data } = await Axios.get(
      `${baseurl}/getuserbeneficiaries?userId=${userId || 68059751}&beneficiaryId=${bid || 0}`
    );
    return data;
  };

export const getBanks = async (userId,bid) => {
    const { data } = await Axios.get(
      `${baseurl}/getbanks`
    );
    return data;
  };
export const nameEnquiry = async (query) => {
    console.log("🚀 ~ file: Dashboard.jsx:24 ~ nameEnquiry ~ query:", query?.queryKey)
    const { data } = await Axios.get(
      `${baseurl}/BankDetailsLookUp?bankCode=${query?.queryKey[0]}&accountNumber=${query?.queryKey[1]}`
    );
    return data;
};

export const Tranx = async (userId) => {
    console.log("🚀 ~ file: Dashboard.jsx:31 ~ Tranx ~ userId:", userId?.queryKey[0])
    const { data } = await Axios.get(
      `${baseurl}/getuserlog/${userId?.queryKey[0]}`
    );
    return data;
};
export const TransferPurpose = async () => {
    const { data } = await Axios.get(
      `${baseurl}/gettransferpurpose`
    );
    return data;
};

export const Paymentchannel = async () => {
    const { data } = await Axios.get(
      `${baseurl}/getpaymentchannel`
    );
    return data;
};

export const Payoutchannel = async () => {
    const { data } = await Axios.get(
      `${baseurl}/getpayoutchannel`
    );
    return data;
};

export const GetDetails = async (id) => {
    console.log("🚀 ~ file: Dashboard.jsx:57 ~ GetDetails ~ id:", id?.queryKey[0])
    const { data } = await Axios.get(
      `${baseurl}/getuserdashboard/${id?.queryKey[0]}`
    );
    return data;
};

export const Rates = async (query) => {
  const q = query?.queryKey
    const { data } = await Axios.get(
      `${baseurl}/getrate?fromCurrencyId=${q[0] || 0}&toCurrencyId=${q[1] || 0}&fromAmount=${q[2] || 0}&toAmount=${q[3] || 0}`
    );
    return data;
};
export const TodayRates = async (query) => {
  const q = query?.queryKey
    const { data } = await Axios.get(
      `${baseurl}/gettodaysrate?fromCurrencyId=${q[0] || 0}&toCurrencyId=${q[1] || 0}`
    );
    return data;
};


export const createBeneficiary = async (body) => {
    console.log("🚀 ~ file: Dashboard.jsx:32 ~ createBeneficiary ~ body:", body)
    const { data } = await Axios.post(
      `${baseurl}/adduserbeneficiary`,
      body
    ); 
    return data;
  };

export const createWallet = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}/adduserwallet`,
      body
    ); 
    return data;
  };
export const sendMoney = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}/sm`,
      body
    ); 
    return data;
  };