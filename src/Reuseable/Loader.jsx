import {styled} from "styled-components"
import { Spin, Space } from '@arco-design/web-react';
import load from "../assets/SidebarImg/load.svg"


const Loader = () => {
    return (
      <Load className="loading">
        <div className="spinner">
            <img src={load}/>
        </div>
      </Load>
    );
  };


  const Load = styled.div `
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  `

  export default Loader;
  