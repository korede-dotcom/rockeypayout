import Overview from "./assets/SidebarImg/overview";
import Ohentpay from "./assets/SidebarImg/ohentpay.svg";
import user from "./assets/SidebarImg/user.png";
import code from "./assets/SidebarImg/code.png";
import lock from "./assets/SidebarImg/lock.png";
import cprofile from "./assets/SidebarImg/cprofile.png";
import hope from "./assets/SidebarImg/hope.svg";
import market from "./assets/SidebarImg/market.svg";
import tablearrow from "./assets/tablearrow.svg";
import contact from "./assets/contact.png";
import successful from "./assets/successful.png";
import pending from "./assets/pending.png";
import cancelled from "./assets/cancelled.png";
import down from "./assets/down.svg";
import test from "./assets/test.svg";
import csharp from "./assets/Webhooks/csharp.svg";
import curl from "./assets/Webhooks/curl.svg";
import java from "./assets/Webhooks/java.svg";
import php from "./assets/Webhooks/php.svg";
import node from "./assets/Webhooks/node.png";
import alb from "./assets/alb.png";
import ngn from "./assets/ngn.svg";
import cc from "./assets/languagesImg/c.svg";
//

export const SidebarData = [
  {
    pageName: "Gateway",
    Name: "My GATEWAYS",
    path: "/overview",
    Gateway: [
      {
        title: "Overview",
        path: "/overview",
        image: <Overview />,
      },
      {
        title: "Ohentpay",
        path: "/ohentpay",
        image: <img src={Ohentpay} alt="" />,
      },
      {
        title: "Hope PS Bank",
        path: "/hopebank",
        image: <img src={hope} alt="" />,
      },
    ],
  },
  {
    pageName: "Gateway",
    Name: "ALL GATEWAYS",
    path: "/marketplace",
    Gateway: [
      {
        title: "Marketplace",
        path: "/marketplace",
        image: <img src={market} alt="" />,
      },
    ],
  },
  {
    pageName: "Transactions",
    Name: "Transactions",
    path: "/transaction",
    Gateway: [
      {
        title: "Transaction",
        path: "/transaction",
        image: <Overview />,
      },
    ],
  },
  {
    pageName: "Security",
    Name: "Security",
    path: "/security/profile",
    Gateway: [
      {
        title: "User Profile",
        path: "/security",
        image: <img src={user} alt="" />,
      },
      {
        title: "Company Profile",
        path: "/security/company",
        image: <img src={cprofile} alt="" />,
      },
      {
        title: "API",
        path: "/security/API",
        image: <img src={code} alt="" />,
      },
      {
        title: "Change Password",
        path: "/security/change-password",
        image: <img src={lock} alt="" />,
        // image: <Overview />
      },
      {
        title: "User Details",
        path: "/security/user-management",
        image: <img src={market} alt="" />,
      },
    ],
  },
  {
    pageName: "Beneficiary",
    Name: "Beneficiary",
    path: "/beneficairy",
    Gateway: [
      {
        title: "User Profile",
        path: "/security",
        image: <img src={user} alt="" />,
      },
    ],
  },
];
// export const SidebarData = [

//   {
//     pageName: 'Gateway',
//     Name: 'My GATEWAYS',
//     Gateway: [
//       {
//         title: 'Overview',
//         path: '/overview',
//       },
//       {
//         title: 'Vendors',
//         path: '/ohentpay',
//       },
//       {
//         title: 'holders',
//         path: '/hopebank',
//       },
//     ],
//   },
//   {
//     pageName: 'Transactions',
//     Name: 'Transactions',
//     Gateway: [
//       {
//         title: 'Transaction',
//         path: '/transaction',
//       },
//     ],
//   },
//   {
//     pageName: 'Security',
//     Name: 'Security',
//     Gateway: [
//       {
//         title: 'User Profile',
//         path: '/security',
//       },
//       {
//         title: 'Company Profile',
//         path: '/company',
//       },
//       {
//         title: 'Deatails',
//         path: '/api',
//       },
//       {
//         title: 'Change Password',
//         path: '/change-password',
//       },
//       {
//         title: 'User Details',
//         path: '/user-management',
//       },
//     ],
//   },
// ];

