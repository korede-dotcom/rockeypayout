import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Logo from '../images/logo.svg';

const PDFGenerator = ({ children, name, download }) => {

  const handleDownloadPDF = () => {
      const input = document.getElementById('content-to-pdf');

      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = 100; // Reduce image width
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const x = (pdf.internal.pageSize.width - imgWidth) / 2; // Center horizontally
          const y = (pdf.internal.pageSize.height - imgHeight) / 6; // Center vertically

          pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight); // Add image at centered position
          pdf.save('downloaded-pdf.pdf');
       
        });
    }
  

  return (
    <div>
      <div id="content-to-pdf">
        <center>
          <img src={Logo} height="60px" alt="Logo" />
          <br />
          <br />
        </center>
        {children}
      </div>
      {/* <div style={{
         width:"100%",
        
         marginTop: "20px",
      }}>
      <button style={{
        display: !download ? '' : 'none',
       width:"40%",
       float:"right",
       color: "rgb(255, 255, 255)",
    padding: "8px",
    borderRadiu: "5px",
    background: "rgb(0, 168, 90)",
    cursor: "pointer",
    borderRadius:"5px",
      }} onClick={handleDownloadPDF}>download receipt</button>

      </div> */}
    </div>
  );
};

export default PDFGenerator;
