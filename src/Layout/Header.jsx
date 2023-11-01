import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
//
import notifi from "../assets/SidebarImg/notification.svg";
import profile from "../assets/SidebarImg/profile.png";
import pas from "../assets/pas.svg";
import pro from "../assets/pro.svg";
import logout from "../assets/logout.svg";
import Checkbox from "../assets/checkbox";

const Header = ({ setPropsPassed, SelectedCategory }) => {
  const [live, setLive] = useState(false);
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const headerTab = [
    {
      id: 0,
      name: "Gateway",
      path: "/overview",
    },
    {
      id: 1,
      name: "Transactions",
      path: "/transaction",
    },
    {
      id: 2,
      name: "Security",
      path: "/security",
    },
    {
      id: 3,
      name: "Beneficairy",
      path: "/beneficiary",
    },
  ];
  const [headtab, setHeadTab] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  const handleTabClick = (name, path) => {
    setHeadTab(headerTab.find((tab) => tab.name === name).id);
    setPropsPassed(name);
    Navigate(path);
  };

  useEffect(() => {
    const activeTab = headerTab.find((tab) => pathname.startsWith(tab.path));
    if (activeTab) {
      setHeadTab(activeTab.id);
      setPropsPassed(activeTab.name);
    }
  }, [pathname, headerTab]);

  console.log("Current pathname:", pathname);
  console.log(setPropsPassed);

  return (
    <HeaderContainer>
      <div className="left">
        {headerTab.map((m, i) => (
          <p
            key={i}
            onClick={() => handleTabClick(m.name, m.path)}
            className={headtab === i && "activeTab"}
          >
            {m.name}
          </p>
        ))}
      </div>
      <div className="right">
        <div className="toggle">
          <Checkbox onClick={() => setLive(!live)} change={live} />
          <p>{live ? "Live" : "Test"}</p>
        </div>
        <span className="notifi">
          <img src={notifi} alt="" />
        </span>
        <div className="profilebx">
          <p className="profile" onClick={() => setShowProfile(!showProfile)}>
            <img src={profile} alt="" />
          </p>
          {showProfile && (
            <Bomodal>
              <div className="top">
                <img src={profile} alt="" />
                <div className="deta">
                  <p>Nelson Dielson</p>
                  <p>h2llo@deziuoa@gmail.com</p>
                </div>
              </div>
              <hr
                style={{ border: ".5px solid #F2F4F7", margin: "10px 0 0 0" }}
              />
              <div className="bx">
                <img src={pro} alt="" />
                <span>View Profile</span>
              </div>
              <div className="bx">
                <img src={pas} alt="" />
                <span>Change Password</span>
              </div>
              <hr
                style={{ border: ".5px solid #F2F4F7", margin: " 0 0 0 0" }}
              />
              <div className="bx">
                <img src={logout} alt="" />
                <span>Log Out</span>
              </div>
            </Bomodal>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 84px;
  // border-bottom: 1px solid #EAECF0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 10px;

  background: #fff;
  .left {
    display: flex;
    align-items: center;
    gap: 15px;
    p {
      color: #344054;
      /* Text md/Medium */
      font-size: 12px;
      font-weight: 400;
      border-radius: 4px;
      padding: 8px 20px;
      // transition: all 1s;
    }
    .activeTab {
      background: #00a85a;
      color: #fff;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 15px;
    // border: 2px solid blue;
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 10px;
      p {
        color: #667085;
        font-size: 12px;
        font-weight: 500;
        lineheight: 25px;
      }
    }
    .notifi {
      img {
        width: 17px;
      }
    }
    .profilebx {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .profile {
        img {
          width: 30px;
        }
      }
    }
    // .boModal {
    //   // margin-bottom: -150px;
    //   position: absolute;
    //   top: 45px;
    //   right: 3px;
    //   z-index: 1;
    //   box-shadow: 0px 4px 36px 0px rgba(99, 98, 98, 0.10);
    //   background: #fff;
    //   padding: 12px 16px;
    //   border-radius: 15px;
    //   height: 120px;
    //   width: 200px;
    // }
  }
`;
const Bomodal = styled.div`
  position: absolute;
  top: 45px;
  right: 3px;
  z-index: 1;
  box-shadow: 0px 4px 36px 0px rgba(99, 98, 98, 0.1);
  background: #fff;
  padding: 10px 0 0;
  border-radius: 15px;
  height: max-content;
  min-width: 200px;
  .top {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    img {
      width: 35px;
    }
    p:first-child {
      color: #344054;
      font-size: 14px;
      font-weight: 500;
    }
    p:last-child {
      color: #667085;
      font-size: 10px;
      font-weight: 400;
    }
  }
  .bx {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7.5px 10px;
    &:hover {
      background: #e9edf5;
      // opacity: .9;
    }
    img {
      width: 15px;
    }
    span {
      color: #344054;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
