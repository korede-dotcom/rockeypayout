import React from "react";
import styled from "styled-components";
//
import FigureList from "./Functions/FigureList";
// 
import down from "../assets/down.svg";
// import contact from "../assets/contact.png";
// import successful from "../assets/successful.png";
// import pending from "../assets/pending.png";
// import cancelled from "../assets/cancelled.png";

const Card = ({cardbody, figure, padding, width}) => {
  // const cardbody = [
  //   {
  //     Image: contact,
  //     name: "Total Transaction Count",
  //     downImg: down,
  //     day: "yesterday",
  //   },
  //   {
  //     Image: successful,
  //     name: `Successful`,
  //     downImg: down,
  //     day: "yesterday",
  //     border: "border",
  //     padding: "padding",
  //   },
  //   {
  //     Image: pending,
  //     name: "Pending",
  //     downImg: down,
  //     day: "yesterday",
  //     border: "border",
  //     padding: "padding",
  //   },
  //   {
  //     Image: cancelled,
  //     name: "Cancelled",
  //     downImg: down,
  //     day: "yesterday",
  //     border: "border",
  //     padding: "padding",
  //   },
  // ];
  // const figure = [
  //   { number: 200 },
  //   { number: 191 },
  //   { number: 1 },
  //   { number: 18 },
  // ];
  const figures = {
    numbers: figure.map((m, i) => <p key={i}>{m.number}</p>),
  };

  return (
    <Cardbx>
      {cardbody.map((m, i) => (
        // <div className="bx" style={{borderLeft: ${border} && "2px solid red"}>
        <div
          key={i}
          className="bx"
          style={{
            borderLeft: m.border ? "1px solid #D5DBE5" : "none",
            padding: m.padding && padding
          }}
        >
          <div className="top">
            <img src={m.Image} alt="" />
            <span style={{width: width ? width : "100px"}}>{m.name}</span>
          </div>
          <div className="center">{figures.numbers[i]}</div>
          {/* {figure.map((item, i) => (
              <FigureList key={i} figures={item} index={i} />
            )} */}
            {/* {figure.map((item, i) => (
                <FigureList key={i} figures={item} index={i} />
            ))} */}
          <div className="bottom">
            <span>
              {/* <img src={m.downImg} alt="" />
              12%{" "} */}
            <span className="same">{m.count}</span>

            </span>
            {/* <span className="same">vs</span> */}
            <span className="same">{m.day}</span>
          </div>
        </div>
      ))}
    </Cardbx>
  );
};

export default Card;

const Cardbx = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex: 1 1 220px;
  .bx {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;

    .top {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-left: -5px;
      img {
        width: 40px;
        // border: 2px solid;
      }
      span {
        color: #909090;
        font-size: 10.5px;
        font-weight: 400;
        letter-spacing: 0.14px;
        width: 100px;
      }
    }
    .center {
      p {
        color: #333b4a;
        font-size: 24px;
        font-weight: 600;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      gap: 5px;
      span:first-child {
        display: flex;
        align-items: center;
        color: #b42318;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        img {
          width: 15px;
        }
      }
      .same {
        color: #667085;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;
