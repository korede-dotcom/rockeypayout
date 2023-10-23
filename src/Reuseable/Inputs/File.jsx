import React from 'react'
import styled from 'styled-components';
// 
import download from '../../assets/download.svg';
import edit from '../../assets/edit.svg'
import save from '../../assets/save.svg'
import delet from '../../assets/delete.svg'

const File = ({name}) => {
  return (
    <FileBox>
        <div className="left">
            <img src={download} alt="" />
            <div className="name">
                <p>{name}</p>
                <p>1 MB</p>
            </div>
        </div>
        <div className="right">
                <img src={edit} alt="" />
                <img src={save} alt="" />
                <img src={delet} alt="" />
        </div>
    </FileBox>
  )
}

export default File;

const FileBox = styled.div`
border-radius: 8px;
border: 1px dashed #E0E0E0;
background: #FCFEFF;
display: flex;
align-items: center;
justify-content: space-between;
width: 350px;
padding: 10px 20px;
.left{
    display: flex;
    align-items: center;
    gap: 10px;
    .name{
        p:nth-child(1){
            color: #344054;
            font-size: 10px;
            font-weight: 400;
        }
        p:nth-child(2){
            color: #344054;
            font-size: 10px;
            font-weight: 400;
        }
    }
}
.right{
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 18px;
    }
}
`;
