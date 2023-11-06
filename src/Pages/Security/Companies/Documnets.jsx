import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";
import File from "../../../Reuseable/Inputs/File";
import ReusableModal from "../../../reuseables/ReusableModal";
import Btn from "../../../reuseables/Btn";

const Documnets = () => {
  const [getUser,setUser] = useState()
  const [show,setShow] = useState(false)
  const [show2,setShow2] = useState(false)
  const [getUserFiles,setUserFiles] = useState(null)
  const [cimage,setcimage] = useState(null)
  const [getc,setc] = useState(null)
  const [info,setInfo] = useState("")
  const [loading,setLoading] = useState(false)
  const [refetch,setRefetch] = useState(null)
  console.log("🚀 ~ file: File.jsx:12 ~ File ~ getUser:", getUser)
useEffect(() => {

setUser(JSON.parse(localStorage.getItem("userDetails")))
},[])

useEffect(() => {

  setUserFiles([
    {img: getUser?.data?.formCo7URL,id:1,name:"formco7"},
    { img: getUser?.data?.formCo2URL,id:2,name:"formco2"},
    {img: getUser?.data?.idURL,id:3,name:"idurl"},
    {img: getUser?.data?.companyCertificateURL,id:4,name:"registationcertificateurl"},
    {img: getUser?.data?.articlesAndMemorandumOfAssociation,id:5,name:"articleandmemorandumofassociation"},
    {img: getUser?.data?.utilityBill,id:6,name:"utilitybill"},
  ])
  
}, [getUser])

useEffect(() => {

  // setLoading(true)
  const userId = JSON.parse(localStorage.getItem("userDetails"))

  const fetchData = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch(`https://apidoc.transferrocket.co.uk//getpayoutclientdashboard/${userId?.data?.userId}`, requestOptions);
      const result = await response.json();
      
      // Set the fetched data to state
    
      localStorage.setItem("userDetails",JSON.stringify(result))
      if(result?.data?.status){
        setShow(false)
        setShow2(false)
      }
      console.log("Fetched data:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors here
    }
  };

  // Call the fetch function
  fetchData();
}, [refetch]);


const handleView = id => {
 console.log("🚀 ~ file: Documnets.jsx:31 ~ handleView ~ id:", id)
 const n = getUserFiles?.filter(d => {
  if (id === d?.id) {
    return d
  }
 })
 setcimage(n[0].img)
 setc({name:n[0].name,id:id})
 console.log("🚀 ~ file: Documnets.jsx:37 ~ n ~ n:", cimage)
 setShow(true)
}
const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editable, setEditable] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a temporary URL for the selected file
    const fileURL = URL.createObjectURL(file);
    setPreviewImage(fileURL); // Set the temporary URL to the state
  };

  const handleFileSelectClick = () => {
    fileInputRef.current.click(); // Trigger click on the hidden file input
  };

  const hadleClose = () => {
    setShow(!show)
    setPreviewImage(null)
    setSelectedFile(null)
  }
  const hadleClose2 = () => {
    setShow2(!show2)
    setPreviewImage(null)
    setSelectedFile(null)
  }

  const handleFileInputChange = async (name) => {
    var formdata = new FormData();
    formdata.append("file", selectedFile);
    console.log("🚀 ~ file: Documnets.jsx:72 ~ handleFileInputChange ~ selectedFile:", selectedFile)
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
   const response = await fetch(`https://apidoc.transferrocket.co.uk//FileUploadAPI/${getUser?.data?.userId}`, requestOptions)
    const responseData = await response.json();
    console.log("🚀 ~ file: Documnets.jsx:108 ~ handleFileInputChange ~ responseData:", responseData)
    const data = {
      userId:getUser?.data?.userId,
      action:1,
      fileName:getc?.name,
      fileURL:responseData?.secure_url
    }
    await editAndDelete(data)
    // setLoading(false)
 
    
  };

  const editAndDelete = async (data) => {
    setLoading(true)
    
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(
        {
          "objectId" : data.userId,
          "action" : data.action, //0 to update 1, to delete. 
          "fileName" : data.fileName,  //formco2, formco7, registationcertificateurl, idurl, utilitybill, articleandmemorandumofassociation
          "fileURL": data.fileURL
      }
      ),
      redirect: 'follow'
    };
    
   const response = await fetch("https://apidoc.transferrocket.co.uk//updatepayoutclientfile", requestOptions)
    const responseData = await response.json();
    console.log("🚀 ~ file: Documnets.jsx:92 ~ editAndDelete ~ responseData:", responseData)
    if (responseData?.status) {
      setRefetch(true)
      setPreviewImage(null)
      setEditable(true)
      setShow2(!show2)
      // window.location.reload()
    }else{
      setLoading(false)
      setInfo(responseData.message)
      setTimeout(() => {
        setInfo("")
      },2000)
    }
  }