export const ApiHeader = [
  {
    id: 0,
    name: "APPLICATION ID",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 1,
    name: "APPLICATION NAME",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 2,
    name: "APP DESCRIPTION",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 3,
    name: "WEBHOOK URL",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 4,
    name: "DATE CREATED",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 5,
    name: "LAST UPDATED",
    image: <img src={tablearrow} alt="" />,
  },
  // {
  //   id: 6,
  //   name: "STATUS",
  //   image: <img src={tablearrow} alt="" />,
  // },
];
export const ApiBody = [
  {
    Appid: "192830485",
    Appname: "Transfer Rocket Integration",
    AppDes: "A description goes here",
    WebUrl:
      "https://moneybusiness.tm-dev.xyz/moneybusiness/FirePaymentStatusWebhookHandler",
    image: <img src={test} alt="" />,
    Test: "Test",
    datecreated: "23/09/23, 09:11:04",
    lastcreated: "23/09/23, 09:11:04",
    status: false,
  },
  {
    Appid: "192830485",
    Appname: "Transfer Rocket Integration",
    AppDes: "A description goes here",
    WebUrl:
      "https://moneybusiness.tm-dev.xyz/moneybusiness/FirePaymentStatusWebhookHandler",
    image: <img src={test} alt="" />,
    Test: "Test",
    datecreated: "23/09/23, 09:11:04",
    lastcreated: "23/09/23, 09:11:04",
    status: true,
  },
  {
    Appid: "192830485",
    Appname: "Transfer Rocket Integration",
    AppDes: "A description goes here",
    WebUrl:
      "https://moneybusiness.tm-dev.xyz/moneybusiness/FirePaymentStatusWebhookHandler",
    image: <img src={test} alt="" />,
    Test: "Test",
    datecreated: "23/09/23, 09:11:04",
    lastcreated: "23/09/23, 09:11:04",
    status: false,
  },
  {
    Appid: "192830485",
    Appname: "Transfer Rocket Integration",
    AppDes: "A description goes here",
    WebUrl:
      "https://moneybusiness.tm-dev.xyz/moneybusiness/FirePaymentStatusWebhookHandler",
    image: <img src={test} alt="" />,
    Test: "Test",
    datecreated: "23/09/23, 09:11:04",
    lastcreated: "23/09/23, 09:11:04",
    status: true,
  },
  {
    Appid: "192830485",
    Appname: "Transfer Rocket Integration",
    AppDes: "A description goes here",
    WebUrl:
      "https://moneybusiness.tm-dev.xyz/moneybusiness/FirePaymentStatusWebhookHandler",
    image: <img src={test} alt="" />,
    Test: "Test",
    datecreated: "23/09/23, 09:11:04",
    lastcreated: "23/09/23, 09:11:04",
    status: true,
  },
];

// {name: 'C', image: cc},
// {name: 'C++', image: cplus},
// {name: 'C#', image: csharp},
// {name: 'Go', image: gosimg},
// {name: 'PHP', image: php},
// {name: 'HTTP', image: cc},
// {name: 'nodejs', image: node},
// {name: 'Javascript', image: jsimg},
// {name: 'JSON', image: cc},
// {name: 'Kotlin', image: kotlin},
// {name: 'Objective-C', image: objectc},
// {name: 'PowerShell', image: cc},
// {name: 'Python', image: python},
// {name: 'R', image: rlang},
// {name: 'Swift', image: swift},
// {name: 'curl', image: curl},
// {name: 'java', image: java},

export const WebhooksHHead = [
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
];

