import React, { useEffect } from "react";

const te = () => {
  useEffect(() => {
    const axios = require("axios");
    let data =
      '{\n    "companyName": "ATP Payout Services",\n    "address": "29 Berklet Street,",\n    "city": {\n        "id": 1\n    },\n    "state": {\n        "id": 1\n    },\n    "country": {\n        "id": 161\n    },\n    "phone": "2348170311628",\n    "email": "saheed@tm30.net",\n    "password" : "fileopen",\n    "bvn": "22487162201",\n    "idType": {\n        "id" : 1\n    },\n    "idnumber": "QE12310HET",\n    "idURL": "idURL.com",\n    "companyRegistrationNumber": "CO3212N12",\n    "companyCertificateURL": "companyCertificateURL.com",\n    "dateRegistered": "2010-01-01",\n    "formCo7URL": "formCo7URL.com",\n    "formCo2URL": "formCo2URL.com",\n    "articlesAndMemorandumOfAssociation": "articlesAndMemorandumOfAssociation.com",\n    "utilityBill": "utilityBill.com",\n    "sector": "Fintech"\n}';

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "{{baseURL}}/payoutclientsignup",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default te;
