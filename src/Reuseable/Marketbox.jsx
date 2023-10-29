import React from "react";
import styled from "styled-components";

const Marketbox = ({ logo, name, subname, word, subscribe, subStatus,handleSubcribe }) => {
  return (
    <MarketBox>
      <div className="top">
        <div className={`logo ${logo ? "" : "add"}`}>
            {logo && <img src={logo} alt="" /> }
        </div>
        <div className="name">
          <h3>{name}</h3>
          <p>{subname}</p>
        </div>
      </div>
      <div className="word">
        <p>{word}</p>
      </div>
      <div className="bottom">
        <div className="left">
          {subStatus !== true ? 
            <p className="sub" onClick={handleSubcribe}>subscribe</p>
           : 
            <p className="unsub" onClick={handleSubcribe}>subscribed</p>
          }
        </div>
        <div className="right">
          {/* {subStatus !== true && ( */}
              <p className="greensub">{subscribe}</p>
          {/* )} */}
        </div>
      </div>
    </MarketBox>
  );
};

// 

export default Marketbox;

const MarketBox = styled.div`
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  // width: 235px;
  flex: 1 0 235px;
  max-width: 320px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 15px;
  .top{
    display: flex;
    align-items: center;
    gap: 15px;
    .logo{
        height: 40px;
        width: 40px;
        // border: 2px solid;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
                width: 100%;
                height: 100%;
        }
    }
    .add{
        background-color: #D9D9D9;

    }
    .name{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 3px;
        h3{
            color: #464F60;
            font-size: 14px;
            font-weight: 400;
        }
        p{
            color: #98A2B3;
            font-size: 11px;
            font-weight: 300;
        }
    }
  }
  .word{
    width: 95%;
    p{
        color: #98A2B3;
        font-size: 11px;
        font-weight: 400;
    }
  }
  .bottom{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .left{
        display: flex;
        align-items: center;

        .sub{
            color: #D92D20;
            font-size: 11px;
            font-weight: 400;
            border: 1px solid #D92D20;
            border-radius: 8px;
            background: #FFF;
            padding: 5px;
        }
        .unsub{
            color: #039855;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px; /* 150% */
            border-radius: 8px;
            background: #FFF;
            border: 1px solid #039855;
            padding: 5px;
        }
    }
    .right{
        .greensub{
            color: #027A48;
            text-align: center;
            font-size: 11px;
            font-weight: 500;
            display: inline-flex;
            padding: 8px 10px;
            gap: 6px;
            border-radius: 16px;
            background: #ECFDF3;
        }
    }
  }
`;
