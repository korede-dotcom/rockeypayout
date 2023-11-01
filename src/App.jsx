import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   Overview,
//   Ohentpay,
//   HopeBank,
//   Marketplace,
//   Transaction,
//   Security,
//   Company,
//   Api,
//   ChangePassword,
//   UserManagement,
// } from "./Pas";
import Overview from "./Pages/Gateway/Overview";
import Ohentpay from "./Pages/Gateway/Ohentpay";
import Hopeps from "./Pages/Gateway/Hopeps";
import Marketplace from "./Pages/Gateway/Marketplace";
import Transactions from "./Pages/Transactions/Transactions";
import Settings from "./Pages/Security/Security";
import Company from "./Pages/Security/Companies/Company";
import Changepassword from "./Pages/Security/Changepassword";
import Details from "./Pages/Security/Details";
import UserManagement from "./Pages/Security/UserManagement";
import Login from "./Pages/Onboarding/Login";
import LoginR from "./Pages/Onboarding/LoginR";
import InActivityTimeOut from "./hooks/InActivityTimeOut";
import { ProtectedRoute } from "./hooks";
import "@arco-design/web-react/dist/css/arco.css";
import Beneficiary from "./Pages/Beneficiary/Beneficairy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route element={<InActivityTimeOut />}>
          <Route path="/" element={<LoginR />} />
          <Route path="/signup" element={<Login />} />

          {/* Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/ohentpay" element={<Ohentpay />} />
            <Route path="/hopebank" element={<Hopeps />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/beneficiary" element={<Beneficiary />} />
            <Route path="/security" element={<Settings />} />
            <Route path="/security/company" element={<Company />} />
            <Route
              path="/security/change-password"
              element={<Changepassword />}
            />
            <Route
              path="/security/change-password"
              element={<Changepassword />}
            />
            <Route path="/security/API" element={<Details />} />
            <Route
              path="/security/user-management"
              element={<UserManagement />}
            />
          </Route>
          {/* <Route path='*' element={<h1>Error</h1>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
