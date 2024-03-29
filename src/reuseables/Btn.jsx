/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button,  } from '@arco-design/web-react';

function Btn({children,loading,type,styles,size,disabled,clicking,className,width}) {
  return (
    <Button className={className} onClick={clicking} disabled={disabled} style={styles || {color:"#fff",padding:"11px","borderRadius":"5px",background:"#00A85A",width:`${width}`,cursor:"pointer"}} type={type} loading={loading} size={ size || 90}>
    {children}
  </Button>
  )
}

export default Btn