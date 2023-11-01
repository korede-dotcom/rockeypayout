import React from 'react'
import styled from 'styled-components';
// 
import file from '../../../assets/file.svg'

const File = ({label, onChange,doneImg}) => {
        
  return (
    <FileBox>
        <label>{label}</label>
        <div className="files">
            {
             doneImg ? <img src={doneImg} alt="" className='doneimg' /> : <img src={file} alt="" />

            }
            <input type="file" onChange={onChange} />
        </div>
    </FileBox>
  )
}

export default File;

const FileBox = styled.div`
    margin: 20px 0 10px;
    label{
        color: #344054;
        font-size: 12px;
        font-weight: 400;
    }
    .files{
        position: relative;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        .doneimg{
            height: 50%;
        }
        img{
            width: 100%;
            height: 100%; 
            display: flex;
        }
        input{
            position: absolute;
            top: 0;
            left: 0;
                opacity: 0;
            width: 100%;
            height: 100%;
        }
    }
`;