export const OverviewHeader = [
  {
    id: 0,
    name: "TRANSACTION REF",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 1,
    name: "DATE",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 2,
    name: "GATEWAY",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 3,
    name: "SENDER",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 4,
    name: "RECEIVER",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 5,
    name: "BANK",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 6,
    name: "ACCOUNT NO",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 7,
    name: "CURRENCY",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 8,
    name: "AMOUNT",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 9,
    name: "TRANSFER FEE",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 10,
    name: "TRANSACTION STATUS",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 11,
    name: "ACTIONS",
    // image: <img src={tablearrow} alt="" />,
  },
];
export const OhentpayHead = [
  {
    id: 0,
    name: "TRANSACTION REF",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 1,
    name: "DATE",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 2,
    name: "RECEIVER",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 3,
    name: "BANK",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 4,
    name: "ACCOUNT NO",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 5,
    name: "CURRENCY",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 6,
    name: "AMOUNT",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 7,
    name: "TRANSFER FEE",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 8,
    name: "TRANSACTION STATUS",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 9,
    name: "ACTIONS",
    // image: <img src={tablearrow} alt="" />,
  },
];
export const OverviewBody = [
  {
    trans: "TX19784903",
    date: "23/09/23, 09:11:24",
    img: <img src={Ohentpay} alt="" />,
    gateway: "ohentpay",
    receiver: "AINAJOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={hope} alt="" />,
    gateway: "Hope PS BANk",
    receiver: "AINA JOHNSON",
    bank: "GT Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={Ohentpay} alt="" />,
    gateway: "ohentpay",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Union Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={hope} alt="" />,
    gateway: "Hope PS BANk",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "FCMB",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={Ohentpay} alt="" />,
    gateway: "ohentpay",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Sterling Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={hope} alt="" />,
    gateway: "Hope PS BANk",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={hope} alt="" />,
    gateway: "Hope PS BANk",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={Ohentpay} alt="" />,
    gateway: "ohentpay",
    receiver: "AINA JOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    img: <img src={hope} alt="" />,
    gateway: "Hope PS BANk",
    receiver: "AINA JOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
];
export const OhentpayBody = [
  {
    trans: "TX19784903",
    date: "23/09/23, 09:11:24",
    receiver: "AINAJOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "AINA JOHNSON",
    bank: "GT Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Union Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "FCMB",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Sterling Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "CHUKWURA FREDRICK UGOCHUKWU",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "cancelled",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "AINA JOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
  {
    trans: "TX19784903",
    date: "23/09/23  09:11:24",
    receiver: "AINA JOHNSON",
    bank: "Access Bank",
    accNo: "0012345678",
    flag: <img src={ngn} alt="" />,
    currency: "NGN",
    amount: "30.00",
    transferfee: 0.0,
    transactiontatus: "Deposited",
    actions: "view details",
  },
];
export const WebhooksBody = [
  {
    text: `var client = new HttpClient()
    var request = new HttpRequestMessage(HttpMethod.Get, "http://93.114.128.117:8585/bcon/getcurrencytype");
    var response = await client.SendAsync(request)
    response.EnsureSuccessStatusCode()
    Console.WriteLine(await response.Content.ReadAsStringAsync())
    `,
    id: 1,
  },
  {
    text: `v url := "http://93.114.128.117:8585/bcon/getcurrencytype"
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
    id: 2,
  },
  {
    text: `GET /bcon/getcurrencytype HTTP/1.1
    Host: 93.114.128.117:8585
    `,
    id: 3,
  },
  {
    text: `GET /bcon/getcurrencytype HTTP/1.1
    Host: 93.114.128.117:8585
    `,
    id: 4,
  },
  {
    text: `var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://93.114.128.117:8585/bcon/getcurrencytype", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `,
    id: 5,
  },
  {
    text: `var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://93.114.128.117:8585/bcon/getcurrencytype", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `,
    id: 5,
  },
  {
    text: `var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://93.114.128.117:8585/bcon/getcurrencytype", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    `,
    id: 6,
  },
  // {
  //   text: "fetch  httpsjsonplaceholdertypicodecomusersthenesponsereturnrespsejsonthenusersconsoleogusers",
  // },
  // {
  //   text: "fetch httpsjsonplaceholdertypicodecomusersthenesponsereturnrespsejsonthenusersconsoleogusers",
  // },
  // {
  //   text: "fetch httpsjsonplaceholdertypicodecomusersthenesponsereturnrespsejsonthenusersconsoleogusers",
  // },
  // {
  //   text: "fetch httpsjsonplaceholdertypicodecomusersthenesponsereturnrespsejsonthenusersconsoleogusers",
  // },
];

export const ManagHead = [
  {
    name: "NAME/EMAIL",
    image: <img src={tablearrow} alt="" />,
  },
  {
    name: "ROLE",
    image: <img src={tablearrow} alt="" />,
  },
  {
    name: "LAST SEEN",
    image: <img src={tablearrow} alt="" />,
  },
  {
    name: "STATUS",
    image: <img src={tablearrow} alt="" />,
  },
];
export const ManagBody = [
  {
    name: "Saheed Albert",
    email: "s.albert@email.com",
    image: <img src={alb} alt="" />,
    role: "Administrator",
    lastseen: "1 hour ago",
    status: true,
  },
  {
    name: "Saheed Albert",
    email: "s.albert@email.com",
    image: <img src={alb} alt="" />,
    role: "Manager",
    lastseen: "",
    status: false,
  },
];

export const TheadHeader = [
  {
    id: 0,
    name: "ID",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 1,
    name: "originator",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 2,
    name: "terminal name",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 3,
    name: "terminal class",
  },
  {
    id: 4,
    name: "terminal country",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 5,
    name: "terminal location",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 6,
    name: "host",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 7,
    name: "host in",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 8,
    name: "time",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 9,
    name: "phase",
    image: <img src={tablearrow} alt="" />,
  },
  {
    id: 10,
    name: "transaction code",
  },
  {
    id: 11,
    name: "amount",
  },
  {
    id: 12,
    name: "currency",
  },
  {
    id: 13,
    name: "pan",
  },
  {
    id: 14,
    name: "authorizer resp",
  },
  {
    id: 15,
    name: "action",
  },
];

export const TheadBody = [
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
  {
    ID: 2912371,
    originator: "automatic generated",
    "terminal name": "5GP1A5467",
    "terminal class": "POS",
    "terminal country": "Nigeria",
    "terminal location": "sakinniyi@gmail.com",
    host: "639-UBA MC Postillion Direct host - (Postilion)",
    "host in": 4570,
    time: 1237682923189813,
    phase: "Wait for Authorization",
    "transaction code": "142 - POS Payment",
    amount: "10 200.00",
    currency: "NGN",
    pan: "519911**********0269",
    "authorizer resp": "0 - None",
    action: "view",
  },
];

export const cardbody = [
  {
    Image: contact,
    name: "Total Transaction Count",
    downImg: down,
    day: "yesterday",
  },
  {
    Image: successful,
    name: `Successful`,
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
  {
    Image: pending,
    name: "Pending",
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
  {
    Image: cancelled,
    name: "Cancelled",
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
];
export const figure = [
  { number: 200 },
  { number: 191 },
  { number: 1 },
  { number: 18 },
];
export const cardbody2 = [
  {
    Image: successful,
    name: "Total Transaction Count",
    downImg: down,
    day: "yesterday",
  },
  {
    Image: contact,
    name: "Total Transaction Amount",
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
  {
    Image: successful,
    name: `Successful`,
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
  {
    Image: pending,
    name: "Pending",
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
  {
    Image: cancelled,
    name: "Cancelled",
    downImg: down,
    day: "yesterday",
    border: "border",
    padding: "padding",
  },
];
export const figure2 = [
  { number: 200 },
  { number: 200 },
  { number: 191 },
  { number: 1 },
  { number: 18 },
];

export const marketplaces = [
  {
    logo: Ohentpay,
    name: "Ohentpay",
    company: "[Providus]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "false",
  },
  {
    logo: hope,
    name: "Hope PS Bank",
    company: "[Payarena]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: "",
    name: "PayU",
    company: "[Zenith]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: Ohentpay,
    name: "Ohentpay",
    company: "[Providus]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: hope,
    name: "Hope PS Bank",
    company: "[Payarena]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: "",
    name: "PayU",
    company: "[Zenith]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: Ohentpay,
    name: "Ohentpay",
    company: "[HSBC]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: hope,
    name: "Hope PS Bank",
    company: "[Payarena]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
  {
    logo: "",
    name: "Ohentpay",
    company: "[Providus]",
    word:
      "A short description about the header goes here. A short description about the header goes here.",
    subscribe: "Subscribe",
    subscribeStatus: "true",
  },
];