const handleEdit = (id) => {
  const n = getUserFiles?.filter(d => {
   if (id === d?.id) {
     return d
   }
  })
  // setcimage(n[0].img)
  setPreviewImage(n[0].img)
  setEditable(true)
  setShow2(!show)

}
  return (
    <DocumentsBox>
      { show &&
      <ReusableModal customStyle={{height:"450px"}} isOpen={show} onClose={hadleClose} >
      {
        cimage?.toString()?.includes("https") ? (
          <img src={cimage && cimage} height="100%"/>

        ) : (
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <p>{info}</p>
          <p>Upload a File</p>
          {selectedFile && <p>Selected File: {selectedFile.name}</p>}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the file input
            />

              <File value={"https://res.cloudinary.com/"}  name={"Upload your file"} noTags={true} handleView={handleFileSelectClick}/>
              <br/>
            {previewImage &&   <img src={previewImage} alt="Selected" height="250px" />}
        </div>
        )
      }
      <br/>
      {
     
        previewImage && <Btn width={"100%"} clicking={ () => handleFileInputChange(selectedFile.name)}>Upload your File</Btn>
      }
      </ReusableModal>

      }
      { show2 &&
      <ReusableModal customStyle={{height:"450px"}} isOpen={show2} onClose={hadleClose2} >
      {/* {
        cimage?.toString()?.includes("https") ? (
          <img src={cimage && cimage} height="100%"/>

        ) : ( */}
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          <p>Edit your File</p>
          {selectedFile && <p>Selected File: {selectedFile.name}</p>}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the file input
            />

              <File value={"https://res.cloudinary.com/"}  name={"Upload your file"} noTags={true} handleView={handleFileSelectClick}/>
              <br/>
            {previewImage &&   <img src={previewImage} alt="Selected" height="250px" />}
        </div>
        {/* ) */}
      {/* } */}
      <br/>
      {
     
       ( previewImage && selectedFile) && <Btn width={"100%"} clicking={handleFileInputChange}>{loading ? "loading ...." : "set your new File"}</Btn>
      }
      </ReusableModal>

      }
      
      <div className="head">
        <h1>ID Document</h1>
        <p>View, edit, and update your company ID documents here</p>
      </div>
      <hr
        style={{
          width: "100%",
          margin: "15px 0",
          border: ".7px solid #EAECF0",
        }}
      />
      {
        getUserFiles && getUserFiles?.map(d => {
          return (
            <>
            <InputWrapBox>
              <p>{d?.name}</p>
              <File value={d?.img} name={d?.name} handleView={() => handleView(d?.id)} handleEdit={() =>handleEdit(d?.id)} />
            </InputWrapBox>
            <hr
              style={{
                width: "100%",
                margin: "15px 0",
                border: ".7px solid #EAECF0",
              }}
            />
            
            </>

          )
        })
      }
   
            <EndBtn>
        <div className="btns">
          <p className="cancel">Cancel</p>
          <div className="update">Update Profile</div>
        </div>
      </EndBtn>
    </DocumentsBox>
  );
};

export default Documnets;

const DocumentsBox = styled.div`
  margin: 20px 0;
  width: 100%;
  
  .head {
    h1 {
      color: #090814;
      font-size: 18px;
      font-weight: 500;
    }
    p {
      color: #848d87;
      font-size: 10px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

const InputWrapBox = styled.div`
// border: 2px solid red;
    width: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  p {
    color: #333b4a;
    font-size: 11px;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

const EndBtn = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  .btns{
    display: flex;
    align-items: center;
    gap: 20px;
    .cancel{
        border-radius: 6px;
        background: #FFF;
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        color: #464F60;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.32px;
        padding: 7px 10px;
    }
    .update{
        border-radius: 6px;
        background: #00A85A;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: 0.32px;
        padding: 7px 10px;
    }
  }
`;