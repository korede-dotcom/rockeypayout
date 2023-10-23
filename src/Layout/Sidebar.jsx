import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { SidebarData } from "../Mapables";
//
import logo from "../assets/SidebarImg/logo.svg";

const Sidebar = ({ selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(true);

  const Navigate = useNavigate();

  useEffect(() => {
    const updateIsOpen = () => {
      if (window.innerWidth < 500) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    updateIsOpen();
    const handleResize = () => {
      updateIsOpen();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedCategory]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const matchingCategories = SidebarData.filter(
    (item) => item.pageName === selectedCategory
  );
  const locate = window.location.pathname;

  return (
    <SidebarContainer isOpen={isOpen}>
      <div
        className="logo"
        style={{
          padding: isOpen ? "0 0 0 20px" : "0 1px",
        }}
      >
        <img
          // src={logo}
          src={logo}
          alt=""
          style={{
            width: isOpen ? "110px" : "63px",
            padding: isOpen ? "0 0 0 0" : "0",
          }}
        />
      </div>
      <div className="navbox">
        {matchingCategories.map((selectedCategoryData, index) => (
          <nav key={index}>
            <p
              className="title"
              style={{
                fontSize: isOpen ? "10px" : "9px",
                margin: isOpen ? "0 0 5px 0" : "0 0 10px 0",
              }}
            >
              {selectedCategoryData.Name}
            </p>
            <div className="navcContainer">
              {selectedCategoryData.Gateway.map((m, i) => {
                console.log(m.path);
                // setNav(m.path);
                return (
                  <div
                    key={i}
                    className={` navbx ${locate === m.path && "active"}`}
                  >
                    <div className="navImg">{m.image}</div>
                    <span
                      onClick={() => {
                        Navigate(m.path);
                      }}
                      style={{ display: isOpen ? "" : "none" }}
                    >
                      {m.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </nav>
        ))}
      </div>
      {/* <button onClick={toggle}>click</button> */}
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  height: 100%;
  // width: 200px;
  width: ${(props) => (props.isOpen ? "200px" : "65px")};
  // border-right: 1px solid #EAECF0;
  background: #fff;
  .logo {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 85px;
    border-bottom: 1px solid #eaecf0;
    img {
      width: 110px;
    }
  }
  .navbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    nav {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
      padding: 0 5%;
      .title {
        color: #848d87;
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .navcContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;
        width: 100%;

        .blockbox {
          width: 100%;
        }
        .navbx {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          // padding: 5px 10px 5px 10px;
          height: 40px;
          padding: 0 5px 0 15px;
          border-radius: 0 6px 6px 0;

          span {
            color: #464f60;
            font-size: 12px;
            font-weight: 400;
          }

          .navImg > * {
            width: 18px;
          }
        }
        .active {
          background: #ecfeff;
          border-left: 4px solid #00a85a;
          // padding: 5px 5px 5px 13px;
          span {
            color: #00a85a;
          }
        }
      }
    }
  }
`;
