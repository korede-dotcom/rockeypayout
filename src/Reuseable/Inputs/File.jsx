import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
// 
import download from '../../assets/download.svg';
import edit from '../../assets/edit.svg'
import save from '../../assets/save.svg'
import delet from '../../assets/delete.svg'

const File = ({name,handleView,value,noTags,style,handleEdit}) => {
    const [getUser,setUser] = useState()
    console.log("🚀 ~ file: File.jsx:12 ~ File ~ getUser:", value)
useEffect(() => {

 setUser(JSON.parse(localStorage.getItem("userDetails")))

},[])

// const{formCo7URL,idURL,utilityBill,companyCertificateURL,articlesAndMemorandumOfAssociation,formCo2URL} = getUser?.data;
// console.log("🚀 ~ file: File.jsx:19 ~ File ~ formCo7URL,idURL,utilityBill,companyCertificateURL,articlesAndMemorandumOfAssociation,formCo2URL:", formCo7URL,idURL,utilityBill,companyCertificateURL,articlesAndMemorandumOfAssociation,formCo2URL)

  return (
    <FileBox style={{borderColor:`${value && value?.includes("https") ? "grey" : "red"}`}} >
 
 
        <div className="left" style={{style}} onClick={handleView}>
            <img src={value && value?.includes("https://res.cloudinary.com/") ? "" : download} alt="" />
            <div className="name">
                <p>{name}</p>
                {/* <p>1 MB</p> */}
            </div>
        </div>
        <div className="right">
            {
                noTags ? "" : (
                    <>
                       {value?.includes("https://res.cloudinary.com/") && (
                        <>
                        <img src={edit} alt=""  onClick={handleEdit}/>
                        <img src={save} alt="" />
                        
                        </>
                       )}
                    </>
                )
            }
             
                {/* <img src={delet} alt="" /> */}
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
